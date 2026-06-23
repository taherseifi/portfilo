import { useState, useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────
// PROJECT CARD — اسلایدر با انیمیشن fade + slide
// هر کارت تایمر مستقل خودش رو داره
// ─────────────────────────────────────────────────────────────────────

const TAG_MAP = { wood:'tag-wood', '3d':'tag-3d', foam:'tag-foam', cad:'tag-cad' }
const TAG_KEY = { wood:'tag_wood', '3d':'tag_3d', foam:'tag_foam', cad:null }
const SLIDE_INTERVALS = [5500, 6200, 7000, 4800, 6800, 5800, 4500, 7200]

export default function ProjectCard({ project, t, onImgClick, cardIndex = 0 }) {
  const { id, tag, titleKey, descKey, main, thumbs = [], meta } = project
  const allImages = [main, ...thumbs]

  const [idx, setIdx]         = useState(0)
  const [prevIdx, setPrevIdx] = useState(null)   // عکس قبلی برای انیمیشن
  const [dir, setDir]         = useState(1)       // 1=رفتن به جلو، -1=برگشت
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)
  const interval = SLIDE_INTERVALS[cardIndex % SLIDE_INTERVALS.length] || 3500

  const goTo = (next, direction = 1) => {
    if (animating) return
    const n = ((next % allImages.length) + allImages.length) % allImages.length
    if (n === idx) return

    setDir(direction)
    setPrevIdx(idx)
    setIdx(n)
    setAnimating(true)

    // بعد از 700ms انیمیشن تموم میشه
    setTimeout(() => {
      setPrevIdx(null)
      setAnimating(false)
    }, 700)

    // ریست تایمر
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => goTo(idx + 1, 1), interval)
  }

  useEffect(() => {
    if (allImages.length <= 1) return
    timerRef.current = setInterval(() => {
      setIdx(i => {
        const next = (i + 1) % allImages.length
        setPrevIdx(i)
        setDir(1)
        setAnimating(true)
        setTimeout(() => { setPrevIdx(null); setAnimating(false) }, 700)
        return next
      })
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [allImages.length, interval]) // eslint-disable-line

  // CSS انیمیشن — slide از چپ/راست + fade
  const slideIn  = `slideIn${dir > 0 ? 'Right' : 'Left'}`
  const slideOut = `slideOut${dir > 0 ? 'Left' : 'Right'}`

  return (
    <>
      <style>{`
        @keyframes slideInRight  { from { opacity:0; transform:translateX(60px)  } to { opacity:1; transform:translateX(0) } }
        @keyframes slideInLeft   { from { opacity:0; transform:translateX(-60px) } to { opacity:1; transform:translateX(0) } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(-60px) } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(60px)  } }
      `}</style>

      <div className="card proj-card-anim" style={{ display:'flex', flexDirection:'column' }}>

        {/* ── Slider ── */}
        <div
          style={{
            position:'relative', height:210,
            backgroundColor:'var(--s2)',
            borderBottom:'1px solid var(--border)',
            overflow:'hidden', cursor:'zoom-in', flexShrink:0,
          }}
          onClick={() => onImgClick(allImages[idx])}
        >
          {/* عکس قبلی — داره میره بیرون */}
          {prevIdx !== null && (
            <img
              key={`out-${prevIdx}`}
              src={allImages[prevIdx]}
              alt=""
              style={{
                position:'absolute', inset:0,
                width:'100%', height:'100%',
                objectFit:'cover', objectPosition:'center',
                filter:'var(--img-f)',
                animation: `${slideOut} 0.7s cubic-bezier(0.4,0,0.2,1) forwards`,
                zIndex: 1,
              }}
            />
          )}

          {/* عکس جدید — داره میاد داخل */}
          <img
            key={`in-${idx}`}
            src={allImages[idx]}
            alt=""
            style={{
              position:'absolute', inset:0,
              width:'100%', height:'100%',
              objectFit:'cover', objectPosition:'center',
              filter:'var(--img-f)',
              animation: animating ? `${slideIn} 0.7s cubic-bezier(0.4,0,0.2,1) forwards` : 'none',
              zIndex: 2,
            }}
          />

          {/* Dots */}
          {allImages.length > 1 && (
            <div style={{
              position:'absolute', bottom:8, left:0, right:0,
              display:'flex', justifyContent:'center', gap:5, zIndex:3,
            }}>
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); goTo(i, i > idx ? 1 : -1) }}
                  style={{
                    width: i === idx ? 18 : 6, height:6,
                    borderRadius:3, border:'none',
                    background: i === idx ? 'var(--blue)' : 'rgba(255,255,255,0.5)',
                    cursor:'pointer', transition:'all 0.3s', padding:0,
                  }}
                />
              ))}
            </div>
          )}

          {/* Arrows */}
          {allImages.length > 1 && (
            <>
              {[['‹', -1, 'left:6px'], ['›', 1, 'right:6px']].map(([ch, d, pos]) => (
                <button
                  key={ch}
                  onClick={e => { e.stopPropagation(); goTo(idx + d, d) }}
                  style={{
                    position:'absolute', top:'50%', transform:'translateY(-50%)',
                    [pos.split(':')[0]]: pos.split(':')[1],
                    zIndex:3,
                    background:'rgba(0,0,0,0.4)', border:'1px solid rgba(255,255,255,0.2)',
                    color:'#fff', width:26, height:26, borderRadius:'50%',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:15, cursor:'pointer', transition:'background 0.2s',
                  }}
                >{ch}</button>
              ))}
            </>
          )}
        </div>

        {/* ── Body ── */}
        <div style={{ padding:'16px 18px', display:'flex', flexDirection:'column', gap:10, flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'var(--muted)', letterSpacing:'0.08em' }}>0{id}</span>
            <span className={`tag ${TAG_MAP[tag] || 'tag-cad'}`}>
              {TAG_KEY[tag] ? (t[TAG_KEY[tag]] || tag) : 'CAD/CAM'}
            </span>
          </div>
          <h3 style={{ fontSize:15, fontWeight:600, lineHeight:1.3, color:'var(--text)' }}>{t[titleKey] || titleKey}</h3>
          <p style={{ fontSize:13, color:'var(--text2)', lineHeight:1.6, flex:1 }}>{t[descKey] || descKey}</p>
          <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'3px 12px', borderTop:'1px solid var(--border)', paddingTop:12, marginTop:4 }}>
            {meta.map((m, i) => {
              const label = m.key.startsWith('lbl_') ? (t[m.key] || m.key) : m.key
              const value = m.valKey ? (t[m.valKey] || m.valKey) : m.val
              return [
                <span key={`k${i}`} className="meta-key">{label}</span>,
                <span key={`v${i}`} className="meta-val">{value}</span>,
              ]
            })}
          </div>
        </div>
      </div>
    </>
  )
}

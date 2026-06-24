import { useState, useEffect, useCallback } from 'react'
import { T } from './data/translations.js'
import { PROJECTS, SOFTWARE } from './data/projects.js'
import Navbar from './components/Navbar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import CVPage from './components/CVPage.jsx'
import Lightbox from './components/Lightbox.jsx'

const LANG_FONT = {
  de: "'Inter', sans-serif",
  en: "'Space Grotesk', sans-serif",
  tr: "'Nunito', sans-serif",
  fa: "'Vazirmatn', sans-serif",
}

export default function App() {
  const [page, setPage]   = useState('portfolio')
  const [lang, setLangSt] = useState('de')
  const [dark, setDarkSt] = useState(true)
  const [lbSrc, setLbSrc] = useState(null)

  const t = T[lang] || T.de

  const setDark = useCallback((v) => {
    setDarkSt(v)
    document.documentElement.classList.toggle('dark',  v)
    document.documentElement.classList.toggle('light', !v)
    localStorage.setItem('theme', v ? 'dark' : 'light')
  }, [])

  const setLang = useCallback((l) => {
    setLangSt(l)
    document.documentElement.setAttribute('dir',  l === 'fa' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', l)
    document.body.style.fontFamily = LANG_FONT[l] || LANG_FONT.en
    localStorage.setItem('lang', l)
  }, [])

  const goPage = useCallback((p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const isDark = savedTheme !== 'light'
    setDarkSt(isDark)
    document.documentElement.classList.add(isDark ? 'dark' : 'light')
    document.documentElement.classList.remove(isDark ? 'light' : 'dark')

    const savedLang = localStorage.getItem('lang')
    if (savedLang) { setLang(savedLang); return }

    fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) })
      .then(r => r.json())
      .then(d => {
        const cc = (d.country_code || '').toUpperCase()
        if      (['DE','AT','CH','LI','LU'].includes(cc)) setLang('de')
        else if (cc === 'TR') setLang('tr')
        else if (cc === 'IR') setLang('fa')
        else setLang('de')
      })
      .catch(() => setLang('de'))
  }, []) // eslint-disable-line

  const gridBg = `linear-gradient(var(--glow) 1px,transparent 1px), linear-gradient(90deg,var(--glow) 1px,transparent 1px)`

  // اسم در فارسی به فارسی نوشته میشه
  const heroName = lang === 'fa'
    ? <h1 style={{ fontSize:'clamp(2.8rem,6vw,5rem)', fontWeight:900, lineHeight:1.0, letterSpacing:'-0.02em', marginBottom:4, color:'var(--text)', fontFamily:'Vazirmatn' }}>
        طاهر<br /><span style={{color:'var(--blue)'}}>سیفی</span>
      </h1>
    : <h1 style={{ fontSize:'clamp(2.8rem,6vw,5rem)', fontWeight:900, lineHeight:1.0, letterSpacing:'-0.03em', marginBottom:4, color:'var(--text)', fontFamily: lang==='de' ? "'Inter', sans-serif" : lang==='tr' ? 'Nunito' : "'Space Grotesk'" }}>
        Taher<br /><span style={{color:'var(--blue)'}}>Seifi</span>
      </h1>

  const skills = [
    {l:'AlphaCAM',cls:'pill-cam'},{l:'ArtCAM',cls:'pill-cam'},{l:'Aspire',cls:'pill-cam'},
    {l:'AutoCAD',cls:''},{l:'Rhino 3D',cls:''},{l:'Powermill',cls:''},
    {l:'Busellato 5x',cls:'pill-mc'},{l:'SCM · Bolano',cls:'pill-mc'},
    {l:'Siemens · NC',cls:''},{l:'TAPCAM · Beckhoff',cls:''},{l:'Radionics',cls:''},{l:'G-Code 2D/3D',cls:''},
  ]

  return (
    <div style={{ minHeight:'100vh', backgroundColor:'var(--bg)', color:'var(--text)' }}>

      {lbSrc && <Lightbox src={lbSrc} onClose={() => setLbSrc(null)} />}

      <Navbar page={page} setPage={goPage} lang={lang} setLang={setLang} dark={dark} setDark={setDark} t={t} />

      {/* ══ PORTFOLIO ══ */}
      {page === 'portfolio' && (
        <div style={{ paddingTop: 58 }}>

          {/* HERO */}
          <section style={{
            position:'relative', overflow:'hidden',
            padding:'clamp(3rem,6vw,5rem) clamp(1rem,4vw,2rem) clamp(2.5rem,5vw,4rem)',
            borderBottom:'1px solid var(--border)',
          }}>
            <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:gridBg, backgroundSize:'52px 52px', opacity:0.6 }} />
            <div style={{ position:'relative', maxWidth:1100, margin:'0 auto' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'var(--accent)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:16 }}>
                <div style={{ width:24, height:1, backgroundColor:'var(--accent)' }} />
                {t.hero_role}
              </div>

              {heroName}

              <p style={{ fontSize:'1.05rem', color:'var(--text2)', margin:'16px 0 32px', maxWidth:540 }}>
                {t.hero_sub}
              </p>

              <div style={{ display:'flex', gap:32, flexWrap:'wrap' }}>
                {[['10+',t.stat_exp],['08',t.stat_machines],['5x',t.stat_axis],['07',t.stat_ctrl]].map(([num,label]) => (
                  <div key={label} style={{ display:'flex', flexDirection:'column' }}>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'1.9rem', fontWeight:700, color:'var(--accent)', lineHeight:1 }}>{num}</span>
                    <span style={{ fontSize:10, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase', marginTop:4 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SKILLS STRIP — وسط چین */}
          <div style={{
            backgroundColor:'var(--surface)',
            borderBottom:'1px solid var(--border)',
            padding:'14px clamp(1rem,4vw,2rem)',
            display:'flex',
            gap:8,
            flexWrap:'wrap',
            justifyContent:'center',  /* ← وسط چین */
            alignItems:'center',
          }}>
            {skills.map(({l,cls}) => <span key={l} className={`pill ${cls}`}>{l}</span>)}
          </div>

          {/* PROJECTS — 3 ستون */}
          <div style={{ maxWidth:1280, margin:'0 auto', padding:'clamp(1.5rem,4vw,3rem) clamp(1rem,3vw,2rem)' }}>
            <div className="sec-head">
              <span className="sec-num">01</span>
              <h2 className="sec-title">{t.sec_projects}</h2>
              <div className="sec-line" />
            </div>
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
              gap:20,
            }}>
              {PROJECTS.map((p, index) => (
                <ProjectCard key={p.id} project={p} t={t} onImgClick={setLbSrc} cardIndex={index} />
              ))}
            </div>
          </div>

          {/* گالری کارگاه حذف شد — طبق درخواست */}

          {/* SOFTWARE — بدون فضای خالی */}
          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 clamp(1rem,3vw,2rem) clamp(1.5rem,4vw,3rem)' }}>
            <div className="sec-head">
              <span className="sec-num">02</span>
              <h2 className="sec-title">{t.sec_software}</h2>
              <div className="sec-line" />
            </div>
            <div className="sw-grid-responsive" style={{
              display:'grid',
              /* ۸ سلول = ۴×۲ — دسکتاپ: 4 ستون | موبایل: 2 ستون */
              gridTemplateColumns:'repeat(4, 1fr)',
              gap:1,
              backgroundColor:'var(--border)',
              border:'1px solid var(--border)',
              borderRadius:12,
              overflow:'hidden',
            }}>
              {SOFTWARE.map((sw) => (
                <div
                  key={sw.catKey}
                  style={{ backgroundColor:'var(--surface)', padding:'18px 20px', transition:'background-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor='var(--s2)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor='var(--surface)'}
                >
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:10 }}>
                    {t[sw.catKey] || sw.catKey}
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                    {sw.items.map(item => (
                      <div key={item} style={{ fontSize:13, color:'var(--text2)', display:'flex', alignItems:'center', gap:8 }}>
                        <div style={{ width:4, height:4, borderRadius:'50%', backgroundColor:'var(--blue)', flexShrink:0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div style={{ backgroundColor:'var(--surface)', borderTop:'1px solid var(--border)', padding:'clamp(2rem,5vw,3rem) clamp(1rem,4vw,2rem)', textAlign:'center' }}>
            <h2 style={{ fontSize:'clamp(1.4rem,3vw,1.9rem)', fontWeight:700, marginBottom:8, color:'var(--text)' }}>{t.contact_h2}</h2>
            <p style={{ fontSize:14, color:'var(--text2)', maxWidth:500, margin:'0 auto 24px' }}>{t.contact_p}</p>
            <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap' }}>
              <a href="mailto:Taherseifi152@gmail.com" className="cbtn cbtn-primary">Taherseifi152@gmail.com</a>
              <a href="tel:+905538659104" className="cbtn">+90 553 865 91 04</a>
              <button onClick={() => goPage('cv')} className="cbtn">{t.contact_cv}</button>
            </div>
          </div>

          <footer style={{ backgroundColor:'var(--surface)', borderTop:'1px solid var(--border)', padding:'20px clamp(1rem,4vw,2rem)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10 }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'var(--muted)' }}>© 2025 Taher Seifi · CNC Portfolio</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'var(--blue)' }}>Istanbul → Deutschland</span>
          </footer>
        </div>
      )}

      {/* ══ CV ══ */}
      {page === 'cv' && (
        <div style={{ paddingTop: 58 }}>
          <CVPage t={t} lang={lang} />
          <footer style={{ backgroundColor:'var(--surface)', borderTop:'1px solid var(--border)', padding:'20px clamp(1rem,4vw,2rem)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10 }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'var(--muted)' }}>Taher Seifi — CNC-Programmierer & Maschinenbediener</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color:'var(--blue)' }}>Taherseifi152@gmail.com · +90 553 865 91 04</span>
          </footer>
        </div>
      )}
    </div>
  )
}

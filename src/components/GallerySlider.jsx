import { useState, useEffect, useCallback } from 'react'

export default function GallerySlider({ slides, onImgClick }) {
  const [cur, setCur] = useState(0)
  const go = useCallback((n) => setCur(((n % slides.length) + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    const t = setInterval(() => go(cur + 1), 4500)
    return () => clearInterval(t)
  }, [cur, go])

  return (
    <div style={{
      position: 'relative',
      border: '1px solid var(--border)',
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: 'var(--s2)',
    }}>
      {/* Slides */}
      <div style={{ position: 'relative', height: 420 }}>
        {slides.map((slide, i) => (
          <div key={i} className={`gal-slide ${i === cur ? 'active' : ''}`}>
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'var(--img-f)', cursor: 'zoom-in', display: 'block' }}
              onClick={() => onImgClick(slide.src)}
            />
          </div>
        ))}
      </div>

      {/* Prev/Next */}
      {[['‹', -1, 'left: 12px'], ['›', 1, 'right: 12px']].map(([ch, d, pos]) => (
        <button
          key={ch}
          onClick={() => go(cur + d)}
          style={{
            position: 'absolute', top: '50%', transform: 'translateY(-50%)', [pos.split(':')[0]]: pos.split(':')[1].trim(),
            zIndex: 5, background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', width: 42, height: 42, borderRadius: '50%', fontSize: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            backdropFilter: 'blur(4px)', transition: 'background 0.2s',
          }}
        >{ch}</button>
      ))}

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '10px 0', backgroundColor: 'var(--s2)' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: 7, height: 7, borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: i === cur ? 'var(--blue)' : 'var(--b2)',
              transform: i === cur ? 'scale(1.35)' : 'scale(1)',
              transition: 'all 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  )
}

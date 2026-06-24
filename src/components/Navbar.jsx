import { useState, useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────
// NAVBAR — دسکتاپ: ۴ دکمه زبان | موبایل: dropdown
// همیشه LTR
// ─────────────────────────────────────────────────────────────────────
const LANGS = ['de', 'en', 'tr', 'fa']

export default function Navbar({ page, setPage, lang, setLang, dark, setDark, t }) {
  const [dropOpen, setDropOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const dropRef = useRef(null)

  // تشخیص موبایل/دسکتاپ
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // بستن dropdown با کلیک بیرون
  useEffect(() => {
    if (!dropOpen) return
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [dropOpen])

  const handleLang = (l) => {
    setLang(l)
    setDropOpen(false)
  }

  return (
    <nav
      dir="ltr"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100, height: 58,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 14px', gap: 8,
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background-color 0.3s',
      }}
    >
      {/* Logo */}
      <span style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 13, color: 'var(--accent)',
        letterSpacing: '0.08em', textTransform: 'uppercase',
        flexShrink: 0, whiteSpace: 'nowrap',
      }}>
        TS / CNC
      </span>

      {/* Pages */}
      <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
        {['portfolio', 'cv'].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`nav-link ${page === p ? 'active' : ''}`}
            style={{ fontSize: 13, padding: '5px 10px' }}
          >
            {p === 'portfolio' ? t.nav_portfolio : t.nav_cv}
          </button>
        ))}
      </div>

      {/* راست: زبان + تم */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>

        {/* ── دسکتاپ: ۴ دکمه کنار هم ── */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 2 }}>
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                style={{ fontSize: 11, padding: '3px 7px' }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* ── موبایل: dropdown ── */}
        {isMobile && (
          <div ref={dropRef} style={{ position: 'relative' }}>
            {/* دکمه اصلی — زبان فعلی */}
            <button
              onClick={() => setDropOpen(v => !v)}
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11, fontWeight: 600,
                padding: '4px 8px',
                borderRadius: 5,
                border: '1px solid var(--blue)',
                backgroundColor: 'var(--s2)',
                color: 'var(--text)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 5,
                whiteSpace: 'nowrap',
              }}
            >
              {lang.toUpperCase()}
              {/* فلش */}
              <span style={{
                display: 'inline-block',
                transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
                fontSize: 9, lineHeight: 1,
              }}>▼</span>
            </button>

            {/* منوی dropdown */}
            {dropOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                minWidth: 80,
                zIndex: 200,
                // انیمیشن باز شدن
                animation: 'dropDown 0.18s ease forwards',
              }}>
                <style>{`
                  @keyframes dropDown {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLang(l)}
                    style={{
                      display: 'block', width: '100%',
                      padding: '10px 14px',
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 12, fontWeight: 600,
                      textAlign: 'left',
                      backgroundColor: lang === l ? 'var(--s2)' : 'transparent',
                      color: lang === l ? 'var(--blue)' : 'var(--text2)',
                      border: 'none',
                      borderBottom: '1px solid var(--border)',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={e => { if (lang !== l) e.currentTarget.style.backgroundColor = 'var(--s2)' }}
                    onMouseLeave={e => { if (lang !== l) e.currentTarget.style.backgroundColor = 'transparent' }}
                  >
                    {l.toUpperCase()}
                    {lang === l && (
                      <span style={{ marginLeft: 8, color: 'var(--blue)', fontSize: 10 }}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* تم */}
        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
          style={{ width: 30, height: 30, fontSize: 14, flexShrink: 0 }}
          title="Toggle theme"
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}

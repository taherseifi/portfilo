// ─────────────────────────────────────────────────────────────────────
// NAVBAR — رسپانسیو برای موبایل، تبلت، دسکتاپ
// همیشه LTR — حتی در فارسی
// ─────────────────────────────────────────────────────────────────────
const LANGS = ['de', 'en', 'tr', 'fa']

export default function Navbar({ page, setPage, lang, setLang, dark, setDark, t }) {
  return (
    <nav
      dir="ltr"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 58,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        gap: 6,
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background-color 0.3s',
        overflow: 'hidden',  /* جلوگیری از بیرون زدن */
      }}
    >
      {/* Logo */}
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
        color: 'var(--accent)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}>
        TS / CNC
      </span>

      {/* Pages — وسط */}
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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        flexShrink: 0,
      }}>
        {/* دکمه‌های زبان */}
        <div style={{ display: 'flex', gap: 2 }}>
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              style={{ fontSize: 10, padding: '2px 5px' }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* دکمه تم */}
        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
          style={{ width: 28, height: 28, fontSize: 13, flexShrink: 0 }}
          title="Toggle theme"
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}

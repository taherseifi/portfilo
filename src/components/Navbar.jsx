// ─────────────────────────────────────────────────────────────────────
// NAVBAR
// مهم: navbar همیشه LTR میمونه حتی در حالت فارسی
// فقط محتوای اصلی RTL میشه
// ─────────────────────────────────────────────────────────────────────
const LANGS = ['de', 'en', 'tr', 'fa']

export default function Navbar({ page, setPage, lang, setLang, dark, setDark, t }) {
  return (
    <nav
      dir="ltr"  // ← همیشه LTR — حتی در فارسی
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 58,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        gap: 12,
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background-color 0.3s',
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
          >
            {p === 'portfolio' ? t.nav_portfolio : t.nav_cv}
          </button>
        ))}
      </div>

      {/* Right: lang + theme */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 2 }}>
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="theme-btn" onClick={() => setDark(!dark)} title="Toggle theme">
          {dark ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────────────────────────────
// CV PAGE — با inline styles برای CSS var support
// ─────────────────────────────────────────────────────────────────────
const Dot = ({ filled }) => (
  <div style={{
    width: 8, height: 8, borderRadius: '50%',
    backgroundColor: filled ? 'var(--blue)' : 'var(--b2)',
    transition: 'background-color 0.3s',
  }} />
)

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="cv-sec-title">{title}</div>
      {children}
    </div>
  )
}

function JobCard({ title, company, period, items }) {
  return (
    <div style={{
      backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 8, padding: '20px 22px', marginBottom: 10,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>{title}</div>
          <div style={{ fontSize: 13, color: 'var(--blue)', marginTop: 2 }}>{company}</div>
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--muted)',
          backgroundColor: 'var(--s2)', padding: '3px 10px', borderRadius: 4, whiteSpace: 'nowrap',
        }}>{period}</span>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 13, color: 'var(--text2)', paddingLeft: 16, position: 'relative', lineHeight: 1.5 }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--blue)', fontWeight: 700 }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CVPage({ t, lang }) {
  const j1 = ['j1_1','j1_2','j1_3','j1_4','j1_5','j1_6','j1_7','j1_8'].map(k => t[k] || k)
  const j2 = ['j2_1','j2_2','j2_3','j2_4','j2_5','j2_6'].map(k => t[k] || k)

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>

      {/* Header */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 32,
        paddingBottom: 32, borderBottom: '1px solid var(--border)', marginBottom: 32,
        alignItems: 'start',
      }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 6, color: 'var(--text)' }}>
            {lang === 'fa' ? 'طاهر سیفی' : 'Taher Seifi'}
          </h1>
          <p style={{ fontSize: 15, color: 'var(--blue)', fontWeight: 500, marginBottom: 14 }}>{t.hero_role}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
            {[['✉', 'Taherseifi152@gmail.com'], ['✆', '+90 553 865 91 04'], ['⌖', 'Istanbul, Türkei']].map(([icon, val]) => (
              <span key={val} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: 'var(--accent)' }}>{icon}</span>{val}
              </span>
            ))}
          </div>
        </div>
        <div style={{
          backgroundColor: 'var(--s2)', border: '1px solid var(--border)',
          borderRadius: 10, padding: '16px 20px', textAlign: 'center', minWidth: 110,
        }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 32, fontWeight: 700, color: 'var(--accent)', display: 'block' }}>10+</span>
          <span style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t.stat_exp}</span>
        </div>
      </div>

      {/* Profil */}
      <Section title={t.cv_profile}>
        <p style={{
          fontSize: 14, color: 'var(--text2)', lineHeight: 1.8,
          backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
          borderLeft: '3px solid var(--blue)', padding: '16px 20px',
          borderRadius: '0 8px 8px 0',
        }}>{t.cv_profile_text}</p>
      </Section>

      {/* Erfahrung */}
      <Section title={t.cv_exp}>
        <JobCard title={t.job1_title} company="Çetinkaya Mobilya — Istanbul, Türkei" period={`2021 – ${t.today}`} items={j1} />
        <JobCard title={t.job2_title} company="Forest Moble — Teheran, Iran" period="2016 – 2021" items={j2} />
      </Section>

      {/* Skills */}
      <Section title={t.cv_skills}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
          backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden',
        }}>
          {[
            ['5-Achs CNC', 'Busellato Jet Optima · SCM'],
            ['4-Achs Drehen', 'Schnitzer Nero 4x3'],
            ['3-Achs CNC', 'Busellato H2-16 · Jet Optimum'],
            ['Schaumstoff / Laser', 'CNC-Schwamm · CNC-Laser'],
            [t.lbl_sw, 'ArtCAM · AlphaCAM · Aspire · AutoCAD · Rhino · Pytha/CAM · Powermill'],
            [`${t.lbl_ctrl} (7)`, 'Siemens · NC · TAPCAM · Beckhoff · Radionics · NC (Busellato) · Pegasos NC'],
            [t.cv_other, t.cv_other_v],
            [t.cv_prod, t.cv_prod_v],
          ].map(([k, v]) => (
            <div key={k} style={{ backgroundColor: 'var(--surface)', padding: '14px 16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 5 }}>{k}</div>
              <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sprachen */}
      <Section title={t.cv_lang}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 1,
          backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden',
        }}>
          {[[t.lang_fa, t.lang_native, 5],[t.lang_tr,'C2',5],[t.lang_de,'A2→B1',2],[t.lang_en,'A2',2]].map(([name, level, dots]) => (
            <div key={name} style={{ backgroundColor: 'var(--surface)', padding: '14px 16px' }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 2 }}>{name}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>{level}</div>
              <div style={{ display: 'flex', gap: 4 }}>
                {Array.from({length:5},(_,i)=><Dot key={i} filled={i<dots}/>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ausbildung */}
      <Section title={t.cv_edu}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            [t.edu1_t, 'Iran', t.edu1_b],
            [t.edu2_t, t.edu2_s, t.edu2_b],
            [t.edu3_t, t.edu3_s, 'A2→B1'],
          ].map(([title, sub, badge]) => (
            <div key={title} style={{
              backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 8, padding: '16px 20px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
            }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{title}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>
              </div>
              <span style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
                padding: '3px 8px', borderRadius: 3,
                backgroundColor: 'var(--tc-bg)', color: 'var(--tc)', border: '1px solid var(--tc-b)',
                whiteSpace: 'nowrap',
              }}>{badge}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Personal */}
      <Section title={t.cv_personal}>
        <div className="pers-grid-responsive" style={{
          display: 'grid', gap: 1,
          backgroundColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden',
        }}>
          {[
            [t.p_dob, '17. September 1997'],
            [t.p_nat, t.p_nat_v],
            [t.p_res, t.p_res_v],
            [t.p_lic, 'Klasse B'],
            [t.p_ready, t.p_ready_v],
            [t.p_loc, 'Istanbul, Türkei'],
          ].map(([k, v]) => (
            <div key={k} style={{ backgroundColor: 'var(--surface)', padding: '14px 16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
              <div style={{ fontSize: 13, color: 'var(--text)' }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

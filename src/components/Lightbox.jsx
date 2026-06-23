import { useEffect } from 'react'

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [onClose])

  if (!src) return null
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 24, right: 24,
          background: 'rgba(255,255,255,0.1)', border: 'none',
          color: '#fff', fontSize: 20, width: 44, height: 44,
          borderRadius: '50%', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>
      <img
        src={src} alt=""
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '92vw', maxHeight: '88vh', borderRadius: 8, boxShadow: '0 8px 48px rgba(0,0,0,0.8)' }}
      />
    </div>
  )
}

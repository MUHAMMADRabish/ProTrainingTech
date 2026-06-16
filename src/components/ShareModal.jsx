import { useEffect } from 'react'

export default function ShareModal({ course, onClose }) {
  const url = `https://pro-training-tech-l28xxejpa-saleem-s-proj.vercel.app/courses/${course.slug}`

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    alert('Link copied to clipboard!')
  }

  const socialLinks = [
    {
      name: 'Facebook',
      color: '#1877f2',
      letter: 'f',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'Instagram',
      color: '#e1306c',
      letter: 'in',
      href: 'https://www.instagram.com/'
    },
    {
      name: 'WhatsApp',
      color: '#25d366',
      letter: 'W',
      href: `https://wa.me/?text=${encodeURIComponent(url)}`
    },
    {
      name: 'LinkedIn',
      color: '#0a66c2',
      letter: 'in',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    }
  ]

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', top: 0, left: 0,
          right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 9998
        }}
      />
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        borderRadius: '12px',
        padding: '28px',
        width: '500px',
        maxWidth: '90vw',
        zIndex: 9999,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'none', border: 'none',
            fontSize: '20px', cursor: 'pointer',
            color: '#9ca3af', fontWeight: '700'
          }}>
          ✕
        </button>

        <h2 style={{
          color: '#e05c2a', fontSize: '20px',
          fontWeight: '700', margin: '0 0 8px'
        }}>
          Share this course
        </h2>
        <p style={{
          color: '#374151', fontSize: '14px',
          margin: '0 0 20px'
        }}>
          Share this course's details with your family &amp; friends
        </p>

        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <span style={{
            fontSize: '12px', color: '#6b7280',
            wordBreak: 'break-all', flex: 1
          }}>
            {url}
          </span>
          <button
            onClick={handleCopy}
            style={{
              background: '#1565c0', color: '#fff',
              border: 'none', padding: '10px 16px',
              borderRadius: '6px', fontSize: '13px',
              fontWeight: '600', cursor: 'pointer',
              whiteSpace: 'nowrap', flexShrink: 0
            }}>
            📋 Copy Code
          </button>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {socialLinks.map(social => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                background: social.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none'
              }}>
              {social.letter}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

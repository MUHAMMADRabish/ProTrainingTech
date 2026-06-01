import { Link } from 'react-router-dom'
import './Footer.css'

// ── Inline SVG social icons ───────────────────────────────────────────────────

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

function IconGooglePlay() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.18 23.76c.27.15.57.22.87.21.43-.01.86-.16 1.2-.44l.06-.05 9.37-5.4-2.6-2.6-8.9 8.28zM.29 1.27C.11 1.6 0 2.01 0 2.51v19c0 .49.1.9.29 1.22l.07.06 10.64-10.64v-.25L.36 1.21l-.07.06zM20.3 10.38L17.6 8.8l-2.93 2.93 2.93 2.93 2.73-1.58c.78-.45.78-1.19 0-1.7zM4.05.44l.06.05 9.37 5.4-2.6 2.6-8.9-8.28c.31-.27.68-.43 1.07-.43.34 0 .68.09.97.26l.03.02-.03-.02z"/>
    </svg>
  )
}

function IconAppStore() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────

const COMPANY_LINKS = [
  ['/about',                          'About Us'],
  ['/trainers',                       'Trainers Profile'],
  ['/privacy-policy',                 'Privacy Policy'],
  ['/refund-policy',                  'Refund Policy'],
  ['/terms-conditions',               'Terms & Conditions'],
  ['/careers',                        'Careers'],
  ['/testimonials',                   'Testimonials'],
  ['/news',                           'News & Events'],
  ['/training/placement-registration','Placement Registration'],
  ['/contact',                        'Contact Us'],
]

const QUICK_LINKS = [
  ['#',                                'Become an Instructor'],
  ['/hire-with-us',                    'Hire from Us'],
  ['/new-batches',                     'New Batches'],
  ['/interview-questions/category',    'Interview Questions'],
  ['/blog',                            'Blogs'],
  ['/internships',                     'Internships'],
  ['/services/classroom-training',     'Classroom Training'],
  ['/services/online-training',        'Online Training'],
  ['/services/weekend-training',       'Weekend Training'],
  ['/services/corporate-training',     'Corporate Training'],
]

const FULLSTACK_COURSES = [
  ['/courses/full-stack-software-testing-online-training',         'Full Stack Software Testing'],
  ['/courses/full-stack-python-online-training',                   'Full Stack Python'],
  ['/courses/ui-full-stack-web-development-with-react-online-training', 'UI Full Stack Web with React'],
  ['/courses/full-stack-data-science-ai-online-training',          'Full Stack Data Science & AI'],
  ['/courses/full-stack-dot-net-core-online-training',             'Full Stack .NET Core'],
  ['/courses/full-stack-java-online-training',                     'Full Stack Java'],
]

const JOB_PLACEMENT = [
  ['/courses/full-stack-dot-net-core-online-training',             'Full Stack .Net Placement Assistance'],
  ['/courses/full-stack-java-online-training',                     'Full Stack Java Placement Assistance'],
]

const NASSCOM_PILLS = [
  ['/nasscom-courses', 'Full Stack Software Testing'],
  ['/nasscom-courses', 'AWS Solutions Architect'],
  ['/nasscom-courses', 'Data Science & AI'],
  ['/nasscom-courses', 'DevOps Engineering'],
  ['/nasscom-courses', 'Python Programming'],
]

const SOCIALS = [
  { label: 'Facebook',  href: 'https://facebook.com',  Icon: IconFacebook  },
  { label: 'Instagram', href: 'https://instagram.com', Icon: IconInstagram },
  { label: 'YouTube',   href: 'https://youtube.com',   Icon: IconYouTube   },
  { label: 'LinkedIn',  href: 'https://linkedin.com',  Icon: IconLinkedIn  },
  { label: 'WhatsApp',  href: 'https://wa.me/17035651995', Icon: IconWhatsApp },
  { label: 'Telegram',  href: 'https://t.me/protrainingtech', Icon: IconTelegram },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="ft">

      {/* ── 6-column grid ─────────────────────────────────────────────────── */}
      <div className="ft__inner">

        {/* Col 1 — Brand */}
        <div className="ft__brand">
          <div className="ft__logo">
            <img
              src="https://protrainingtech.com/wp-content/uploads/2022/12/cropped-Pro-Training-Techs-Logo-2.png"
              alt="Pro Training Tech"
            />
          </div>
          <p className="ft__tagline">One Stop Career Solution</p>
          <p className="ft__desc">
            Pro Training Tech offers industry-leading IT training programs with hands-on
            projects, expert instructors, and dedicated placement support to launch your
            tech career.
          </p>

          {/* Social icons */}
          <div className="ft__socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="ft__social"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* App store buttons */}
          <div className="ft__apps">
            <a href="#" className="ft__app-btn" onClick={e => e.preventDefault()} aria-label="Get it on Google Play">
              <IconGooglePlay />
              <span>
                <span className="ft__app-btn__sub">Get it on</span>
                <span className="ft__app-btn__name">Google Play</span>
              </span>
            </a>
            <a href="#" className="ft__app-btn" onClick={e => e.preventDefault()} aria-label="Download on the App Store">
              <IconAppStore />
              <span>
                <span className="ft__app-btn__sub">Download on the</span>
                <span className="ft__app-btn__name">App Store</span>
              </span>
            </a>
          </div>
        </div>

        {/* Col 2 — Company */}
        <div>
          <h4 className="ft__heading">Company</h4>
          <ul className="ft__list">
            {COMPANY_LINKS.map(([to, label]) => (
              <li key={to + label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Quick Access */}
        <div>
          <h4 className="ft__heading">Quick Access</h4>
          <ul className="ft__list">
            {QUICK_LINKS.map(([to, label]) => (
              <li key={to + label}>
                {to === '#'
                  ? <span className="ft__link">{label}</span>
                  : <Link to={to}>{label}</Link>
                }
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Reach Us */}
        <div>
          <h4 className="ft__heading">Reach Us</h4>

          <div className="ft__contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <a href="tel:+17035651995">+1-703-565-1995</a>
          </div>

          <div className="ft__contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <a href="mailto:info@protrainingtech.com">info@protrainingtech.com</a>
          </div>

          <div className="ft__contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <a href="https://wa.me/17035651995" target="_blank" rel="noopener noreferrer">
              Call / WhatsApp: +1-703-565-1995
            </a>
          </div>

          <div className="ft__contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>6560 Backlick Rd, Springfield, VA 22150</span>
          </div>

          <div className="ft__contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
            <span>Mon – Sat: 9 AM – 7 PM</span>
          </div>
        </div>

        {/* Col 5 — Full Stack Courses */}
        <div>
          <h4 className="ft__heading">Full Stack Courses</h4>
          <ul className="ft__list">
            {FULLSTACK_COURSES.map(([to, label]) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 6 — Job Placement Programs */}
        <div>
          <h4 className="ft__heading">Job Placement Programs</h4>
          <ul className="ft__list">
            {JOB_PLACEMENT.map(([to, label]) => (
              <li key={to + label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── NASSCOM pills ──────────────────────────────────────────────────── */}
      <hr className="ft__divider" />
      <div className="ft__nasscom">
        <span className="ft__nasscom-label">NASSCOM:</span>
        {NASSCOM_PILLS.map(([to, label]) => (
          <Link key={label} to={to} className="ft__nasscom-pill">{label}</Link>
        ))}
      </div>

      {/* ── Copyright ──────────────────────────────────────────────────────── */}
      <div className="ft__bottom">
        <div className="ft__bottom-inner">
          <span className="ft__copyright">© 2025 Pro Training Tech. All rights reserved.</span>
          <div className="ft__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

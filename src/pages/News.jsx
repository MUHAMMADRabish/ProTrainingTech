import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './News.css'

// ── Data ──────────────────────────────────────────────────────────────────────
const FEATURED = {
  icon: '🏆',
  label: 'Featured Event',
  title: 'Pro Training Tech Annual Tech Summit 2026',
  date: '15 Jun 2026',
  day: '15', month: 'Jun', year: '2026',
  location: 'HICC Convention Centre, Virginia',
  mode: 'In-Person',
  desc: 'Join India\'s largest software training conference — three days of keynotes, hands-on labs, panel discussions, and networking with 5,000+ tech professionals from across the country. Industry leaders from Google, Microsoft, Amazon and 50+ top companies will share insights on the future of tech careers.',
  stats: [
    ['50+', 'Speakers'],
    ['100+', 'Workshops'],
    ['5k+', 'Attendees'],
    ['3', 'Days'],
  ],
  colorA: '#1e3a5f',
  colorB: '#2d5a8e',
}

const EVENTS = [
  {
    id: 1,
    icon: '☕',
    title: 'Java & Spring Boot Workshop',
    day: '05', month: 'Jun', year: '2026',
    displayDate: '5 Jun 2026',
    location: 'McLean, Virginia',
    mode: 'Offline',
    seats: 60,
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    desc: 'A full-day hands-on workshop covering Spring Boot 3, REST API design patterns, and deploying microservices to AWS with live exercises.',
  },
  {
    id: 2,
    icon: '📊',
    title: 'Data Science Bootcamp',
    day: '08', month: 'Jun', year: '2026',
    displayDate: '8 Jun 2026',
    location: 'Online — Zoom',
    mode: 'Online',
    seats: 120,
    colorA: '#6a1b9a', colorB: '#8e24aa',
    desc: 'Intensive two-day bootcamp on Python data analysis, machine learning pipelines, and building interactive Power BI dashboards from real datasets.',
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'DevOps Hands-on Lab',
    day: '12', month: 'Jun', year: '2026',
    displayDate: '12 Jun 2026',
    location: 'McLean, Virginia',
    mode: 'Offline',
    seats: 40,
    colorA: '#1a5276', colorB: '#154360',
    desc: 'Build and deploy a complete CI/CD pipeline using Jenkins, Docker and Kubernetes on a real AWS environment — guided by a certified DevOps architect.',
  },
  {
    id: 4,
    icon: '🐍',
    title: 'Python for Beginners Webinar',
    day: '20', month: 'Jun', year: '2026',
    displayDate: '20 Jun 2026',
    location: 'Online — Google Meet',
    mode: 'Online',
    seats: 200,
    colorA: '#e05c2a', colorB: '#c04e22',
    desc: 'A free two-hour webinar covering Python fundamentals, real-world use cases, and a live Q&A with our senior Python trainer. Perfect for absolute beginners.',
  },
  {
    id: 5,
    icon: '☁️',
    title: 'AWS Certification Drive',
    day: '25', month: 'Jun', year: '2026',
    displayDate: '25 Jun 2026',
    location: 'McLean, Virginia',
    mode: 'Offline',
    seats: 30,
    colorA: '#2e7d32', colorB: '#388e3c',
    desc: 'One-day intensive exam-readiness session for AWS Cloud Practitioner and Solutions Architect certifications, with mock tests and expert guidance.',
  },
  {
    id: 6,
    icon: '🤖',
    title: 'ML & AI Symposium',
    day: '28', month: 'Jun', year: '2026',
    displayDate: '28 Jun 2026',
    location: 'HICC Convention Centre, Virginia',
    mode: 'Hybrid',
    seats: 150,
    colorA: '#1565c0', colorB: '#1976d2',
    desc: 'Half-day symposium with live demos on Generative AI, Large Language Models, and practical ML deployment — featuring talks by researchers and industry practitioners.',
  },
]

const ARTICLES = [
  {
    id: 1,
    icon: '🤖',
    category: 'Tech News',
    catBg: 'rgba(30,58,95,.1)',
    catColor: '#1e3a5f',
    title: 'Ollama Unveils Desktop App for macOS & Windows with Image & Code File Support',
    date: 'May 20, 2025',
    readTime: '5 min',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    excerpt: 'The new Ollama GUI eliminates command-line requirements, introducing drag-and-drop functionality for text files and PDFs, multimodal image input, and adjustable context length settings for local AI models.',
  },
  {
    id: 2,
    icon: '🏗️',
    category: 'Industry',
    catBg: 'rgba(46,125,50,.1)',
    catColor: '#2e7d32',
    title: 'Telangana Minister Announces Two New IT Parks in Hyderabad\'s Outskirts',
    date: 'May 15, 2025',
    readTime: '4 min',
    colorA: '#2e7d32', colorB: '#388e3c',
    excerpt: 'Dew Software is investing Rs. 100 crore in two suburban IT parks with a commitment to employ 900 professionals over the next five years, with a new structured land allocation policy for IT expansion.',
  },
  {
    id: 3,
    icon: '🏢',
    category: 'Jobs',
    catBg: 'rgba(224,92,42,.1)',
    catColor: '#c04e22',
    title: 'HCLTech to Create 5,000 New Jobs with Major Expansion in Hyderabad',
    date: 'May 10, 2025',
    readTime: '4 min',
    colorA: '#e05c2a', colorB: '#c04e22',
    excerpt: 'HCLTech announces a 3,20,000 sq. ft. Gold-certified facility focused on cloud computing, AI, and digital transformation — adding five centres across Hyderabad and 5,000 new technology jobs.',
  },
  {
    id: 4,
    icon: '☁️',
    category: 'Cloud',
    catBg: 'rgba(21,101,192,.1)',
    catColor: '#1565c0',
    title: '7 Game-Changing Cloud Computing Trends Shaping Business Success in 2025',
    date: 'May 5, 2025',
    readTime: '7 min',
    colorA: '#1565c0', colorB: '#1976d2',
    excerpt: 'AI in Cloud Operations, Edge & Cloud Integration, Quantum Computing Accessibility, Hybrid Multi-Cloud, Generative AI Development, Supercloud Data Management, and the Sustainability Imperative — the seven trends defining cloud strategy.',
  },
  {
    id: 5,
    icon: '🤝',
    category: 'Partnership',
    catBg: 'rgba(106,27,154,.1)',
    catColor: '#6a1b9a',
    title: 'Pro Training Tech Signs MoU with NASSCOM for Skill India Digital Initiative',
    date: 'Apr 25, 2025',
    readTime: '3 min',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    excerpt: 'A landmark partnership with NASSCOM will see Pro Training Tech deliver government-certified training programmes to 10,000 students under the Skill India Digital initiative over the next two years.',
  },
  {
    id: 6,
    icon: '✨',
    category: 'Curriculum',
    catBg: 'rgba(26,82,118,.1)',
    catColor: '#1a5276',
    title: 'Generative AI & Agentic AI Modules Now Available Across Python Programmes',
    date: 'Apr 18, 2025',
    readTime: '4 min',
    colorA: '#1a5276', colorB: '#154360',
    excerpt: 'Python Full Stack and Data Science programmes now include dedicated modules on Prompt Engineering, LangChain, RAG pipelines, and deploying custom LLM applications to production — keeping students ahead of the industry curve.',
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function modeCls(mode) {
  if (mode === 'Online')  return 'mode--online'
  if (mode === 'Offline') return 'mode--offline'
  return                         'mode--hybrid'
}

// ── Event Card ────────────────────────────────────────────────────────────────
function EventCard({ ev }) {
  return (
    <article className="ecard">
      {/* Thumbnail */}
      <div
        className="ecard__thumb"
        style={{ background: `linear-gradient(135deg, ${ev.colorA} 0%, ${ev.colorB} 100%)` }}
      >
        <span className="ecard__thumb-emoji">{ev.icon}</span>
        <div className="ecard__date-badge">
          <span className="ecard__date-day">{ev.day}</span>
          <span className="ecard__date-month">{ev.month}</span>
        </div>
        <span className={`ecard__mode-pill ${modeCls(ev.mode)}`}>{ev.mode}</span>
      </div>

      {/* Body */}
      <div className="ecard__body">
        <div className="ecard__location">
          <span className="ecard__loc-icon">📍</span>
          {ev.location}
        </div>
        <h3 className="ecard__title">{ev.title}</h3>
        <p className="ecard__desc">{ev.desc}</p>
      </div>

      {/* Footer */}
      <div className="ecard__foot">
        <span className="ecard__seats">
          <span className="ecard__seats-icon">👥</span>
          {ev.seats} seats
        </span>
        <a
          href="#nw-contact"
          className="ecard__register"
          onClick={e => e.preventDefault()}
        >
          Register Now →
        </a>
      </div>
    </article>
  )
}

// ── Article Card ──────────────────────────────────────────────────────────────
function ArticleCard({ ar }) {
  return (
    <article className="acard">
      {/* Thumbnail */}
      <div
        className="acard__thumb"
        style={{ background: `linear-gradient(135deg, ${ar.colorA} 0%, ${ar.colorB} 100%)` }}
      >
        <span className="acard__thumb-emoji">{ar.icon}</span>
        <span
          className="acard__cat-badge"
          style={{ background: ar.catBg, color: ar.catColor }}
        >
          {ar.category}
        </span>
      </div>

      {/* Body */}
      <div className="acard__body">
        <div className="acard__meta">
          <span className="acard__date">{ar.date}</span>
          <span className="acard__meta-dot" />
          <span className="acard__read-time">{ar.readTime} read</span>
        </div>
        <h3 className="acard__title">{ar.title}</h3>
        <p className="acard__excerpt">{ar.excerpt}</p>
      </div>

      <a
        href="#"
        className="acard__read-btn"
        onClick={e => e.preventDefault()}
        aria-label={`Read more: ${ar.title}`}
      >
        Read More →
      </a>
    </article>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function News() {
  const [nlEmail,   setNlEmail]   = useState('')
  const [nlStatus,  setNlStatus]  = useState('idle') // idle | success | error

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (!/\S+@\S+\.\S+/.test(nlEmail.trim())) {
      setNlStatus('error')
      return
    }
    setNlStatus('success')
    setNlEmail('')
  }

  return (
    <div className="nw-page">

      <Navbar />

      {/* ── HERO ── */}
      <section className="nw-hero">
        <div className="nw-hero__inner">
          <span className="nw-hero__tag">News & Events</span>
          <h1 className="nw-hero__heading">
            Stay Informed with <em>Software Training News, Events &amp; Updates</em>
          </h1>
          <p className="nw-hero__sub">
            The latest IT industry news, upcoming workshops, events, and announcements
            from Pro Training Tech — your one-stop source to stay ahead of the curve.
          </p>
          <div className="nw-hero__actions">
            <a href="#nw-events" className="btn btn-primary">Upcoming Events</a>
            <a href="#nw-articles" className="btn btn-outline-white">Latest News</a>
          </div>
        </div>
        <div className="nw-hero__wave">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── FEATURED EVENT ── */}
      <section className="nw-featured">
        <div className="nw-featured__inner">
          <div
            className="nw-feat-card"
            style={{ background: `linear-gradient(135deg, ${FEATURED.colorA} 0%, ${FEATURED.colorB} 50%, #1a4a80 100%)` }}
          >
            {/* Left: content */}
            <div className="nw-feat-card__content">
              <span className="nw-feat-card__label">
                <span className="nw-feat-card__label-dot" />
                {FEATURED.label}
              </span>

              <div className="nw-feat-card__when">
                <span className="nw-feat-card__when-item">
                  <span>📅</span>{FEATURED.date}
                </span>
                <span className="nw-feat-card__when-sep" />
                <span className="nw-feat-card__when-item">
                  <span>📍</span>{FEATURED.location}
                </span>
                <span className={`nw-feat-card__mode mode--${FEATURED.mode.toLowerCase().replace('-', '')}`}>
                  {FEATURED.mode}
                </span>
              </div>

              <h2 className="nw-feat-card__title">{FEATURED.title}</h2>
              <p className="nw-feat-card__desc">{FEATURED.desc}</p>

              <div className="nw-feat-card__stats">
                {FEATURED.stats.map(([v, l]) => (
                  <div key={l} className="nw-feat-card__stat">
                    <span className="nw-feat-card__stat-val">{v}</span>
                    <span className="nw-feat-card__stat-lbl">{l}</span>
                  </div>
                ))}
              </div>

              <div className="nw-feat-card__actions">
                <a href="#" className="btn btn-white"
                  onClick={e => e.preventDefault()}>
                  Register Free →
                </a>
                <a href="#" className="btn btn-outline-white"
                  onClick={e => e.preventDefault()}>
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: visual */}
            <div className="nw-feat-card__visual">
              <div className="nw-feat-card__cal">
                <div className="nw-feat-card__cal-month">Jun 2026</div>
                <div className="nw-feat-card__cal-day">15</div>
                <div className="nw-feat-card__cal-label">Save the Date</div>
              </div>
              <span className="nw-feat-card__big-icon" aria-hidden="true">
                {FEATURED.icon}
              </span>
              <div className="nw-feat-card__orbs" aria-hidden="true">
                <div className="nw-feat-card__orb nw-feat-card__orb--1" />
                <div className="nw-feat-card__orb nw-feat-card__orb--2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="nw-events" id="nw-events">
        <div className="nw-events__inner">
          <div className="nw-section-head">
            <span className="nw-section-tag">Upcoming</span>
            <h2 className="nw-section-title">Events & Workshops</h2>
            <p className="nw-section-sub">
              Hands-on workshops, webinars, and certification drives — pick the
              one that accelerates your skills next.
            </p>
          </div>

          <div className="nw-events-grid">
            {EVENTS.map(ev => <EventCard key={ev.id} ev={ev} />)}
          </div>
        </div>
      </section>

      {/* ── NEWS ARTICLES ── */}
      <section className="nw-articles" id="nw-articles">
        <div className="nw-articles__inner">
          <div className="nw-section-head">
            <span className="nw-section-tag">Latest</span>
            <h2 className="nw-section-title">News & Announcements</h2>
            <p className="nw-section-sub">
              Milestones, curriculum updates, partnerships, and stories from
              the Pro Training Tech community.
            </p>
          </div>

          <div className="nw-articles-grid">
            {ARTICLES.map(ar => <ArticleCard key={ar.id} ar={ar} />)}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="nw-newsletter" id="nw-contact">
        <div className="nw-newsletter__inner">
          <div className="nw-newsletter__text">
            <span className="nw-newsletter__icon" aria-hidden="true">📬</span>
            <h2 className="nw-newsletter__title">Stay in the Loop</h2>
            <p className="nw-newsletter__sub">
              Get the latest events, course launches, and career tips delivered
              straight to your inbox. No spam — ever.
            </p>
          </div>

          <div className="nw-newsletter__form-wrap">
            {nlStatus === 'success' ? (
              <div className="nw-nl-success">
                <span className="nw-nl-success__icon">🎉</span>
                <p>You're subscribed! Watch your inbox for the latest from Pro Training Tech.</p>
              </div>
            ) : (
              <form className="nw-nl-form" onSubmit={handleNewsletter} noValidate>
                <div className={`nw-nl-input-wrap${nlStatus === 'error' ? ' nw-nl-input-wrap--err' : ''}`}>
                  <input
                    type="email"
                    className="nw-nl-input"
                    placeholder="Enter your email address…"
                    value={nlEmail}
                    onChange={e => { setNlEmail(e.target.value); setNlStatus('idle') }}
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" className="nw-nl-btn">Subscribe →</button>
                </div>
                {nlStatus === 'error' && (
                  <p className="nw-nl-err">Please enter a valid email address.</p>
                )}
                <p className="nw-nl-note">
                  🔒 Your email is safe. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/PT-logo.png" alt="Pro Training Tech" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <p className="footer__tagline">
              One Stop Career Solution
            </p>
            <div className="footer__socials">
              {[['f', 'Facebook'], ['in', 'LinkedIn'], ['◈', 'Instagram'], ['▶', 'YouTube'], ['♪', 'TikTok']].map(([icon, label]) => (
                <a key={label} href="https://protrainingtech.com" className="footer__social" aria-label={label} target="_blank" rel="noreferrer">{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/courses', 'Courses'], ['/news', 'News & Events'],
                ['/new-batches', 'New Batches'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Popular Courses</h4>
            <ul>
              {['Java Full Stack', 'Python Full Stack', 'DevOps & AWS',
                'Data Science & ML', 'Software Testing', 'AWS Cloud'].map(c => (
                <li key={c}><Link to="/courses">{c}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <h4>Contact Us</h4>
            <ul>
              <li><span>📍</span><span>1340 Old Chain Bridge Rd, McLean, VA 22101</span></li>
              <li><span>📞</span><span>+1-703-565-1995</span></li>
              <li><span>✉️</span><span>info@protrainingtech.com</span></li>
              <li><span>🕐</span><span>Mon – Sat: 9 AM – 7 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <span>© 2025 Pro Training Tech. All rights reserved.</span>
            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

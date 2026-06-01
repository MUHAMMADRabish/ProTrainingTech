import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Testimonials.css'

// ── Data ──────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Venkata Pavan',
    role: 'Python Developer',
    company: 'MNC',
    course: 'Python Developer',
    category: 'Full Stack',
    rating: 5,
    batch: 'Jan 2026',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    verified: true,
    linkedIn: 'linkedin.com/in/j-v-pavan-624595212',
    review: 'I can now confidently work on backend development projects. The teaching approach is exactly what working professionals need — structured, practical, and deeply focused on real-world applications. Mr. K V Rao\'s mentorship was invaluable in shaping my Python skills from basics to production-level code.',
  },
  {
    id: 2,
    name: 'Surya Syam Sarath Sathavilli',
    role: 'DevOps Engineer',
    company: 'Tech Startup',
    course: 'DevOps with AWS',
    category: 'DevOps',
    rating: 5,
    batch: 'Dec 2025',
    colorA: '#1a5276', colorB: '#154360',
    verified: true,
    linkedIn: 'linkedin.com/in/surya-syam-sarath-sathavilli-335661343',
    review: 'The AWS DevOps course here was fantastic — hands-on projects, real-world infrastructure labs, and a trainer who is genuinely well-experienced. The course pushed me to work with actual AWS environments from day one. Highly recommend to anyone serious about a career in cloud engineering.',
  },
  {
    id: 3,
    name: 'Sudarshan Bansode',
    role: 'Data Science Analyst',
    company: 'IT Company',
    course: 'Full Stack Data Science Program',
    category: 'Data Science',
    rating: 5,
    batch: 'Nov 2025',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    verified: true,
    linkedIn: 'linkedin.com/in/sudarshanbansode',
    review: 'The dedicated efforts of our trainer Mr. Omkar made all the difference. His focus on making every student job-ready — from real datasets to deployment — gave me the industry-level knowledge and confidence I needed. The learning experience here is truly exceptional and worth every bit of the commitment.',
  },
  {
    id: 4,
    name: 'Shaikh Abubakar',
    role: 'Data Science Engineer',
    company: 'Tech Company',
    course: 'Data Science with AI',
    category: 'Data Science',
    rating: 5,
    batch: 'Oct 2025',
    colorA: '#1565c0', colorB: '#1976d2',
    verified: true,
    linkedIn: 'linkedin.com/in/shaikh-abubakar-a76524315',
    review: 'Mr. Omkar provided excellent industry knowledge throughout the program. The placement support was outstanding — I was placed within 2 months of completing the course with a very reasonable package. The support continued even after the course ended, which shows how much this institute cares about student success.',
  },
  {
    id: 5,
    name: 'Adam Shafi Noorbasha',
    role: '.NET Developer',
    company: 'Choice Solutions',
    course: 'Full Stack .NET Core',
    category: 'Full Stack',
    rating: 5,
    batch: 'Sep 2025',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    verified: true,
    linkedIn: 'linkedin.com/in/adam-shafi-noorbasha-5996a91b9',
    review: 'Mr. Prakash\'s clear and engaging teaching style made complex .NET concepts feel approachable. The course was invaluable for my career development and I was placed as a .NET Developer at Choice Solutions. The combination of theory, practical coding, and career support is what makes this institute stand out.',
  },
  {
    id: 6,
    name: 'Rudraboyina Kalyani',
    role: 'Python Developer',
    company: 'Software Firm',
    course: 'Full Stack Python',
    category: 'Full Stack',
    rating: 5,
    batch: 'Sep 2025',
    colorA: '#e05c2a', colorB: '#c04e22',
    verified: true,
    linkedIn: 'linkedin.com/in/rudraboyina-kalyani-b4493626a',
    review: 'The engaging instruction by Mr. K V Rao made the learning journey both effective and enjoyable. I am now working as a Python Developer, which was my dream role. The course\'s comprehensive coverage of real-world projects gave me the confidence to tackle challenging tasks in my current position.',
  },
  {
    id: 7,
    name: 'Pallavi Sakre',
    role: 'Python Developer',
    company: 'Software Company',
    course: 'Full Stack Python',
    category: 'Full Stack',
    rating: 5,
    batch: 'Aug 2025',
    colorA: '#2e7d32', colorB: '#388e3c',
    verified: true,
    linkedIn: 'linkedin.com/in/pallavi-sakre-351183262',
    review: 'Mr. Satish Gupta\'s clear and practical teaching helped me grasp complex concepts with ease. Even difficult modules became manageable thanks to his step-by-step approach. I landed a Python Developer role and the project-based learning here was the key factor that set my resume apart in interviews.',
  },
  {
    id: 8,
    name: 'Jyotiranjan Mohanty',
    role: '.NET Developer',
    company: 'Motto Systems',
    course: 'Full Stack .NET Core',
    category: 'Full Stack',
    rating: 5,
    batch: 'Aug 2025',
    colorA: '#1565c0', colorB: '#1976d2',
    verified: true,
    linkedIn: 'linkedin.com/in/jyotiranjan-mohanty-83225827b',
    review: 'Mr. Bangar Raju\'s clear and engaging teaching helped me secure a .NET Developer role at Motto Systems. I am truly grateful for the guidance and mentorship I received. The combination of solid fundamentals and real-world project work gave me everything I needed to succeed in technical interviews.',
  },
  {
    id: 9,
    name: 'Kiran Kumar',
    role: 'DevOps Engineer',
    company: 'Wipro',
    course: 'DevOps & AWS',
    category: 'DevOps',
    rating: 5,
    batch: 'Mar 2026',
    colorA: '#e05c2a', colorB: '#f07040',
    verified: true,
    review: 'Pro Training Tech\'s DevOps course is miles ahead of anything you\'ll find online. We configured real CI/CD pipelines on actual AWS infrastructure — not toy demos. The hands-on approach meant I was genuinely job-ready from day one, and Wipro\'s technical panel was visibly impressed by my project depth.',
  },
  {
    id: 10,
    name: 'Ananya Krishnan',
    role: 'QA Automation Engineer',
    company: 'IBM',
    course: 'Selenium Testing',
    category: 'Testing',
    rating: 4,
    batch: 'Feb 2026',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    verified: true,
    review: 'The Selenium framework we built during training is so robust that IBM\'s QA team asked me to use it as the base for their internal projects in my very first week. The framework-from-scratch approach is what made this possible — I arrived with a complete, production-quality tool that immediately impressed my manager.',
  },
  {
    id: 11,
    name: 'Rohit Verma',
    role: 'DevOps Consultant',
    company: 'Deloitte',
    course: 'DevOps with Azure',
    category: 'DevOps',
    rating: 5,
    batch: 'Dec 2025',
    colorA: '#1a5276', colorB: '#154360',
    verified: true,
    review: 'The Azure DevOps training prepared me for the AZ-400 certification and simultaneously got me hired at Deloitte. The balance between exam readiness and practical pipeline work is perfectly calibrated. I went from a fresher to a certified cloud engineer in just 4 months — incredible value.',
  },
  {
    id: 12,
    name: 'Nithya Lakshmi',
    role: 'AI Engineer',
    company: 'MNC',
    course: 'Data Science with AI',
    category: 'Data Science',
    rating: 5,
    batch: 'Mar 2026',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    verified: true,
    review: 'The Data Science & AI programme here is exceptional. The trainer bridges academia and industry perfectly — making deep learning feel intuitive while connecting every concept to real-world applications. The NLP project I built during training became the centrepiece of my interview. Truly a life-changing course.',
  },
]

const CATEGORIES = ['All', 'Full Stack', 'DevOps', 'Data Science', 'Testing']

const BREAKDOWN = [
  { stars: 5, pct: 78, count: '1,248' },
  { stars: 4, pct: 15, count: '240' },
  { stars: 3, pct: 5,  count: '80' },
  { stars: 2, pct: 1,  count: '16' },
  { stars: 1, pct: 1,  count: '16' },
]

const VIDEOS = [
  {
    id: 1, name: 'Rahul Sharma',  role: 'SDE at Infosys',
    course: 'Java Full Stack', duration: '2:34',
    colorA: '#1e3a5f', colorB: '#2d5a8e', thumb: '💻',
  },
  {
    id: 2, name: 'Kavya Reddy',   role: 'Data Analyst at Amazon',
    course: 'Data Science & ML', duration: '3:12',
    colorA: '#6a1b9a', colorB: '#8e24aa', thumb: '📊',
  },
  {
    id: 3, name: 'Sai Krishna',   role: 'DevOps Engineer at Wipro',
    course: 'DevOps with AWS', duration: '2:48',
    colorA: '#1a5276', colorB: '#154360', thumb: '⚙️',
  },
  {
    id: 4, name: 'Divya Nair',    role: 'QA Engineer at TCS',
    course: 'Software Testing', duration: '2:15',
    colorA: '#e05c2a', colorB: '#c04e22', thumb: '🧪',
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function avatarInitials(name) {
  const words = name.trim().split(/\s+/)
  const first = words[0]?.[0] ?? ''
  const last  = words[words.length - 1]?.[0] ?? ''
  return (first + last).toUpperCase()
}

function ReviewStars({ rating, size }) {
  return (
    <span className={`rstar-row${size ? ` rstar-row--${size}` : ''}`}
      aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`rstar${i < rating ? ' rstar--on' : ''}`}>★</span>
      ))}
    </span>
  )
}

function LinkedInIcon() {
  return (
    <svg className="rcard__li-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

// ── Testimonial Card ──────────────────────────────────────────────────────────
function ReviewCard({ t }) {
  const initials = avatarInitials(t.name)
  return (
    <article className="rcard">
      <div className="rcard__head">
        <div
          className="rcard__avatar"
          style={{ background: `linear-gradient(135deg, ${t.colorA}, ${t.colorB})` }}
        >
          {initials}
        </div>
        <div className="rcard__info">
          <div className="rcard__name">{t.name}</div>
          <div className="rcard__role">
            {t.role} · <strong>{t.company}</strong>
          </div>
        </div>
        <a href="#" className="rcard__li-btn" aria-label={`${t.name} on LinkedIn`}
          onClick={e => e.preventDefault()}>
          <LinkedInIcon />
        </a>
      </div>

      <div className="rcard__course-row">
        <span className="rcard__course-badge">{t.course}</span>
        <ReviewStars rating={t.rating} />
      </div>

      <div className="rcard__body">
        <span className="rcard__quote" aria-hidden="true">"</span>
        <p className="rcard__text">{t.review}</p>
      </div>

      <div className="rcard__foot">
        <span className="rcard__batch">Batch: {t.batch}</span>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          {t.linkedIn && (
            <a
              href={`https://${t.linkedIn}`}
              className="rcard__li-btn"
              aria-label={`${t.name} on LinkedIn`}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          )}
          {t.verified && (
            <span className="rcard__verified">
              <span className="rcard__verified-icon">✓</span> Verified
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

// ── Video Card ────────────────────────────────────────────────────────────────
function VideoCard({ v }) {
  return (
    <div className="vcard">
      <div
        className="vcard__thumb"
        style={{ background: `linear-gradient(135deg, ${v.colorA} 0%, ${v.colorB} 100%)` }}
      >
        <span className="vcard__thumb-emoji">{v.thumb}</span>
        <button className="vcard__play" aria-label={`Play video: ${v.name}`}
          onClick={e => e.preventDefault()}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <span className="vcard__duration">{v.duration}</span>
      </div>
      <div className="vcard__info">
        <div className="vcard__name">{v.name}</div>
        <div className="vcard__role">{v.role}</div>
        <div className="vcard__course">{v.course}</div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return TESTIMONIALS
    return TESTIMONIALS.filter(t => t.category === activeCategory)
  }, [activeCategory])

  const totalReviews = BREAKDOWN.reduce((acc, b) => acc + parseInt(b.count.replace(',', '')), 0)

  return (
    <div className="tm-page">

      <Navbar />

      {/* ── HERO ── */}
      <section className="tm-hero">
        <div className="tm-hero__inner">
          <span className="tm-hero__tag">Student Reviews</span>
          <h1 className="tm-hero__heading">
            Hear From Our <em>50,000+ Alumni</em>
          </h1>
          <p className="tm-hero__sub">
            Real stories from real students. Every review is verified and
            submitted by programme graduates who joined us from all backgrounds
            and built careers at India's top companies.
          </p>

          <div className="tm-hero__stats">
            {[
              ['4.8 ★', 'Overall Rating'],
              ['98%',   'Would Recommend'],
              ['50k+',  'Students Placed'],
              ['10L+',  'Learners Trained'],
            ].map(([v, l]) => (
              <div key={l} className="tm-hero__stat">
                <span className="tm-hero__stat-val">{v}</span>
                <span className="tm-hero__stat-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tm-hero__wave">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── RATING BREAKDOWN ── */}
      <section className="tm-breakdown">
        <div className="tm-breakdown__inner">

          {/* Left: big score */}
          <div className="tm-score">
            <div className="tm-score__num">4.8</div>
            <ReviewStars rating={5} size="lg" />
            <div className="tm-score__label">out of 5</div>
            <div className="tm-score__total">
              Based on <strong>{totalReviews.toLocaleString()}+</strong> reviews
            </div>
            <div className="tm-score__recommend">
              <span className="tm-score__recommend-pct">98%</span>
              <span className="tm-score__recommend-txt">of students recommend Pro Training Tech</span>
            </div>
          </div>

          {/* Divider */}
          <div className="tm-breakdown__divider" aria-hidden="true" />

          {/* Right: bar chart */}
          <div className="tm-bars">
            {BREAKDOWN.map(b => (
              <div key={b.stars} className="tm-bar-row">
                <span className="tm-bar-label">
                  {b.stars} <span className="tm-bar-star">★</span>
                </span>
                <div className="tm-bar-track" role="progressbar"
                  aria-valuenow={b.pct} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="tm-bar-fill"
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
                <span className="tm-bar-pct">{b.pct}%</span>
                <span className="tm-bar-count">({b.count})</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="tm-reviews">
        <div className="tm-reviews__inner">

          {/* Filter header */}
          <div className="tm-filter-bar">
            <div className="tm-filter-bar__left">
              <h2 className="tm-filter-bar__title">Student Testimonials</h2>
              <span className="tm-filter-bar__count">
                Showing <strong>{filtered.length}</strong> reviews
              </span>
            </div>
            <div className="tm-cat-tabs" role="tablist" aria-label="Filter by course category">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`tm-cat-tab${activeCategory === cat ? ' tm-cat-tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="tm-grid">
              {filtered.map(t => <ReviewCard key={t.id} t={t} />)}
            </div>
          ) : (
            <div className="tm-empty">
              <span className="tm-empty__icon">💬</span>
              <p className="tm-empty__txt">No reviews found for this category.</p>
              <button className="btn btn-primary" onClick={() => setActiveCategory('All')}>
                Show All Reviews
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ── */}
      <section className="tm-videos">
        <div className="tm-videos__inner">
          <div className="tm-section-head">
            <span className="tm-section-tag">Video Stories</span>
            <h2 className="tm-section-title">Watch Our Students Talk</h2>
            <p className="tm-section-sub">
              Unscripted, unedited — hear directly from our graduates about
              how Pro Training Tech shaped their careers.
            </p>
          </div>

          <div className="tm-video-grid">
            {VIDEOS.map(v => <VideoCard key={v.id} v={v} />)}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="https://protrainingtech.com/wp-content/uploads/2022/12/cropped-Pro-Training-Techs-Logo-2.png" alt="Pro Training Tech" style={{ height: '40px', objectFit: 'contain' }} />
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
              {[['/', 'Home'], ['/courses', 'Courses'], ['/testimonials', 'Testimonials'],
                ['/trainers', 'Our Trainers'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
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

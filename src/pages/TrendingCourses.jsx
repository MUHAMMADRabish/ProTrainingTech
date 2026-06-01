import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './TrendingCourses.css'

const COURSES = [
  {
    id: 1, slug: 'generative-ai-online-training',
    title: 'Generative AI & Agentic AI with Python',
    icon: '🤖', level: 'Intermediate',
    rating: 4.8, reviews: 620, students: '6,200+',
    trainer: 'Expert Trainer', trainerInitials: 'AR', trainerColor: '#e05c2a',
    duration: '4 Months', mode: 'Online / Classroom',
    tags: ['LLMs', 'LangChain', 'RAG', 'Python'],
    colorA: '#7c3aed', colorB: '#6d28d9',
    trend: '#1 Trending', badge: '🔥 Hot',
  },
  {
    id: 2, slug: 'advanced-generative-and-agentic-ai',
    title: 'Advanced Generative & Agentic AI',
    icon: '🚀', level: 'Advanced',
    rating: 4.9, reviews: 312, students: '3,120+',
    trainer: 'Expert Trainer', trainerInitials: 'VN', trainerColor: '#1565c0',
    duration: '4 Months', mode: 'Online / Classroom',
    tags: ['LangGraph', 'CrewAI', 'MCP', 'LoRA'],
    colorA: '#1565c0', colorB: '#0d47a1',
    trend: '#2 Trending', badge: '🔥 Hot',
  },
  {
    id: 3, slug: 'full-stack-data-science-ai-online-training',
    title: 'Full Stack Data Science & AI',
    icon: '📊', level: 'Beginner to Advanced',
    rating: 4.9, reviews: 544, students: '5,440+',
    trainer: 'Expert Trainer', trainerInitials: 'RI', trainerColor: '#6a1b9a',
    duration: '5 Months', mode: 'Online / Classroom',
    tags: ['Python', 'ML', 'Deep Learning', 'Power BI'],
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    trend: '#3 Trending', badge: '⚡ Rising',
  },
  {
    id: 4, slug: 'data-analytics-online-training',
    title: 'Data Analytics & Business Analytics',
    icon: '📈', level: 'Beginner to Intermediate',
    rating: 5.0, reviews: 480, students: '4,800+',
    trainer: 'Expert Trainer', trainerInitials: 'DL', trainerColor: '#e05c2a',
    duration: '3 Months', mode: 'Online / Classroom',
    tags: ['Excel', 'Power BI', 'SQL', 'Tableau'],
    colorA: '#e05c2a', colorB: '#c04e22',
    trend: '#4 Trending', badge: null,
  },
  {
    id: 5, slug: 'full-stack-java-online-training',
    title: 'Full Stack Java Development',
    icon: '☕', level: 'Beginner to Advanced',
    rating: 4.9, reviews: 1245, students: '12,450+',
    trainer: 'Expert Trainer', trainerInitials: 'NK', trainerColor: '#1e3a5f',
    duration: '6 Months', mode: 'Online / Classroom',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    trend: '#5 Trending', badge: null,
  },
  {
    id: 6, slug: 'playwright-with-typescript',
    title: 'Playwright with TypeScript',
    icon: '🧪', level: 'Beginner to Intermediate',
    rating: 4.8, reviews: 298, students: '2,980+',
    trainer: 'Expert Trainer', trainerInitials: 'SV', trainerColor: '#2e7d32',
    duration: '2 Months', mode: 'Online / Classroom',
    tags: ['Playwright', 'TypeScript', 'POM', 'CI/CD'],
    colorA: '#2e7d32', colorB: '#388e3c',
    trend: '#6 Trending', badge: '⚡ Rising',
  },
]

const DOMAINS = ['All', 'AI/ML', 'Full Stack', 'Testing']

const DOMAIN_MAP = {
  'AI/ML':      [1, 2, 3, 4],
  'Full Stack':  [5],
  'Testing':    [6],
}

function Stars({ rating }) {
  return (
    <span className="cc__stars" aria-label={`${rating} out of 5`}>
      {'★'.repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? '½' : ''}
      {'☆'.repeat(5 - Math.ceil(rating))}
    </span>
  )
}

export default function TrendingCourses() {
  const [activeDomain, setActiveDomain] = useState('All')

  const filtered = activeDomain === 'All'
    ? COURSES
    : COURSES.filter(c => (DOMAIN_MAP[activeDomain] || []).includes(c.id))

  return (
    <div className="cat-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="cat-hero cat-hero--trending">
        <div className="cat-hero__inner">
          <nav className="cat-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <Link to="/courses">Courses</Link><span>›</span>
            <span>Trending</span>
          </nav>

          <span className="cat-hero__tag">🔥 Trending in 2025</span>
          <h1 className="cat-hero__heading">
            Most In-Demand <em>Tech Skills</em><br />of 2025
          </h1>
          <p className="cat-hero__sub">
            Stay ahead of the curve with courses the industry is hiring for right now.
            AI, Cloud, DevOps, Cybersecurity — these are the skills that land
            6-figure packages at top MNCs.
          </p>

          <div className="cat-hero__stats">
            {[['8+', 'Trending Courses'], ['20,000+', 'Enrolled This Year'], ['4.8★', 'Avg Rating'], ['High Demand', 'Job Market']].map(([val, lbl]) => (
              <div key={lbl} className="cat-hero__stat">
                <span className="cat-hero__stat-val">{val}</span>
                <span className="cat-hero__stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="cat-hero__wave">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="cat-filters">
        <div className="cat-filters__inner">
          {DOMAINS.map(d => (
            <button
              key={d}
              className={`cat-filter-btn${activeDomain === d ? ' active' : ''}`}
              onClick={() => setActiveDomain(d)}
            >{d}</button>
          ))}
          <span className="cat-filters__count">{filtered.length} courses</span>
        </div>
      </div>

      {/* ── COURSE GRID ── */}
      <section className="cat-section">
        <div className="container">
          <div className="cat-section__head">
            <h2>Trending <mark>Courses in 2025</mark></h2>
            <p>The most-enrolled and highest-rated courses on the Pro Training Tech platform this year</p>
          </div>

          <div className="cat-grid">
            {filtered.map((course, i) => (
              <Link key={course.id} to={`/courses/${course.slug}`} className="cc" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  className="cc__banner"
                  style={{ background: `linear-gradient(135deg, ${course.colorA} 0%, ${course.colorB} 100%)` }}
                >
                  <span className="cc__icon">{course.icon}</span>
                  <span className="cc__banner-badge">{course.level}</span>
                  {course.badge && <span className="cc__special-badge trending-badge">{course.badge}</span>}
                </div>

                <div className="cc__body">
                  <div className="trend-rank">
                    <span className="trend-rank__num">#{i + 1}</span>
                    <span className="trend-rank__lbl">Trending</span>
                  </div>
                  <h3 className="cc__title">{course.title}</h3>

                  <div className="cc__meta-row">
                    <div className="cc__rating">
                      <Stars rating={course.rating} />
                      <span className="cc__rating-val">{course.rating}</span>
                      <span className="cc__reviews">({course.reviews.toLocaleString()})</span>
                    </div>
                    <span className="cc__students">👥 {course.students}</span>
                  </div>

                  <div className="cc__chips">
                    <span className="cc__chip">⏱ {course.duration}</span>
                    <span className="cc__chip">🖥️ {course.mode}</span>
                  </div>

                  <div className="cc__trainer">
                    <div className="cc__trainer-avatar" style={{ background: course.trainerColor }}>
                      {course.trainerInitials}
                    </div>
                    <div>
                      <div className="cc__trainer-name">{course.trainer}</div>
                      <div className="cc__trainer-label">Expert Trainer</div>
                    </div>
                  </div>

                  <div className="cc__tags">
                    {course.tags.map(t => <span key={t} className="cc__tag">{t}</span>)}
                  </div>

                  <span className="cc__enroll">Enroll Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cat-cta">
        <div className="cat-cta__inner">
          <h2>Start Learning What the Industry Needs Now</h2>
          <p>These trending skills are in high demand — enrol today and be job-ready in as little as 2 months.</p>
          <div className="cat-cta__btns">
            <Link to="/contact" className="btn btn-white">Get Free Demo Class</Link>
            <Link to="/new-batches" className="btn btn-outline-white">See All Batches</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

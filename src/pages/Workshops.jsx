import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Workshops.css'

/* ── Workshop cards ──────────────────────────────────────── */
const WORKSHOPS = [
  {
    id: 1,
    title: 'Workshop on Modern Data Lake Analytics with Athena',
    instructor: 'Mr. Veera Babu',
    duration: '4 hours',
    startDate: '29 May 2026  10:00 AM',
  },
  {
    id: 2,
    title: 'Workshop on Advanced LLMOPS',
    instructor: 'Mr. Prakash Senapathi',
    duration: '4 hours',
    startDate: '29 May 2026  10:00 AM',
  },
  {
    id: 3,
    title: 'Workshop on Production Agentic AI: Build Stateful AI Agents with LangGraph',
    instructor: 'Mr. Omkar',
    duration: '4 hours',
    startDate: '29 May 2026  10:00 AM',
  },
]

/* ── Placed students — 10 total, 5 per page ─────────────── */
const STUDENTS = [
  { id: 1,  name: 'Debashis Behera',   role: 'Java Developer', company: 'Emagia Corporation',   img: 'https://images.nareshit.com/3.jpg' },
  { id: 2,  name: 'Rupal Borkar',      role: 'Web Developer',  company: 'Mphasis Ltd',          img: 'https://images.nareshit.com/5.jpg' },
  { id: 3,  name: 'Sai Bharathi',      role: 'Web Developer',  company: 'Conseqta Technology',  img: 'https://images.nareshit.com/10.jpg' },
  { id: 4,  name: 'Indrani Malladi',   role: 'QA Engineer',    company: 'Celium Pvt Ltd',       img: 'https://images.nareshit.com/6.jpg' },
  { id: 5,  name: 'Balaji Kumar',      role: 'Java Developer', company: 'Alodial Infotech',     img: 'https://images.nareshit.com/1.jpg' },
  { id: 6,  name: 'Anshuman Swain',    role: 'Web Developer',  company: 'Conseqta Technology',  img: 'https://images.nareshit.com/Oct_24-2.jpg' },
  { id: 7,  name: 'Shreya V Tawalare', role: 'Java Developer', company: 'Sisnx Techno',         img: 'https://images.nareshit.com/Oct_24-1.jpg' },
  { id: 8,  name: 'Sameer',            role: 'Web Developer',  company: 'Ikerly Pvt Ltd',       img: 'https://images.nareshit.com/Oct_24-3.jpg' },
  { id: 9,  name: 'K Tejeswari',       role: 'Java Developer', company: 'Kitechi',              img: 'https://images.nareshit.com/Oct_24-4.jpg' },
  { id: 10, name: 'Ganga Muthyala',    role: 'QA Engineer',    company: 'SS Solutions Pvt Ltd', img: 'https://images.nareshit.com/Oct_24-5.jpg' },
]

const PER_PAGE    = 5
const TOTAL_PAGES = Math.ceil(STUDENTS.length / PER_PAGE)

function LinkedInIcon() {
  return (
    <svg className="ws-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default function Workshops() {
  const [page, setPage] = useState(0)
  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="ws-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="ws-info">
        <div className="ws-info__inner">

          {/* Left column */}
          <div className="ws-info__left">
            <h2 className="ws-info__label">Workshops</h2>
            <img
              src="https://images.nareshit.com/images/image_1706335756779.jpg"
              alt="Workshops at Pro Training Tech"
              className="ws-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="ws-info__right">
            <h1 className="ws-info__heading">
              Unlocking IT Excellence: Join Our<br />
              Transformative Workshops
            </h1>

            <p className="ws-info__para">
              Pro Training Tech&rsquo;s workshops are intensive, hands-on learning experiences designed
              to equip IT professionals with the latest skills and knowledge. Led by industry experts,
              our workshops blend theory with real-world practice to deliver maximum learning impact
              in a focused timeframe.
            </p>

            <p className="ws-info__para">
              Whether you are looking to explore a new technology, sharpen an existing skill, or
              network with like-minded professionals, our workshops provide the ideal environment for
              accelerated learning and career growth.
            </p>

            <p className="ws-info__sub-heading">
              Why to Attend Pro Training Tech&rsquo;s Workshops:
            </p>

            <ul className="ws-info__bullets">
              <li>
                <span className="ws-bullet-dot" />
                <span><strong>Latest Software Technologies</strong> — Stay current with workshops covering cutting-edge tools, frameworks, and platforms in high demand.</span>
              </li>
              <li>
                <span className="ws-bullet-dot" />
                <span><strong>Hands-On Learning Experience</strong> — Every session includes practical exercises and coding labs so you apply concepts immediately.</span>
              </li>
              <li>
                <span className="ws-bullet-dot" />
                <span><strong>Expert-Guided Sessions</strong> — Learn directly from seasoned industry professionals with real-world project experience.</span>
              </li>
              <li>
                <span className="ws-bullet-dot" />
                <span><strong>Tailored Curriculum</strong> — Workshop content designed to address current industry needs and the most in-demand skill gaps.</span>
              </li>
              <li>
                <span className="ws-bullet-dot" />
                <span><strong>Real-World Use Cases</strong> — Work on industry-relevant scenarios and case studies that mirror actual workplace challenges.</span>
              </li>
              <li>
                <span className="ws-bullet-dot" />
                <span><strong>Networking Opportunities</strong> — Connect with peers, mentors, and industry professionals to expand your professional network.</span>
              </li>
            </ul>

            <Link to="/contact" className="ws-enquiry-btn">Enquiry</Link>
          </div>

        </div>
      </section>

      {/* ── WORKSHOPS CARDS ── */}
      <section className="ws-workshops">
        <div className="ws-workshops__inner">
          <h2 className="ws-workshops__title">Workshops</h2>
          <div className="ws-workshops__grid">
            {WORKSHOPS.map(w => (
              <div key={w.id} className="ws-workshop-card">
                <div className="ws-workshop-card__icon-wrap">
                  <span className="ws-workshop-card__icon">🖥️</span>
                </div>
                <h3 className="ws-workshop-card__title">{w.title}</h3>
                <div className="ws-workshop-card__meta">
                  <div className="ws-workshop-card__meta-row">
                    <span className="ws-workshop-card__meta-label">By:</span>
                    <span className="ws-workshop-card__meta-val">{w.instructor}</span>
                  </div>
                  <div className="ws-workshop-card__meta-row">
                    <span className="ws-workshop-card__meta-label">Dur:</span>
                    <span className="ws-workshop-card__meta-val">{w.duration}</span>
                  </div>
                  <div className="ws-workshop-card__meta-row">
                    <span className="ws-workshop-card__meta-label">Start Date:</span>
                    <span className="ws-workshop-card__meta-val">{w.startDate}</span>
                  </div>
                </div>
                <button className="ws-workshop-card__btn" type="button">Join Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="ws-placed">
        <div className="ws-placed__inner">

          <div className="ws-placed__head">
            <h2 className="ws-placed__title">Placed Students</h2>
            <p className="ws-placed__sub">Explore new and trending free online courses.</p>
          </div>

          <div className="ws-carousel">
            <button
              className="ws-carousel__arrow"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >&#8249;</button>

            <div className="ws-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="ws-card">
                  <div className="ws-card__linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="ws-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="ws-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="ws-card__name">{s.name}</div>
                  <div className="ws-card__role">{s.role}</div>
                  <div className="ws-card__company">
                    <span className="ws-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="ws-carousel__arrow"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >&#8250;</button>
          </div>

          <div className="ws-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`ws-carousel__dot${page === i ? ' ws-carousel__dot--active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './JobAssistanceCourses.css'

/* ── Data ───────────────────────────────────────────────────── */

const COURSES = [
  {
    id: 1,
    slug: 'full-stack-java-placement-assistance-program-online-training',
    title: 'Full Stack Java Placement Assistance',
    img: 'https://images.nareshit.com/full-stack-java-placement-assistance-program-nareshit.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    slug: 'full-stack-dot-net-placement-assistance-program-online-training',
    title: 'Full Stack .Net Placement Assistance',
    img: 'https://images.nareshit.com/full-stack-dot-net-placement-assistance-program-nareshit.jpg',
    rating: 5.0,
  },
]

const FEATURES = [
  { id: 1, title: 'Comprehensive Software Training',    desc: 'In-depth programs covering the latest industry technologies from basics to advanced deployment.',        icon: 'https://images.nareshit.com/images/image_1705749354487.png' },
  { id: 2, title: 'Expert Instructors',                desc: 'Learn from industry professionals with real-world insights, live sessions, and personalised mentorship.',   icon: 'https://images.nareshit.com/images/image_1705749593083.png' },
  { id: 3, title: 'Practical Hands-On Projects',       desc: 'Build real-world applications with personal credentials and automated test case evaluation.',              icon: 'https://images.nareshit.com/images/image_1705749708243.png' },
  { id: 4, title: 'Dedicated Job Placement Assistance',desc: 'Specialised support for securing post-training employment through direct employer connections.',            icon: 'https://images.nareshit.com/images/image_1705749883357.png' },
  { id: 5, title: 'Mock Interviews and Soft Skills',   desc: 'Interview preparation sessions, HR rounds, and communication skill development included.',                 icon: 'https://images.nareshit.com/images/image_1705750006471.png' },
  { id: 6, title: 'Interactive Coding Challenges',     desc: 'Topic-wise MCQs, proof-of-concept exercises, and weekly performance reports to keep you on track.',        icon: 'https://images.nareshit.com/images/image_1705750113241.png' },
]

const BATCHES = [
  { course: 'Full Stack Java Placement',     faculty: 'Real-Time Expert', date: 'Jun 8', time: '9:00 AM IST', mode: 'Offline', type: 'Classroom Training' },
  { course: 'Full Stack Java Placement',     faculty: 'Real-Time Expert', date: 'Jun 8', time: '9:00 AM IST', mode: 'Online',  type: 'Online Training'   },
  { course: 'Full Stack .Net Placement',     faculty: 'Real-Time Expert', date: 'Jun 8', time: '9:00 AM IST', mode: 'Offline', type: 'Classroom Training' },
  { course: 'Full Stack .Net Placement',     faculty: 'Real-Time Expert', date: 'Jun 8', time: '9:00 AM IST', mode: 'Online',  type: 'Online Training'   },
]

const TABS = ['Courses', 'Training Features', 'Batch Time Table']

/* 2 courses, show 2 at a time → no scrolling needed, but arrows still wired */
const VISIBLE = 2
const MAX_IDX  = Math.max(0, COURSES.length - VISIBLE)

function StarRating({ rating }) {
  const full  = Math.floor(rating)
  const half  = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="jac-card__stars">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

/* ── Page ───────────────────────────────────────────────────── */

export default function JobAssistanceCourses() {
  const [activeTab,    setActiveTab]    = useState(0)
  const [carouselIdx,  setCarouselIdx]  = useState(0)
  const [formData,     setFormData]     = useState({
    name: '', email: '', mobile: '', course: '', mode: '', terms: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  /* Track is 100% wide (2 courses shown = all), shift by 1/N per step */
  const trackTranslate = `-${carouselIdx * (100 / COURSES.length)}%`

  return (
    <div className="jac-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="jac-hero">
        <div className="jac-hero__inner">
          <div className="jac-hero__text">
            <h1 className="jac-hero__heading">Placement Assistance Program</h1>
            <p className="jac-hero__sub">Transform Your Aspirations into Achievements</p>
          </div>
          <div className="jac-hero__img-wrap">
            <img
              src="https://images.nareshit.com/images/image_1706090706296.jpg"
              alt="Job Placement Assistance"
              className="jac-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN BODY: 70 / 30 ── */}
      <div className="jac-body">

        {/* ── LEFT 70% ── */}
        <div className="jac-content">
          <h2 className="jac-content__heading">Job Placement Assistance Program</h2>

          {/* Tab bar */}
          <div className="jac-tabs" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === i}
                className={`jac-tab${activeTab === i ? ' jac-tab--active' : ''}`}
                onClick={() => { setActiveTab(i); setCarouselIdx(0) }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── TAB 0: COURSES ── */}
          {activeTab === 0 && (
            <div className="jac-panel">
              <h3 className="jac-panel__heading">Job guarantee courses</h3>

              {/* Arrows */}
              <div className="jac-carousel__arrows">
                <button
                  className="jac-arrow"
                  onClick={() => setCarouselIdx(i => Math.max(0, i - 1))}
                  disabled={carouselIdx === 0}
                  aria-label="Previous"
                >&#8249;</button>
                <button
                  className="jac-arrow"
                  onClick={() => setCarouselIdx(i => Math.min(MAX_IDX, i + 1))}
                  disabled={carouselIdx === MAX_IDX}
                  aria-label="Next"
                >&#8250;</button>
              </div>

              {/* Carousel — 2 cards fill 100% of the track */}
              <div className="jac-carousel">
                <div className="jac-carousel__track-wrap">
                  <div
                    className="jac-carousel__track"
                    style={{ transform: `translateX(${trackTranslate})` }}
                  >
                    {COURSES.map(c => (
                      <Link key={c.id} to={`/courses/${c.slug}`} className="jac-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div className="jac-card__inner">
                          <div className="jac-card__img-wrap">
                            <img
                              src={c.img}
                              alt={c.title}
                              className="jac-card__img"
                              loading="lazy"
                            />
                          </div>
                          <div className="jac-card__body">
                            <span className="jac-card__title">
                              {c.title}
                            </span>
                            <div className="jac-card__rating-row">
                              <StarRating rating={c.rating} />
                              <span className="jac-card__rating-val">{c.rating.toFixed(1)}/5</span>
                            </div>
                            <div className="jac-card__btns">
                              <span className="jac-card__enroll">
                                ENROLL
                              </span>
                              <button
                                className="jac-card__share"
                                type="button"
                                onClick={e => {
                                  e.stopPropagation()
                                  const url = `${window.location.origin}/courses/${c.slug}`
                                  navigator.share
                                    ? navigator.share({ title: c.title, url })
                                    : navigator.clipboard?.writeText(url)
                                }}
                              >
                                SHARE
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/course-listing" className="jac-explore-btn">
                EXPLORE OUR COURSES
              </Link>
            </div>
          )}

          {/* ── TAB 1: TRAINING FEATURES ── */}
          {activeTab === 1 && (
            <div className="jac-panel">
              <h3 className="jac-panel__heading">Training Features</h3>
              <div className="jac-features">
                {FEATURES.map(f => (
                  <div key={f.id} className="jac-feat-card">
                    <div className="jac-feat-card__icon-wrap">
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="jac-feat-card__icon"
                        onError={e => { e.currentTarget.style.opacity = '0' }}
                      />
                    </div>
                    <div className="jac-feat-card__title">{f.title}</div>
                    <p className="jac-feat-card__desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 2: BATCH TIME TABLE ── */}
          {activeTab === 2 && (
            <div className="jac-panel">
              <h3 className="jac-panel__heading">Batch Time Table</h3>
              <div className="jac-table-wrap">
                <table className="jac-table">
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Faculty</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Mode</th>
                      <th>Batch Type</th>
                      <th>Meeting Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BATCHES.map((b, i) => (
                      <tr key={i}>
                        <td>{b.course}</td>
                        <td>{b.faculty}</td>
                        <td>{b.date}</td>
                        <td>{b.time}</td>
                        <td>
                          <span className={`jac-mode-badge jac-mode-badge--${b.mode === 'Online' ? 'online' : 'offline'}`}>
                            {b.mode}
                          </span>
                        </td>
                        <td>{b.type}</td>
                        <td>
                          <button className="jac-table__join" type="button">Click here</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <a href="tel:+17035651995" className="jac-advisor-btn">
                📞 TALK TO ADVISOR &nbsp;+1-703-565-1995
              </a>
              <button className="jac-enroll-btn" type="button">ENROLL NOW</button>
            </div>
          )}
        </div>

        {/* ── RIGHT 30% — STICKY ENQUIRY FORM ── */}
        <aside className="jac-sidebar">
          <div className="jac-form-card">
            <div className="jac-form-card__header">
              <p className="jac-form-card__tag">Top 5 Technologies to learn</p>
              <h3 className="jac-form-card__heading">Register for the Course!</h3>
            </div>

            <div className="jac-form-card__img-wrap">
              <img
                src="https://images.nareshit.com/images/image_1706090706296.jpg"
                alt="Enroll"
                className="jac-form-card__top-img"
                onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
              />
            </div>

            <div className="jac-form-card__body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="jac-field">
                  <input
                    name="name" type="text" placeholder="Full Name"
                    value={formData.name} onChange={handleChange} required
                  />
                </div>
                <div className="jac-field">
                  <input
                    name="email" type="email" placeholder="Email address"
                    value={formData.email} onChange={handleChange} required
                  />
                </div>
                <div className="jac-field">
                  <input
                    name="mobile" type="tel" placeholder="Mobile Number"
                    value={formData.mobile} onChange={handleChange} required
                  />
                </div>
                <div className="jac-field">
                  <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">Select Course</option>
                    <option>Full Stack Java Placement Assistance</option>
                    <option>Full Stack .Net Placement Assistance</option>
                  </select>
                </div>
                <div className="jac-field">
                  <select name="mode" value={formData.mode} onChange={handleChange} required>
                    <option value="">Mode of Training</option>
                    <option>Online</option>
                    <option>Classroom</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <label className="jac-terms">
                  <input
                    type="checkbox" name="terms"
                    checked={formData.terms} onChange={handleChange} required
                  />
                  I agree to the{' '}
                  <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                  {' '}and{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </label>
                <button
                  type="submit"
                  className={`jac-submit${submitted ? ' jac-submit--success' : ''}`}
                >
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
              </form>
              <p className="jac-contact-line">
                📞 <a href="tel:+17035651995">+1-703-565-1995</a>
              </p>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  )
}

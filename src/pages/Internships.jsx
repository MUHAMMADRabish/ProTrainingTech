import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Internships.css'

/* ── Data ───────────────────────────────────────────────────── */

const COURSES = [
  {
    id: 1,
    slug: 'internship-program-on-data-science',
    title: 'Internship Program on Data Science',
    img: 'https://images.nareshit.com/internship-on-data-scince-online-training.jpg',
    rating: 5.0,
  },
  {
    id: 2,
    slug: 'internship-program-on-python',
    title: 'Internship Program on Python',
    img: 'https://images.nareshit.com/internship-on-python-online-training.jpg',
    rating: 5.0,
  },
  {
    id: 3,
    slug: 'internship-program-on-devops-with-cloud',
    title: 'Internship Program on DevOps with Cloud',
    img: 'https://images.nareshit.com/internship-on-devops-with-multicloud-online-training.jpg',
    rating: 4.5,
  },
]

const FEATURES = [
  { id: 1, title: 'Varied Internship Opportunities',     desc: 'Explore diverse internship opportunities in collaboration with leading industry partners across domains.',   icon: 'https://images.nareshit.com/images/image_1705749354487.png' },
  { id: 2, title: 'Industry-Aligned Skill Development',  desc: 'Develop job-ready skills through internship programs designed to align with current industry requirements.',  icon: 'https://images.nareshit.com/images/image_1705749593083.png' },
  { id: 3, title: 'Flexible Internship Duration',        desc: 'Choose from flexible internship durations to accommodate your academic schedule and learning pace.',          icon: 'https://images.nareshit.com/images/image_1705749708243.png' },
  { id: 4, title: 'Internship Certification',            desc: 'Receive an industry-recognised certificate upon successful completion of your internship program.',           icon: 'https://images.nareshit.com/images/image_1705749883357.png' },
  { id: 5, title: '24/7 Intern Support',                 desc: 'Access round-the-clock support, mentor guidance, and doubt-clearing sessions whenever you need help.',       icon: 'https://images.nareshit.com/images/image_1705750006471.png' },
  { id: 6, title: 'Remote Internship Options',           desc: 'Explore location-flexible remote internship opportunities with access to an AI Virtual Lab environment.',    icon: 'https://images.nareshit.com/images/image_1705750113241.png' },
]

const BATCHES = [
  { course: 'Internship Program on Python',          faculty: 'Mr. Mayur',       date: 'Jun 1', time: '5:00 PM IST',  mode: 'Offline', type: 'Classroom Training' },
  { course: 'Internship Program on Python',          faculty: 'Mr. Mayur',       date: 'Jun 1', time: '5:00 PM IST',  mode: 'Online',  type: 'Online Training'    },
  { course: 'Internship on DevOps with Cloud',       faculty: 'Real-Time Expert', date: 'Jun 1', time: '9:00 AM IST',  mode: 'Online',  type: 'Online Training'    },
  { course: 'Internship on Data Science',            faculty: 'Real-Time Expert', date: 'Jun 1', time: '9:00 AM IST',  mode: 'Online',  type: 'Online Training'    },
]

const TABS = ['Courses', 'Training Features', 'Batch Time Table']

/* 3 courses, show 3 at a time → all visible, no sliding (MAX_IDX = 0) */
const VISIBLE = 3
const MAX_IDX  = Math.max(0, COURSES.length - VISIBLE)   // = 0

function StarRating({ rating }) {
  const full  = Math.floor(rating)
  const half  = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="ipc-card__stars">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

/* ── Page ───────────────────────────────────────────────────── */

export default function Internships() {
  const [activeTab,   setActiveTab]   = useState(0)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [formData,    setFormData]    = useState({
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

  /*
   * 3 courses, 3 visible → track is 100% wide, no translation needed.
   * Arrows are wired but both disabled (MAX_IDX = 0).
   */
  const trackTranslate = `-${carouselIdx * (100 / COURSES.length)}%`

  return (
    <div className="ipc-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="ipc-hero">
        <div className="ipc-hero__inner">
          <div className="ipc-hero__text">
            <h1 className="ipc-hero__heading">Internship Programs</h1>
            <p className="ipc-hero__sub">
              Gain Real-World Experience for Future Success
            </p>
          </div>
          <div className="ipc-hero__img-wrap">
            <img
              src="https://images.nareshit.com/images/image_1706335329390.jpg"
              alt="Internship Programs"
              className="ipc-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN BODY: 70 / 30 ── */}
      <div className="ipc-body">

        {/* ── LEFT 70% ── */}
        <div className="ipc-content">
          <h2 className="ipc-content__heading">Internships</h2>

          {/* Tab bar */}
          <div className="ipc-tabs" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === i}
                className={`ipc-tab${activeTab === i ? ' ipc-tab--active' : ''}`}
                onClick={() => { setActiveTab(i); setCarouselIdx(0) }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── TAB 0: COURSES ── */}
          {activeTab === 0 && (
            <div className="ipc-panel">
              <h3 className="ipc-panel__heading">Internship Courses</h3>

              {/* Arrows */}
              <div className="ipc-carousel__arrows">
                <button
                  className="ipc-arrow"
                  onClick={() => setCarouselIdx(i => Math.max(0, i - 1))}
                  disabled={carouselIdx === 0}
                  aria-label="Previous"
                >&#8249;</button>
                <button
                  className="ipc-arrow"
                  onClick={() => setCarouselIdx(i => Math.min(MAX_IDX, i + 1))}
                  disabled={carouselIdx === MAX_IDX}
                  aria-label="Next"
                >&#8250;</button>
              </div>

              {/* Carousel */}
              <div className="ipc-carousel">
                <div className="ipc-carousel__track-wrap">
                  <div
                    className="ipc-carousel__track"
                    style={{ transform: `translateX(${trackTranslate})` }}
                  >
                    {COURSES.map(c => (
                      <Link key={c.id} to={`/courses/${c.slug}`} className="ipc-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div className="ipc-card__inner">
                          <div className="ipc-card__img-wrap">
                            <img
                              src={c.img}
                              alt={c.title}
                              className="ipc-card__img"
                              loading="lazy"
                            />
                          </div>
                          <div className="ipc-card__body">
                            <span className="ipc-card__title">
                              {c.title}
                            </span>
                            <div className="ipc-card__rating-row">
                              <StarRating rating={c.rating} />
                              <span className="ipc-card__rating-val">{c.rating.toFixed(1)}/5</span>
                            </div>
                            <div className="ipc-card__btns">
                              <span className="ipc-card__enroll">
                                ENROLL
                              </span>
                              <button
                                className="ipc-card__share"
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

              <Link to="/course-listing" className="ipc-explore-btn">
                EXPLORE OUR COURSES
              </Link>
            </div>
          )}

          {/* ── TAB 1: TRAINING FEATURES ── */}
          {activeTab === 1 && (
            <div className="ipc-panel">
              <h3 className="ipc-panel__heading">Training Features</h3>
              <div className="ipc-features">
                {FEATURES.map(f => (
                  <div key={f.id} className="ipc-feat-card">
                    <div className="ipc-feat-card__icon-wrap">
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="ipc-feat-card__icon"
                        onError={e => { e.currentTarget.style.opacity = '0' }}
                      />
                    </div>
                    <div className="ipc-feat-card__title">{f.title}</div>
                    <p className="ipc-feat-card__desc">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="ipc-features-action">
                <button className="ipc-enroll-btn" type="button">ENROLL NOW</button>
              </div>
            </div>
          )}

          {/* ── TAB 2: BATCH TIME TABLE ── */}
          {activeTab === 2 && (
            <div className="ipc-panel">
              <h3 className="ipc-panel__heading">Batch Time Table</h3>
              <div className="ipc-table-wrap">
                <table className="ipc-table">
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
                          <span className={`ipc-mode-badge ipc-mode-badge--${b.mode === 'Online' ? 'online' : 'offline'}`}>
                            {b.mode}
                          </span>
                        </td>
                        <td>{b.type}</td>
                        <td>
                          <button className="ipc-table__join" type="button">Click here</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="ipc-enroll-btn" type="button">ENROLL NOW</button>
            </div>
          )}
        </div>

        {/* ── RIGHT 30% — STICKY ENQUIRY FORM ── */}
        <aside className="ipc-sidebar">
          <div className="ipc-form-card">

            <div className="ipc-form-card__header">
              <p className="ipc-form-card__tag">Top 5 Technologies to learn</p>
              <h3 className="ipc-form-card__heading">Register for the Course!</h3>
            </div>

            <div className="ipc-form-card__img-wrap">
              <img
                src="https://images.nareshit.com/images/image_1706335329390.jpg"
                alt="Enroll"
                className="ipc-form-card__top-img"
                onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
              />
            </div>

            <div className="ipc-form-card__body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="ipc-field">
                  <input
                    name="name" type="text" placeholder="Full Name"
                    value={formData.name} onChange={handleChange} required
                  />
                </div>
                <div className="ipc-field">
                  <input
                    name="email" type="email" placeholder="Email address"
                    value={formData.email} onChange={handleChange} required
                  />
                </div>
                <div className="ipc-field">
                  <input
                    name="mobile" type="tel" placeholder="Mobile Number"
                    value={formData.mobile} onChange={handleChange} required
                  />
                </div>
                <div className="ipc-field">
                  <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">Select Course</option>
                    <option>Internship Program on Data Science</option>
                    <option>Internship Program on Python</option>
                    <option>Internship Program on DevOps with Cloud</option>
                  </select>
                </div>
                <div className="ipc-field">
                  <select name="mode" value={formData.mode} onChange={handleChange} required>
                    <option value="">Mode of Training</option>
                    <option>Online</option>
                    <option>Classroom</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <label className="ipc-terms">
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
                  className={`ipc-submit${submitted ? ' ipc-submit--success' : ''}`}
                >
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
              </form>
              <p className="ipc-contact-line">
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

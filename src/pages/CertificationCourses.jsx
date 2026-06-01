import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CertificationCourses.css'

/* ── Data ───────────────────────────────────────────────────── */

const COURSES = [
  {
    id: 1,
    slug: 'full-stack-data-science-ai-certification-online-training',
    title: 'Full Stack Data Science & AI Certification',
    img: 'https://images.nareshit.com/Data_Sci_(1).jpg',
    rating: 4.8,
  },
  {
    id: 2,
    slug: 'generative-ai-online-training',
    title: 'Generative AI & Agentic AI with Python',
    img: 'https://images.nareshit.com/Generative_AI_&_Agentic_AI_with_Python.png',
    rating: 4.8,
  },
  {
    id: 3,
    slug: 'advanced-generative-and-agentic-ai',
    title: 'Advanced Generative & Agentic AI',
    img: 'https://images.nareshit.com/Advanced_Generative_and_Agentic_AI_Online_Training_NARESHIT.jpg',
    rating: 4.9,
  },
  {
    id: 4,
    slug: 'mlops-and-aiops-online-training',
    title: 'MLOps & AIOps',
    img: 'https://images.nareshit.com/MLOps_AIOps_Online_Training_NARESHIT.jpg',
    rating: 4.5,
  },
  {
    id: 5,
    slug: 'terraform-associate-certification-training-003',
    title: 'Terraform Associate Certification (003)',
    img: 'https://images.nareshit.com/Terraform_Associate_Certification_Training_(003).jpg',
    rating: 5.0,
  },
]

const FEATURES = [
  { id: 1, title: 'Comprehensive Curriculum',          desc: 'Well-structured curriculum covering all essential topics relevant to the certification exam objectives.',       icon: 'https://images.nareshit.com/images/image_1705749354487.png' },
  { id: 2, title: 'Expert-Led Sessions',               desc: 'Instructors bring real-world insights, practical experience, and proven exam strategies to every class.',      icon: 'https://images.nareshit.com/images/image_1705749593083.png' },
  { id: 3, title: 'Hands-On Labs and Projects',        desc: 'Reinforce theoretical knowledge with hands-on labs and real-world projects aligned to certification goals.',   icon: 'https://images.nareshit.com/images/image_1705749708243.png' },
  { id: 4, title: 'Flexibility in Learning',           desc: 'Choose from on-site classes, live online sessions, and recorded content to fit your schedule and pace.',      icon: 'https://images.nareshit.com/images/image_1705749883357.png' },
  { id: 5, title: 'Industry-Recognized Certifications',desc: 'Credentials that enhance professional credibility and open doors to new career opportunities at top MNCs.',  icon: 'https://images.nareshit.com/images/image_1705750006471.png' },
  { id: 6, title: 'Placement Assistance',              desc: 'Dedicated placement support team organising career drives and connecting you directly with hiring partners.',  icon: 'https://images.nareshit.com/images/image_1705750113241.png' },
]

const BATCHES = [
  { course: 'Full Stack DS & AI Certification', faculty: 'Expert Trainer', date: 'Jun 1',  time: '9:00 AM IST',  mode: 'Online',  type: 'Online Training'    },
  { course: 'Generative AI & Agentic AI',       faculty: 'Expert Trainer', date: 'Jun 1',  time: '6:00 PM IST',  mode: 'Online',  type: 'Online Training'    },
  { course: 'Advanced Generative & Agentic AI', faculty: 'Expert Trainer', date: 'Jun 2',  time: '10:00 AM IST', mode: 'Online',  type: 'Online Training'    },
  { course: 'MLOps & AIOps',                   faculty: 'Expert Trainer', date: 'Jun 2',  time: '8:00 AM IST',  mode: 'Online',  type: 'Online Training'    },
  { course: 'Terraform Associate (003)',         faculty: 'Mr. Raham',     date: 'Jun 1',  time: '9:00 AM IST',  mode: 'Offline', type: 'KPHB'               },
  { course: 'Terraform Associate (003)',         faculty: 'Mr. Raham',     date: 'Jun 1',  time: '9:00 AM IST',  mode: 'Online',  type: 'Online Training'    },
]

const TABS = ['Courses', 'Training Features', 'Batch Time Table']

/* 5 courses, 4 visible → 1 shift possible */
const VISIBLE = 4
const MAX_IDX  = COURSES.length - VISIBLE   // = 1

function StarRating({ rating }) {
  const full  = Math.floor(rating)
  const half  = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="ccc-card__stars">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

/* ── Page ───────────────────────────────────────────────────── */

export default function CertificationCourses() {
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
   * Track is 125% wide (5 cards, 4 visible → 5/4 = 1.25).
   * Shifting by carouselIdx × (100/5)% of the track moves exactly one card.
   */
  const trackTranslate = `-${carouselIdx * (100 / COURSES.length)}%`

  return (
    <div className="ccc-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="ccc-hero">
        <div className="ccc-hero__inner">
          <div className="ccc-hero__text">
            <h1 className="ccc-hero__heading">Certification Courses</h1>
            <p className="ccc-hero__sub">
              Earn Industry-Recognized Credentials to Accelerate Your Career
            </p>
          </div>
          <div className="ccc-hero__img-wrap">
            <img
              src="https://images.nareshit.com/images/image_1708755533965.jpg"
              alt="Certification Courses"
              className="ccc-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN BODY: 70 / 30 ── */}
      <div className="ccc-body">

        {/* ── LEFT 70% ── */}
        <div className="ccc-content">
          <h2 className="ccc-content__heading">Certification Courses</h2>

          {/* Tab bar */}
          <div className="ccc-tabs" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === i}
                className={`ccc-tab${activeTab === i ? ' ccc-tab--active' : ''}`}
                onClick={() => { setActiveTab(i); setCarouselIdx(0) }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── TAB 0: COURSES ── */}
          {activeTab === 0 && (
            <div className="ccc-panel">
              {/* Arrow row */}
              <div className="ccc-carousel__arrows">
                <button
                  className="ccc-arrow"
                  onClick={() => setCarouselIdx(i => Math.max(0, i - 1))}
                  disabled={carouselIdx === 0}
                  aria-label="Previous"
                >&#8249;</button>
                <button
                  className="ccc-arrow"
                  onClick={() => setCarouselIdx(i => Math.min(MAX_IDX, i + 1))}
                  disabled={carouselIdx === MAX_IDX}
                  aria-label="Next"
                >&#8250;</button>
              </div>

              {/* Carousel */}
              <div className="ccc-carousel">
                <div className="ccc-carousel__track-wrap">
                  <div
                    className="ccc-carousel__track"
                    style={{ transform: `translateX(${trackTranslate})` }}
                  >
                    {COURSES.map(c => (
                      <Link key={c.id} to={`/courses/${c.slug}`} className="ccc-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div className="ccc-card__inner">
                          <div className="ccc-card__img-wrap">
                            <img
                              src={c.img}
                              alt={c.title}
                              className="ccc-card__img"
                              loading="lazy"
                            />
                          </div>
                          <div className="ccc-card__body">
                            <span className="ccc-card__title">
                              {c.title}
                            </span>
                            <div className="ccc-card__rating-row">
                              <StarRating rating={c.rating} />
                              <span className="ccc-card__rating-val">{c.rating.toFixed(1)}/5</span>
                            </div>
                            <div className="ccc-card__btns">
                              <span className="ccc-card__enroll">
                                ENROLL
                              </span>
                              <button
                                className="ccc-card__share"
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

              <Link to="/course-listing" className="ccc-explore-btn">
                EXPLORE OUR COURSES
              </Link>
            </div>
          )}

          {/* ── TAB 1: TRAINING FEATURES ── */}
          {activeTab === 1 && (
            <div className="ccc-panel">
              <h3 className="ccc-panel__heading">Training Features</h3>
              <div className="ccc-features">
                {FEATURES.map(f => (
                  <div key={f.id} className="ccc-feat-card">
                    <div className="ccc-feat-card__icon-wrap">
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="ccc-feat-card__icon"
                        onError={e => { e.currentTarget.style.opacity = '0' }}
                      />
                    </div>
                    <div className="ccc-feat-card__title">{f.title}</div>
                    <p className="ccc-feat-card__desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 2: BATCH TIME TABLE ── */}
          {activeTab === 2 && (
            <div className="ccc-panel">
              <h3 className="ccc-panel__heading">Batch Time Table</h3>
              <div className="ccc-table-wrap">
                <table className="ccc-table">
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
                          <span className={`ccc-mode-badge ccc-mode-badge--${b.mode === 'Online' ? 'online' : 'offline'}`}>
                            {b.mode}
                          </span>
                        </td>
                        <td>{b.type}</td>
                        <td>
                          <button className="ccc-table__join" type="button">Click here</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ccc-batch-actions">
                <a href="tel:+17035651995" className="ccc-advisor-btn">
                  📞&nbsp;TALK TO ADVISOR &nbsp;+1-703-565-1995
                </a>
                <button className="ccc-enroll-btn" type="button">ENROLL NOW</button>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT 30% — STICKY ENQUIRY FORM ── */}
        <aside className="ccc-sidebar">
          <div className="ccc-form-card">

            <div className="ccc-form-card__header">
              <p className="ccc-form-card__tag">Top 5 Technologies to learn</p>
              <h3 className="ccc-form-card__heading">Register for the Course!</h3>
            </div>

            <div className="ccc-form-card__img-wrap">
              <img
                src="https://images.nareshit.com/images/image_1706090706296.jpg"
                alt="Enroll"
                className="ccc-form-card__top-img"
                onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
              />
            </div>

            <div className="ccc-form-card__body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="ccc-field">
                  <input
                    name="name" type="text" placeholder="Full Name"
                    value={formData.name} onChange={handleChange} required
                  />
                </div>
                <div className="ccc-field">
                  <input
                    name="email" type="email" placeholder="Email address"
                    value={formData.email} onChange={handleChange} required
                  />
                </div>
                <div className="ccc-field">
                  <input
                    name="mobile" type="tel" placeholder="Mobile Number"
                    value={formData.mobile} onChange={handleChange} required
                  />
                </div>
                <div className="ccc-field">
                  <select name="course" value={formData.course} onChange={handleChange} required>
                    <option value="">Select Course</option>
                    <option>Full Stack Data Science &amp; AI Certification</option>
                    <option>Generative AI &amp; Agentic AI with Python</option>
                    <option>Advanced Generative &amp; Agentic AI</option>
                    <option>MLOps &amp; AIOps</option>
                    <option>Terraform Associate Certification (003)</option>
                  </select>
                </div>
                <div className="ccc-field">
                  <select name="mode" value={formData.mode} onChange={handleChange} required>
                    <option value="">Mode of Training</option>
                    <option>Online</option>
                    <option>Classroom</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <label className="ccc-terms">
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
                  className={`ccc-submit${submitted ? ' ccc-submit--success' : ''}`}
                >
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
              </form>
              <p className="ccc-contact-line">
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

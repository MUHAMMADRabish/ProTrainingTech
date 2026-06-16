import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShareModal from '../components/ShareModal'
import './FullStackCourses.css'

/* ── DATA ─────────────────────────────────────────────────── */

const COURSES = [
  {
    id: 1,
    slug: 'full-stack-java-online-training',
    title: 'Full Stack Java',
    img: 'https://images.nareshit.com/Java.jpg',
    rating: 5.0,
  },
  {
    id: 2,
    slug: 'full-stack-python-online-training',
    title: 'Full Stack Python',
    img: 'https://images.nareshit.com/python.jpg',
    rating: 5.0,
  },
  {
    id: 3,
    slug: 'full-stack-software-testing-online-training',
    title: 'Full Stack Software Testing',
    img: 'https://images.nareshit.com/full_stack_software_testing_by_naresh_it.jpg',
    rating: 4.5,
  },
  {
    id: 4,
    slug: 'full-stack-data-science-ai-online-training',
    title: 'Full Stack Data Science & AI',
    img: 'https://images.nareshit.com/Data_Sci_(1).jpg',
    rating: 5.0,
  },
  {
    id: 5,
    slug: 'full-stack-dot-net-core-online-training',
    title: 'Full Stack .NET Core',
    img: 'https://images.nareshit.com/dot%20net.jpg',
    rating: 4.5,
  },
  {
    id: 6,
    slug: 'ui-full-stack-web-development-with-react-online-training',
    title: 'UI Full Stack Web with React',
    img: 'https://images.nareshit.com/web.jpg',
    rating: 4.5,
  },
]

const FEATURES = [
  {
    id: 1,
    title: 'Comprehensive Curriculum',
    desc: 'Master web development with full-stack coverage spanning front-end, back-end, and databases.',
    icon: 'https://images.nareshit.com/images/image_1705749354487.png',
  },
  {
    id: 2,
    title: 'Hands-On Projects',
    desc: 'Gain practical experience through real-world application development and live projects.',
    icon: 'https://images.nareshit.com/images/image_1705749593083.png',
  },
  {
    id: 3,
    title: 'Expert Instructors',
    desc: 'Learn from industry professionals providing specialized guidance and mentorship.',
    icon: 'https://images.nareshit.com/images/image_1705749708243.png',
  },
  {
    id: 4,
    title: 'Job Placement Assistance',
    desc: 'Career support with employer networking and job placement assistance programs.',
    icon: 'https://images.nareshit.com/images/image_1705749883357.png',
  },
  {
    id: 5,
    title: 'Certification upon Completion',
    desc: 'Receive an industry-recognized credential to validate your full stack skills.',
    icon: 'https://images.nareshit.com/images/image_1705750006471.png',
  },
  {
    id: 6,
    title: '24/7 Support',
    desc: 'Round-the-clock learning assistance and doubt-clearing sessions whenever you need help.',
    icon: 'https://images.nareshit.com/images/image_1705750113241.png',
  },
]

const BATCHES = [
  {
    course: 'Full Stack Java',
    faculty: 'Mr. Mahendra',
    date: '21 May',
    time: '9:00 AM IST',
    mode: 'Online',
    type: 'Online Training',
  },
  {
    course: 'Full Stack Java',
    faculty: 'Mr. Kishan B',
    date: '18 May',
    time: '7:15 AM IST',
    mode: 'Offline',
    type: 'Classroom',
  },
  {
    course: 'Full Stack Python',
    faculty: 'Mr. Shareef',
    date: '27 May',
    time: '6:00 PM IST',
    mode: 'Online',
    type: 'Online Training',
  },
  {
    course: 'Full Stack Software Testing',
    faculty: 'Real-Time Expert',
    date: '28 May',
    time: '9:00 AM IST',
    mode: 'Online',
    type: 'Online Training',
  },
  {
    course: 'Full Stack Data Science & AI',
    faculty: 'Mr. Omkar',
    date: '27 May',
    time: '8:00 AM IST',
    mode: 'Online',
    type: 'Online Training',
  },
  {
    course: 'Full Stack .NET Core',
    faculty: 'Mr. Bangar Raju',
    date: '25 May',
    time: '9:15 AM IST',
    mode: 'Online',
    type: 'Online Training',
  },
]

const TABS = ['Courses', 'Training Features', 'Certificate', 'Batch Time Table']

const VISIBLE = 4
const MAX_IDX = COURSES.length - VISIBLE

/* ── HELPERS ──────────────────────────────────────────────── */

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="fsc-card__stars">
      {'★'.repeat(full)}
      {half ? '½' : ''}
      {'☆'.repeat(empty)}
    </span>
  )
}

/* ── PAGE ─────────────────────────────────────────────────── */

export default function FullStackCourses() {
  const [activeTab, setActiveTab]     = useState(0)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [formData, setFormData]       = useState({
    name: '', email: '', mobile: '', course: '', mode: '', terms: false,
  })
  const [submitted,  setSubmitted]  = useState(false)
  const [shareModal, setShareModal] = useState(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  /* Track is 150% wide (6 cards); shifting by 1/6 of that = one card width */
  const trackTranslate = `-${carouselIdx * (100 / COURSES.length)}%`

  return (
    <div className="fsc-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="fsc-hero">
        <div className="fsc-hero__inner">
          <div className="fsc-hero__text">
            <h1 className="fsc-hero__heading">Full Stack Courses</h1>
            <p className="fsc-hero__sub">Master Full Stack Development with Ease</p>
          </div>
          <div className="fsc-hero__img-wrap">
            <img
              src="https://images.nareshit.com/images/image_1708755533965.jpg"
              alt="Full Stack Development"
              className="fsc-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN BODY: 70 / 30 ── */}
      <div className="fsc-body">

        {/* ── LEFT 70% ── */}
        <div className="fsc-content">

          {/* Tab bar */}
          <div className="fsc-tabs" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === i}
                className={`fsc-tab${activeTab === i ? ' fsc-tab--active' : ''}`}
                onClick={() => { setActiveTab(i); setCarouselIdx(0) }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── TAB 1: COURSES ── */}
          {activeTab === 0 && (
            <div className="fsc-panel">
              {/* Arrow row */}
              <div className="fsc-carousel__arrows">
                <button
                  className="fsc-arrow"
                  onClick={() => setCarouselIdx(i => Math.max(0, i - 1))}
                  disabled={carouselIdx === 0}
                  aria-label="Previous"
                >&#8249;</button>
                <button
                  className="fsc-arrow"
                  onClick={() => setCarouselIdx(i => Math.min(MAX_IDX, i + 1))}
                  disabled={carouselIdx === MAX_IDX}
                  aria-label="Next"
                >&#8250;</button>
              </div>

              {/* Carousel */}
              <div className="fsc-carousel">
                <div className="fsc-carousel__track-wrap">
                  <div
                    className="fsc-carousel__track"
                    style={{ transform: `translateX(${trackTranslate})` }}
                  >
                    {COURSES.map(c => (
                      <Link key={c.id} to={`/courses/${c.slug}`} className="fsc-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div className="fsc-card__inner">
                          <div className="fsc-card__img-wrap">
                            <img
                              src={c.img}
                              alt={c.title}
                              className="fsc-card__img"
                              loading="lazy"
                            />
                          </div>
                          <div className="fsc-card__body">
                            <span className="fsc-card__title">
                              {c.title}
                            </span>
                            <div className="fsc-card__rating-row">
                              <StarRating rating={c.rating} />
                              <span className="fsc-card__rating-val">{c.rating.toFixed(1)}/5</span>
                            </div>
                            <div className="fsc-card__btns">
                              <span className="fsc-card__enroll">
                                ENROLL
                              </span>
                              <button
                                className="fsc-card__share"
                                type="button"
                                onClick={e => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  setShareModal({ title: c.title, slug: c.slug })
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

              <Link to="/course-listing" className="fsc-explore-btn">
                EXPLORE OUR COURSES
              </Link>
            </div>
          )}

          {/* ── TAB 2: TRAINING FEATURES ── */}
          {activeTab === 1 && (
            <div className="fsc-panel">
              <h2 className="fsc-panel__heading">Training Features</h2>
              <div className="fsc-features">
                {FEATURES.map(f => (
                  <div key={f.id} className="fsc-feat-card">
                    <div className="fsc-feat-card__icon-wrap">
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="fsc-feat-card__icon"
                      />
                    </div>
                    <div className="fsc-feat-card__title">{f.title}</div>
                    <p className="fsc-feat-card__desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 3: CERTIFICATE ── */}
          {activeTab === 2 && (
            <div className="fsc-panel">
              <h2 className="fsc-panel__heading">Certificate</h2>
              <div className="fsc-cert">
                <img
                  src="https://images.nareshit.com/image-800x1000.jpg"
                  alt="Course Completion Certificate"
                  className="fsc-cert__img"
                />
                <a
                  href="tel:+17035651995"
                  className="fsc-cert__advisor"
                >
                  📞&nbsp;TALK TO ADVISOR &nbsp;+1-703-565-1995
                </a>
              </div>
            </div>
          )}

          {/* ── TAB 4: BATCH TIME TABLE ── */}
          {activeTab === 3 && (
            <div className="fsc-panel">
              <h2 className="fsc-panel__heading">Batch Time Table</h2>
              <div className="fsc-table-wrap">
                <table className="fsc-table">
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Faculty</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Mode of Training</th>
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
                          <span
                            className={`fsc-mode-badge fsc-mode-badge--${
                              b.mode === 'Online' ? 'online' : 'offline'
                            }`}
                          >
                            {b.mode}
                          </span>
                        </td>
                        <td>{b.type}</td>
                        <td>
                          <button className="fsc-table__join" type="button">
                            Click here
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="fsc-enroll-btn" type="button">ENROLL NOW</button>
            </div>
          )}
        </div>

        {/* ── RIGHT 30% — STICKY ENQUIRY FORM ── */}
        <aside className="fsc-sidebar">
          <div className="fsc-form-card">

            {/* Blue header */}
            <div className="fsc-form-card__header">
              <p className="fsc-form-card__tag">Top 5 Technologies</p>
              <h3 className="fsc-form-card__heading">Register for Course</h3>
            </div>

            {/* Woman-laptop illustration */}
            <div className="fsc-form-card__img-wrap">
              <img
                src="https://images.nareshit.com/images/image_1708755533965.jpg"
                alt="Enroll"
                className="fsc-form-card__top-img"
                onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
              />
            </div>

            {/* Form body */}
            <div className="fsc-form-card__body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="fsc-field">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="fsc-field">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="fsc-field">
                  <input
                    name="mobile"
                    type="tel"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="fsc-field">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Course</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Software Testing</option>
                    <option>Full Stack Data Science &amp; AI</option>
                    <option>Full Stack .NET Core</option>
                    <option>UI Full Stack Web with React</option>
                  </select>
                </div>
                <div className="fsc-field">
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Mode</option>
                    <option>Online</option>
                    <option>Classroom</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <label className="fsc-terms">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                  I agree to the{' '}
                  <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                  {' '}and{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </label>
                <button
                  type="submit"
                  className={`fsc-submit${submitted ? ' fsc-submit--success' : ''}`}
                >
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
              </form>

              <p className="fsc-contact-line">
                📞 <a href="tel:+17035651995">+1-703-565-1995</a>
              </p>
            </div>
          </div>
        </aside>
      </div>

      <Footer />

      {shareModal && (
        <ShareModal
          course={shareModal}
          onClose={() => setShareModal(null)}
        />
      )}
    </div>
  )
}

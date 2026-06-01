import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'NumPy',
    count: 13,
    topics: [
      'Introduction, Installation & pip Command Usage',
      'Import NumPy Package and Handling Module Errors',
      'Standard Alias Naming Conventions',
      'Array Creation and Manipulation Fundamentals',
      'Mathematical Operations on Arrays',
      'Indexing and Slicing Techniques',
      'NumPy Attributes Overview',
      'Essential Methods – min(), max(), sum(), reshape(), sort(), flatten()',
      'Adding Values to Arrays',
      'Matrix Diagonal and Trace Calculations',
      'Matrix Parsing, Addition, and Subtraction Operations',
      'Statistical Functions – mean(), median(), std(), sum(), min()',
      'Filtering Operations in NumPy',
    ],
  },
  {
    title: 'Pandas',
    count: 24,
    topics: [
      'Introduction and Fundamentals',
      'Pandas Import and Aliasing',
      'DataFrame Essentials',
      'Series Creation and Management',
      'Creating Series from Lists, Arrays, and DataFrame Columns',
      'Index Operations in Series',
      'Accessing Series Values',
      'NaN Value Handling',
      'Series Attributes – values, index, dtypes, size',
      'Series Methods – head(), tail(), sum(), count(), nunique()',
      'DataFrame Loading from Multiple File Formats',
      'DataFrame Attributes and Methods',
      'Column and Index Renaming',
      'Missing Value Handling Techniques',
      'iloc and loc Indexing',
      'DataFrame Filtering Operations',
      'Sorting and GroupBy Functionality',
      'Merging and Joining DataFrames',
      'Concatenation Operations',
      'Adding and Dropping Columns and Rows',
      'Date and Time Operations',
      'Concatenating Multiple CSV Files',
      'Inplace Parameter Usage',
      'Data Wrangling and Transformation',
    ],
  },
  {
    title: 'Matplotlib',
    count: 13,
    topics: [
      'Introduction and Pyplot Usage',
      'Figure and Axes Classes',
      'Setting Limits and Tick Labels',
      'Multiple Plot Creation',
      'Legend Implementation',
      'Line Graphs',
      'Bar Charts',
      'Histograms',
      'Scatter Plots',
      'Pie Charts',
      '3D Plotting',
      'Working with Images',
      'Plot Customization Techniques',
    ],
  },
]

const BATCHES = [
  { course: 'Numpy | Pandas | Matplotlib', faculty: 'Real-Time Expert', date: '01 Jun', time: '7:00 PM IST', mode: 'online', type: 'Online Training', link: 'Join' },
  { course: 'Numpy | Pandas | Matplotlib', faculty: 'Real-Time Expert', date: '15 Jun', time: '7:00 PM IST', mode: 'online', type: 'Online Training', link: 'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'Master NumPy arrays, Pandas DataFrames, and Matplotlib visualizations — the core Python data science stack.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Practice',             desc: 'Work with real-world datasets, perform data cleaning, aggregation, feature engineering, and build visualizations.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from data science professionals with hands-on experience in industry data pipelines and analytics.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Career guidance, resume building, and employer referrals for data analyst and data scientist roles.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised Pro Training Tech certificate validating your NumPy, Pandas, and Matplotlib skills.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock lab access, expert mentor sessions, and lifetime course material access.' },
]

const REVIEWS = [
  { name: 'Bhargavi',      course: 'Numpy | Pandas | Matplotlib', rating: 5, initials: 'BH', color: '#1565c0', text: 'The trainer explained every concept in an easy and beginner-friendly way. A great course for anyone starting out in data analysis and visualization.' },
  { name: 'Kiran Kumar',   course: 'Numpy | Pandas | Matplotlib', rating: 5, initials: 'KK', color: '#e05c2a', text: 'Very practical course. The Pandas module alone was worth the entire fee — merging, groupby, and handling missing data are things I now use every day at work.' },
  { name: 'Sowmya Reddy',  course: 'Numpy | Pandas | Matplotlib', rating: 5, initials: 'SR', color: '#2e7d32', text: 'Excellent depth on Matplotlib. Creating 3D plots and custom visualizations for my capstone data science project was made simple by this course. Highly recommend.' },
  { name: 'Arun Prakash',  course: 'Numpy | Pandas | Matplotlib', rating: 4, initials: 'AP', color: '#6a1b9a', text: 'Great starter course for the Python data science ecosystem. NumPy matrix operations and statistical functions are now second nature. Placement team was helpful.' },
]

const RELATED = [
  { title: 'Data Science with AI',                slug: 'data-science-online-training',                icon: '🧠' },
  { title: 'Data Analytics & Business Analytics', slug: 'data-analytics-online-training',              icon: '📈' },
  { title: 'Full Stack Python',                   slug: 'full-stack-python-online-training',           icon: '🐍' },
  { title: 'Full Stack Data Science & AI',        slug: 'full-stack-data-science-ai-online-training',  icon: '📊' },
  { title: 'MLOps & AIOps',                       slug: 'mlops-and-aiops-online-training',             icon: '⚙️' },
]

const MNC_LOGOS = [
  'https://images.nareshit.com/images/logo_1706095643303.png',
  'https://images.nareshit.com/images/logo_1706095633847.png',
  'https://images.nareshit.com/images/logo_1706095622079.png',
  'https://images.nareshit.com/images/logo_1706095609087.png',
  'https://images.nareshit.com/images/logo_1706095596384.png',
  'https://images.nareshit.com/images/logo_1706095585072.png',
  'https://images.nareshit.com/images/logo_1706095560202.png',
  'https://images.nareshit.com/images/logo_1706095549234.png',
  'https://images.nareshit.com/images/logo_1706095534994.png',
  'https://images.nareshit.com/images/logo_1706095506341.png',
  'https://images.nareshit.com/images/logo_1706095491707.png',
  'https://images.nareshit.com/images/logo_1706095288391.png',
  'https://images.nareshit.com/images/logo_1706095273280.png',
  'https://images.nareshit.com/images/logo_1706095262264.png',
  'https://images.nareshit.com/images/logo_1706095252569.png',
  'https://images.nareshit.com/images/logo_1706095241345.png',
  'https://images.nareshit.com/images/logo_1706095167525.png',
  'https://images.nareshit.com/images/logo_1706095110331.png',
]

const LOGOS_PER_PAGE = 10

const TABS = [
  { id: 'overview',          label: 'Overview'          },
  { id: 'curriculum',        label: 'Curriculum'        },
  { id: 'certificate',       label: 'Certificate'       },
  { id: 'upcoming-batches',  label: 'Upcoming Batches'  },
  { id: 'training-features', label: 'Training Features' },
  { id: 'reviews',           label: 'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function NumpyPandasDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 7:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name: '', email: '', mobile: '', course: 'Numpy | Pandas | Matplotlib', mode: 'Online' })
  const [submitted,    setSubmitted]    = useState(false)
  const [logoPage,     setLogoPage]     = useState(0)
  const totalLogoPages = Math.ceil(MNC_LOGOS.length / LOGOS_PER_PAGE)

  const headerRef = useRef(null)
  const tabsRef   = useRef(null)
  const [sticky,  setSticky] = useState(false)

  useEffect(() => {
    const NAVBAR_H = 64
    const onScroll = () => {
      if (!headerRef.current) return
      setSticky(headerRef.current.getBoundingClientRect().bottom <= NAVBAR_H)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSection    = (i) => setOpenSections(p => ({ ...p, [i]: !p[i] }))
  const handleFormChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  const scrollToTab = (id) => {
    setActiveTab(id)
    if (headerRef.current) {
      const target = headerRef.current.offsetTop + headerRef.current.offsetHeight - 64
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }

  return (
    <div className="fsj-page">
      <Navbar />

      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link>
            <span>›</span>
            <Link to="/courses">Data Science</Link>
            <span>›</span>
            <span>Numpy | Pandas | Matplotlib</span>
          </nav>
        </div>
      </div>

      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/numpy-pandas-matplotlib-online-training.jpg"
            alt="Numpy Pandas Matplotlib Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Numpy | Pandas | Matplotlib</h1>
              <p className="fsj-banner__sub">Python for Data Science – Arrays · DataFrames · Visualization · Data Cleaning</p>
            </div>
          </div>
        </div>

        <div className="fsj-controls-wrap">
          <div className="fsj-container">
            <div className="fsj-controls">
              <div className="fsj-controls__left">
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Training Type</label>
                  <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}>
                    <option>Online Training</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Real-Time Expert</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 7:00 PM IST</option>
                    <option>15 Jun - 7:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>45 Days</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>10000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a href="/curriculum/numpy-pandas-matplotlib-curriculum.pdf" className="fsj-btn fsj-btn--outline" onClick={e => e.preventDefault()}>
                  ↓ Download Curriculum
                </a>
                <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                  Enroll Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} ref={tabsRef} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button key={tab.id} role="tab" aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fsj-container">
        <div className="fsj-layout">
          <main className="fsj-content">

            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  This hands-on programme teaches learners to manipulate large datasets using NumPy arrays,
                  streamline data analysis with Pandas DataFrames, and create compelling visualizations
                  through Matplotlib. Participants gain practical skills in data cleaning, aggregation,
                  and feature engineering directly applicable to professional data science work.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  Starting with NumPy fundamentals — array creation, mathematical operations, indexing,
                  slicing, and statistical functions — the course progresses to Pandas for loading,
                  filtering, grouping, merging, and reshaping datasets from multiple file formats.
                </p>
                <p className="fsj-para">
                  The Matplotlib module covers the full visualization spectrum: line graphs, bar charts,
                  histograms, scatter plots, pie charts, and 3D plots with complete customization control —
                  giving learners the skills to present data insights clearly and professionally.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Master NumPy arrays and their data science applications</li>
                  <li>Develop data manipulation proficiency using Pandas DataFrames and Series</li>
                  <li>Build essential visualization skills with Matplotlib across multiple chart types</li>
                  <li>Execute data cleaning, aggregation, and feature engineering on real datasets</li>
                  <li>Work effectively with CSV, Excel, and other file formats in Pandas</li>
                  <li>Apply GroupBy, merge, join, and concatenation operations for data analysis</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic Python programming knowledge</li>
                  <li>Familiarity with mathematics fundamentals (recommended, not mandatory)</li>
                  <li>Interest in data analysis and visualization</li>
                </ul>

                <button className="fsj-btn fsj-btn--primary fsj-enroll-now" onClick={() => scrollToTab('upcoming-batches')}>
                  Enroll Now
                </button>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Curriculum</h2>
                <div className="fsj-accordion">
                  {CURRICULUM.map((sec, i) => (
                    <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                      <button className="fsj-acc__head" onClick={() => toggleSection(i)} aria-expanded={!!openSections[i]}>
                        <span className="fsj-acc__title">{sec.title}</span>
                        <div className="fsj-acc__right">
                          <span className="fsj-acc__count">{sec.count} Topics</span>
                          <span className="fsj-acc__chevron">{openSections[i] ? '▲' : '▼'}</span>
                        </div>
                      </button>
                      {openSections[i] && (
                        <div className="fsj-acc__body">
                          <div className="fsj-topics-grid">
                            {sec.topics.map((t, j) => (
                              <div key={j} className="fsj-topic-item">
                                <span className="fsj-topic-num">{String(j + 1).padStart(2, '0')}.</span>
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Apply Now</button>
                </div>
              </div>
            )}

            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the Numpy | Pandas | Matplotlib course, you will receive
                  an industry-recognised certificate from Pro Training Tech validating your expertise in
                  Python data manipulation, analysis, and visualization.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Numpy Pandas Matplotlib Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Numpy | Pandas | Matplotlib</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline" onClick={() => {}}>Drop a Query</button>
                </div>
              </div>
            )}

            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead>
                      <tr><th>Course</th><th>Faculty</th><th>Date</th><th>Time</th><th>Mode</th><th>Batch Type</th><th>Meeting Link</th></tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td><td>{b.date}</td><td>{b.time}</td>
                          <td><span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>{b.mode}</span></td>
                          <td>{b.type}</td>
                          <td><button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>{b.link}</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'training-features' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Training Features</h2>
                <div className="fsj-features-grid">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="fsj-feature-card" style={{ '--feat-color': f.color, '--feat-bg': f.bg }}>
                      <div className="fsj-feature-card__icon-wrap" style={{ background: f.bg }}>
                        <f.Icon width={40} height={40} color={f.color} strokeWidth={1.5} />
                      </div>
                      <h3 className="fsj-feature-card__title">{f.title}</h3>
                      <p className="fsj-feature-card__desc">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Student Reviews</h2>
                <div className="fsj-reviews-grid">
                  {REVIEWS.map((r, i) => (
                    <div key={i} className="fsj-review-card">
                      <div className="fsj-review-card__top">
                        <div className="fsj-rev-avatar" style={{ background: r.color }}>{r.initials}</div>
                        <div>
                          <div className="fsj-rev-name">{r.name}</div>
                          <div className="fsj-rev-course">{r.course}</div>
                        </div>
                      </div>
                      <div className="fsj-rev-stars">
                        {Array.from({ length: 5 }, (_, j) => (
                          <span key={j} className={j < r.rating ? 'fsj-star--on' : 'fsj-star--off'}>★</span>
                        ))}
                      </div>
                      <p className="fsj-rev-text">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          <aside className="fsj-sidebar">
            <a href="tel:+17035651995" className="fsj-advisor-btn">
              <span className="fsj-advisor-btn__icon">📞</span>
              +1-703-565-1995
            </a>
            <div className="fsj-enquiry-card">
              <div className="fsj-enquiry-card__top">
                <p className="fsj-enquiry-card__tag">Top 5 Technologies to learn</p>
                <h3 className="fsj-enquiry-card__title">Register for the Course!</h3>
              </div>
              <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
                <div className="fsj-form-field">
                  <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Numpy | Pandas | Matplotlib</option>
                    <option>Data Science with AI</option>
                    <option>Data Analytics &amp; Business Analytics</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Data Science &amp; AI</option>
                    <option>MLOps &amp; AIOps</option>
                  </select>
                </div>
                <div className="fsj-form-field">
                  <select name="mode" value={formData.mode} onChange={handleFormChange}>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Live Online</option>
                  </select>
                </div>
                <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
                <p className="fsj-form-terms">
                  By submitting you agree to our{' '}
                  <Link to="/terms-conditions">Terms of Use</Link> &amp;{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </aside>
        </div>
      </div>

      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">
              Average package of course <strong>(Numpy | Pandas | Matplotlib)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">4L</span>
                <span className="fsj-salary-stat__lbl">Avg Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button className="fsj-logo-arrow fsj-logo-arrow--left" aria-label="Previous logos"
              disabled={logoPage === 0} onClick={() => setLogoPage(p => Math.max(0, p - 1))}>&#8592;</button>
            <div className="fsj-logo-grid-wrap">
              <div className="fsj-logo-grid" style={{ transform: `translateX(-${logoPage * 100}%)` }}>
                {Array.from({ length: totalLogoPages }, (_, page) => (
                  <div key={page} className="fsj-logo-page">
                    {MNC_LOGOS.slice(page * LOGOS_PER_PAGE, page * LOGOS_PER_PAGE + LOGOS_PER_PAGE).map((src, i) => (
                      <div key={i} className="fsj-logo-card">
                        <img src={src} alt={`Company logo ${page * LOGOS_PER_PAGE + i + 1}`} className="fsj-logo-card__img" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button className="fsj-logo-arrow fsj-logo-arrow--right" aria-label="Next logos"
              disabled={logoPage >= totalLogoPages - 1} onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}>&#8594;</button>
          </div>
        </div>
      </section>

      <section className="fsj-related-section">
        <div className="fsj-container">
          <h2 className="fsj-related-title">Our Relevant Courses list</h2>
          <div className="fsj-related-grid">
            {RELATED.map((rc, i) => (
              <Link key={i} to={`/courses/${rc.slug}`} className="fsj-related-card">
                <div className="fsj-related-card__icon">{rc.icon}</div>
                <div className="fsj-related-card__title">{rc.title}</div>
                <div className="fsj-related-card__arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

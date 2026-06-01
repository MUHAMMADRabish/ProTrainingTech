import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Excel – Basic to Advanced',
    count: 16,
    topics: [
      'Introduction to Microsoft Excel','Installing Excel (Windows & Mac)',
      'Getting Familiar with Excel Interface','Introduction to Tables',
      'Inputting Data into Cells','Introduction to Formulas',
      'Formula Behaviour & Absolute References','Built-in Functions',
      'Combining Data from Two Tables','Pivot Tables',
      'Nested IF Statements','VBA to Automate Tasks',
      'Custom Functions','Data Validation',
      'Conditional Formatting','Charts & Dashboards in Excel',
    ]
  },
  {
    title: 'Statistics – Descriptive & Inferential',
    count: 22,
    topics: [
      'Types of Data & Collection of Data','Population & Sample',
      'Sampling Techniques','Measures of Central Tendency (Mean, Median, Mode)',
      'Measures of Spread (Range, Variance, Std Dev)','Measures of Shape (Skewness, Kurtosis)',
      'Percentiles, Quartiles & IQR','Outliers Detection & Treatment',
      'Correlation & Covariance','Probability Basics',
      'Probability Distributions','Standard Error',
      'Central Limit Theorem','Confidence Intervals',
      'Hypothesis Testing – Null & Alternate Hypothesis','Type-I & Type-II Errors',
      'P-Value & Significance Level','Left / Right / Two-Tail Tests',
      '1-Sample Test (Z-test & T-test)','2-Sample Test (Independent & Paired)',
      'ANOVA Test','Chi-Square Test',
    ]
  },
  {
    title: 'Python – Core Programming',
    count: 14,
    topics: [
      'Introduction to Python & Installation','Variables, Input & Output',
      'Data Types in Python','Data Structures (List, Tuple, Set, Dict)',
      'Operators in Python','Condition Statements (if, elif, else)',
      'Loops (while, for, for...in)','Functions – Definition & Calling',
      'Advanced Functions (Lambda, Map, Filter, Reduce)','File Handling',
      'Errors & Exceptions','Exception Handling (try, except, finally)',
      'Modules & Packages','List & Dictionary Comprehensions',
    ]
  },
  {
    title: 'NumPy',
    count: 10,
    topics: [
      'Introduction to NumPy','NumPy Array Attributes',
      'Array Creation','Indexing & Slicing',
      'Iteration over an Array','Array Manipulation (reshape, flatten, transpose)',
      'Mathematical Operators','Relational Operators',
      'NumPy Statistical Functions (mean, median, std, sum)',
      'Broadcasting',
    ]
  },
  {
    title: 'Pandas',
    count: 18,
    topics: [
      'Introduction to Pandas','Series & DataFrame Fundamentals',
      'Creating DataFrames','Column Selection, Addition & Deletion',
      'Row Selection, Addition & Deletion','Merging & Concatenation',
      'Importing Data from Various Sources (CSV, Excel, SQL, JSON)','Basic Dataset Insights',
      'Summarising Data','Sorting',
      'Discretization & Binning','Indexing & Selecting Data (iLoc, Loc)',
      'Filtering Data','GroupBy Operations',
      'Exporting Data','Statistical Functions',
      'Handling Missing Values (NaN)','Date & Time Operations',
    ]
  },
  {
    title: 'Exploratory Data Analysis (EDA)',
    count: 18,
    topics: [
      'Univariate Analysis','Bivariate Analysis',
      'Multivariate Analysis','Data Cleaning – Wrong Data & Wrong Data Types',
      'Treating Duplicates','Dealing with Missing Values',
      'Handling Outliers','Dropping Unnecessary Columns',
      'Matplotlib – Histogram','Matplotlib – Box Plot',
      'Matplotlib – Scatter Plot, Line Plot','Matplotlib – Pie Chart, Bar Chart, Subplots',
      'Seaborn – Bar Plot & Count Plot','Seaborn – Box Plot & Violin Plot',
      'Seaborn – Scatter Plot & Regression Plot','Seaborn – Pair Plot & Heatmap',
      'Seaborn – Line Plot','EDA Capstone Project',
    ]
  },
  {
    title: 'SQL – Basic to Advanced',
    count: 22,
    topics: [
      'Introduction to Databases & Spreadsheets','DBMS vs RDBMS & SQL vs NoSQL',
      'MySQL Installation & Data Types in SQL','Primary Key & Foreign Key',
      'Constraints (Unique, NOT NULL, Check, Default)','CRUD Operations',
      'SQL Languages (DDL, DML, DQL, DCL, TCL)','SQL Commands (CREATE, INSERT, ALTER, UPDATE, DELETE)',
      'SELECT Statement','SQL Clauses (WHERE, GROUP BY, HAVING, ORDER BY, LIMIT)',
      'Operators (Comparison, Logical, Membership)','Wildcards & LIKE Operator',
      'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)','SQL Joins (Inner, Left, Right, Self, Cross)',
      'Normalization & De-Normalization','SQL Functions (String, Date, Number)',
      'Subqueries & Nested Queries','Common Table Expressions (CTE)',
      'Views','Stored Procedures',
      'Window Functions','Indexes & Query Optimisation',
    ]
  },
  {
    title: 'Power BI',
    count: 16,
    topics: [
      'Introduction to Power BI','Connectivity Modes (Import, DirectQuery, Live)',
      'Power BI Desktop Interface','Data Transformation with Power Query',
      'Data Visualisation – Chart Types','Building Interactive Dashboards',
      'Introduction to DAX','Data Types in DAX',
      'DAX Calculation Types','Creating Calculated Columns',
      'Measures in DAX','DAX Syntax Rules',
      'DAX Functions (CALCULATE, FILTER, ALL, RELATED)','DAX Operators',
      'DAX Tables and Filtering','Publishing & Sharing Reports',
    ]
  },
  {
    title: 'Tableau',
    count: 18,
    topics: [
      'Introduction to Tableau','Data Connections',
      'Visual Analytics Fundamentals','Basic Charts (Bar, Line, Pie, Scatter)',
      'Sorting & Filtering','Grouping & Sets',
      'Built-in Functions (Number, String, Date, Logical, Aggregate)',
      'Operators & Syntax Conventions','Table Calculations',
      'Types of Calculations','Trend Lines',
      'Reference Lines','Forecasting',
      'Advanced Plots (Treemap, Bullet, Gantt, Waterfall)','Dashboard Design',
      'Story Points','Parameters',
      'Publishing to Tableau Public / Server',
    ]
  },
]

const BATCHES = [
  { course:'Data Analytics', faculty:'Mr. Nikhil',         date:'01 Jun', time:'5:00 PM IST',  mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Data Analytics', faculty:'Mr. Nikhil',         date:'01 Jun', time:'5:00 PM IST',  mode:'offline', type:'Classroom Training', link:'Join' },
  { course:'Data Analytics', faculty:'Mr. Rahul (AI/ML)',  date:'01 Jun', time:'7:30 PM IST',  mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Data Analytics', faculty:'Mr. Rahul (AI/ML)',  date:'01 Jun', time:'7:30 PM IST',  mode:'offline', type:'KPHB',               link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'Excel to Advanced SQL, Python for Data Science, Power BI, Tableau and full EDA workflows.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: '4 resume-ready projects applying analytics to real-world business datasets.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from experienced analysts including AI/ML-focused mentors with live project background.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Placement support, mock interviews, resume prep, interview Q&A bank (300+ questions).' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Microsoft Certification Prep',  desc: 'Course aligns with Microsoft Data Analyst certification with 300+ sample certification questions.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Lifetime material access, daily tasks, weekly mock tests, and round-the-clock learning support.' },
]

const REVIEWS = [
  { name:'Ranjith Babu',   course:'Data Analytics & Business Analytics', rating:5, initials:'RB', color:'#1565c0', text:'The Data Analytics course at Pro Training Tech is outstanding. Mr. Nikhil and Mr. Rahul together cover everything — Excel, SQL, Python, Power BI and Tableau. I transitioned from a BPO role to a business analyst position at an MNC.' },
  { name:'Kavya Sharma',   course:'Data Analytics & Business Analytics', rating:5, initials:'KS', color:'#e05c2a', text:'Excellent course with real-world project focus. The Power BI DAX and Tableau advanced features are covered in depth. 300+ interview questions in the material gave me a huge edge. Highly recommend for aspiring analysts.' },
  { name:'Sundar Rao',     course:'Data Analytics & Business Analytics', rating:5, initials:'SR', color:'#2e7d32', text:'Best analytics course I have attended. The statistics + Python + SQL combination is exactly what data analyst interviews test. Mr. Rahul\'s AI/ML sessions were an excellent bonus. Placed at a fintech company within the programme.' },
  { name:'Lavanya Nair',   course:'Data Analytics & Business Analytics', rating:4, initials:'LN', color:'#6a1b9a', text:'Very well-structured 4-month programme. The Tableau section is thorough and the Power BI dashboarding module gave me a skill that directly impressed hiring managers. Weekly mock tests kept me on track throughout.' },
]

const RELATED = [
  { title:'Full Stack Data Science & AI', slug:'full-stack-data-science-ai-online-training', icon:'📊' },
  { title:'Data Science with AI',         slug:'data-science-online-training',               icon:'🤖' },
  { title:'Full Stack Python',            slug:'full-stack-python-online-training',           icon:'🐍' },
  { title:'Full Stack Software Testing',  slug:'full-stack-software-testing-online-training', icon:'🧪' },
  { title:'Full Stack Java',              slug:'full-stack-java-online-training',             icon:'☕' },
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
  { id:'overview',          label:'Overview'          },
  { id:'curriculum',        label:'Curriculum'        },
  { id:'certificate',       label:'Certificate'       },
  { id:'upcoming-batches',  label:'Upcoming Batches'  },
  { id:'training-features', label:'Training Features' },
  { id:'reviews',           label:'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function DataAnalyticsDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Mr. Nikhil')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 5:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Data Analytics & Business Analytics', mode:'Online' })
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

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link>
            <span>›</span>
            <Link to="/courses">Data Science</Link>
            <span>›</span>
            <span>Data Analytics &amp; Business Analytics</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/images/banner_image_1712229081099"
            alt="Data Analytics & Business Analytics Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Data Analytics &amp; Business Analytics Online Training</h1>
              <p className="fsj-banner__sub">Excel · Statistics · Python · SQL · Power BI · Tableau · EDA</p>
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
                    <option>Classroom Training</option>
                    <option>KPHB</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Mr. Nikhil</option>
                    <option>Mr. Rahul (AI/ML)</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 5:00 PM IST</option>
                    <option>01 Jun - 7:30 PM IST</option>
                    <option>15 Jun - 5:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>4 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>20000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  href="/curriculum/data-analytics-curriculum.pdf"
                  className="fsj-btn fsj-btn--outline"
                  onClick={e => e.preventDefault()}
                >
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

      {/* ── Tabs Bar ───────────────────────────────────────────────────────── */}
      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} ref={tabsRef} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ────────────────────────────────────────────────────── */}
      <div className="fsj-container">
        <div className="fsj-layout">

          <main className="fsj-content">

            {/* ── OVERVIEW ─────────────────────────────────────────────── */}
            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  The Data Analytics &amp; Business Analytics programme equips participants with the
                  essential skills and knowledge needed to analyse and interpret data effectively. It
                  encompasses techniques and tools for extracting valuable insights from datasets to
                  enable informed decision-making across various domains.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  Participants learn key concepts including data exploration, statistical analysis,
                  and data visualisation. The curriculum emphasises practical applications of analytics
                  tools — Excel, Python (Pandas, NumPy), SQL, Power BI, and Tableau — allowing
                  hands-on experience extracting meaningful patterns from diverse datasets.
                </p>
                <p className="fsj-para">
                  The programme includes 4 resume-based projects, weekly mock interview tests,
                  300+ certification sample questions aligned with the Microsoft Data Analyst
                  certification, and 300+ interview Q&amp;A — making it one of the most
                  career-focused analytics courses available.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Introduce fundamental data science concepts, data types, EDA and statistical measures</li>
                  <li>Teach techniques for exploring and cleaning datasets for quality and reliability</li>
                  <li>Provide understanding of statistical methods for drawing inferences from data</li>
                  <li>Explore data visualisation principles with Matplotlib, Seaborn, Power BI and Tableau</li>
                  <li>Familiarise participants with Python libraries (Pandas, NumPy) and SQL for analysis</li>
                  <li>Apply analytics techniques to real-world business scenarios</li>
                  <li>Develop skills in interpreting and communicating analytical findings effectively</li>
                  <li>Prepare for Microsoft Data Analyst certification</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic understanding of data and its importance</li>
                  <li>Familiarity with spreadsheet applications (Excel, Google Sheets)</li>
                  <li>Knowledge of basic statistical concepts (mean, median, standard deviation)</li>
                  <li>Understanding of data visualisation principles</li>
                  <li>No prior Python or SQL experience required</li>
                </ul>

                <button
                  className="fsj-btn fsj-btn--primary fsj-enroll-now"
                  onClick={() => scrollToTab('upcoming-batches')}
                >
                  Enroll Now
                </button>
              </div>
            )}

            {/* ── CURRICULUM ───────────────────────────────────────────── */}
            {activeTab === 'curriculum' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Curriculum</h2>
                <div className="fsj-accordion">
                  {CURRICULUM.map((sec, i) => (
                    <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                      <button
                        className="fsj-acc__head"
                        onClick={() => toggleSection(i)}
                        aria-expanded={!!openSections[i]}
                      >
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
                <div style={{ textAlign:'center', marginTop:'2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                    Apply Now
                  </button>
                </div>
              </div>
            )}

            {/* ── CERTIFICATE ──────────────────────────────────────────── */}
            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the Data Analytics &amp; Business Analytics course,
                  you will receive an industry-recognised certificate from Pro Training Tech. The
                  course also prepares you for the <strong>Microsoft Data Analyst Certification</strong> with
                  300+ sample certification questions included in the programme.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Data Analytics & Business Analytics Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Data Analytics &amp; Business Analytics</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign:'center', marginTop:'1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline" onClick={() => {}}>
                    Drop a Query
                  </button>
                </div>
              </div>
            )}

            {/* ── UPCOMING BATCHES ─────────────────────────────────────── */}
            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead>
                      <tr>
                        <th>Course</th>
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
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td>
                          <td>{b.date}</td>
                          <td>{b.time}</td>
                          <td>
                            <span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>
                              {b.mode}
                            </span>
                          </td>
                          <td>{b.type}</td>
                          <td>
                            <button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>
                              {b.link}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── TRAINING FEATURES ────────────────────────────────────── */}
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

            {/* ── REVIEWS ──────────────────────────────────────────────── */}
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

          {/* Sidebar */}
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
                  <input type="text" name="name" placeholder="Full Name *" required
                    value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="email" name="email" placeholder="Email Address *" required
                    value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" required
                    value={formData.mobile} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Data Analytics & Business Analytics</option>
                    <option>Full Stack Data Science & AI</option>
                    <option>Data Science with AI</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Software Testing</option>
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

      {/* ── Salary Stats Bar ───────────────────────────────────────────────── */}
      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">
              Average package of course <strong>(Data Analytics &amp; Business Analytics)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">4–8L</span>
                <span className="fsj-salary-stat__lbl">Avg Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MNC Logos Carousel ─────────────────────────────────────────────── */}
      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button
              className="fsj-logo-arrow fsj-logo-arrow--left"
              aria-label="Previous logos"
              disabled={logoPage === 0}
              onClick={() => setLogoPage(p => Math.max(0, p - 1))}
            >
              &#8592;
            </button>
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
            <button
              className="fsj-logo-arrow fsj-logo-arrow--right"
              aria-label="Next logos"
              disabled={logoPage >= totalLogoPages - 1}
              onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* ── Related Courses ────────────────────────────────────────────────── */}
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

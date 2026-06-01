import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

const CURRICULUM = [
  {
    title: 'Aptitude & Analytical Skills',
    count: 6,
    topics: ['Quantitative Aptitude','Logical Reasoning','Verbal Ability','Data Interpretation','Analytical Problem Solving','Mock Aptitude Tests'],
  },
  {
    title: 'Technical Foundation',
    count: 10,
    topics: ['Python Programming Basics','Variables & Data Types','Control Flow & Functions','OOP in Python','SQL for Data Science','Statistics Fundamentals','Data Preprocessing','Feature Engineering','NumPy & Pandas','Data Visualisation'],
  },
  {
    title: 'Machine Learning & AI',
    count: 10,
    topics: ['Supervised Learning','Unsupervised Learning','Model Evaluation','Ensemble Methods','Decision Trees & Random Forests','Support Vector Machines','Clustering Algorithms','Dimensionality Reduction','AI Concepts','MLOps Basics'],
  },
  {
    title: 'Natural Language Processing',
    count: 8,
    topics: ['Text Preprocessing','Tokenisation','TF-IDF','Bag of Words','Sentiment Analysis','Named Entity Recognition','Transformers (BERT)','NLP Project'],
  },
  {
    title: 'Generative AI',
    count: 6,
    topics: ['GenAI Concepts','Large Language Models','Prompt Engineering','Chatbot Building','LangChain Basics','AI Virtual Lab Projects'],
  },
  {
    title: 'Soft Skills & Communication',
    count: 7,
    topics: ['Professional Presentation','Email Writing','Resume Optimisation','LinkedIn Profile Building','Group Discussions','Mock Interviews (HR)','Mock Interviews (Technical)'],
  },
  {
    title: 'Interview Readiness & Portfolio',
    count: 7,
    topics: ['End-to-End ML Projects','GitHub Setup & Portfolio','Behavioural Interview Questions','Data Science Case Studies','Capstone Project','Code Review Practice','Final Project Presentation'],
  },
]

const BATCHES = [
  { course:'Data Science Internship', faculty:'Real-Time Expert', date:'Jun 2026', time:'Flexible', mode:'online',  type:'Online',   link:'Join' },
  { course:'Data Science Internship', faculty:'Real-Time Expert', date:'Jun 2026', time:'Flexible', mode:'offline', type:'Offline',  link:'Join' },
]

const FEATURES = [
  { Icon: Briefcase,     color:'#9333ea', bg:'#f3e8ff', title:'Varied Internship Opportunities', desc:'Collaboration with leading industry partners for real-world data science experience.' },
  { Icon: BookOpen,      color:'#1565c0', bg:'#dbeafe', title:'Industry-Aligned Skill Development',desc:'Job-ready skills meeting current industry requirements across Python, ML, and NLP.' },
  { Icon: GraduationCap, color:'#16a34a', bg:'#dcfce7', title:'Flexible Duration',               desc:'45-day structured program that accommodates academic and professional schedules.' },
  { Icon: Award,         color:'#dc2626', bg:'#fee2e2', title:'Internship Certification',         desc:'Validates practical data science experience upon successful program completion.' },
  { Icon: Headphones,    color:'#0891b2', bg:'#cffafe', title:'24/7 Support',                    desc:'Round-the-clock guidance, doubt-clearing, and mentor assistance throughout the internship.' },
  { Icon: Code2,         color:'#e05c2a', bg:'#ffedd5', title:'Remote & Flexible Options',       desc:'Location-flexible remote internship opportunities with AI Virtual Lab access.' },
]

const REVIEWS = [
  { name:'Ishaan Kapoor',   course:'Data Science Internship', rating:5, initials:'IK', color:'#1565c0', text:'The AI Virtual Lab was a game changer. Working on real ML and NLP projects gave me the portfolio I needed to land my first data science role at a startup.' },
  { name:'Riya Sharma',     course:'Data Science Internship', rating:5, initials:'RS', color:'#9333ea', text:'The capstone project and GenAI modules were outstanding. The weekly milestones kept me focused and the mentor support was always available when I got stuck.' },
  { name:'Aditya Kumar',    course:'Data Science Internship', rating:5, initials:'AK', color:'#2e7d32', text:'Best data science internship available. The curriculum from Python basics to transformers is perfectly structured. The soft skills section was an excellent bonus.' },
  { name:'Nandini Reddy',   course:'Data Science Internship', rating:4, initials:'NR', color:'#e05c2a', text:'Great program with a strong focus on practical skills. The NLP and Generative AI sections are cutting-edge and directly relevant to what companies are hiring for today.' },
]

const RELATED = [
  { title:'Full Stack Data Science & AI',  slug:'full-stack-data-science-ai-online-training',    icon:'📊' },
  { title:'Python Internship',             slug:'internship-program-on-python',                  icon:'🐍' },
  { title:'DevOps Internship',             slug:'internship-program-on-devops-with-cloud',       icon:'⚙️' },
  { title:'Generative AI & Agentic AI',    slug:'generative-ai-online-training',                 icon:'🤖' },
  { title:'Full Stack Python',             slug:'full-stack-python-online-training',             icon:'🐍' },
]

const MNC_LOGOS = [
  'https://images.nareshit.com/images/logo_1706095643303.png','https://images.nareshit.com/images/logo_1706095633847.png',
  'https://images.nareshit.com/images/logo_1706095622079.png','https://images.nareshit.com/images/logo_1706095609087.png',
  'https://images.nareshit.com/images/logo_1706095596384.png','https://images.nareshit.com/images/logo_1706095585072.png',
  'https://images.nareshit.com/images/logo_1706095560202.png','https://images.nareshit.com/images/logo_1706095549234.png',
  'https://images.nareshit.com/images/logo_1706095534994.png','https://images.nareshit.com/images/logo_1706095506341.png',
  'https://images.nareshit.com/images/logo_1706095491707.png','https://images.nareshit.com/images/logo_1706095288391.png',
  'https://images.nareshit.com/images/logo_1706095273280.png','https://images.nareshit.com/images/logo_1706095262264.png',
  'https://images.nareshit.com/images/logo_1706095252569.png','https://images.nareshit.com/images/logo_1706095241345.png',
  'https://images.nareshit.com/images/logo_1706095167525.png','https://images.nareshit.com/images/logo_1706095110331.png',
]
const LOGOS_PER_PAGE = 10
const TABS = [
  { id:'overview', label:'Overview' }, { id:'curriculum', label:'Curriculum' }, { id:'certificate', label:'Certificate' },
  { id:'upcoming-batches', label:'Upcoming Batches' }, { id:'training-features', label:'Training Features' }, { id:'reviews', label:'Reviews' },
]

export default function DataScienceInternshipDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Data Science Internship', mode:'Online' })
  const [submitted,    setSubmitted]    = useState(false)
  const [logoPage,     setLogoPage]     = useState(0)
  const totalLogoPages = Math.ceil(MNC_LOGOS.length / LOGOS_PER_PAGE)
  const headerRef = useRef(null)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => { if (!headerRef.current) return; setSticky(headerRef.current.getBoundingClientRect().bottom <= 64) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSection = i => setOpenSections(p => ({ ...p, [i]: !p[i] }))
  const handleFormChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFormSubmit = e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000) }
  const scrollToTab = id => { setActiveTab(id); if (headerRef.current) window.scrollTo({ top: headerRef.current.offsetTop + headerRef.current.offsetHeight - 64, behavior: 'smooth' }) }

  return (
    <div className="fsj-page">
      <Navbar />

      <div className="fsj-breadcrumb-bar"><div className="fsj-container">
        <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
          <Link to="/course-listing">Courses</Link><span>›</span>
          <Link to="/internships">Internships</Link><span>›</span>
          <span>Data Science Internship Program</span>
        </nav>
      </div></div>

      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img src="https://images.nareshit.com/internship-on-data-scince-online-training.jpg"
            alt="Internship Program on Data Science" className="fsj-banner__img"
            onError={e => { e.target.style.display='none'; e.target.parentElement.classList.add('fsj-banner--fallback') }} />
          <div className="fsj-banner__overlay"><div className="fsj-container">
            <h1 className="fsj-banner__title">Internship Program on Data Science</h1>
            <p className="fsj-banner__sub">Learn & Work on Real Projects — Python, Machine Learning & NLP with AI Virtual Lab</p>
          </div></div>
        </div>
        <div className="fsj-controls-wrap"><div className="fsj-container"><div className="fsj-controls">
          <div className="fsj-controls__left">
            <div className="fsj-select-group"><label className="fsj-select-label">Training Mode</label>
              <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}><option>Online</option><option>Offline</option><option>Live</option></select></div>
            <div className="fsj-select-group"><label className="fsj-select-label">Faculty</label>
              <select className="fsj-select"><option>Real-Time Expert</option></select></div>
            <div className="fsj-select-group"><label className="fsj-select-label">Duration</label>
              <select className="fsj-select"><option>45 Days</option></select></div>
            <div className="fsj-info-pill"><span className="fsj-info-pill__icon">🕐</span><span>Dur: <strong>45 days</strong></span></div>
          </div>
          <div className="fsj-controls__right">
            <a href="#curriculum" className="fsj-btn fsj-btn--outline" onClick={e => { e.preventDefault(); scrollToTab('curriculum') }}>↓ Download Curriculum</a>
            <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Apply Now</button>
          </div>
        </div></div></div>
      </section>

      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} role="tablist">
        <div className="fsj-container"><div className="fsj-tabs">
          {TABS.map(tab => (
            <button key={tab.id} role="tab" aria-selected={activeTab === tab.id}
              className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
              onClick={() => scrollToTab(tab.id)}>{tab.label}</button>
          ))}
        </div></div>
      </div>

      <div className="fsj-container"><div className="fsj-layout">
        <main className="fsj-content">

          {activeTab === 'overview' && (
            <div className="fsj-panel">
              <h2 className="fsj-section-title">Course Overview</h2>
              <p className="fsj-para">The Data Science Internship Program integrates Python, Machine Learning, and NLP with AI-powered tools in a structured 45-day format. Participants work in an AI Virtual Lab environment, analysing performance metrics, tracking milestones, and collaborating on live challenges with a capstone project component.</p>
              <h3 className="fsj-sub-title">Course Description</h3>
              <p className="fsj-para">This hands-on internship covers the complete data science workflow — from Python fundamentals and SQL through machine learning, NLP, and Generative AI. Students build a portfolio of real-world projects and receive dedicated mentor support throughout.</p>
              <p className="fsj-para">Integrated soft skills and interview readiness training ensures participants are prepared not only technically but also for the full hiring process at data-driven organisations.</p>
              <h3 className="fsj-sub-title">Course Objectives</h3>
              <ul className="fsj-bullet-list">
                <li>Apply Python for data science tasks, data cleaning, and analysis</li>
                <li>Build and deploy machine learning models end-to-end</li>
                <li>Execute NLP projects including sentiment analysis and transformers</li>
                <li>Analyse performance metrics using the AI Virtual Lab</li>
                <li>Track milestones and manage task breakdowns collaboratively</li>
                <li>Implement real-world data science solutions for a capstone project</li>
                <li>Earn an internship certificate upon successful completion</li>
              </ul>
              <h3 className="fsj-sub-title">Prerequisites</h3>
              <ul className="fsj-bullet-list">
                <li>Basic Python programming knowledge</li>
                <li>Understanding of basic mathematics/statistics</li>
                <li>Familiarity with machine learning concepts (recommended)</li>
                <li>Passion for data science and AI applications</li>
              </ul>
              <button className="fsj-btn fsj-btn--primary fsj-enroll-now" onClick={() => scrollToTab('upcoming-batches')}>Apply Now</button>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="fsj-panel">
              <h2 className="fsj-section-title">Course Curriculum</h2>
              <div className="fsj-accordion">
                {CURRICULUM.map((sec,i) => (
                  <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                    <button className="fsj-acc__head" onClick={() => toggleSection(i)} aria-expanded={!!openSections[i]}>
                      <span className="fsj-acc__title">{sec.title}</span>
                      <div className="fsj-acc__right"><span className="fsj-acc__count">{sec.count} Topics</span><span className="fsj-acc__chevron">{openSections[i]?'▲':'▼'}</span></div>
                    </button>
                    {openSections[i] && <div className="fsj-acc__body"><div className="fsj-topics-grid">
                      {sec.topics.map((t,j) => <div key={j} className="fsj-topic-item"><span className="fsj-topic-num">{String(j+1).padStart(2,'0')}.</span><span>{t}</span></div>)}
                    </div></div>}
                  </div>
                ))}
              </div>
              <div style={{ textAlign:'center', marginTop:'2rem' }}><button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Apply Now</button></div>
            </div>
          )}

          {activeTab === 'certificate' && (
            <div className="fsj-panel">
              <h2 className="fsj-section-title">Internship Certificate</h2>
              <p className="fsj-para">Upon successful completion of the Data Science Internship Program you will receive an official internship certificate from Pro Training Tech, validating your practical experience in Python, Machine Learning, NLP, and Generative AI.</p>
              <div className="fsj-cert-img-wrap">
                <img src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png" alt="Internship Certificate" className="fsj-cert-img"
                  onError={e => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<div class="fsj-cert-placeholder"><div class="fsj-cert-placeholder__inner"><div class="fsj-cert-placeholder__logo">Pro Training Tech</div><div class="fsj-cert-placeholder__title">Internship Certificate</div><div class="fsj-cert-placeholder__course">Data Science Internship Program</div><div class="fsj-cert-placeholder__line"></div><div class="fsj-cert-placeholder__name">Student Name</div></div></div>` }} />
              </div>
              <div style={{ textAlign:'center', marginTop:'1.5rem' }}><button className="fsj-btn fsj-btn--outline">Drop a Query</button></div>
            </div>
          )}

          {activeTab === 'upcoming-batches' && (
            <div className="fsj-panel">
              <h2 className="fsj-section-title">Upcoming Batches</h2>
              <div className="fsj-table-wrap"><table className="fsj-table">
                <thead><tr><th>Course</th><th>Faculty</th><th>Date</th><th>Time</th><th>Mode</th><th>Batch Type</th><th>Meeting Link</th></tr></thead>
                <tbody>{BATCHES.map((b,i) => (
                  <tr key={i}><td><strong>{b.course}</strong></td><td>{b.faculty}</td><td>{b.date}</td><td>{b.time}</td>
                    <td><span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>{b.mode}</span></td>
                    <td>{b.type}</td><td><button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>{b.link}</button></td>
                  </tr>
                ))}</tbody>
              </table></div>
            </div>
          )}

          {activeTab === 'training-features' && (
            <div className="fsj-panel">
              <h2 className="fsj-section-title">Training Features</h2>
              <div className="fsj-features-grid">
                {FEATURES.map((f,i) => (
                  <div key={i} className="fsj-feature-card" style={{ '--feat-color':f.color, '--feat-bg':f.bg }}>
                    <div className="fsj-feature-card__icon-wrap" style={{ background:f.bg }}><f.Icon width={40} height={40} color={f.color} strokeWidth={1.5} /></div>
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
                {REVIEWS.map((r,i) => (
                  <div key={i} className="fsj-review-card">
                    <div className="fsj-review-card__top">
                      <div className="fsj-rev-avatar" style={{ background:r.color }}>{r.initials}</div>
                      <div><div className="fsj-rev-name">{r.name}</div><div className="fsj-rev-course">{r.course}</div></div>
                    </div>
                    <div className="fsj-rev-stars">{Array.from({length:5},(_,j) => <span key={j} className={j<r.rating?'fsj-star--on':'fsj-star--off'}>★</span>)}</div>
                    <p className="fsj-rev-text">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        <aside className="fsj-sidebar">
          <a href="tel:+17035651995" className="fsj-advisor-btn"><span className="fsj-advisor-btn__icon">📞</span>+1-703-565-1995</a>
          <div className="fsj-enquiry-card">
            <div className="fsj-enquiry-card__top"><p className="fsj-enquiry-card__tag">Top Internship Programs</p><h3 className="fsj-enquiry-card__title">Register for the Course!</h3></div>
            <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
              <div className="fsj-form-field"><input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><select name="course" value={formData.course} onChange={handleFormChange}><option>Data Science Internship</option><option>Python Internship</option><option>DevOps Internship</option><option>Full Stack Data Science & AI</option></select></div>
              <div className="fsj-form-field"><select name="mode" value={formData.mode} onChange={handleFormChange}><option>Online</option><option>Offline</option><option>Live</option></select></div>
              <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">{submitted ? '✓ Submitted!' : 'Submit'}</button>
              <p className="fsj-form-terms">By submitting you agree to our <Link to="/terms-conditions">Terms of Use</Link> &amp; <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            </form>
          </div>
        </aside>
      </div></div>

      <div className="fsj-salary-bar"><div className="fsj-container"><div className="fsj-salary-bar__inner">
        <div className="fsj-salary-bar__label">Average package of course <strong>(Data Science Internship)</strong></div>
        <div className="fsj-salary-stats">
          <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">100%</span><span className="fsj-salary-stat__lbl">Avg salary hike</span></div>
          <div className="fsj-salary-divider" />
          <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">4L</span><span className="fsj-salary-stat__lbl">Avg Package</span></div>
        </div>
      </div></div></div>

      <section className="fsj-mnc-section"><div className="fsj-container">
        <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
        <div className="fsj-logo-carousel">
          <button className="fsj-logo-arrow fsj-logo-arrow--left" aria-label="Previous" disabled={logoPage===0} onClick={() => setLogoPage(p => Math.max(0,p-1))}>&#8592;</button>
          <div className="fsj-logo-grid-wrap"><div className="fsj-logo-grid" style={{ transform:`translateX(-${logoPage*100}%)` }}>
            {Array.from({length:totalLogoPages},(_,page) => (
              <div key={page} className="fsj-logo-page">{MNC_LOGOS.slice(page*LOGOS_PER_PAGE,page*LOGOS_PER_PAGE+LOGOS_PER_PAGE).map((src,i) => (
                <div key={i} className="fsj-logo-card"><img src={src} alt={`Company ${page*LOGOS_PER_PAGE+i+1}`} className="fsj-logo-card__img" /></div>
              ))}</div>
            ))}
          </div></div>
          <button className="fsj-logo-arrow fsj-logo-arrow--right" aria-label="Next" disabled={logoPage>=totalLogoPages-1} onClick={() => setLogoPage(p => Math.min(totalLogoPages-1,p+1))}>&#8594;</button>
        </div>
      </div></section>

      <section className="fsj-related-section"><div className="fsj-container">
        <h2 className="fsj-related-title">Our Relevant Courses list</h2>
        <div className="fsj-related-grid">{RELATED.map((rc,i) => (
          <Link key={i} to={`/courses/${rc.slug}`} className="fsj-related-card">
            <div className="fsj-related-card__icon">{rc.icon}</div>
            <div className="fsj-related-card__title">{rc.title}</div>
            <div className="fsj-related-card__arrow">→</div>
          </Link>
        ))}</div>
      </div></section>

      <Footer />
    </div>
  )
}

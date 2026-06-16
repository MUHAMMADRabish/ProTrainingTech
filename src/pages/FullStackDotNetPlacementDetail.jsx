import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

const CURRICULUM = [
  {
    title: 'Programming Foundation with C',
    count: 8,
    topics: ['Introduction to C','Language Evolution','Fundamentals','Data Types','I/O Operations','Control Structures','Functions','Pointers & Arrays'],
  },
  {
    title: 'Web Development with HTML & CSS',
    count: 10,
    topics: ['Web Basics','HTML Structure','HTML5 Semantics','CSS Fundamentals','Selectors & Properties','Box Model','Flexbox & Grid','Responsive Design','Animations','Bootstrap'],
  },
  {
    title: 'JavaScript Programming',
    count: 12,
    topics: ['Essentials','Variables & Data Types','Operators','Control Flow','Arrays & Functions','OOP in JS','DOM Manipulation','Events','Async Programming','ES6+ Features','Error Handling','AJAX & Fetch'],
  },
  {
    title: 'C#.NET Programming',
    count: 15,
    topics: ['C# Basics','OOP Concepts','Inheritance & Polymorphism','Interfaces & Generics','Collections','LINQ','Delegates & Events','Exception Handling','File I/O','Async Programming','Reflection','Attributes','Nullable Types','Records','Pattern Matching'],
  },
  {
    title: 'SQL Server',
    count: 10,
    topics: ['Database Fundamentals','DDL & DML','Joins & Sub Queries','Stored Procedures','Functions & Triggers','Views & Indexes','Transactions','T-SQL','Performance Tuning','Entity Framework'],
  },
  {
    title: 'ASP.NET Core',
    count: 12,
    topics: ['ASP.NET Core Intro','Middleware Pipeline','Controllers & Actions','Model Binding','Razor Pages','Authentication & Authorization','Dependency Injection','Configuration','Logging','REST APIs','Minimal APIs','Deployment'],
  },
  {
    title: 'MVC 5 & MVC Core',
    count: 8,
    topics: ['MVC Architecture','Controllers','Views & Layouts','Models & View Models','Data Annotations','Bundling & Minification','Filters','Areas'],
  },
  {
    title: 'React JS',
    count: 10,
    topics: ['React Basics','Components & Props','State & Hooks','React Router','Context API','Redux','Axios & REST','Material UI','Testing','Deployment'],
  },
  {
    title: 'Communication & Soft Skills',
    count: 8,
    topics: ['Functional English','Grammar','Sentence Construction','JAM Sessions','Group Discussions','Resume Writing','Email Etiquette','Interview Preparation'],
  },
  {
    title: 'CRT (Campus Recruitment Training)',
    count: 6,
    topics: ['Quantitative Aptitude','Logical Reasoning','Verbal Ability','Technical MCQs','Mock Tests','HR Interview Practice'],
  },
]

const BATCHES = [
  { course:'Full Stack .NET Placement', faculty:'Real-Time Expert', date:'8 Jun', time:'11:00 AM IST', mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Full Stack .NET Placement', faculty:'Real-Time Expert', date:'8 Jun', time:'11:00 AM IST', mode:'offline', type:'Classroom Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color:'#1565c0', bg:'#dbeafe', title:'Comprehensive Software Training',    desc:'In-depth programs covering the latest .NET technologies from C# to ASP.NET Core and beyond.' },
  { Icon: GraduationCap, color:'#16a34a', bg:'#dcfce7', title:'Expert Instructors',                desc:'Learn from industry professionals with real-world .NET development insights and mentorship.' },
  { Icon: Code2,         color:'#e05c2a', bg:'#ffedd5', title:'Practical Hands-On Projects',       desc:'Build real-world .NET applications with personal credentials and automated test case evaluation.' },
  { Icon: Briefcase,     color:'#9333ea', bg:'#f3e8ff', title:'Dedicated Job Placement Assistance',desc:'Specialized support for securing post-training .NET developer roles with mock HR interviews.' },
  { Icon: Award,         color:'#dc2626', bg:'#fee2e2', title:'Mock Interviews & Soft Skills',     desc:'Technical and HR interview preparation sessions and essential workplace skill development.' },
  { Icon: Headphones,    color:'#0891b2', bg:'#cffafe', title:'Interactive Coding Challenges',     desc:'Topic-wise MCQs, proof-of-concept assignments, and weekly performance reports.' },
]

const REVIEWS = [
  { name:'Rahul Verma',    course:'Full Stack .NET Placement', rating:5, initials:'RV', color:'#1565c0', text:'The .NET placement program is exceptional. The curriculum is thorough and the mock interview preparation helped me ace technical rounds at top MNCs.' },
  { name:'Sneha Patel',    course:'Full Stack .NET Placement', rating:5, initials:'SP', color:'#e05c2a', text:'Best decision to join this program. The weekly performance reports and mentor support kept me motivated. Got placed within 3 weeks of course completion.' },
  { name:'Amit Sharma',    course:'Full Stack .NET Placement', rating:5, initials:'AS', color:'#2e7d32', text:'The curriculum covers everything from basics to ASP.NET Core microservices. The soft skills training was an excellent add-on for the complete interview process.' },
  { name:'Preethi Nair',   course:'Full Stack .NET Placement', rating:4, initials:'PN', color:'#6a1b9a', text:'Great program with real-world coding practice. The automated test case evaluation platform helped me identify and fix my weaknesses before interviews.' },
]

const RELATED = [
  { title:'Full Stack .NET Core',              slug:'full-stack-dot-net-core-online-training',                          icon:'🔷' },
  { title:'Full Stack Java Placement',         slug:'full-stack-java-placement-assistance-program-online-training',      icon:'☕' },
  { title:'Full Stack Java',                   slug:'full-stack-java-online-training',                                   icon:'☕' },
  { title:'UI Full Stack Web with React',      slug:'ui-full-stack-web-development-with-react-online-training',          icon:'⚛️' },
  { title:'Full Stack Software Testing',       slug:'full-stack-software-testing-online-training',                       icon:'🧪' },
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

export default function FullStackDotNetPlacementDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Full Stack .NET Placement', mode:'Online' })
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
          <Link to="/job-guarantee-courses">Job Placement</Link><span>›</span>
          <span>Full Stack .Net Placement Assistance</span>
        </nav>
      </div></div>

      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img src="https://images.nareshit.com/full-stack-dot-net-placement-assistance-program-nareshit.jpg"
            alt="Full Stack .NET Placement Assistance Program" className="fsj-banner__img"
            onError={e => { e.target.style.display='none'; e.target.parentElement.classList.add('fsj-banner--fallback') }} />
          <div className="fsj-banner__overlay"><div className="fsj-container">
            <h1 className="fsj-banner__title">Full Stack .NET Placement Assistance Program</h1>
            <p className="fsj-banner__sub">Comprehensive .NET Training with Dedicated Job Placement Support</p>
          </div></div>
        </div>
        <div className="fsj-controls-wrap"><div className="fsj-container"><div className="fsj-controls">
          <div className="fsj-controls__left">
            <div className="fsj-select-group"><label className="fsj-select-label">Training Type</label>
              <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}><option>Online Training</option><option>Classroom Training</option></select></div>
            <div className="fsj-select-group" style={{ display: 'none' }}><label className="fsj-select-label">Faculty</label>
              <select className="fsj-select"><option>Real-Time Expert</option></select></div>
            <div className="fsj-select-group"><label className="fsj-select-label">Batch Date</label>
              <select className="fsj-select"><option>8 Jun - 11:00 AM IST</option></select></div>
            <div className="fsj-info-pill"><span className="fsj-info-pill__icon">🕐</span><span>Dur: <strong>6 months</strong></span></div>
            <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}><span className="fsj-info-pill__icon">₹</span><span>Fee: <strong>30,000 /-</strong></span></div>
          </div>
          <div className="fsj-controls__right">
            <a style={{ display: 'none' }} href="#curriculum" className="fsj-btn fsj-btn--outline" onClick={e => { e.preventDefault(); scrollToTab('curriculum') }}>↓ Download Curriculum</a>
            <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Enroll Course</button>
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
              <p className="fsj-para">The Full Stack .NET Placement Assistance Program equips learners with comprehensive skills for .NET development roles, emphasising the bridge between theoretical knowledge and practical application to prepare participants for IT employment.</p>
              <h3 className="fsj-sub-title">Course Description</h3>
              <p className="fsj-para">This placement-focused program covers the complete .NET stack — from C# fundamentals and SQL Server to ASP.NET Core, MVC, and React JS for the frontend. The integrated placement support includes dedicated mentor sessions, automated code evaluation, and regular mock interviews.</p>
              <p className="fsj-para">Communication skills and Campus Recruitment Training (CRT) are embedded throughout the program to ensure students are prepared for every stage of the hiring process.</p>
              <h3 className="fsj-sub-title">Course Objectives</h3>
              <ul className="fsj-bullet-list">
                <li>Master C# and .NET framework from fundamentals to advanced concepts</li>
                <li>Build full-stack web applications with ASP.NET Core and React JS</li>
                <li>Design and query databases with SQL Server and Entity Framework</li>
                <li>Access live coding evaluation with automated test case verification</li>
                <li>Attend regular HR and technical mock interview sessions</li>
                <li>Develop communication and soft skills for workplace readiness</li>
                <li>Secure post-training employment with dedicated placement support</li>
              </ul>
              <h3 className="fsj-sub-title">Prerequisites</h3>
              <ul className="fsj-bullet-list">
                <li>Basic programming concept knowledge</li>
                <li>Familiarity with variables, loops, and functions</li>
                <li>Computer with internet access for online sessions</li>
                <li>No prior .NET experience required</li>
              </ul>
              <button className="fsj-btn fsj-btn--primary fsj-enroll-now" onClick={() => scrollToTab('upcoming-batches')}>Enroll Now</button>
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
              <h2 className="fsj-section-title">Course Certificate</h2>
              <p className="fsj-para">Upon successful completion you will receive an industry-recognised certificate from Pro Training Tech validating your expertise in full-stack .NET development and placement readiness.</p>
              <div className="fsj-cert-img-wrap">
                <img src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png" alt="Certificate" className="fsj-cert-img"
                  onError={e => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<div class="fsj-cert-placeholder"><div class="fsj-cert-placeholder__inner"><div class="fsj-cert-placeholder__logo">Pro Training Tech</div><div class="fsj-cert-placeholder__title">Certificate of Completion</div><div class="fsj-cert-placeholder__course">Full Stack .NET Placement Program</div><div class="fsj-cert-placeholder__line"></div><div class="fsj-cert-placeholder__name">Student Name</div></div></div>` }} />
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
            <div className="fsj-enquiry-card__top"><p className="fsj-enquiry-card__tag">Top 5 Technologies to learn</p><h3 className="fsj-enquiry-card__title">Register for the Course!</h3></div>
            <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
              <div className="fsj-form-field"><input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><select name="course" value={formData.course} onChange={handleFormChange}><option>Full Stack .NET Placement</option><option>Full Stack Java Placement</option><option>Full Stack Java</option><option>Full Stack .NET Core</option></select></div>
              <div className="fsj-form-field"><select name="mode" value={formData.mode} onChange={handleFormChange}><option>Online</option><option>Offline</option><option>Live Online</option></select></div>
              <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">{submitted ? '✓ Submitted!' : 'Submit'}</button>
              <p className="fsj-form-terms">By submitting you agree to our <Link to="/terms-conditions">Terms of Use</Link> &amp; <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            </form>
          </div>
        </aside>
      </div></div>

      <div className="fsj-salary-bar"><div className="fsj-container"><div className="fsj-salary-bar__inner">
        <div className="fsj-salary-bar__label">Average package of course <strong>(Full Stack .NET Placement)</strong></div>
        <div className="fsj-salary-stats">
          <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">100%</span><span className="fsj-salary-stat__lbl">Avg salary hike</span></div>
          <div className="fsj-salary-divider" />
          <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">3.5–6L</span><span className="fsj-salary-stat__lbl">Avg Package</span></div>
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

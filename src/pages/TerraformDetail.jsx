import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

const CURRICULUM = [
  {
    title: 'Module 1: Infrastructure as Code Fundamentals',
    count: 6,
    topics: ['What is IaC','IaC Benefits','Declarative vs Imperative','IaC Tools Overview','Terraform vs Alternatives','Use Cases'],
  },
  {
    title: 'Module 2: Terraform Essentials & Providers',
    count: 8,
    topics: ['Terraform Architecture','Installation & Setup','Providers & Registry','AWS Provider','Azure Provider','GCP Provider','Authentication & Credentials','Provider Versioning'],
  },
  {
    title: 'Module 3: Core Workflow',
    count: 7,
    topics: ['terraform init','terraform validate','terraform plan','terraform apply','terraform destroy','terraform fmt','terraform show'],
  },
  {
    title: 'Module 4: State Commands & Resource Management',
    count: 8,
    topics: ['Terraform State','State File','terraform state list','terraform state show','terraform state mv','terraform import','Resource Dependencies','Data Sources'],
  },
  {
    title: 'Module 5: Module Creation & Reusability',
    count: 7,
    topics: ['What are Modules','Module Structure','Input Variables','Output Values','Module Versioning','Public Registry Modules','Local Modules'],
  },
  {
    title: 'Module 6: Configuration Syntax & Functions',
    count: 9,
    topics: ['HCL Syntax','Variables & Types','Locals','Expressions','Built-in Functions','String Interpolation','Conditional Expressions','For Expressions','Dynamic Blocks'],
  },
  {
    title: 'Module 7: State Management & Backends',
    count: 6,
    topics: ['Remote Backends','S3 Backend','Azure Blob Backend','State Locking','Workspaces','Sensitive State Data'],
  },
  {
    title: 'Module 8: HCP Terraform & Policy Enforcement',
    count: 6,
    topics: ['Terraform Cloud Overview','Remote Runs','VCS Integration','Sentinel Policy Framework','Cost Estimation','Team Management'],
  },
  {
    title: 'Module 9: Additional Tools',
    count: 5,
    topics: ['Terraformer (reverse Terraform)','Terrascan (IaC Security)','OpenTofu','HashiCorp Vault Integration','Exam Preparation Tips'],
  },
]

const BATCHES = [
  { course:'Terraform Associate 003', faculty:'Mr. Raham', date:'1 Jun', time:'9:00 AM IST', mode:'online',  type:'Online Training', link:'Join' },
  { course:'Terraform Associate 003', faculty:'Mr. Raham', date:'1 Jun', time:'9:00 AM IST', mode:'offline', type:'KPHB',            link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color:'#1565c0', bg:'#dbeafe', title:'Comprehensive Curriculum',    desc:'Well-structured content aligned with HashiCorp Terraform Associate 003 exam objectives.' },
  { Icon: GraduationCap, color:'#16a34a', bg:'#dcfce7', title:'Expert-Led Sessions',        desc:'Industry professionals sharing real-world Terraform and cloud infrastructure insights.' },
  { Icon: Code2,         color:'#e05c2a', bg:'#ffedd5', title:'Hands-On Labs',              desc:'Practical projects across AWS, Azure, and GCP reinforcing theoretical knowledge.' },
  { Icon: Headphones,    color:'#0891b2', bg:'#cffafe', title:'Flexible Learning',          desc:'On-site, live online, and recorded session options to fit your schedule.' },
  { Icon: Award,         color:'#dc2626', bg:'#fee2e2', title:'Industry Recognition',       desc:'HashiCorp certifications are highly valued by cloud and DevOps employers globally.' },
  { Icon: Briefcase,     color:'#9333ea', bg:'#f3e8ff', title:'Placement Assistance',       desc:'Career support and recruitment drives to help you land your next DevOps/Cloud role.' },
]

const REVIEWS = [
  { name:'Vikram Singh',    course:'Terraform Associate 003', rating:5, initials:'VS', color:'#1565c0', text:'Excellent certification prep course. The hands-on labs across AWS, Azure, and GCP gave me real confidence for the exam. Passed on the first attempt!' },
  { name:'Ananya Reddy',    course:'Terraform Associate 003', rating:5, initials:'AR', color:'#e05c2a', text:'Mr. Raham is an outstanding instructor. The course covers all exam objectives thoroughly with real-world scenarios that actually appear in production DevOps workflows.' },
  { name:'Deepak Nair',     course:'Terraform Associate 003', rating:5, initials:'DN', color:'#2e7d32', text:'Best Terraform course I have found. The state management and modules sections were exceptionally clear. Highly recommend for anyone targeting the 003 certification.' },
  { name:'Meera Joshi',     course:'Terraform Associate 003', rating:4, initials:'MJ', color:'#6a1b9a', text:'Great curriculum and practical labs. The Sentinel policy and HCP Terraform sections were unique additions that other courses skip. Very comprehensive overall.' },
]

const RELATED = [
  { title:'Full Stack Data Science & AI',  slug:'full-stack-data-science-ai-online-training',    icon:'📊' },
  { title:'DevOps Internship',             slug:'internship-program-on-devops-with-cloud',       icon:'⚙️' },
  { title:'Full Stack Java',               slug:'full-stack-java-online-training',               icon:'☕' },
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

export default function TerraformDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Terraform Associate 003', mode:'Online' })
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
          <Link to="/certification-courses">Certification</Link><span>›</span>
          <span>Terraform Associate 003</span>
        </nav>
      </div></div>

      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img src="https://images.nareshit.com/Terraform_Associate_Certification_Training_(003).jpg"
            alt="Terraform Associate Certification Training 003" className="fsj-banner__img"
            onError={e => { e.target.style.display='none'; e.target.parentElement.classList.add('fsj-banner--fallback') }} />
          <div className="fsj-banner__overlay"><div className="fsj-container">
            <h1 className="fsj-banner__title">Terraform Associate Certification Training (003)</h1>
            <p className="fsj-banner__sub">Master Infrastructure as Code — HashiCorp Certified Associate Exam Ready</p>
          </div></div>
        </div>
        <div className="fsj-controls-wrap"><div className="fsj-container"><div className="fsj-controls">
          <div className="fsj-controls__left">
            <div className="fsj-select-group"><label className="fsj-select-label">Training Type</label>
              <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}><option>Online Training</option><option>Classroom Training (KPHB)</option></select></div>
            <div className="fsj-select-group"><label className="fsj-select-label">Faculty</label>
              <select className="fsj-select"><option>Mr. Raham</option></select></div>
            <div className="fsj-select-group"><label className="fsj-select-label">Batch Date</label>
              <select className="fsj-select"><option>1 Jun - 9:00 AM IST</option></select></div>
            <div className="fsj-info-pill"><span className="fsj-info-pill__icon">🕐</span><span>Dur: <strong>21 days</strong></span></div>
            <div className="fsj-info-pill fsj-info-pill--fee"><span className="fsj-info-pill__icon">₹</span><span>Fee: <strong>5,000 /-</strong></span></div>
          </div>
          <div className="fsj-controls__right">
            <a href="#curriculum" className="fsj-btn fsj-btn--outline" onClick={e => { e.preventDefault(); scrollToTab('curriculum') }}>↓ Download Curriculum</a>
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
              <p className="fsj-para">This training equips IT professionals with Infrastructure as Code expertise using Terraform. The program aligns with the HashiCorp Terraform Associate 003 exam objectives and emphasises hands-on experience deploying infrastructure across AWS, Azure, and GCP.</p>
              <h3 className="fsj-sub-title">Course Description</h3>
              <p className="fsj-para">The curriculum balances theory with practical labs, covering provider configurations, state management, modules, Terraform Cloud/Enterprise, and CLI usage. The 21-day intensive format is designed to get you exam-ready quickly.</p>
              <p className="fsj-para">You will work with real cloud environments and learn to write, plan, and apply infrastructure configurations — skills directly tested in the HashiCorp certification exam.</p>
              <h3 className="fsj-sub-title">Course Objectives</h3>
              <ul className="fsj-bullet-list">
                <li>Master IaC principles and Terraform fundamentals</li>
                <li>Write, plan, and apply infrastructure configurations in HCL</li>
                <li>Manage Terraform state locally and remotely with backends</li>
                <li>Implement reusable infrastructure modules</li>
                <li>Configure providers for AWS, Azure, and GCP</li>
                <li>Use HCP Terraform and enforce policies with Sentinel</li>
                <li>Prepare for and pass the HashiCorp Certified Associate (003) exam</li>
              </ul>
              <h3 className="fsj-sub-title">Prerequisites</h3>
              <ul className="fsj-bullet-list">
                <li>Basic cloud computing knowledge (AWS, Azure, or GCP)</li>
                <li>CLI/terminal familiarity</li>
                <li>Basic infrastructure/networking understanding</li>
                <li>DevOps tool experience (beneficial but optional)</li>
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
              <p className="fsj-para">Upon completing this training you receive a certificate of completion from Pro Training Tech. This course also prepares you for the official HashiCorp Certified: Terraform Associate (003) credential — valued by cloud and DevOps employers worldwide.</p>
              <div className="fsj-cert-img-wrap">
                <img src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png" alt="Certificate" className="fsj-cert-img"
                  onError={e => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<div class="fsj-cert-placeholder"><div class="fsj-cert-placeholder__inner"><div class="fsj-cert-placeholder__logo">Pro Training Tech</div><div class="fsj-cert-placeholder__title">Certificate of Completion</div><div class="fsj-cert-placeholder__course">Terraform Associate 003</div><div class="fsj-cert-placeholder__line"></div><div class="fsj-cert-placeholder__name">Student Name</div></div></div>` }} />
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
            <div className="fsj-enquiry-card__top"><p className="fsj-enquiry-card__tag">Top Certification Courses</p><h3 className="fsj-enquiry-card__title">Register for the Course!</h3></div>
            <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
              <div className="fsj-form-field"><input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleFormChange} /></div>
              <div className="fsj-form-field"><select name="course" value={formData.course} onChange={handleFormChange}><option>Terraform Associate 003</option><option>Full Stack Java</option><option>Full Stack Python</option><option>DevOps Internship</option></select></div>
              <div className="fsj-form-field"><select name="mode" value={formData.mode} onChange={handleFormChange}><option>Online</option><option>Offline (KPHB)</option><option>Live Online</option></select></div>
              <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">{submitted ? '✓ Submitted!' : 'Submit'}</button>
              <p className="fsj-form-terms">By submitting you agree to our <Link to="/terms-conditions">Terms of Use</Link> &amp; <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            </form>
          </div>
        </aside>
      </div></div>

      <div className="fsj-salary-bar"><div className="fsj-container"><div className="fsj-salary-bar__inner">
        <div className="fsj-salary-bar__label">Average package of course <strong>(Terraform Associate 003)</strong></div>
        <div className="fsj-salary-stats">
          <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">8%</span><span className="fsj-salary-stat__lbl">Avg salary hike</span></div>
          <div className="fsj-salary-divider" />
          <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">60L</span><span className="fsj-salary-stat__lbl">Avg Package</span></div>
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

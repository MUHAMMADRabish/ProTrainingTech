import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './HireFromUs.css'

const BENEFITS = [
  { icon: '🎓', bg: 'rgba(30,58,95,.1)',   title: 'Industry-Ready Graduates', desc: 'Every Pro Training Tech student completes 3–6 months of rigorous, project-based training. They arrive knowing your tech stack, not just textbook theory.' },
  { icon: '⚡', bg: 'rgba(224,92,42,.1)',  title: 'Zero Ramp Time', desc: 'Our placement programme includes mock interviews, live coding rounds, and real-world project portfolios — graduates are productive from week one.' },
  { icon: '📊', bg: 'rgba(30,58,95,.1)',   title: 'Deep Technical Bench', desc: 'Access 500+ placement-ready graduates every quarter across Java, Python, MERN, DevOps, Cloud, Data Science, and more.' },
  { icon: '🤝', bg: 'rgba(224,92,42,.1)',  title: 'No Placement Fees', desc: 'Hiring from Pro Training Tech costs nothing. We connect you with pre-screened candidates at zero recruitment overhead for your HR team.' },
  { icon: '🔍', bg: 'rgba(30,58,95,.1)',   title: 'Pre-Screened Candidates', desc: 'We conduct technical screening, coding assessments, and aptitude tests before a single resume reaches your desk.' },
  { icon: '🏢', bg: 'rgba(224,92,42,.1)',  title: 'Campus Drive Support', desc: 'Host on-campus drives at our Virginia, Bangalore or Pune centres. We handle venue, scheduling, and candidate coordination.' },
]

const STEPS = [
  { icon: '📋', title: 'Share Requirements', desc: 'Send us your JD, tech stack, headcount, experience level, and timeline. Our placement team responds within 24 hours.' },
  { icon: '🔎', title: 'We Shortlist Profiles', desc: 'Our placement coordinators screen the batch, match profiles to your requirements, and send you a curated shortlist.' },
  { icon: '💻', title: 'Campus/Online Drive', desc: 'Conduct aptitude tests, coding rounds, and technical interviews — at our centre, your office, or via video call.' },
  { icon: '✅', title: 'You Hire & Onboard', desc: 'Roll out offers. We follow up with joining, provide offer-letter templates, and assist with any pre-joining preparation.' },
]

const SKILLS_DATA = [
  {
    group: 'Programming Languages',
    chips: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C#', '.NET', 'PHP', 'Go', 'Kotlin'],
  },
  {
    group: 'Frontend',
    chips: ['React', 'Angular', 'Vue.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind', 'Redux'],
  },
  {
    group: 'Backend & APIs',
    chips: ['Spring Boot', 'Django', 'FastAPI', 'Node.js', 'Express', 'REST', 'GraphQL', 'Microservices'],
  },
  {
    group: 'Databases',
    chips: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Redis', 'Elasticsearch', 'SQL Server'],
  },
  {
    group: 'Cloud & DevOps',
    chips: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform'],
  },
  {
    group: 'Data & AI',
    chips: ['Machine Learning', 'Data Science', 'TensorFlow', 'Pandas', 'Spark', 'Power BI', 'Tableau'],
  },
]

const COMPANIES = ['TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'Capgemini', 'Accenture', 'IBM', 'Tech Mahindra', 'L&T Infotech', 'Mphasis', 'Persistent']

export default function HireFromUs() {
  const [form, setForm]       = useState({ name: '', company: '', email: '', phone: '', roles: '', headcount: '', timeline: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="hire-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="hire-hero">
        <div className="hire-hero__inner">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem', fontSize: '.8rem', color: 'rgba(255,255,255,.55)', marginBottom: '1.6rem' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,.35)' }}>›</span>
            <span>Hire From Us</span>
          </nav>
          <div className="hire-hero__tag">🏢 For Employers</div>
          <h1>
            Hire <em>Job-Ready Tech Talent</em><br />Trained by Pro Training Tech
          </h1>
          <p className="hire-hero__sub">
            Access India's largest pool of industry-trained software developers, data scientists,
            and cloud engineers — pre-screened, project-ready, and available at zero placement fee.
          </p>
          <div className="hire-hero__btns">
            <a href="#hire-form" className="btn btn-orange">Post a Requirement →</a>
            <Link to="/contact" className="btn btn-outline-white">Talk to Our Team</Link>
          </div>
          <div className="hire-hero__stats">
            {[['10L+', 'Graduates Placed'], ['500+', 'Hiring Partners'], ['95%', 'Offer Acceptance'], ['0', 'Placement Fee']].map(([val, lbl]) => (
              <div key={lbl} className="hire-hero__stat">
                <span className="hire-hero__stat-val">{val}</span>
                <span className="hire-hero__stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hire-hero__wave">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ background: 'var(--white)', padding: '2.2rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', fontSize: '.8rem', fontWeight: 700, color: 'var(--txt-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '1.4rem' }}>
            Trusted by 500+ companies including
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.65rem' }}>
            {COMPANIES.map(c => (
              <span key={c} style={{ padding: '.4rem 1rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)', fontSize: '.86rem', fontWeight: 600, color: 'var(--txt-muted)' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="hire-section">
        <div className="container">
          <div className="hire-sec-head">
            <h2>Why <mark>Hire From Pro Training Tech?</mark></h2>
            <p>22 years of training excellence means our graduates come pre-vetted, motivated, and ready to ship code from day one.</p>
          </div>
          <div className="hire-benefits__grid">
            {BENEFITS.map(b => (
              <div key={b.title} className="hire-benefit-card">
                <div className="hire-benefit-card__icon" style={{ background: b.bg }}>{b.icon}</div>
                <div className="hire-benefit-card__title">{b.title}</div>
                <div className="hire-benefit-card__desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="hire-section hire-section--alt">
        <div className="container">
          <div className="hire-sec-head">
            <h2>Our <mark>Hiring Process</mark></h2>
            <p>From requirement to onboarding in as little as 2 weeks — a streamlined, zero-hassle process for your HR team.</p>
          </div>
          <div className="hire-steps__track">
            {STEPS.map((s, i) => (
              <div key={s.title} className="hire-step">
                <div className="hire-step__num" data-n={i + 1}>{s.icon}</div>
                <div className="hire-step__title">{s.title}</div>
                <div className="hire-step__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT SKILLS ── */}
      <section className="hire-section">
        <div className="container">
          <div className="hire-sec-head">
            <h2>Technologies Our <mark>Students Know</mark></h2>
            <p>Our graduates are trained in the tools and frameworks your engineering teams actually use in production.</p>
          </div>
          <div className="hire-skills__wrap">
            {SKILLS_DATA.map(group => (
              <div key={group.group} className="hire-skills__group">
                <div className="hire-skills__group-label">{group.group}</div>
                <div className="hire-skills__chips">
                  {group.chips.map(skill => (
                    <span key={skill} className="hire-skill-chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ── */}
      <section className="hire-enquiry" id="hire-form">
        <div className="hire-enquiry__grid">
          <div className="hire-enquiry__info">
            <div className="hire-enquiry__pretag">🏢 EMPLOYER ENQUIRY</div>
            <h2>Post Your Hiring Requirement</h2>
            <p>
              Fill out the form and our Placement Team will call you back within 24 hours
              with matching candidate profiles, drive scheduling options, and a free skills
              assessment offer.
            </p>
            <ul className="hire-enquiry__perks">
              <li>Zero placement fee — always</li>
              <li>Pre-screened, tested candidates only</li>
              <li>On-campus or remote drives available</li>
              <li>Profiles shared within 48 hours</li>
              <li>Dedicated placement coordinator assigned</li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.88rem', color: 'rgba(255,255,255,.75)' }}>
                <span>📞</span><span>+1-703-565-1995 (Placement Desk)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.88rem', color: 'rgba(255,255,255,.75)' }}>
                <span>✉️</span><span>placements@protrainingtech.com</span>
              </div>
            </div>
          </div>

          <div className="hire-enquiry__form-card">
            {submitted ? (
              <div className="hire-form__success">
                <div className="hire-form__success-check">✓</div>
                <h3>Requirement Submitted!</h3>
                <p>Our Placement Team will call back within 24 hours with matching candidate profiles.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="hire-enquiry__form-title">Post a Hiring Requirement</div>
                <div className="hire-enquiry__form-sub">We'll send matching profiles within 48 hours — at zero cost.</div>
                <div className="hire-form__row">
                  <div className="hire-field"><input name="name"    placeholder="Your Full Name *"  value={form.name}    onChange={handle} required /></div>
                  <div className="hire-field"><input name="company" placeholder="Company Name *"     value={form.company} onChange={handle} required /></div>
                </div>
                <div className="hire-form__row">
                  <div className="hire-field"><input name="email" type="email" placeholder="Work Email *" value={form.email} onChange={handle} required /></div>
                  <div className="hire-field"><input name="phone" placeholder="Phone Number *"           value={form.phone} onChange={handle} required /></div>
                </div>
                <div className="hire-field">
                  <input name="roles" placeholder="Roles Required (e.g. Java Dev, DevOps Eng)" value={form.roles} onChange={handle} />
                </div>
                <div className="hire-form__row">
                  <div className="hire-field">
                    <select name="headcount" value={form.headcount} onChange={handle}>
                      <option value="">Headcount Needed</option>
                      <option>1 – 5</option><option>6 – 20</option>
                      <option>21 – 50</option><option>50+</option>
                    </select>
                  </div>
                  <div className="hire-field">
                    <select name="timeline" value={form.timeline} onChange={handle}>
                      <option value="">Hiring Timeline</option>
                      <option>Immediate (within 2 weeks)</option>
                      <option>Within 1 month</option>
                      <option>1 – 3 months</option>
                      <option>Ongoing pipeline</option>
                    </select>
                  </div>
                </div>
                <div className="hire-field">
                  <textarea name="message" placeholder="Additional requirements, tech stack, or experience level..." value={form.message} onChange={handle} />
                </div>
                <button type="submit" className="hire-submit-btn">Submit Requirement →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

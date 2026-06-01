import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Careers.css'

const JOBS = [
  {
    id: 1,
    title: 'Faculty Registration',
    dept: 'Training', deptIcon: '🧑‍🏫', deptBg: 'rgba(30,58,95,.1)',
    location: 'McLean, VA / Online', type: 'Full-time', exp: '3+ years', hot: true,
    tags: ['Teaching', 'Technology', 'Curriculum', 'Mentoring'],
    about: 'Join as a faculty member and share your expertise with the next generation of technology professionals. We are looking for passionate trainers across Java, Python, DevOps, Data Science, Cloud, and more.',
    responsibilities: [
      'Deliver live classroom and online training sessions (4–6 hrs/day)',
      'Design course curriculum, assignments, and capstone projects',
      'Conduct code reviews and provide personalised student mentoring',
      'Coordinate with the placement team for mock interviews',
      'Keep curriculum updated with the latest industry trends and tools',
    ],
    requirements: [
      '3+ years of industry experience in your core technology domain',
      'Passion for teaching and ability to explain complex concepts clearly',
      'Prior training or mentoring experience is a strong advantage',
      'Excellent communication and presentation skills',
      'Ability to engage and motivate students with varied learning backgrounds',
    ],
  },
  {
    id: 2,
    title: 'Lab Coordinators',
    dept: 'Training', deptIcon: '🖥️', deptBg: 'rgba(30,58,95,.1)',
    location: 'McLean, VA', type: 'Full-time', exp: '1+ years', hot: false,
    tags: ['Lab Management', 'Technical Support', 'Hardware', 'Student Support'],
    about: 'Coordinate our state-of-the-art labs for optimal hands-on learning experiences. Lab coordinators ensure students have the best technical environment to practise their skills.',
    responsibilities: [
      'Set up and maintain lab systems, software, and networking infrastructure',
      'Assist students with technical issues during lab and practice sessions',
      'Ensure lab availability, scheduling, and cleanliness standards',
      'Coordinate with faculty to set up lab exercises and project environments',
      'Maintain hardware and software inventory and flag issues proactively',
    ],
    requirements: [
      '1+ years of experience in IT infrastructure or systems administration',
      'Good knowledge of Windows and Linux operating systems',
      'Ability to troubleshoot hardware, software, and network issues',
      'Strong interpersonal skills and student-first service attitude',
      'Basic scripting or automation knowledge is a plus',
    ],
  },
  {
    id: 3,
    title: 'Mentors',
    dept: 'Training', deptIcon: '🤝', deptBg: 'rgba(30,58,95,.1)',
    location: 'Remote / McLean, VA', type: 'Part-time / Full-time', exp: '3+ years', hot: false,
    tags: ['Mentoring', 'Career Guidance', 'Industry Expertise', 'Student Success'],
    about: 'Guide aspiring minds and shape careers as a mentor at Pro Training Tech. Mentors provide one-on-one career guidance, technical advice, and industry insights to our enrolled students.',
    responsibilities: [
      'Conduct one-on-one mentoring sessions with assigned students',
      'Review student projects, provide feedback, and track progress',
      'Share real-world industry experience and career-building strategies',
      'Assist students with portfolio building, resume reviews, and LinkedIn optimisation',
      'Prepare students for technical interviews with mock sessions and guidance',
    ],
    requirements: [
      '3+ years of professional experience in IT or a related technology field',
      'Genuine passion for helping others grow and succeed in their careers',
      'Strong communication and active listening skills',
      'Experience with career coaching or mentoring is a plus',
      'Availability for at least 4–6 hours of mentoring per week',
    ],
  },
  {
    id: 4,
    title: 'Course Counsellors',
    dept: 'Placements', deptIcon: '📋', deptBg: 'rgba(224,92,42,.1)',
    location: 'McLean, VA', type: 'Full-time', exp: '1+ years', hot: true,
    tags: ['Counselling', 'Student Guidance', 'Sales', 'Education'],
    about: 'Help individuals make informed decisions about their educational journey. Course counsellors are the first touchpoint for prospective students and play a vital role in guiding them to the right programme.',
    responsibilities: [
      'Counsel prospective students on course selection based on their goals and background',
      'Follow up on enquiries via phone, email, and WhatsApp to convert leads',
      'Conduct demo sessions and campus tours for interested candidates',
      'Maintain CRM records and track enquiry-to-enrollment conversion metrics',
      'Coordinate with trainers to answer technical questions from prospects',
    ],
    requirements: [
      '1+ years of experience in education counselling, sales, or customer service',
      'Excellent verbal and written communication skills in English',
      'Ability to understand technology course content at a high level',
      'Target-driven mindset with a student-first approach',
      'Proficiency in CRM tools and MS Office / Google Workspace',
    ],
  },
  {
    id: 5,
    title: 'Telecallers',
    dept: 'Marketing', deptIcon: '📞', deptBg: 'rgba(224,92,42,.1)',
    location: 'McLean, VA / Remote', type: 'Full-time', exp: '0+ years', hot: false,
    tags: ['Telecalling', 'Lead Generation', 'Communication', 'CRM'],
    about: 'Be the first point of contact for potential students interested in Pro Training Tech courses. Telecallers play a key role in converting enquiries into enrolled learners by building rapport and sharing course information.',
    responsibilities: [
      'Make outbound calls to prospective students from assigned lead lists',
      'Explain course offerings, fee structures, batch timings, and placement support',
      'Schedule callbacks and demo sessions for the course counselling team',
      'Maintain call logs, update CRM records, and achieve daily call targets',
      'Handle inbound enquiry calls professionally and escalate where needed',
    ],
    requirements: [
      'Fluent in English; knowledge of Telugu or Hindi is a plus',
      'Good listening skills and a persuasive, friendly phone manner',
      'Freshers with excellent communication skills are welcome to apply',
      'Basic computer literacy and familiarity with CRM tools',
      'Target-oriented and willing to work in a fast-paced environment',
    ],
  },
  {
    id: 6,
    title: 'Digital Marketing Executives',
    dept: 'Marketing', deptIcon: '📱', deptBg: 'rgba(168,85,247,.1)',
    location: 'McLean, VA / Remote', type: 'Full-time', exp: '1+ years', hot: false,
    tags: ['SEO', 'Social Media', 'Google Ads', 'Content Marketing'],
    about: 'Drive our brand presence as a digital marketing executive, leveraging online marketing, SEO, and social media to attract thousands of aspiring tech learners to Pro Training Tech.',
    responsibilities: [
      'Manage and optimise Google Ads, Meta Ads, and YouTube campaigns',
      'Plan and execute SEO strategies to improve organic traffic and rankings',
      'Create, schedule, and analyse social media content across all platforms',
      'Collaborate with content writers to produce blogs, emails, and landing pages',
      'Track KPIs, prepare weekly performance reports, and recommend improvements',
    ],
    requirements: [
      '1+ years of experience in digital marketing for an education or tech brand',
      'Hands-on experience with Google Ads, Meta Business Suite, and analytics tools',
      'Good understanding of SEO best practices, keyword research, and on-page optimisation',
      'Creative mindset with the ability to craft compelling ad copy and social posts',
      'Data-driven approach — comfortable with Google Analytics and performance dashboards',
    ],
  },
]

const DEPTS    = ['All', 'Training', 'Placements', 'Marketing']
const PERKS    = [
  { icon: '💰', title: 'Competitive Salary',    desc: 'Market-leading compensation with performance bonuses reviewed annually.' },
  { icon: '🌱', title: 'Continuous Learning',   desc: 'Free access to all Pro Training Tech courses, industry certifications, and conference budget.' },
  { icon: '🏠', title: 'Hybrid / Remote Work',  desc: 'Flexible work arrangements for most roles — we trust our team to deliver.' },
  { icon: '🏥', title: 'Health Insurance',       desc: 'Comprehensive medical, dental, and vision cover for you and your family.' },
  { icon: '🤝', title: 'Impactful Work',         desc: 'Your work directly changes the careers of thousands of students each year.' },
  { icon: '🎉', title: 'Great Culture',          desc: 'A collaborative team that celebrates wins, supports each other, and has fun doing it.' },
]

const INIT_APPLY = { name: '', email: '', phone: '', position: '', experience: '', linkedIn: '', message: '' }

export default function Careers() {
  const [activeDept, setActiveDept]   = useState('All')
  const [expandedId, setExpandedId]   = useState(null)
  const [applyJob, setApplyJob]       = useState(null)
  const [applyForm, setApplyForm]     = useState(INIT_APPLY)
  const [applyDone, setApplyDone]     = useState(false)

  const filtered = activeDept === 'All' ? JOBS : JOBS.filter(j => j.dept === activeDept)

  const toggleJob = id => setExpandedId(prev => prev === id ? null : id)

  const openModal = job => {
    setApplyJob(job)
    setApplyForm(prev => ({ ...INIT_APPLY, position: job.title }))
    setApplyDone(false)
  }
  const closeModal = () => { setApplyJob(null); setApplyDone(false) }

  const handleApply = e => setApplyForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const submitApply = e => { e.preventDefault(); setApplyDone(true) }

  return (
    <div className="careers-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero__tag">🚀 Join Our Team</div>
          <h1>Build Careers — <em>Including Yours</em></h1>
          <p className="careers-hero__sub">
            Join the team that has trained 10L+ software professionals across India.
            We're looking for passionate educators, technologists, and creators to help us scale.
          </p>
          <div className="careers-hero__btns">
            <a href="#open-positions" className="btn btn-orange">See Open Roles →</a>
            <Link to="/contact" className="btn btn-outline-white">Send Speculative CV</Link>
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="careers-section careers-section--alt">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', fontWeight: 800, color: 'var(--txt)', marginBottom: '.6rem' }}>
              Why Work at <mark style={{ background: 'none', color: 'var(--orange)' }}>Pro Training Tech?</mark>
            </h2>
            <p style={{ fontSize: '.97rem', color: 'var(--txt-muted)', lineHeight: 1.7 }}>
              More than a job — a mission to make quality tech education accessible to every Indian student.
            </p>
          </div>
          <div className="careers-perks__grid">
            {PERKS.map(p => (
              <div key={p.title} className="careers-perk-card">
                <div className="careers-perk-card__icon">{p.icon}</div>
                <div className="careers-perk-card__title">{p.title}</div>
                <div className="careers-perk-card__desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="careers-filter-bar" id="open-positions">
        <div className="careers-filter-bar__inner">
          <span style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--txt-muted)', marginRight: '.25rem', whiteSpace: 'nowrap' }}>
            Department:
          </span>
          {DEPTS.map(d => (
            <button
              key={d}
              className={`careers-filter-btn${activeDept === d ? ' active' : ''}`}
              onClick={() => { setActiveDept(d); setExpandedId(null) }}
            >
              {d}
            </button>
          ))}
          <span className="careers-filter-count">{filtered.length} open {filtered.length === 1 ? 'role' : 'roles'}</span>
        </div>
      </div>

      {/* ── JOB CARDS ── */}
      <section className="careers-section">
        <div className="container">
          <div className="careers-grid">
            {filtered.map(job => (
              <div key={job.id} className={`job-card${expandedId === job.id ? ' expanded' : ''}`}>

                {/* Header (always visible) */}
                <div className="job-card__header" onClick={() => toggleJob(job.id)}>
                  <div className="job-card__left">
                    <div className="job-card__dept-icon" style={{ background: job.deptBg }}>{job.deptIcon}</div>
                    <div className="job-card__title">{job.title}</div>
                    <div className="job-card__meta">
                      <span className="job-card__tag">📍 {job.location}</span>
                      <span className="job-card__tag job-card__tag--type">🕐 {job.type}</span>
                      <span className="job-card__tag">🧑‍💼 {job.exp}</span>
                      {job.hot && <span className="job-card__tag job-card__tag--hot">🔥 Hot Role</span>}
                      {job.tags.map(t => <span key={t} className="job-card__tag">{t}</span>)}
                    </div>
                  </div>
                  <span className="job-card__chevron">▾</span>
                </div>

                {/* Expandable detail */}
                <div className="job-card__detail">
                  <div className="job-card__detail-inner">
                    <p style={{ fontSize: '.88rem', color: 'var(--txt-muted)', lineHeight: 1.65, marginTop: '1rem' }}>{job.about}</p>

                    <h4>Responsibilities</h4>
                    <ul>{job.responsibilities.map(r => <li key={r}>{r}</li>)}</ul>

                    <h4>Requirements</h4>
                    <ul>{job.requirements.map(r => <li key={r}>{r}</li>)}</ul>

                    <button className="job-card__apply-btn" onClick={() => openModal(job)}>
                      Apply for This Role →
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--txt-muted)' }}>
              No open roles in this department right now. <Link to="/contact" style={{ color: 'var(--orange)', fontWeight: 700 }}>Send us your CV anyway →</Link>
            </div>
          )}
        </div>
      </section>

      {/* ── APPLY MODAL ── */}
      {applyJob && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) closeModal() }}>
          <div className="apply-modal" role="dialog" aria-modal="true" aria-label={`Apply for ${applyJob.title}`}>
            <div className="apply-modal__head">
              <div className="apply-modal__head-left">
                <h2>Apply — {applyJob.title}</h2>
                <p>{applyJob.dept} · {applyJob.location}</p>
              </div>
              <button className="apply-modal__close" onClick={closeModal} aria-label="Close modal">✕</button>
            </div>

            <div className="apply-modal__body">
              {applyDone ? (
                <div className="apply-success">
                  <div className="apply-success__icon">✓</div>
                  <h3>Application Submitted!</h3>
                  <p>
                    Thanks for applying for <strong>{applyJob.title}</strong>. Our HR team
                    reviews applications within 3–5 business days and will email you next steps.
                  </p>
                </div>
              ) : (
                <form id="apply-form" onSubmit={submitApply}>
                  <div className="c-form__row">
                    <div className="c-field">
                      <label>Full Name *</label>
                      <input name="name" placeholder="Your full name" value={applyForm.name} onChange={handleApply} required />
                    </div>
                    <div className="c-field">
                      <label>Phone Number *</label>
                      <input name="phone" placeholder="10-digit number" value={applyForm.phone} onChange={handleApply} required />
                    </div>
                  </div>
                  <div className="c-field">
                    <label>Email Address *</label>
                    <input name="email" type="email" placeholder="you@example.com" value={applyForm.email} onChange={handleApply} required />
                  </div>
                  <div className="c-field">
                    <label>Role Applying For</label>
                    <input name="position" value={applyForm.position} readOnly style={{ background: 'var(--bg)', cursor: 'default' }} />
                  </div>
                  <div className="c-field">
                    <label>Years of Relevant Experience</label>
                    <select name="experience" value={applyForm.experience} onChange={handleApply}>
                      <option value="">Select</option>
                      <option>Fresher</option>
                      <option>1 – 2 years</option>
                      <option>2 – 4 years</option>
                      <option>4 – 7 years</option>
                      <option>7+ years</option>
                    </select>
                  </div>
                  <div className="c-field">
                    <label>LinkedIn Profile / Portfolio URL</label>
                    <input name="linkedIn" placeholder="https://linkedin.com/in/..." value={applyForm.linkedIn} onChange={handleApply} />
                  </div>
                  <div className="c-field">
                    <label>Cover Note</label>
                    <textarea name="message" placeholder="Why are you a great fit for this role?" value={applyForm.message} onChange={handleApply} />
                  </div>
                </form>
              )}
            </div>

            {!applyDone && (
              <div className="apply-modal__footer">
                <button className="c-btn-secondary" onClick={closeModal}>Cancel</button>
                <button className="c-btn-primary" type="submit" form="apply-form">Submit Application →</button>
              </div>
            )}
            {applyDone && (
              <div className="apply-modal__footer">
                <button className="c-btn-primary" onClick={closeModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

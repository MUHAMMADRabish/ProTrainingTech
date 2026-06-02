import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './About.css'

const STATS = [
  { value: '10L+',   label: 'Students Trained',   icon: '🎓', desc: 'Professionals across India & abroad' },
  { value: '22+',    label: 'Years of Excellence', icon: '🏆', desc: 'Pioneering IT education since 2003' },
  { value: '95%',    label: 'Placement Rate',      icon: '💼', desc: 'Placed in top MNCs & product companies' },
  { value: '200+',   label: 'Expert Trainers',     icon: '👨‍🏫', desc: 'Industry veterans with 8–20+ yrs exp' },
  { value: '400+',   label: 'Corporate Clients',   icon: '🏢', desc: 'Partnered with top IT companies globally' },
  { value: '1,800+', label: 'Colleges Reached',    icon: '🎓', desc: 'Students from colleges across 16 states' },
]

const VALUE_PROPS = [
  {
    icon: '🎯',
    title: 'Career-Focused Tech Academy',
    desc: 'Job-oriented training designed for real industry prospects. Every course module is mapped to actual job requirements, ensuring you learn exactly what employers look for.',
  },
  {
    icon: '👨‍💼',
    title: 'Industry Expert Guidance',
    desc: 'Learn directly from working professionals with 8–20+ years of real-world experience. Our trainers bring live project scenarios, war stories, and insider career advice to every session.',
  },
  {
    icon: '🚀',
    title: 'Future-Ready Curriculum',
    desc: 'Our in-depth curriculum is continuously aligned with current industry trends. We update course content every quarter to include the latest tools, frameworks, and certifications.',
  },
]

const TIMELINE = [
  {
    year: '2003',
    title: 'Humble Beginning',
    desc: 'Alex Carter founded Pro Training Tech with a noble vision to make IT education accessible to every deserving student. Started in a 4,000 SFT campus with a passionate team determined to bridge the gap between academia and industry.',
    side: 'left',
  },
  {
    year: '2007',
    title: 'Academic Training Achievement',
    desc: 'Crossed a landmark milestone of training 10 Lakh+ students from 1,800+ colleges across 16 states. Our academic training programmes became the most sought-after career launchpad in the region.',
    side: 'right',
  },
  {
    year: '2010',
    title: 'Corporate Training Expertise',
    desc: 'Established dedicated corporate training partnerships with 400+ companies including 100+ IT majors in Hyderabad. Upskilled thousands of working professionals with cutting-edge technology skills.',
    side: 'left',
  },
  {
    year: '2013',
    title: 'Digital Expansion',
    desc: 'Launched fully-live online training infrastructure, enabling students from across India and the globe to access the same quality education. Introduced AV recording studios for virtual training delivery.',
    side: 'right',
  },
  {
    year: '2016',
    title: 'Infrastructure Growth',
    desc: 'Expanded to a world-class 75,000 SFT campus with 100+ state-of-the-art classrooms, capable of hosting 12,000 students daily. Built a dedicated placement division and a developers team of 100+.',
    side: 'left',
  },
  {
    year: '2019',
    title: 'AI & Data Science Era',
    desc: 'Introduced industry-first Data Science, Machine Learning, Generative AI, and Agentic AI programmes with specialised lab infrastructure and real-world project frameworks.',
    side: 'right',
  },
  {
    year: '2021',
    title: 'Fully Online at Scale',
    desc: 'Scaled live online delivery to serve 12,000+ daily learners across India, USA, UK, and the Middle East. Launched dedicated placement drives for remote students with the same 95% success rate.',
    side: 'left',
  },
  {
    year: '2024',
    title: '22 Years & Beyond',
    desc: 'Today Pro Training Tech stands as India\'s most trusted IT training institute — with 10L+ students, 140+ expert faculty averaging 8+ years of experience, and a 95% placement record that remains unmatched.',
    side: 'right',
  },
]

const TRAINERS = [
  {
    name: 'Alex Carter',
    role: 'Founder & Lead Trainer — Java / J2EE',
    exp: '22+ Years',
    initials: 'NK',
    color: '#1e3a5f',
    skills: ['Core Java', 'Spring Boot', 'Hibernate', 'Microservices'],
    placed: '12,000+',
  },
  {
    name: 'Ravi Shankar',
    role: 'Senior Trainer — Python & Full Stack',
    exp: '16 Years',
    initials: 'RS',
    color: '#e05c2a',
    skills: ['Python', 'Django', 'FastAPI', 'React'],
    placed: '9,500+',
  },
  {
    name: 'Anil Gupta',
    role: 'Lead Trainer — DevOps & Cloud',
    exp: '14 Years',
    initials: 'AG',
    color: '#1e3a5f',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    placed: '7,800+',
  },
  {
    name: 'Dr. Ramesh Iyer',
    role: 'Principal Trainer — Data Science & AI',
    exp: '18 Years',
    initials: 'RI',
    color: '#e05c2a',
    skills: ['ML', 'Deep Learning', 'TensorFlow', 'NLP'],
    placed: '5,600+',
  },
  {
    name: 'Suresh Babu',
    role: 'Senior Trainer — .NET & Azure',
    exp: '17 Years',
    initials: 'SB',
    color: '#1e3a5f',
    skills: ['C#', '.NET Core', 'ASP.NET', 'Azure'],
    placed: '6,200+',
  },
  {
    name: 'Meena Kumari',
    role: 'Lead Trainer — Software Testing',
    exp: '13 Years',
    initials: 'MK',
    color: '#e05c2a',
    skills: ['Selenium', 'TestNG', 'JIRA', 'Postman'],
    placed: '8,900+',
  },
]

const MV = [
  {
    type: 'Mission',
    icon: '🎯',
    color: '#1e3a5f',
    heading: 'Our Mission',
    body: 'To deliver world-class, industry-aligned IT education that equips every learner — regardless of background or location — with the skills, confidence, and placement support needed to build a fulfilling technology career.',
    points: [
      'Affordable, high-quality training for all',
      'Curriculum updated every quarter with industry input',
      'Hands-on projects from day one',
      'Dedicated placement support until hired',
    ],
  },
  {
    type: 'Vision',
    icon: '🔭',
    color: '#e05c2a',
    heading: 'Our Vision',
    body: 'To be India\'s most trusted and student-first technology education platform — recognised globally for producing job-ready professionals who lead with both technical excellence and professional integrity.',
    points: [
      'Reach every district in India by 2027',
      'Partner with 1,000+ hiring companies',
      'Launch 50+ new-age tech programmes by 2026',
      'Build the largest alumni network in Indian IT education',
    ],
  },
  {
    type: 'Values',
    icon: '💡',
    color: '#1e3a5f',
    heading: 'Our Values',
    body: 'We are guided by a set of core values that shape every interaction — from the way our trainers teach, to how our counsellors guide students, to the culture we foster across all our centres.',
    points: [
      'Integrity in everything we do',
      'Student success above all metrics',
      'Continuous learning and innovation',
      'Inclusive and supportive community',
    ],
  },
]

export default function About() {
  return (
    <div className="about-page">

      <Navbar />

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <span className="about-hero__tag">About Pro Training Tech</span>
          <h1 className="about-hero__heading">
            The New Way to <em>Success</em> — <br />22+ Years of Transforming Careers
          </h1>
          <p className="about-hero__sub">
            Pro Training Tech is an entrepreneur's vision made real — built on the belief
            that every deserving student, regardless of background, deserves access to
            world-class IT education that lands them their dream career.
          </p>
          <div className="about-hero__btns">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <a href="#founder" className="btn btn-outline">Our Story</a>
          </div>
        </div>

        {/* Decorative orbs */}
        <span className="about-hero__orb about-hero__orb--1" />
        <span className="about-hero__orb about-hero__orb--2" />

        <div className="about-hero__wave">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats">
        <div className="about-stats__inner">
          {STATS.map((s) => (
            <div key={s.label} className="astat">
              <span className="astat__icon">{s.icon}</span>
              <span className="astat__val">{s.value}</span>
              <span className="astat__label">{s.label}</span>
              <span className="astat__desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="founder section" id="founder">
        <div className="container">
          <div className="founder__grid">

            {/* Visual */}
            <div className="founder__visual">
              <div className="founder__avatar-wrap">
                <div className="founder__avatar">NK</div>
                <div className="founder__avatar-ring" />
              </div>
              <div className="founder__badge-card founder__badge-card--tl">
                <span className="founder__badge-icon">🏆</span>
                <div>
                  <div className="founder__badge-val">22+ Years</div>
                  <div className="founder__badge-lbl">In Education</div>
                </div>
              </div>
              <div className="founder__badge-card founder__badge-card--br">
                <span className="founder__badge-icon">🎓</span>
                <div>
                  <div className="founder__badge-val">10L+ Students</div>
                  <div className="founder__badge-lbl">Trained</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="founder__content">
              <span className="sec-tag">Founder's Story</span>
              <h2 className="founder__heading">
                From a Single Room to <mark>India's #1</mark> IT Institute
              </h2>
              <p className="founder__body">
                In 2003, <strong>Alex Carter</strong> — an entrepreneur armed with a noble vision
                to make a difference in the career aspirations of students — founded Pro Training Tech
                in a 4,000 SFT campus with an unshakeable commitment: every deserving student
                should have access to world-class IT education.
              </p>
              <p className="founder__body">
                The word spread fast. Not through advertising, but because every student got a job.
                That promise — <em>"your success is our personal responsibility"</em> — became
                the founding principle. Within a decade, what started as a single campus had grown
                to train 10 Lakh+ students from 1,800+ colleges across 16 states.
              </p>
              <p className="founder__body">
                Today, Pro Training Tech operates a 75,000 SFT campus with 100+ state-of-the-art
                classrooms, 140+ expert faculty, and partnerships with 400+ corporate clients.
                The philosophy has never changed — every student is treated as an individual
                whose success is our personal responsibility. This vision earned an International
                Achievers Award for Education Excellence.
              </p>
              <div className="founder__quote">
                <span className="founder__quote-mark">&ldquo;</span>
                <p>
                  Technology changes every year. What never changes is the impact a great teacher
                  can have on a student's entire life.
                </p>
                <footer>— Alex Carter, Founder &amp; Managing Director</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITIONS ── */}
      <section className="about-values section">
        <div className="container">
          <div className="sec-head">
            <span className="sec-tag">What We Offer</span>
            <h2>Why Choose <mark>Pro Training Tech?</mark></h2>
            <p>Three pillars that set us apart and deliver real career outcomes for every student.</p>
          </div>
          <div className="value-props-grid">
            {VALUE_PROPS.map((vp) => (
              <div key={vp.title} className="vp-card">
                <div className="vp-card__icon-wrap">
                  <span className="vp-card__icon">{vp.icon}</span>
                </div>
                <h3 className="vp-card__title">{vp.title}</h3>
                <p className="vp-card__desc">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="mv-section section">
        <div className="container">
          <div className="sec-head">
            <span className="sec-tag">What Drives Us</span>
            <h2>Mission, <mark>Vision</mark> &amp; Values</h2>
            <p>Three pillars that define every decision we make — from curriculum design to placement support.</p>
          </div>
          <div className="mv-grid">
            {MV.map((item) => (
              <div key={item.type} className="mv-card" style={{ '--mv-color': item.color }}>
                <div className="mv-card__icon-wrap" style={{ background: item.color }}>
                  <span className="mv-card__icon">{item.icon}</span>
                </div>
                <h3 className="mv-card__heading">{item.heading}</h3>
                <p className="mv-card__body">{item.body}</p>
                <ul className="mv-card__list">
                  {item.points.map((pt) => (
                    <li key={pt}>
                      <span className="mv-card__check" style={{ color: item.color }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section section">
        <div className="container">
          <div className="sec-head">
            <span className="sec-tag">Our Journey</span>
            <h2>22+ Years of <mark>Milestones</mark></h2>
            <p>Every year has been a story of growth, innovation, and thousands of careers transformed.</p>
          </div>

          <div className="timeline">
            <div className="timeline__spine" />
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className={`tl-item tl-item--${item.side}`}
              >
                <div className="tl-item__dot">
                  <span className="tl-item__year">{item.year}</span>
                </div>
                <div className="tl-item__card">
                  <h3 className="tl-item__title">{item.title}</h3>
                  <p className="tl-item__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINERS ── */}
      <section className="trainers-section section">
        <div className="container">
          <div className="sec-head">
            <span className="sec-tag">Meet the Experts</span>
            <h2>Our <mark>Expert Trainers</mark></h2>
            <p>Industry veterans who bring real-world experience into every session — your success is their passion.</p>
          </div>
          <div className="trainers-grid">
            {TRAINERS.map((t) => (
              <div key={t.name} className="trainer-card">
                <div className="trainer-card__top" style={{ background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}cc 100%)` }}>
                  <div className="trainer-card__avatar">{t.initials}</div>
                  <div className="trainer-card__exp-badge">{t.exp} Exp</div>
                </div>
                <div className="trainer-card__body">
                  <h3 className="trainer-card__name">{t.name}</h3>
                  <p className="trainer-card__role">{t.role}</p>
                  <div className="trainer-card__skills">
                    {t.skills.map((s) => (
                      <span key={s} className="trainer-card__skill">{s}</span>
                    ))}
                  </div>
                  <div className="trainer-card__placed">
                    <span className="trainer-card__placed-icon">🎓</span>
                    <span><strong>{t.placed}</strong> students placed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="about-cta">
        <div className="about-cta__inner">
          <div className="about-cta__text">
            <h2>Join the Pro Training Tech Family</h2>
            <p>
              Become part of a legacy — enrol today and let our experts guide
              you to the career you deserve.
            </p>
          </div>
          <div className="about-cta__actions">
            <Link to="/courses" className="btn btn-white">Browse Courses</Link>
            <Link to="/contact" className="btn btn-outline-white">Talk to a Counsellor</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/PT-logo.png" alt="Pro Training Tech" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <p className="footer__tagline">
              One Stop Career Solution
            </p>
            <div className="footer__socials">
              {[['f', 'Facebook'], ['in', 'LinkedIn'], ['◈', 'Instagram'], ['▶', 'YouTube'], ['♪', 'TikTok']].map(([icon, label]) => (
                <a key={label} href="https://protrainingtech.com" className="footer__social" aria-label={label} target="_blank" rel="noreferrer">{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/courses', 'Courses'], ['/about', 'About Us'],
                ['/contact', 'Contact'], ['/blog', 'Blog']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Popular Courses</h4>
            <ul>
              {['Java Full Stack', 'Python Full Stack', 'DevOps & AWS',
                'Data Science & ML', 'Software Testing', 'Salesforce'].map((c) => (
                <li key={c}><Link to="/courses">{c}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <h4>Contact Us</h4>
            <ul>
              <li><span>📍</span><span>1340 Old Chain Bridge Rd, McLean, VA 22101</span></li>
              <li><span>📞</span><span>+1-703-565-1995</span></li>
              <li><span>✉️</span><span>info@protrainingtech.com</span></li>
              <li><span>🕐</span><span>Mon – Sat: 9 AM – 7 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <span>© 2025 Pro Training Tech. All rights reserved.</span>
            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CorporateTraining.css'

const STUDENTS = [
  { id: 1,  name: 'Debashis Behera',   role: 'Java Developer', company: 'Emagia Corporation',   img: 'https://images.nareshit.com/3.jpg' },
  { id: 2,  name: 'Rupal Borkar',      role: 'Web Developer',  company: 'Mphasis Ltd',          img: 'https://images.nareshit.com/5.jpg' },
  { id: 3,  name: 'Sai Bharathi',      role: 'Web Developer',  company: 'Conseqta Technology',  img: 'https://images.nareshit.com/10.jpg' },
  { id: 4,  name: 'Indrani Malladi',   role: 'QA Engineer',    company: 'Celium Pvt Ltd',       img: 'https://images.nareshit.com/6.jpg' },
  { id: 5,  name: 'Balaji Kumar',      role: 'Java Developer', company: 'Alodial Infotech',     img: 'https://images.nareshit.com/1.jpg' },
  { id: 6,  name: 'Anshuman Swain',    role: 'Web Developer',  company: 'Conseqta Technology',  img: 'https://images.nareshit.com/Oct_24-2.jpg' },
  { id: 7,  name: 'Shreya V Tawalare', role: 'Java Developer', company: 'Sisnx Techno',         img: 'https://images.nareshit.com/Oct_24-1.jpg' },
  { id: 8,  name: 'Sameer',            role: 'Web Developer',  company: 'Ikerly Pvt Ltd',       img: 'https://images.nareshit.com/Oct_24-3.jpg' },
  { id: 9,  name: 'K Tejeswari',       role: 'Java Developer', company: 'Kitechi',              img: 'https://images.nareshit.com/Oct_24-4.jpg' },
  { id: 10, name: 'Ganga Muthyala',    role: 'QA Engineer',    company: 'SS Solutions Pvt Ltd', img: 'https://images.nareshit.com/Oct_24-5.jpg' },
]

const PER_PAGE    = 5
const TOTAL_PAGES = Math.ceil(STUDENTS.length / PER_PAGE)

function LinkedInIcon() {
  return (
    <svg className="corp-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function CorporateTraining() {
  const [page, setPage] = useState(0)
  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="corp-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="corp-info">
        <div className="corp-info__inner">

          {/* Left column */}
          <div className="corp-info__left">
            <h2 className="corp-info__label">Corporate Training</h2>
            <img
              src="https://images.nareshit.com/images/image_1706336807195.jpeg"
              alt="Corporate Training at Pro Training Tech"
              className="corp-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="corp-info__right">
            <h1 className="corp-info__heading">
              Elevate Your Team with Pro Training Tech&rsquo;s
              Corporate Training Programs
            </h1>

            <p className="corp-info__para">
              Pro Training Tech offers comprehensive corporate training solutions designed to empower
              your workforce with the latest technology skills. Our programmes are tailored to meet
              the unique needs of your organisation, ensuring maximum relevance and impact for every
              team member.
            </p>

            <p className="corp-info__para">
              Whether you need to upskill existing employees, onboard new hires, or drive digital
              transformation across departments, our expert-led corporate training programmes deliver
              measurable results aligned with your business objectives.
            </p>

            <p className="corp-info__sub-heading">
              Why Choose Pro Training Tech for Corporate Training:
            </p>

            <ul className="corp-info__bullets">
              <li>
                <span className="corp-bullet-dot" />
                <span><strong>Customized Training Solutions</strong> — Training programmes designed and adapted to align with your organisation&rsquo;s specific goals, tools, and workflows.</span>
              </li>
              <li>
                <span className="corp-bullet-dot" />
                <span><strong>Cutting-Edge Technologies</strong> — Stay ahead with training on the latest frameworks, platforms, and emerging technologies relevant to your industry.</span>
              </li>
              <li>
                <span className="corp-bullet-dot" />
                <span><strong>Hands-On Practical Learning</strong> — Real-world projects and lab exercises ensure your team can immediately apply new skills on the job.</span>
              </li>
              <li>
                <span className="corp-bullet-dot" />
                <span><strong>Expert-Led Training Sessions</strong> — Learn from seasoned industry professionals with deep domain expertise and corporate delivery experience.</span>
              </li>
              <li>
                <span className="corp-bullet-dot" />
                <span><strong>Tailored Curriculum</strong> — Course content customised to your technology stack, team skill level, and business context.</span>
              </li>
              <li>
                <span className="corp-bullet-dot" />
                <span><strong>Flexibility in Training Delivery</strong> — Choose from on-site, online, or hybrid formats with flexible scheduling to minimise disruption to operations.</span>
              </li>
            </ul>

            <Link to="/contact" className="corp-enquiry-btn">Enquiry</Link>
          </div>

        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="corp-placed">
        <div className="corp-placed__inner">

          <div className="corp-placed__head">
            <h2 className="corp-placed__title">Placed Students</h2>
            <p className="corp-placed__sub">Explore new and trending free online courses.</p>
          </div>

          <div className="corp-carousel">
            <button
              className="corp-carousel__arrow"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >&#8249;</button>

            <div className="corp-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="corp-card">
                  <div className="corp-card__linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="corp-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="corp-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="corp-card__name">{s.name}</div>
                  <div className="corp-card__role">{s.role}</div>
                  <div className="corp-card__company">
                    <span className="corp-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="corp-carousel__arrow"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >&#8250;</button>
          </div>

          <div className="corp-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`corp-carousel__dot${page === i ? ' corp-carousel__dot--active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

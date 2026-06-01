import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './RealTimeProjects.css'

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
    <svg className="rtp-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function RealTimeProjects() {
  const [page, setPage] = useState(0)
  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="rtp-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="rtp-info">
        <div className="rtp-info__inner">

          {/* Left column */}
          <div className="rtp-info__left">
            <h2 className="rtp-info__label">Real-Time Projects</h2>
            <img
              src="https://images.nareshit.com/images/image_1706336260793.jpg"
              alt="Real-Time Projects at Pro Training Tech"
              className="rtp-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="rtp-info__right">
            <h1 className="rtp-info__heading">
              Learn by Doing: Real-World Projects for Practical Mastery
            </h1>

            <p className="rtp-info__para">
              At Pro Training Tech, we believe the best way to learn technology is to apply it
              directly to real-world problems. Our real-time projects programme bridges the gap
              between classroom knowledge and industry expectations, giving you tangible, portfolio-ready
              experience before you even start your career.
            </p>

            <p className="rtp-info__para">
              Every project in our programme is modelled on actual scenarios from the IT industry,
              ensuring that the skills you build are immediately relevant and valued by employers.
              Work alongside expert mentors, collaborate with peers, and develop the problem-solving
              confidence that separates great developers from average ones.
            </p>

            <p className="rtp-info__sub-heading">
              Key Features of Our Software Training Institute:
            </p>

            <ul className="rtp-info__bullets">
              <li>
                <span className="rtp-bullet-dot" />
                <span>Courses are structured around real-world scenarios prevalent in the IT industry, ensuring immediate practical relevance for every learner.</span>
              </li>
              <li>
                <span className="rtp-bullet-dot" />
                <span>Comprehensive software courses address the latest industry demands, keeping you aligned with what top companies are actively hiring for.</span>
              </li>
              <li>
                <span className="rtp-bullet-dot" />
                <span>Hands-on projects enable the application of theoretical knowledge, transforming concepts into working, deployable software solutions.</span>
              </li>
              <li>
                <span className="rtp-bullet-dot" />
                <span>State-of-the-art lab facility for practical experimentation, equipped with the tools and environments used in professional development teams.</span>
              </li>
              <li>
                <span className="rtp-bullet-dot" />
                <span>Mentor support to navigate and overcome real-world challenges in the IT domain, with guidance from experienced industry professionals at every step.</span>
              </li>
            </ul>

            <Link to="/contact" className="rtp-enquiry-btn">Enquiry</Link>
          </div>

        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="rtp-placed">
        <div className="rtp-placed__inner">

          <div className="rtp-placed__head">
            <h2 className="rtp-placed__title">Placed Students</h2>
            <p className="rtp-placed__sub">Explore new and trending free online courses.</p>
          </div>

          <div className="rtp-carousel">
            <button
              className="rtp-carousel__arrow"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >&#8249;</button>

            <div className="rtp-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="rtp-card">
                  <div className="rtp-card__linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="rtp-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="rtp-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="rtp-card__name">{s.name}</div>
                  <div className="rtp-card__role">{s.role}</div>
                  <div className="rtp-card__company">
                    <span className="rtp-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="rtp-carousel__arrow"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >&#8250;</button>
          </div>

          <div className="rtp-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`rtp-carousel__dot${page === i ? ' rtp-carousel__dot--active' : ''}`}
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

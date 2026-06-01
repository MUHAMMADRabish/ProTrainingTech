import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PlacementRegistration.css'

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
    <svg className="plr-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function PlacementRegistration() {
  const [page, setPage] = useState(0)
  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="plr-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="plr-info">
        <div className="plr-info__inner">

          {/* Left column */}
          <div className="plr-info__left">
            <h2 className="plr-info__label">Placement Registration</h2>
            <img
              src="https://images.nareshit.com/images/image_1706336807195.jpeg"
              alt="Placement Registration at Pro Training Tech"
              className="plr-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="plr-info__right">
            <h1 className="plr-info__heading">
              Navigating Placement-Oriented IT Courses
            </h1>

            <p className="plr-info__para">
              Embarking on a journey towards a successful IT career involves strategic skill
              development and targeted preparation. At Pro Training Tech, our placement-oriented
              courses are crafted to align with the precise needs of today&rsquo;s IT industry,
              equipping you with the knowledge, practical experience, and professional readiness
              required to secure your ideal role.
            </p>

            <p className="plr-info__para">
              Begin your journey by understanding the current requirements of the IT industry.
              Our placement-focused curriculum is built in close collaboration with hiring
              partners and industry experts, ensuring every module you complete directly
              contributes to your employability and career advancement.
            </p>

            <p className="plr-info__para">
              By completing these Programmes, you&rsquo;ll have a comprehensive understanding of the
              courses, tools, and technologies that employers actively seek. Combined with our
              dedicated placement support — including mock interviews, resume building, and direct
              referrals — you&rsquo;ll be fully prepared to take the next step in your IT career.
            </p>

            <div className="plr-info__btns">
              <Link to="/course-listing" className="plr-btn-enroll">Enroll Now</Link>
              <Link to="/contact"        className="plr-btn-enquiry">Enquiry</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="plr-placed">
        <div className="plr-placed__inner">

          <div className="plr-placed__head">
            <h2 className="plr-placed__title">Placed Students</h2>
            <p className="plr-placed__sub">Explore new and trending free online courses.</p>
          </div>

          <div className="plr-carousel">
            <button
              className="plr-carousel__arrow"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >&#8249;</button>

            <div className="plr-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="plr-card">
                  <div className="plr-card__linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="plr-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="plr-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="plr-card__name">{s.name}</div>
                  <div className="plr-card__role">{s.role}</div>
                  <div className="plr-card__company">
                    <span className="plr-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="plr-carousel__arrow"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >&#8250;</button>
          </div>

          <div className="plr-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`plr-carousel__dot${page === i ? ' plr-carousel__dot--active' : ''}`}
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

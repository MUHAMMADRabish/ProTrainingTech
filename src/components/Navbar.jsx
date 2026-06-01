import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const COURSES_LINKS = [
  { to: '/course-listing',         label: 'All Courses' },
  { to: '/full-stack-courses',    label: 'Full Stack Courses' },
  { to: '/job-guarantee-courses', label: 'Job Assistance Courses' },
  { to: '/certification-courses', label: 'Certification courses' },
  { to: '/trending-course',       label: 'Trending Courses' },
  { to: '/internships',           label: 'Internships' },
]

const TRAINING_LINKS = [
  { to: '/new-batches',                        label: 'New Batches' },
  { to: '/interview-questions/category',        label: 'Interview Questions' },
  { to: '/blog',                               label: 'Blog' },
  { to: '/training/placement-registration',    label: 'Placement Registration' },
  { to: '/training/job-assistance',             label: 'Job Assistance' },
]

const SERVICES_LINKS = [
  { to: '/services/online-training',    label: 'Online Training' },
  { to: '/services/classroom-training', label: 'Classroom Training' },
  { to: '/services/corporate-training', label: 'Corporate Training' },
  { to: '/services/workshops',          label: 'Workshops' },
  { to: '/services/weekend-training',   label: 'Weekend Training' },
  { to: '/services/real-time-projects', label: 'Real-Time Projects' },
]

const COMPANY_LINKS = [
  { to: '/about',        label: 'About Us' },
  { to: '/our-theme',    label: 'Our Theme' },
  { to: '/trainers',     label: 'Our Trainers' },
  { to: '/testimonials', label: 'Testimonials' },
]

const MEDIA_LINKS = [
  { to: '/blog', label: 'Blog' },
  { to: '/news', label: 'News' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [searchQuery,  setSearchQuery]  = useState('')
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const closeAll = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  const handleSearch = e => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/courses?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const toggleDropdown = (name) =>
    setOpenDropdown(prev => prev === name ? null : name)

  const isCoursesActive  = COURSES_LINKS.some(l => l.to === pathname)
  const isTrainingActive = TRAINING_LINKS.some(l => l.to === pathname)
  const isServicesActive = SERVICES_LINKS.some(l => l.to === pathname)
  const isCompanyActive  = COMPANY_LINKS.some(l => l.to === pathname)
  const isMediaActive    = MEDIA_LINKS.some(l => l.to === pathname)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <Link to="/" className="navbar__logo" onClick={closeAll}>
          <img src="https://protrainingtech.com/wp-content/uploads/2022/12/cropped-Pro-Training-Techs-Logo-2.png" alt="Pro Training Tech" style={{ height: '42px', objectFit: 'contain' }} />
        </Link>

        <form className="navbar__search" onSubmit={handleSearch} role="search">
          <input
            type="text"
            placeholder="Search for a course..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            aria-label="Search courses"
          />
          <span className="navbar__search-icon">&#128269;</span>
        </form>

        <button
          className={`navbar__burger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links${menuOpen ? ' is-open' : ''}`}>

          {/* ── Simple top-level links ─── */}
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={closeAll}>
              Home
            </NavLink>
          </li>

          {/* ── Courses dropdown ─────── */}
          <li className={`navbar__dropdown-wrap${openDropdown === 'courses' ? ' is-open' : ''}`}>
            <button
              className={`navbar__dropdown-trigger${isCoursesActive ? ' nav-active' : ''}`}
              onClick={() => toggleDropdown('courses')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'courses'}
            >
              Courses <span className="navbar__chevron" aria-hidden="true">▾</span>
            </button>
            <ul className="navbar__dropdown" role="menu">
              {COURSES_LINKS.map(({ to, label }) => (
                <li key={to} role="none">
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                    onClick={closeAll}
                    role="menuitem"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* ── Training dropdown ────── */}
          <li className={`navbar__dropdown-wrap${openDropdown === 'training' ? ' is-open' : ''}`}>
            <button
              className={`navbar__dropdown-trigger${isTrainingActive ? ' nav-active' : ''}`}
              onClick={() => toggleDropdown('training')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'training'}
            >
              Training <span className="navbar__chevron" aria-hidden="true">▾</span>
            </button>
            <ul className="navbar__dropdown" role="menu">
              {TRAINING_LINKS.map(({ to, label }) => (
                <li key={to} role="none">
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                    onClick={closeAll}
                    role="menuitem"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/internships" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={closeAll}>
              Internships
            </NavLink>
          </li>

          {/* ── Services dropdown ────── */}
          <li className={`navbar__dropdown-wrap${openDropdown === 'services' ? ' is-open' : ''}`}>
            <button
              className={`navbar__dropdown-trigger${isServicesActive ? ' nav-active' : ''}`}
              onClick={() => toggleDropdown('services')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'services'}
            >
              Services <span className="navbar__chevron" aria-hidden="true">▾</span>
            </button>
            <ul className="navbar__dropdown" role="menu">
              {SERVICES_LINKS.map(({ to, label }) => (
                <li key={to} role="none">
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                    onClick={closeAll}
                    role="menuitem"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* ── Company dropdown ─────── */}
          <li className={`navbar__dropdown-wrap${openDropdown === 'company' ? ' is-open' : ''}`}>
            <button
              className={`navbar__dropdown-trigger${isCompanyActive ? ' nav-active' : ''}`}
              onClick={() => toggleDropdown('company')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'company'}
            >
              Company <span className="navbar__chevron" aria-hidden="true">▾</span>
            </button>
            <ul className="navbar__dropdown" role="menu">
              {COMPANY_LINKS.map(({ to, label }) => (
                <li key={to} role="none">
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                    onClick={closeAll}
                    role="menuitem"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* ── Media dropdown ───────── */}
          <li className={`navbar__dropdown-wrap${openDropdown === 'media' ? ' is-open' : ''}`}>
            <button
              className={`navbar__dropdown-trigger${isMediaActive ? ' nav-active' : ''}`}
              onClick={() => toggleDropdown('media')}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'media'}
            >
              Media <span className="navbar__chevron" aria-hidden="true">▾</span>
            </button>
            <ul className="navbar__dropdown" role="menu">
              {MEDIA_LINKS.map(({ to, label }) => (
                <li key={to} role="none">
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                    onClick={closeAll}
                    role="menuitem"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* ── Contact ──────────────── */}
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''} onClick={closeAll}>
              Contact
            </NavLink>
          </li>

        </ul>

        <Link to="/contact" className="navbar__enroll" onClick={closeAll}>
          Enroll Now
        </Link>

      </div>
    </nav>
  )
}

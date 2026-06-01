import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Blog.css'

const CATEGORIES = [
  'All', 'Data Science', 'Cloud Computing', 'DevOps', 'Software Testing',
  'Full Stack', 'Operating System', 'Programming', 'Placement Assistance',
  'Web Development', 'Database', 'Frameworks', 'Digital Marketing',
  'Analytics', 'DevSecOps', 'Automations',
]

const POSTS = [
  {
    id: 1,
    title: 'Ollama Unveils Desktop App for macOS & Windows with Image & Code File Support',
    excerpt: 'The new Ollama GUI eliminates command-line requirements, introducing drag-and-drop for text files and PDFs, multimodal image input, and adjustable context length — making local LLMs accessible to everyone.',
    category: 'DevSecOps',
    author: 'Alex Carter',
    authorInitials: 'AC',
    authorColor: '#1e3a5f',
    date: 'May 20, 2025',
    readTime: '5 min read',
    icon: '🤖',
    colorA: '#1e3a5f',
    colorB: '#2d5a8e',
    featured: true,
    tags: ['Ollama', 'LLM', 'Desktop App'],
  },
  {
    id: 2,
    title: '7 Game-Changing Cloud Computing Trends Shaping Business Success in 2025',
    excerpt: 'From AI in cloud operations and edge integration to quantum accessibility and sustainability imperatives — we break down the seven cloud trends your architecture decisions cannot ignore this year.',
    category: 'Cloud Computing',
    author: 'Anil Gupta',
    authorInitials: 'AG',
    authorColor: '#1565c0',
    date: 'May 15, 2025',
    readTime: '7 min read',
    icon: '☁️',
    colorA: '#1565c0',
    colorB: '#1976d2',
    featured: false,
    tags: ['Cloud', 'AI', 'Architecture'],
  },
  {
    id: 3,
    title: 'HCLTech to Create 5,000 New Jobs with Expansion in Hyderabad',
    excerpt: 'HCLTech announces a 3,20,000 sq. ft. facility expansion in Hyderabad with focus areas in cloud computing, AI, and digital transformation. The Gold-certified green facility will house five city-wide centres.',
    category: 'Placement Assistance',
    author: 'Dr. Ramesh Iyer',
    authorInitials: 'RI',
    authorColor: '#e05c2a',
    date: 'May 10, 2025',
    readTime: '4 min read',
    icon: '🏢',
    colorA: '#e05c2a',
    colorB: '#f07040',
    featured: false,
    tags: ['HCLTech', 'Jobs', 'Hyderabad'],
  },
  {
    id: 4,
    title: 'Spring Boot vs Django: Which Backend Framework Should You Learn in 2025?',
    excerpt: 'Both Spring Boot and Django are industry heavyweights. We compare their learning curves, job market demand, performance, and ecosystem so you can make an informed choice for your career path.',
    category: 'Full Stack',
    author: 'Ravi Shankar',
    authorInitials: 'RS',
    authorColor: '#1e3a5f',
    date: 'May 5, 2025',
    readTime: '6 min read',
    icon: '⚔️',
    colorA: '#1e3a5f',
    colorB: '#2d5a8e',
    featured: false,
    tags: ['Spring Boot', 'Django', 'Backend'],
  },
  {
    id: 5,
    title: 'Telangana Minister Announces Two New IT Parks in Hyderabad\'s Outskirts',
    excerpt: 'Dew Software is investing Rs. 100 crore in two suburban IT parks targeting 900 professionals over five years. The announcement signals Hyderabad\'s continued expansion as India\'s premier IT destination.',
    category: 'Placement Assistance',
    author: 'Alex Carter',
    authorInitials: 'AC',
    authorColor: '#2e7d32',
    date: 'Apr 28, 2025',
    readTime: '3 min read',
    icon: '🏗️',
    colorA: '#2e7d32',
    colorB: '#388e3c',
    featured: false,
    tags: ['IT Parks', 'Telangana', 'Jobs'],
  },
  {
    id: 6,
    title: 'Kubernetes in Production: 10 Common Mistakes and How to Avoid Them',
    excerpt: 'Deploying Kubernetes to production is vastly different from running it locally. Here are the ten pitfalls most teams hit — and the patterns that fix them permanently.',
    category: 'DevOps',
    author: 'Anil Gupta',
    authorInitials: 'AG',
    authorColor: '#1a5276',
    date: 'Apr 22, 2025',
    readTime: '10 min read',
    icon: '⚙️',
    colorA: '#1a5276',
    colorB: '#154360',
    featured: false,
    tags: ['Kubernetes', 'Docker', 'DevOps'],
  },
  {
    id: 7,
    title: 'Machine Learning for Beginners: Your First Model with Python & Scikit-Learn',
    excerpt: 'No math PhD required. This beginner-friendly guide walks you through loading data, training a classification model, and evaluating results — all in under 50 lines of Python.',
    category: 'Data Science',
    author: 'Dr. Ramesh Iyer',
    authorInitials: 'RI',
    authorColor: '#6a1b9a',
    date: 'Apr 15, 2025',
    readTime: '9 min read',
    icon: '🤖',
    colorA: '#6a1b9a',
    colorB: '#8e24aa',
    featured: false,
    tags: ['Python', 'ML', 'Scikit-Learn'],
  },
  {
    id: 8,
    title: 'Selenium vs Playwright vs Cypress: The 2025 Test Automation Showdown',
    excerpt: 'The test automation landscape has changed dramatically. We pit three leading frameworks head-to-head on speed, reliability, browser support, and hiring demand in the current market.',
    category: 'Software Testing',
    author: 'Mr. Karthik',
    authorInitials: 'KT',
    authorColor: '#e05c2a',
    date: 'Apr 8, 2025',
    readTime: '8 min read',
    icon: '🧪',
    colorA: '#e05c2a',
    colorB: '#f07040',
    featured: false,
    tags: ['Selenium', 'Playwright', 'Testing'],
  },
  {
    id: 9,
    title: 'React 19 Is Here — What Every Full Stack Developer Needs to Know',
    excerpt: 'React 19 ships the Actions API, server components out of the box, and a new compiler. We break down every change and what it means for your day-to-day development workflow.',
    category: 'Web Development',
    author: 'Mr. Prasad',
    authorInitials: 'PR',
    authorColor: '#1565c0',
    date: 'Apr 1, 2025',
    readTime: '9 min read',
    icon: '⚛️',
    colorA: '#1565c0',
    colorB: '#1976d2',
    featured: false,
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    id: 10,
    title: 'Terraform Best Practices: Structuring Your IaC for Teams of Any Size',
    excerpt: 'Infrastructure as Code is only as good as its structure. Learn module patterns, remote state management, and environment separation used by engineering teams at scale.',
    category: 'DevOps',
    author: 'Anil Gupta',
    authorInitials: 'AG',
    authorColor: '#e05c2a',
    date: 'Mar 25, 2025',
    readTime: '11 min read',
    icon: '🔧',
    colorA: '#e05c2a',
    colorB: '#f07040',
    featured: false,
    tags: ['Terraform', 'IaC', 'AWS'],
  },
  {
    id: 11,
    title: 'Power BI vs Tableau in 2025: Which Analytics Tool Should You Master First?',
    excerpt: 'Both tools dominate the analytics market, but they serve different buyer profiles. We compare pricing, learning curve, job openings, and which industries prefer each tool.',
    category: 'Analytics',
    author: 'Mr. Vijay Rama Raju',
    authorInitials: 'VR',
    authorColor: '#1e3a5f',
    date: 'Mar 18, 2025',
    readTime: '6 min read',
    icon: '📊',
    colorA: '#1e3a5f',
    colorB: '#2d5a8e',
    featured: false,
    tags: ['Power BI', 'Tableau', 'Analytics'],
  },
  {
    id: 12,
    title: 'India\'s IT Hiring Report 2025: Skills in Highest Demand Right Now',
    excerpt: 'We analysed 1,20,000 job listings across LinkedIn, Indeed, and Naukri to surface the most in-demand tech skills, highest paying roles, and the cities hiring the fastest.',
    category: 'Placement Assistance',
    author: 'Alex Carter',
    authorInitials: 'AC',
    authorColor: '#6a1b9a',
    date: 'Mar 10, 2025',
    readTime: '12 min read',
    icon: '📈',
    colorA: '#6a1b9a',
    colorB: '#8e24aa',
    featured: false,
    tags: ['Hiring', 'India', 'Tech Jobs'],
  },
]

const PAGE_SIZE = 6

export default function Blog() {
  const [search,    setSearch]    = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const [page,      setPage]      = useState(1)
  const [email,     setEmail]     = useState('')
  const [subDone,   setSubDone]   = useState(false)

  // Reset to page 1 whenever filter/search changes
  useEffect(() => { setPage(1) }, [search, activeTab])

  const featured = POSTS.find((p) => p.featured)

  const filtered = POSTS.filter((p) => {
    const matchCat    = activeTab === 'All' || p.category === activeTab
    const q           = search.toLowerCase()
    const matchSearch = !q
      || p.title.toLowerCase().includes(q)
      || p.excerpt.toLowerCase().includes(q)
      || p.author.toLowerCase().includes(q)
      || p.tags.some((t) => t.toLowerCase().includes(q))
    return matchCat && matchSearch
  })

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) { setSubDone(true) }
  }

  return (
    <div className="blog-page">

      <Navbar />

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero__inner">
          <span className="blog-hero__tag">Pro Training Tech Blog</span>
          <h1 className="blog-hero__heading">
            Software Training News, Tech <em>Insights &amp; Career Guides</em>
          </h1>
          <p className="blog-hero__sub">
            Browse articles by domain — Data Science, Cloud, DevOps, Full Stack, and more.
            Practical content written by industry experts to accelerate your tech career.
          </p>
          <div className="blog-hero__meta">
            <span className="blog-hero__pill">📝 {POSTS.length} Articles</span>
            <span className="blog-hero__pill">🏷️ {CATEGORIES.length - 1} Categories</span>
            <span className="blog-hero__pill">✍️ 12 Expert Authors</span>
          </div>
        </div>
        <span className="blog-hero__orb blog-hero__orb--1" />
        <span className="blog-hero__orb blog-hero__orb--2" />
        <div className="blog-hero__wave">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && activeTab === 'All' && !search && page === 1 && (
        <section className="featured-section">
          <div className="featured-section__inner">
            <div className="sec-head" style={{ marginBottom: '1.75rem' }}>
              <span className="sec-tag">Editor's Pick</span>
              <h2>Featured <mark>Article</mark></h2>
            </div>
            <div className="featured-card">
              <div
                className="featured-card__thumb"
                style={{ background: `linear-gradient(135deg, ${featured.colorA} 0%, ${featured.colorB} 100%)` }}
              >
                <span className="featured-card__thumb-icon">{featured.icon}</span>
                <span className="featured-card__thumb-cat">{featured.category}</span>
              </div>
              <div className="featured-card__body">
                <div className="featured-card__tags">
                  {featured.tags.map((t) => (
                    <span key={t} className="bcard__tag">{t}</span>
                  ))}
                </div>
                <h2 className="featured-card__title">{featured.title}</h2>
                <p className="featured-card__excerpt">{featured.excerpt}</p>
                <div className="featured-card__meta">
                  <div className="bcard__author">
                    <span className="bcard__author-avatar" style={{ background: featured.authorColor }}>
                      {featured.authorInitials}
                    </span>
                    <span className="bcard__author-name">{featured.author}</span>
                  </div>
                  <span className="bcard__dot" />
                  <span className="bcard__date">{featured.date}</span>
                  <span className="bcard__dot" />
                  <span className="bcard__readtime">⏱ {featured.readTime}</span>
                </div>
                <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-primary featured-card__cta">
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SEARCH + FILTERS ── */}
      <section className="blog-filter">
        <div className="blog-filter__inner">

          <div className="blog-filter__top">
            {/* Search */}
            <div className="blog-search">
              <span className="blog-search__icon">🔍</span>
              <input
                type="text"
                className="blog-search__input"
                placeholder="Search articles, authors or topics…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className="blog-search__clear" onClick={() => setSearch('')} aria-label="Clear search">✕</button>
              )}
            </div>

            {/* Result count */}
            <span className="blog-filter__count">
              <strong>{filtered.length}</strong> article{filtered.length !== 1 ? 's' : ''}
              {activeTab !== 'All' && <> in <em>{activeTab}</em></>}
              {search && <> for "<em>{search}</em>"</>}
            </span>
          </div>

          {/* Category tabs */}
          <div className="blog-cats" role="tablist" aria-label="Blog categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeTab === cat}
                className={`blog-cat${activeTab === cat ? ' blog-cat--active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
                <span className="blog-cat__count">
                  {cat === 'All' ? POSTS.length : POSTS.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="blog-grid-section">
        <div className="blog-grid-section__inner">
          {paginated.length > 0 ? (
            <>
              <div className="blog-grid">
                {paginated.map((post) => (
                  <article key={post.id} className="bcard">

                    {/* Thumbnail */}
                    <div
                      className="bcard__thumb"
                      style={{ background: `linear-gradient(135deg, ${post.colorA} 0%, ${post.colorB} 100%)` }}
                    >
                      <span className="bcard__thumb-icon">{post.icon}</span>
                      <span className="bcard__thumb-cat">{post.category}</span>
                    </div>

                    {/* Body */}
                    <div className="bcard__body">
                      <div className="bcard__tags">
                        {post.tags.slice(0, 2).map((t) => (
                          <span key={t} className="bcard__tag">{t}</span>
                        ))}
                      </div>

                      <h3 className="bcard__title">{post.title}</h3>
                      <p className="bcard__excerpt">{post.excerpt}</p>

                      <div className="bcard__meta">
                        <div className="bcard__author">
                          <span className="bcard__author-avatar" style={{ background: post.authorColor }}>
                            {post.authorInitials}
                          </span>
                          <span className="bcard__author-name">{post.author}</span>
                        </div>
                        <div className="bcard__meta-right">
                          <span className="bcard__date">🗓 {post.date}</span>
                          <span className="bcard__readtime">⏱ {post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="bcard__footer">
                      <a href="#" onClick={(e) => e.preventDefault()} className="bcard__read-more">
                        Read More <span className="bcard__arrow">→</span>
                      </a>
                      <button
                        className="bcard__save"
                        aria-label="Save article"
                        title="Save for later"
                      >
                        🔖
                      </button>
                    </div>

                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="blog-pagination">
                  <button
                    className="blog-page-btn"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    aria-label="Previous page"
                  >
                    ← Prev
                  </button>

                  <div className="blog-page-nums">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                      <button
                        key={n}
                        className={`blog-page-num${page === n ? ' blog-page-num--active' : ''}`}
                        onClick={() => setPage(n)}
                        aria-label={`Page ${n}`}
                        aria-current={page === n ? 'page' : undefined}
                      >
                        {n}
                      </button>
                    ))}
                  </div>

                  <button
                    className="blog-page-btn"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    aria-label="Next page"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="blog-empty">
              <span className="blog-empty__icon">📭</span>
              <h3>No articles found</h3>
              <p>Try a different search term or browse all categories.</p>
              <button className="btn btn-primary" onClick={() => { setSearch(''); setActiveTab('All') }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter">
        <div className="newsletter__inner">
          <div className="newsletter__text">
            <span className="newsletter__icon">📬</span>
            <h2 className="newsletter__heading">Get Articles in Your Inbox</h2>
            <p className="newsletter__sub">
              Join 25,000+ learners who receive our weekly tech insights, career
              tips, and course updates — no spam, ever.
            </p>
          </div>
          {subDone ? (
            <div className="newsletter__success">
              <span>✓</span> You're subscribed! Check your inbox.
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary newsletter__btn">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="https://protrainingtech.com/wp-content/uploads/2022/12/cropped-Pro-Training-Techs-Logo-2.png" alt="Pro Training Tech" style={{ height: '40px', objectFit: 'contain' }} />
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

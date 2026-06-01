import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Courses.css'

const CATEGORIES = [
  'All', 'Full Stack', 'DevOps', 'Data Science', 'Cloud', 'Testing',
  'Programming', 'Web Development', 'Database', 'Frameworks',
  'Digital Marketing', 'Analytics', 'DevSecOps', 'Automations',
  'Soft Skills', 'Mobile', 'AI / ML',
]

const toSlug = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const COURSES = [
  // Full Stack
  {
    id: 1, title: 'Java Full Stack Development', category: 'Full Stack',
    icon: '☕', rating: 4.9, reviews: 1245, trainer: 'Alex Carter',
    duration: '4 Months', level: 'Beginner to Advanced', students: '12,450+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'], trending: true,
  },
  {
    id: 2, title: 'Python Full Stack Development', category: 'Full Stack',
    icon: '🐍', rating: 4.8, reviews: 982, trainer: 'Ravi Shankar',
    duration: '3 Months', level: 'Beginner to Advanced', students: '9,820+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Python', 'Django', 'React', 'PostgreSQL'], trending: true,
  },
  {
    id: 3, title: '.NET Full Stack Development', category: 'Full Stack',
    icon: '🔷', rating: 4.7, reviews: 623, trainer: 'Suresh Babu',
    duration: '4 Months', level: 'Beginner to Advanced', students: '6,230+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['.NET', 'C#', 'Angular', 'SQL Server'],
  },
  {
    id: 4, title: 'MERN Stack Development', category: 'Full Stack',
    icon: '⚛️', rating: 4.8, reviews: 478, trainer: 'Vijay Reddy',
    duration: '3 Months', level: 'Intermediate', students: '4,780+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    id: 5, title: 'Full Stack Data Science Program', category: 'Full Stack',
    icon: '📊', rating: 4.8, reviews: 389, trainer: 'Mr. Omkar',
    duration: '6 Months', level: 'Beginner to Advanced', students: '3,890+',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['Python', 'ML', 'React', 'SQL'], trending: true,
  },
  // DevOps
  {
    id: 6, title: 'DevOps & AWS', category: 'DevOps',
    icon: '⚙️', rating: 4.9, reviews: 765, trainer: 'Anil Gupta',
    duration: '3 Months', level: 'Intermediate', students: '7,650+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'], trending: true,
  },
  {
    id: 7, title: 'DevOps with Azure', category: 'DevOps',
    icon: '🔵', rating: 4.7, reviews: 432, trainer: 'Pradeep Singh',
    duration: '3 Months', level: 'Intermediate', students: '4,320+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Azure DevOps', 'Docker', 'Terraform', 'CI/CD'],
  },
  {
    id: 8, title: 'Kubernetes Masterclass', category: 'DevOps',
    icon: '🚢', rating: 4.8, reviews: 321, trainer: 'Ravi Shankar',
    duration: '2 Months', level: 'Intermediate', students: '3,210+',
    colorA: '#1a5276', colorB: '#154360',
    tags: ['Kubernetes', 'Docker', 'Helm', 'AWS EKS'],
  },
  {
    id: 9, title: 'Terraform Associate Certification (003)', category: 'DevOps',
    icon: '🏗️', rating: 4.8, reviews: 287, trainer: 'Anil Gupta',
    duration: '1.5 Months', level: 'Intermediate', students: '2,870+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Terraform', 'IaC', 'AWS', 'CI/CD'], trending: true,
  },
  // Data Science
  {
    id: 10, title: 'Data Science & Machine Learning', category: 'Data Science',
    icon: '📊', rating: 4.8, reviews: 544, trainer: 'Dr. Ramesh Iyer',
    duration: '5 Months', level: 'Intermediate', students: '5,440+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Python', 'ML', 'TensorFlow', 'Pandas'],
  },
  {
    id: 11, title: 'Data Structures & Algorithms with Python', category: 'Data Science',
    icon: '🧩', rating: 4.9, reviews: 612, trainer: 'Mr. Naseer Basha',
    duration: '3 Months', level: 'Beginner to Advanced', students: '6,120+',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['DSA', 'Python', 'Algorithms', 'LeetCode'], trending: true,
  },
  {
    id: 12, title: 'DSA with AI Engineer Program', category: 'Data Science',
    icon: '🤖', rating: 4.9, reviews: 198, trainer: 'Mr. Naseer Basha',
    duration: '4 Months', level: 'Intermediate', students: '1,980+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['DSA', 'AI', 'Python', 'System Design'], trending: true,
  },
  {
    id: 13, title: 'Power BI & Tableau', category: 'Data Science',
    icon: '📈', rating: 4.6, reviews: 287, trainer: 'Mr. Vijay Rama Raju',
    duration: '2 Months', level: 'Beginner', students: '2,870+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Power BI', 'Tableau', 'SQL', 'Data Viz'],
  },
  // AI / ML
  {
    id: 14, title: 'Generative AI & Agentic AI with Python', category: 'AI / ML',
    icon: '✨', rating: 4.9, reviews: 412, trainer: 'Mr. Prudhvi',
    duration: '3 Months', level: 'Intermediate', students: '4,120+',
    colorA: '#1565c0', colorB: '#1976d2',
    tags: ['GenAI', 'LangChain', 'RAG', 'Python'], trending: true,
  },
  {
    id: 15, title: 'Advanced Generative & Agentic AI', category: 'AI / ML',
    icon: '🧠', rating: 4.9, reviews: 267, trainer: 'Mr. Karthik Gupta',
    duration: '2 Months', level: 'Advanced', students: '2,670+',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['LLM', 'Agents', 'AutoGen', 'OpenAI'], trending: true,
  },
  {
    id: 16, title: 'Artificial Intelligence', category: 'AI / ML',
    icon: '🤖', rating: 4.7, reviews: 312, trainer: 'Dr. Anitha Rao',
    duration: '4 Months', level: 'Advanced', students: '3,120+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Deep Learning', 'NLP', 'Computer Vision', 'PyTorch'],
  },
  // Cloud
  {
    id: 17, title: 'AWS Cloud Solutions', category: 'Cloud',
    icon: '☁️', rating: 4.9, reviews: 891, trainer: 'Anil Gupta',
    duration: '2 Months', level: 'Beginner', students: '8,910+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['EC2', 'S3', 'Lambda', 'RDS'],
  },
  {
    id: 18, title: 'Microsoft Azure', category: 'Cloud',
    icon: '🌐', rating: 4.7, reviews: 543, trainer: 'Pradeep Singh',
    duration: '2 Months', level: 'Beginner to Advanced', students: '5,430+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Azure VMs', 'AKS', 'Azure Functions', 'Cosmos DB'],
  },
  {
    id: 19, title: 'Google Cloud Platform', category: 'Cloud',
    icon: '🔶', rating: 4.6, reviews: 329, trainer: 'Mr. Naveen',
    duration: '2 Months', level: 'Intermediate', students: '3,290+',
    colorA: '#2e7d32', colorB: '#388e3c',
    tags: ['GKE', 'BigQuery', 'Cloud Functions', 'GCS'],
  },
  {
    id: 20, title: 'Microsoft Fabric Data Engineer (DP-700)', category: 'Cloud',
    icon: '🔮', rating: 4.8, reviews: 178, trainer: 'Mr. Gopinath',
    duration: '2 Months', level: 'Intermediate', students: '1,780+',
    colorA: '#1565c0', colorB: '#1976d2',
    tags: ['Microsoft Fabric', 'Data Engineering', 'Azure', 'Power BI'], trending: true,
  },
  // Testing
  {
    id: 21, title: 'Software Testing (Manual)', category: 'Testing',
    icon: '🧪', rating: 4.8, reviews: 891, trainer: 'Mr. Mahesh',
    duration: '2 Months', level: 'Beginner', students: '8,910+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['SDLC', 'Test Cases', 'Bug Life Cycle', 'Agile'],
  },
  {
    id: 22, title: 'Selenium with Java', category: 'Testing',
    icon: '🔬', rating: 4.7, reviews: 567, trainer: 'Mr. Vamshi Mohan',
    duration: '2.5 Months', level: 'Intermediate', students: '5,670+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Selenium', 'TestNG', 'Maven', 'Git'],
  },
  {
    id: 23, title: 'Playwright with TypeScript', category: 'Testing',
    icon: '🎭', rating: 4.9, reviews: 234, trainer: 'Mr. Karthik',
    duration: '2 Months', level: 'Intermediate', students: '2,340+',
    colorA: '#1a5276', colorB: '#154360',
    tags: ['Playwright', 'TypeScript', 'E2E', 'CI/CD'], trending: true,
  },
  {
    id: 24, title: 'Playwright Automation', category: 'Testing',
    icon: '🎭', rating: 4.5, reviews: 189, trainer: 'Mr. Robin Roy',
    duration: '1.5 Months', level: 'Beginner to Intermediate', students: '1,890+',
    colorA: '#2e7d32', colorB: '#388e3c',
    tags: ['Playwright', 'JavaScript', 'Automation', 'Reporting'],
  },
  {
    id: 25, title: 'API Testing with Postman', category: 'Testing',
    icon: '🔗', rating: 4.6, reviews: 234, trainer: 'Mr. Sumanth',
    duration: '1.5 Months', level: 'Beginner', students: '2,340+',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['Postman', 'REST API', 'JSON', 'OAuth'],
  },
  // DevSecOps
  {
    id: 26, title: 'Cyber Security & Ethical Hacking', category: 'DevSecOps',
    icon: '🔐', rating: 4.8, reviews: 312, trainer: 'Mr. John',
    duration: '3 Months', level: 'Intermediate', students: '3,120+',
    colorA: '#b71c1c', colorB: '#c62828',
    tags: ['Ethical Hacking', 'Penetration Testing', 'OWASP', 'Network Security'], trending: true,
  },
  {
    id: 27, title: 'DevSecOps Masterclass', category: 'DevSecOps',
    icon: '🛡️', rating: 4.7, reviews: 198, trainer: 'Anil Gupta',
    duration: '2.5 Months', level: 'Intermediate', students: '1,980+',
    colorA: '#4a148c', colorB: '#6a1b9a',
    tags: ['DevSecOps', 'SAST', 'DAST', 'Container Security'],
  },
  // Programming
  {
    id: 28, title: 'Core Java', category: 'Programming',
    icon: '☕', rating: 4.8, reviews: 987, trainer: 'Mr. Nataraj',
    duration: '2 Months', level: 'Beginner', students: '9,870+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Java', 'OOP', 'Collections', 'JDBC'],
  },
  {
    id: 29, title: 'Python Programming', category: 'Programming',
    icon: '🐍', rating: 4.8, reviews: 876, trainer: 'Mr. K V Rao',
    duration: '2 Months', level: 'Beginner', students: '8,760+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Python', 'OOP', 'File I/O', 'Libraries'],
  },
  {
    id: 30, title: 'C & C++ Programming', category: 'Programming',
    icon: '💻', rating: 4.6, reviews: 543, trainer: 'Mr. Kishore',
    duration: '2 Months', level: 'Beginner', students: '5,430+',
    colorA: '#2e7d32', colorB: '#388e3c',
    tags: ['C', 'C++', 'Pointers', 'Data Structures'],
  },
  // Web Development
  {
    id: 31, title: 'React.js Masterclass', category: 'Web Development',
    icon: '⚛️', rating: 4.8, reviews: 654, trainer: 'Mr. Prasad',
    duration: '2 Months', level: 'Intermediate', students: '6,540+',
    colorA: '#1565c0', colorB: '#1976d2',
    tags: ['React', 'Hooks', 'Redux', 'TypeScript'],
  },
  {
    id: 32, title: 'Node.js & Express', category: 'Web Development',
    icon: '🟢', rating: 4.7, reviews: 432, trainer: 'Mr. Sagar',
    duration: '2 Months', level: 'Intermediate', students: '4,320+',
    colorA: '#2e7d32', colorB: '#388e3c',
    tags: ['Node.js', 'Express', 'REST API', 'MongoDB'],
  },
  {
    id: 33, title: 'Angular Framework', category: 'Frameworks',
    icon: '🅰️', rating: 4.7, reviews: 387, trainer: 'Mr. Durga Prasad',
    duration: '2 Months', level: 'Intermediate', students: '3,870+',
    colorA: '#b71c1c', colorB: '#c62828',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
  },
  // Database
  {
    id: 34, title: 'MySQL & SQL Server', category: 'Database',
    icon: '🗄️', rating: 4.7, reviews: 765, trainer: 'Mr. Shiva Chaitanya',
    duration: '1.5 Months', level: 'Beginner', students: '7,650+',
    colorA: '#1565c0', colorB: '#1976d2',
    tags: ['MySQL', 'SQL Server', 'Stored Procedures', 'Optimization'],
  },
  {
    id: 35, title: 'MongoDB', category: 'Database',
    icon: '🍃', rating: 4.6, reviews: 432, trainer: 'Mr. Venkatesh Mansani',
    duration: '1.5 Months', level: 'Beginner to Intermediate', students: '4,320+',
    colorA: '#2e7d32', colorB: '#388e3c',
    tags: ['MongoDB', 'NoSQL', 'Aggregation', 'Atlas'],
  },
  // Digital Marketing
  {
    id: 36, title: 'Digital Marketing & SEO', category: 'Digital Marketing',
    icon: '📱', rating: 4.6, reviews: 312, trainer: 'Mr. Ramakanth',
    duration: '2 Months', level: 'Beginner', students: '3,120+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['SEO', 'SEM', 'Social Media', 'Google Analytics'],
  },
  // Soft Skills
  {
    id: 37, title: 'Spoken English & Communication', category: 'Soft Skills',
    icon: '🗣️', rating: 4.7, reviews: 543, trainer: 'Mr. Amith Pandey',
    duration: '2 Months', level: 'Beginner', students: '5,430+',
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Spoken English', 'Communication', 'Presentation', 'Interview Skills'],
  },
  // Mobile
  {
    id: 38, title: 'Android App Development', category: 'Mobile',
    icon: '📱', rating: 4.7, reviews: 387, trainer: 'Mr. Pavan',
    duration: '3 Months', level: 'Beginner to Advanced', students: '3,870+',
    colorA: '#2e7d32', colorB: '#388e3c',
    tags: ['Android', 'Kotlin', 'Jetpack', 'Firebase'],
  },
  // Automations
  {
    id: 39, title: 'Blue Prism RPA', category: 'Automations',
    icon: '🤖', rating: 4.6, reviews: 198, trainer: 'Mr. Madhusudhan',
    duration: '2 Months', level: 'Intermediate', students: '1,980+',
    colorA: '#1565c0', colorB: '#1976d2',
    tags: ['Blue Prism', 'RPA', 'Process Automation', 'Business Objects'],
  },
  // Analytics
  {
    id: 40, title: 'Data Analytics with Python', category: 'Analytics',
    icon: '📊', rating: 4.7, reviews: 456, trainer: 'Mr. Sandeep Krishna',
    duration: '2 Months', level: 'Beginner to Intermediate', students: '4,560+',
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  // Internships
  {
    id: 41, title: 'Internship Program on DevOps with Cloud', category: 'DevOps',
    icon: '🎓', rating: 4.5, reviews: 234, trainer: 'Anil Gupta',
    duration: '3 Months', level: 'Beginner', students: '2,340+',
    colorA: '#1a5276', colorB: '#154360',
    tags: ['DevOps', 'AWS', 'Docker', 'Internship'],
  },
  {
    id: 42, title: 'Internship Program on Python', category: 'Programming',
    icon: '🎓', rating: 5.0, reviews: 189, trainer: 'Mr. K V Rao',
    duration: '3 Months', level: 'Beginner', students: '1,890+',
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Python', 'Django', 'Projects', 'Internship'],
  },
]

function StarRating({ rating }) {
  const full  = Math.floor(rating)
  const half  = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}
      {half ? '½' : ''}
      {'☆'.repeat(empty)}
    </span>
  )
}

export default function Courses() {
  const [search,    setSearch]    = useState('')
  const [activeTab, setActiveTab] = useState('All')

  const filtered = COURSES.filter((c) => {
    const matchCat    = activeTab === 'All' || c.category === activeTab
    const q           = search.toLowerCase()
    const matchSearch = !q
      || c.title.toLowerCase().includes(q)
      || c.trainer.toLowerCase().includes(q)
      || c.tags.some(t => t.toLowerCase().includes(q))
    return matchCat && matchSearch
  })

  return (
    <div className="courses-page">

      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="courses-hero">
        <div className="courses-hero__inner">
          <span className="courses-hero__tag">Our Programs</span>
          <h1 className="courses-hero__heading">
            Learn Software Courses from <em>Expert Trainers</em>
          </h1>
          <p className="courses-hero__sub">
            Explore new and trending free online courses — industry-aligned programs
            with live projects, certifications, and guaranteed placement support.
          </p>
          <div className="courses-hero__stats">
            {[['130+', 'Courses'], ['10L+', 'Students'], ['95%', 'Placement'], ['4.8★', 'Rating']].map(([v, l]) => (
              <div key={l} className="courses-hero__stat">
                <span className="courses-hero__stat-val">{v}</span>
                <span className="courses-hero__stat-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="courses-hero__wave">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── SEARCH + FILTERS ── */}
      <section className="filter-bar">
        <div className="filter-bar__inner">

          {/* Search */}
          <div className="search-wrap">
            <span className="search-wrap__icon">🔍</span>
            <input
              type="text"
              className="search-wrap__input"
              placeholder="Search courses, trainers or technologies…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-wrap__clear" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Category tabs */}
          <div className="cat-tabs" role="tablist" aria-label="Course categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeTab === cat}
                className={`cat-tab${activeTab === cat ? ' cat-tab--active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <div className="filter-bar__count">
          <span>
            Showing <strong>{filtered.length}</strong> course{filtered.length !== 1 ? 's' : ''}
            {activeTab !== 'All' && <> in <em>{activeTab}</em></>}
            {search && <> matching "<em>{search}</em>"</>}
          </span>
        </div>
      </section>

      {/* ── COURSE GRID ── */}
      <section className="courses-list">
        <div className="courses-list__inner">
          {filtered.length > 0 ? (
            <div className="clist__grid">
              {filtered.map((c) => (
                <article key={c.id} className="ccard">

                  {/* Thumbnail */}
                  <div
                    className="ccard__thumb"
                    style={{ background: `linear-gradient(135deg, ${c.colorA} 0%, ${c.colorB} 100%)` }}
                  >
                    <span className="ccard__thumb-icon">{c.icon}</span>
                    <span className="ccard__thumb-cat">{c.category}</span>
                    <span className="ccard__thumb-level">{c.level}</span>
                  </div>

                  {/* Body */}
                  <div className="ccard__body">
                    <h3 className="ccard__title">{c.title}</h3>

                    {/* Tags */}
                    <div className="ccard__tags">
                      {c.tags.slice(0, 3).map(t => (
                        <span key={t} className="ccard__tag">{t}</span>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="ccard__rating">
                      <StarRating rating={c.rating} />
                      <span className="ccard__rating-val">{c.rating}</span>
                      <span className="ccard__rating-reviews">({c.reviews.toLocaleString()} reviews)</span>
                    </div>

                    {/* Meta row */}
                    <div className="ccard__meta">
                      <span className="ccard__meta-item">
                        <span className="ccard__meta-icon">👨‍🏫</span>
                        {c.trainer}
                      </span>
                      <span className="ccard__meta-item">
                        <span className="ccard__meta-icon">⏱</span>
                        {c.duration}
                      </span>
                      <span className="ccard__meta-item">
                        <span className="ccard__meta-icon">👥</span>
                        {c.students}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="ccard__footer">
                    <a href="#enroll-cta" className="ccard__enroll">
                      Enroll Now
                    </a>
                    <Link to={`/courses/${toSlug(c.title)}`} className="ccard__details">
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span className="no-results__icon">🔍</span>
              <h3>No courses found</h3>
              <p>Try adjusting your search term or selecting a different category.</p>
              <button
                className="btn btn-primary"
                onClick={() => { setSearch(''); setActiveTab('All') }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── ENROLL CTA BANNER ── */}
      <section className="enroll-cta" id="enroll-cta">
        <div className="enroll-cta__inner">
          <div className="enroll-cta__text">
            <h2>Ready to Start Your Career Journey?</h2>
            <p>
              Get free career counselling and a demo class — our experts will help
              you choose the right course for your goals.
            </p>
          </div>
          <div className="enroll-cta__actions">
            <a href="tel:+17035651995" className="btn btn-white">
              📞 Call Us Now
            </a>
            <Link to="/contact" className="btn btn-outline-white">
              Get Free Demo
            </Link>
          </div>
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
                'Data Science & ML', 'Software Testing', 'AWS Cloud'].map((c) => (
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

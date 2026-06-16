import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Python for Data Science',
    count: 20,
    topics: [
      'Introduction to Data Science & Course Roadmap',
      'Python Installation and Setup',
      'Data Types, Variables, and Operators',
      'Flow Control, Loops, and Identifiers',
      'Lists, Sets, Tuples, Dictionaries & Comprehensions',
      'Functions – User-Defined, Arguments, Lambda, Map/Reduce',
      'Object-Oriented Programming – Classes, Objects, Inheritance',
      'Polymorphism, Abstract Classes, Iterators, Generators',
      'Error Handling and File Operations',
      'Pandas – Series, DataFrames, Filtering, Grouping, Merging',
      'NumPy – Arrays, Mathematical Operations, Statistical Functions',
      'Matplotlib – Plots, Customization, Figure and Axes',
      'Seaborn – Statistical Visualizations and Categorical Plots',
      'SciPy – Signal Processing, Linear Algebra, Statistics',
      'Statsmodels – Regression, Time Series, Statistical Tests',
      'Data Wrangling – Cleaning, Encoding, Feature Scaling',
      'Date and Time Operations',
      'Pickling and Model Serialization',
      'Modularization and Package Management',
      'End-to-End Python Data Science Pipeline',
    ],
  },
  {
    title: 'Mathematics for Data Science',
    count: 8,
    topics: [
      'Set Theory and Data Representation',
      'Combinatorics – Permutations, Combinations, Feature Selection',
      'Probability – Basics, Bayes Theorem, Naïve Bayes',
      'Distributions – Binomial, Poisson, Normal, Gaussian, Markov Chains',
      'Linear Algebra – Matrices, Determinants, Eigenvalues, Distance Metrics',
      'Calculus – Differentiation, Partial Differentiation, Optimization',
      'Indices and Logarithms',
      'Hyperparameter Tuning, Cross-Validation, Experiment Design',
    ],
  },
  {
    title: 'Statistics',
    count: 16,
    topics: [
      'Population, Sampling, and Data Types',
      'Central Tendency – Mean, Mode, Median',
      'Descriptive Statistics – Skewness and Kurtosis',
      'Spread Measurement – Range, Variance, Standard Deviation',
      'IQR, MAD, Coefficient of Variation, Covariance',
      'Data Measurement Levels – Nominal, Ordinal, Interval, Ratio',
      'Correlation, Regression, and Collinearity',
      'Percentiles, Quartiles, Box Plots and Outliers',
      'Confidence Intervals and Central Limit Theorem',
      'Bias vs Variance in Machine Learning',
      'Entropy, Information Gain, and Loss Functions',
      'Hypothesis Testing – Null & Alternate Hypotheses',
      'Type I & Type II Errors',
      'ANOVA, Chi-Square Test',
      'Z-Test and T-Test',
      'Frequency Distribution and Inferential Statistics',
    ],
  },
  {
    title: 'SQL for Data Science',
    count: 10,
    topics: [
      'DBMS vs RDBMS, SQL vs NoSQL',
      'Primary Keys, Foreign Keys, and Constraints',
      'SQL Languages – DDL, DQL, DML, DCL, TCL',
      'CRUD Operations – Create, Insert, Update, Delete',
      'Clauses – WHERE, DISTINCT, ORDER BY, GROUP BY, HAVING',
      'Operators – Comparison, Logical, Membership, Identity',
      'Aggregate Functions and Wildcards',
      'Joins – Inner, Outer, Self, Cross, Natural',
      'Subqueries and Views',
      'Transactions – Commit and Rollback',
    ],
  },
  {
    title: 'Exploratory Data Analysis & Machine Learning',
    count: 22,
    topics: [
      'EDA – Univariate, Bivariate, Multivariate Analysis',
      'Data Visualization for Continuous, Discrete, and Time Series Variables',
      'Feature Transformations and Selection Methods',
      'Dimensionality Reduction – PCA, Sparse PCA, Kernel PCA, SVD',
      'Imbalanced Datasets and Handling Techniques',
      'Regression – Simple Linear, Multiple Linear, Polynomial',
      'Lasso, Ridge, and Elastic Net Regression',
      'Regression Evaluation – MAE, MSE, RMSE, R², Adjusted R²',
      'Classification – KNN, Logistic Regression, SVM, Naïve Bayes',
      'Decision Trees, Random Forest, Bagging, AdaBoost',
      'Gradient Boosting and XGBoost',
      'Classification Evaluation Metrics',
      'Clustering – K-Means, Hierarchical, DBSCAN',
      'Association Rules – Market Basket Analysis, Apriori Algorithm',
      'Recommendation Engines – Collaborative Filtering',
      'Time Series & Forecasting – ARIMA, SARIMAX',
      'Overfitting and Underfitting – Bias-Variance Tradeoff',
      'Hyperparameter Tuning – Grid Search, Randomized Search',
      'ML Pipelines and Flask Deployment',
      'Feature Engineering – Encoding, Scaling, Data Cleaning',
      'Validation Techniques – Cross-Validation, Train-Test Split',
      'sklearn Framework Overview',
    ],
  },
  {
    title: 'Power BI',
    count: 8,
    topics: [
      'Introduction to Power BI for Data Scientists',
      'Basic Report Design – Visuals, Canvas, Tables, Formatting',
      'Visual Sync, Grouping, Slicers, and Binning',
      'Hierarchies and Filters – Drill-Down, Drill-Through Reports',
      'Power Query – Transformations, Table & Column Operations',
      'DAX Functions – Measures, Calculations, Column Creation',
      'Data Sources Integration and Report Export',
      'Interactive Dashboard Design and Publishing',
    ],
  },
  {
    title: 'Deep Learning',
    count: 14,
    topics: [
      'Neural Networks – Biological vs Artificial Neurons, Perceptron',
      'Activation Functions, Backpropagation, Cost Functions',
      'Gradient Descent, Vanishing/Exploding Gradients',
      'PyTorch Introduction and TensorFlow Basics',
      'ANN – Architecture, Forward/Backward Propagation, Keras',
      'RNN – Sequence Modeling, Backpropagation Through Time',
      'LSTM, GRU, Bidirectional RNN, Encoder-Decoder',
      'Transformer Architecture and BERT',
      'CNN – Image Classification, Transfer Learning, YOLO V8',
      'Image Processing – Histograms, Filters',
      'Reinforcement Learning – Architecture and OpenAI Gym',
      'Time Series Forecasting with Deep Learning',
      'Generative AI and LLMs Overview',
      'Azure ML Integration',
    ],
  },
  {
    title: 'Natural Language Processing',
    count: 9,
    topics: [
      'Text Cleaning, Tokenization, and Preprocessing',
      'Bag of Words, TF-IDF, and N-Grams',
      'Word2Vec and GloVe Word Embeddings',
      'One-Hot Encoding and Count Vectorizer',
      'Parts of Speech (PoS) Tagging',
      'Topic Modelling – LDA',
      'Sentiment Analysis with TextBlob and NLTK',
      'spaCy – Lemmatization, NER, Dependency Parsing',
      'Word Clouds and Frequency Analysis',
    ],
  },
  {
    title: 'Computer Vision',
    count: 7,
    topics: [
      'Human vs Computer Vision Fundamentals',
      'CNN Architecture – Convolution, Pooling, Flatten, Fully Connected',
      'Striding, Padding, and Data Augmentation',
      'OpenCV and YOLOv3 Integration',
      'Image Processing – File Operations, Drawing, Face Detection',
      'Video Processing and Object Detection',
      'Reinforcement Learning with Policy Gradient Theory',
    ],
  },
]

const BATCHES = [
  { course: 'Full Stack Data Science & AI', faculty: 'Real-Time Expert', date: '01 Jun', time: '7:00 PM IST', mode: 'online',  type: 'Online Training',    link: 'Join' },
  { course: 'Full Stack Data Science & AI', faculty: 'Real-Time Expert', date: '15 Jun', time: '9:00 AM IST', mode: 'online',  type: 'Online Training',    link: 'Join' },
  { course: 'Full Stack Data Science & AI', faculty: 'Real-Time Expert', date: '01 Jun', time: '9:00 AM IST', mode: 'offline', type: 'Classroom Training', link: 'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'NASSCOM-Accredited Curriculum', desc: 'Industry-aligned programme covering Python, ML, DL, NLP, CV, Power BI, and Generative AI end-to-end.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: '20+ real-world projects spanning regression, classification, NLP sentiment analysis, CV object detection, and forecasting.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from industry data scientists with production ML and AI deployment experience.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Post-certification career guidance, mock interviews, resume prep, and employer network connections.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'NASSCOM Certification',         desc: 'NASSCOM-accredited credential validating comprehensive data science and AI expertise for industry recognition.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock mentor access, lab facility, and lifetime course material availability.' },
]

const REVIEWS = [
  { name: 'Anitha K',       course: 'Full Stack Data Science & AI', rating: 5, initials: 'AK', color: '#1565c0', text: 'Training faculties are really knowledgeable. Data science instruction provided here is very good. The Python to deep learning progression is perfectly structured.' },
  { name: 'Ravi Shankar',   course: 'Full Stack Data Science & AI', rating: 5, initials: 'RS', color: '#e05c2a', text: 'The machine learning module alone is comprehensive enough to land a job. XGBoost, time series, and recommendation systems are covered with real datasets. Excellent programme.' },
  { name: 'Lakshmi Devi',   course: 'Full Stack Data Science & AI', rating: 5, initials: 'LD', color: '#2e7d32', text: 'The Power BI + ML combination is unique to this programme. I can now deliver both model building and executive dashboards. Got placed at a top analytics firm within 6 weeks.' },
  { name: 'Mohan Prasad',   course: 'Full Stack Data Science & AI', rating: 4, initials: 'MP', color: '#6a1b9a', text: 'Deep learning and NLP modules are industry-relevant and thorough. BERT and YOLO coverage alongside traditional ML gives a complete AI skill set. Placement support was excellent.' },
]

const RELATED = [
  { title: 'Data Science with AI',                slug: 'data-science-online-training',                icon: '🧠' },
  { title: 'Data Analytics & Business Analytics', slug: 'data-analytics-online-training',              icon: '📈' },
  { title: 'MLOps & AIOps',                       slug: 'mlops-and-aiops-online-training',             icon: '⚙️' },
  { title: 'Generative AI & Agentic AI',          slug: 'generative-ai-online-training',               icon: '🤖' },
  { title: 'Full Stack Data Science & AI',        slug: 'full-stack-data-science-ai-online-training',  icon: '📊' },
]

const MNC_LOGOS = [
  'https://images.nareshit.com/images/logo_1706095643303.png',
  'https://images.nareshit.com/images/logo_1706095633847.png',
  'https://images.nareshit.com/images/logo_1706095622079.png',
  'https://images.nareshit.com/images/logo_1706095609087.png',
  'https://images.nareshit.com/images/logo_1706095596384.png',
  'https://images.nareshit.com/images/logo_1706095585072.png',
  'https://images.nareshit.com/images/logo_1706095560202.png',
  'https://images.nareshit.com/images/logo_1706095549234.png',
  'https://images.nareshit.com/images/logo_1706095534994.png',
  'https://images.nareshit.com/images/logo_1706095506341.png',
  'https://images.nareshit.com/images/logo_1706095491707.png',
  'https://images.nareshit.com/images/logo_1706095288391.png',
  'https://images.nareshit.com/images/logo_1706095273280.png',
  'https://images.nareshit.com/images/logo_1706095262264.png',
  'https://images.nareshit.com/images/logo_1706095252569.png',
  'https://images.nareshit.com/images/logo_1706095241345.png',
  'https://images.nareshit.com/images/logo_1706095167525.png',
  'https://images.nareshit.com/images/logo_1706095110331.png',
]

const LOGOS_PER_PAGE = 10

const TABS = [
  { id: 'overview',          label: 'Overview'          },
  { id: 'curriculum',        label: 'Curriculum'        },
  { id: 'certificate',       label: 'Certificate'       },
  { id: 'upcoming-batches',  label: 'Upcoming Batches'  },
  { id: 'training-features', label: 'Training Features' },
  { id: 'reviews',           label: 'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function FullStackDSProgramDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 7:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name: '', email: '', mobile: '', course: 'Full Stack Data Science & AI Certification', mode: 'Online' })
  const [submitted,    setSubmitted]    = useState(false)
  const [logoPage,     setLogoPage]     = useState(0)
  const totalLogoPages = Math.ceil(MNC_LOGOS.length / LOGOS_PER_PAGE)

  const headerRef = useRef(null)
  const tabsRef   = useRef(null)
  const [sticky,  setSticky] = useState(false)

  useEffect(() => {
    const NAVBAR_H = 64
    const onScroll = () => {
      if (!headerRef.current) return
      setSticky(headerRef.current.getBoundingClientRect().bottom <= NAVBAR_H)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSection    = (i) => setOpenSections(p => ({ ...p, [i]: !p[i] }))
  const handleFormChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  const scrollToTab = (id) => {
    setActiveTab(id)
    if (headerRef.current) {
      const target = headerRef.current.offsetTop + headerRef.current.offsetHeight - 64
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }

  return (
    <div className="fsj-page">
      <Navbar />

      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link>
            <span>›</span>
            <Link to="/full-stack-courses">Full Stack Courses</Link>
            <span>›</span>
            <span>Full Stack Data Science Program</span>
          </nav>
        </div>
      </div>

      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/full-stack-data-science-ai-certification.jpg"
            alt="Full Stack Data Science & AI Certification Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Full Stack Data Science &amp; AI Certification</h1>
              <p className="fsj-banner__sub">Python · ML · Deep Learning · NLP · Computer Vision · Power BI · GenAI</p>
            </div>
          </div>
        </div>

        <div className="fsj-controls-wrap">
          <div className="fsj-container">
            <div className="fsj-controls">
              <div className="fsj-controls__left">
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Training Type</label>
                  <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}>
                    <option>Online Training</option>
                    <option>Classroom Training</option>
                  </select>
                </div>
                <div className="fsj-select-group" style={{ display: 'none' }}>
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Real-Time Expert</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 7:00 PM IST</option>
                    <option>15 Jun - 9:00 AM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>6 Months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}>
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>35000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a style={{ display: 'none' }} href="/curriculum/full-stack-data-science-certification-curriculum.pdf" className="fsj-btn fsj-btn--outline" onClick={e => e.preventDefault()}>
                  ↓ Download Curriculum
                </a>
                <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                  Enroll Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} ref={tabsRef} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button key={tab.id} role="tab" aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fsj-container">
        <div className="fsj-layout">
          <main className="fsj-content">

            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  The Full Stack Data Science &amp; AI Certification programme provides a comprehensive
                  perspective on data science and AI, merging theoretical principles with hands-on
                  applications. The course covers the complete data science pipeline — from data
                  collection and cleaning through modelling, deep learning, NLP, computer vision,
                  and production deployment.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  Beginning with Python for data science and progressing through mathematics, statistics,
                  and SQL, the programme covers the full machine learning lifecycle — regression,
                  classification, clustering, time series, and recommendation systems — using
                  scikit-learn, XGBoost, and production ML pipelines.
                </p>
                <p className="fsj-para">
                  Advanced modules include deep learning with PyTorch/TensorFlow, NLP with BERT and
                  transformers, computer vision with CNN/YOLO, Power BI dashboard development, and
                  an introduction to Generative AI and ChatGPT 3.5 — making this one of the most
                  comprehensive data science programmes available.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Deliver comprehensive understanding of data science and AI concepts, methodologies, and tools</li>
                  <li>Equip learners with practical skills for data collection, cleaning, analysis, and interpretation</li>
                  <li>Master Python, Pandas, NumPy, Matplotlib, Seaborn, SciPy, and Statsmodels</li>
                  <li>Explore advanced machine learning algorithms and AI topics end-to-end</li>
                  <li>Build Power BI dashboards with DAX and Power Query for business reporting</li>
                  <li>Develop deep learning models with ANN, CNN, RNN, LSTM, and Transformer architectures</li>
                  <li>Apply NLP, computer vision, and reinforcement learning to real-world problems</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Strong programming fundamentals background</li>
                  <li>Statistics and mathematics familiarity</li>
                  <li>Data manipulation and cleaning knowledge</li>
                  <li>Machine learning algorithms understanding</li>
                  <li>Experience with data analysis software or programming environments</li>
                </ul>

                <button className="fsj-btn fsj-btn--primary fsj-enroll-now" onClick={() => scrollToTab('upcoming-batches')}>
                  Enroll Now
                </button>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Curriculum</h2>
                <div className="fsj-accordion">
                  {CURRICULUM.map((sec, i) => (
                    <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                      <button className="fsj-acc__head" onClick={() => toggleSection(i)} aria-expanded={!!openSections[i]}>
                        <span className="fsj-acc__title">{sec.title}</span>
                        <div className="fsj-acc__right">
                          <span className="fsj-acc__count">{sec.count} Topics</span>
                          <span className="fsj-acc__chevron">{openSections[i] ? '▲' : '▼'}</span>
                        </div>
                      </button>
                      {openSections[i] && (
                        <div className="fsj-acc__body">
                          <div className="fsj-topics-grid">
                            {sec.topics.map((t, j) => (
                              <div key={j} className="fsj-topic-item">
                                <span className="fsj-topic-num">{String(j + 1).padStart(2, '0')}.</span>
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Apply Now</button>
                </div>
              </div>
            )}

            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the Full Stack Data Science &amp; AI Certification programme,
                  you will receive a NASSCOM-accredited, industry-recognised certificate from Pro Training Tech
                  validating your comprehensive data science, machine learning, and AI expertise.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Full Stack Data Science & AI Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Full Stack Data Science &amp; AI Certification</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline" onClick={() => {}}>Drop a Query</button>
                </div>
              </div>
            )}

            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead>
                      <tr><th>Course</th><th>Faculty</th><th>Date</th><th>Time</th><th>Mode</th><th>Batch Type</th><th>Meeting Link</th></tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td><td>{b.date}</td><td>{b.time}</td>
                          <td><span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>{b.mode}</span></td>
                          <td>{b.type}</td>
                          <td><button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>{b.link}</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'training-features' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Training Features</h2>
                <div className="fsj-features-grid">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="fsj-feature-card" style={{ '--feat-color': f.color, '--feat-bg': f.bg }}>
                      <div className="fsj-feature-card__icon-wrap" style={{ background: f.bg }}>
                        <f.Icon width={40} height={40} color={f.color} strokeWidth={1.5} />
                      </div>
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
                  {REVIEWS.map((r, i) => (
                    <div key={i} className="fsj-review-card">
                      <div className="fsj-review-card__top">
                        <div className="fsj-rev-avatar" style={{ background: r.color }}>{r.initials}</div>
                        <div>
                          <div className="fsj-rev-name">{r.name}</div>
                          <div className="fsj-rev-course">{r.course}</div>
                        </div>
                      </div>
                      <div className="fsj-rev-stars">
                        {Array.from({ length: 5 }, (_, j) => (
                          <span key={j} className={j < r.rating ? 'fsj-star--on' : 'fsj-star--off'}>★</span>
                        ))}
                      </div>
                      <p className="fsj-rev-text">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          <aside className="fsj-sidebar">
            <a href="tel:+17035651995" className="fsj-advisor-btn">
              <span className="fsj-advisor-btn__icon">📞</span>
              +1-703-565-1995
            </a>
            <div className="fsj-enquiry-card">
              <div className="fsj-enquiry-card__top">
                <p className="fsj-enquiry-card__tag">Top 5 Technologies to learn</p>
                <h3 className="fsj-enquiry-card__title">Register for the Course!</h3>
              </div>
              <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
                <div className="fsj-form-field">
                  <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Full Stack Data Science &amp; AI Certification</option>
                    <option>Data Science with AI</option>
                    <option>Data Analytics &amp; Business Analytics</option>
                    <option>MLOps &amp; AIOps</option>
                    <option>Generative AI &amp; Agentic AI with Python</option>
                    <option>Full Stack Data Science &amp; AI</option>
                  </select>
                </div>
                <div className="fsj-form-field">
                  <select name="mode" value={formData.mode} onChange={handleFormChange}>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Live Online</option>
                  </select>
                </div>
                <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
                <p className="fsj-form-terms">
                  By submitting you agree to our{' '}
                  <Link to="/terms-conditions">Terms of Use</Link> &amp;{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </aside>
        </div>
      </div>

      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">
              Average package of course <strong>(Full Stack Data Science &amp; AI Certification)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">90%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">5L</span>
                <span className="fsj-salary-stat__lbl">Avg Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button className="fsj-logo-arrow fsj-logo-arrow--left" aria-label="Previous logos"
              disabled={logoPage === 0} onClick={() => setLogoPage(p => Math.max(0, p - 1))}>&#8592;</button>
            <div className="fsj-logo-grid-wrap">
              <div className="fsj-logo-grid" style={{ transform: `translateX(-${logoPage * 100}%)` }}>
                {Array.from({ length: totalLogoPages }, (_, page) => (
                  <div key={page} className="fsj-logo-page">
                    {MNC_LOGOS.slice(page * LOGOS_PER_PAGE, page * LOGOS_PER_PAGE + LOGOS_PER_PAGE).map((src, i) => (
                      <div key={i} className="fsj-logo-card">
                        <img src={src} alt={`Company logo ${page * LOGOS_PER_PAGE + i + 1}`} className="fsj-logo-card__img" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button className="fsj-logo-arrow fsj-logo-arrow--right" aria-label="Next logos"
              disabled={logoPage >= totalLogoPages - 1} onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}>&#8594;</button>
          </div>
        </div>
      </section>

      <section className="fsj-related-section">
        <div className="fsj-container">
          <h2 className="fsj-related-title">Our Relevant Courses list</h2>
          <div className="fsj-related-grid">
            {RELATED.map((rc, i) => (
              <Link key={i} to={`/courses/${rc.slug}`} className="fsj-related-card">
                <div className="fsj-related-card__icon">{rc.icon}</div>
                <div className="fsj-related-card__title">{rc.title}</div>
                <div className="fsj-related-card__arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

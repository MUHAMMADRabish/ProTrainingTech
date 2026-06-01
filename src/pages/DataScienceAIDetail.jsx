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
    count: 24,
    topics: [
      'Introduction to Data Science','Python Basics & Installation (Jupyter, Colab)',
      'Data Types & Type Conversion','Operators & Flow Control (if, elif, else)',
      'Loops & Built-in Functions','Lists, Sets, Tuples & Dictionaries',
      'Dictionary Comprehension & Operations','Functions – Built-in vs User-defined',
      'Lambda / Anonymous Functions','Packages, Map & Reduce',
      'Object-Oriented Programming (OOPs)','Classes, Objects & __init__ Method',
      'Instance, Class & Static Methods','Python Decorators',
      'Polymorphism – Duck Typing & Operator Overloading',
      'Iterators & Generators','Error & Exception Handling',
      'File Handling & Modularization','Pickling & Unpickling',
      'Pandas – Series, DataFrame, GroupBy, Merge','NumPy – Arrays, Broadcasting, Linear Algebra',
      'Matplotlib – Line, Bar, Scatter, Pie, 3D Plots','Seaborn – Statistical & Categorical Plots',
      'SciPy & Statsmodels',
    ]
  },
  {
    title: 'Mathematics for Data Science',
    count: 10,
    topics: [
      'Set Theory & Database Operations','Combinatorics – Permutations & Combinations',
      'Probability Basics & Bayes Theorem','Conditional Probability & Probability Trees',
      'Distributions (Binomial, Poisson, Normal, Gaussian)',
      'Linear Algebra – Matrices, Vectors & Eigenvalues',
      'Euclidean Distance & Manhattan Distance',
      'Calculus – Differentiation & Partial Derivatives',
      'Indices & Logarithms',
      'Markov Chains',
    ]
  },
  {
    title: 'Statistics',
    count: 18,
    topics: [
      'Introduction to Statistics – Population & Sampling',
      'Types of Data (Qualitative / Quantitative)',
      'Measures of Central Tendency (Mean, Median, Mode)',
      'Descriptive Statistics & Measures of Symmetry',
      'Skewness & Kurtosis',
      'Measurement of Spread (Variance, Std Dev, IQR)',
      'Levels of Data Measurement (Nominal, Ordinal, Interval, Ratio)',
      'Variables – Dependent, Independent & Control',
      'Frequency Distribution Table',
      'Correlation – Pearson & Spearman',
      'Regression & Collinearity',
      'Bias & Variance in ML',
      'Entropy & Information Gain',
      'Surprise in ML',
      'Loss Function & Cost Function',
      'Hypothesis Testing – Null & Alternate Hypothesis',
      'Statistical Tests (T-test, Z-test, ANOVA, Chi-square)',
      'Inferential Statistics & Confidence Intervals',
    ]
  },
  {
    title: 'SQL for Data Analysis',
    count: 12,
    topics: [
      'SQL Introduction & RDBMS Concepts',
      'Primary & Foreign Keys',
      'Constraints (Unique, NOT NULL, Check, Default)',
      'CRUD Operations (Create, Read, Update, Delete)',
      'DDL, DML, DQL, DCL & TCL Languages',
      'SQL Commands (CREATE, INSERT, ALTER, UPDATE, DELETE)',
      'SQL Clauses (WHERE, GROUP BY, HAVING, ORDER BY, LIMIT)',
      'Operators (Comparison, Logical, Membership)',
      'Wildcards & LIKE',
      'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)',
      'SQL Joins (Inner, Left, Right, Self, Cross)',
      'Subqueries & Nested Queries',
    ]
  },
  {
    title: 'EDA & Machine Learning',
    count: 26,
    topics: [
      'Exploratory Data Analysis (Univariate, Bivariate, Multivariate)',
      'Data Visualisation for Continuous & Discrete Variables',
      'ML Introduction – Types of Machine Learning',
      'Important Elements of Machine Learning',
      'Multiclass Classification (One-vs-All)',
      'Data Processing – Scaling, Encoding, Feature Engineering',
      'Simple & Multiple Linear Regression',
      'Polynomial, Lasso, Ridge & Elastic Net Regression',
      'Evaluation Metrics (MAE, MSE, RMSE, R²)',
      'K-Nearest Neighbors (KNN)',
      'Logistic Regression',
      'Support Vector Machines (Linear & Kernel)',
      'Naïve Bayes (Bernoulli, Gaussian, Multinomial)',
      'Decision Trees',
      'Random Forest & Bagging',
      'AdaBoost & Gradient Boosting',
      'XGBoost',
      'Classification Metrics (Accuracy, F1, AUC-ROC)',
      'K-Means & Hierarchical Clustering',
      'Agglomerative & DBSCAN Clustering',
      'Association Rules & Apriori Algorithm',
      'Recommendation Engines (Collaborative Filtering)',
      'Time Series & Forecasting (ARIMA, SARIMAX)',
      'Model Selection & Evaluation – GridSearchCV',
      'Overfitting, Underfitting & ML Pipelines',
      'ML Model Deployment with Flask',
    ]
  },
  {
    title: 'Power BI',
    count: 10,
    topics: [
      'Power BI Introduction for Data Scientists',
      'Basic Report Design (Canvas, Fields, Visuals)',
      'Table, Tree Map & Bar Chart Visuals',
      'Visual Sync & Slicer Grouping',
      'Binning & Bin Count',
      'Hierarchies, Drill-Down & Drill-Through',
      'Visual, Page & Report Level Filters',
      'Power Query Transformations',
      'DAX Architecture & Syntax Rules',
      'DAX Measures & Calculated Columns',
    ]
  },
  {
    title: 'Deep Learning',
    count: 16,
    topics: [
      'Deep Learning Overview & Neural Networks',
      'Biological vs Artificial Neurons',
      'Perceptron & Multilayer Perceptron (MLP)',
      'Backpropagation & Cost Functions',
      'Gradient Descent – Vanishing & Exploding Gradient Problem',
      'Regularization & Optimizers',
      'Hyperparameters & Tuning',
      'TensorFlow Framework & Keras Integration',
      'ANN (Artificial Neural Network) Architecture',
      'PyTorch Library Introduction',
      'RNN (Recurrent Neural Network) & LSTM',
      'Encoder-Decoder Architecture & BERT',
      'Basics of Image Processing',
      'Convolutional Neural Networks (CNN)',
      'Transfer Learning with Pre-trained Models',
      'Image Classification Projects',
    ]
  },
  {
    title: 'Natural Language Processing (NLP)',
    count: 10,
    topics: [
      'Introduction to NLP & Text Cleaning',
      'Document Vectorization – Bag of Words & TF-IDF',
      'n-grams (Unigram, Bigram)',
      'Word2Vec & GloVe Embeddings',
      'Sentiment Analysis',
      'Twitter Sentiment Analysis using TextBlob',
      'TextBlob Library & NLTK Examples',
      'Spacy Library – Tokenization & Stop Words',
      'Named Entity Recognition (NER)',
      'Parts of Speech (PoS) Tagging',
    ]
  },
  {
    title: 'Computer Vision & Generative AI',
    count: 12,
    topics: [
      'Human Vision vs Computer Vision',
      'CNN Architecture for Vision Tasks',
      'Image Processing with OpenCV',
      'Face Detection with OpenCV',
      'Video Processing & Object Detection',
      'Reinforcement Learning Architecture',
      'OpenAI Integration',
      'Generative AI Fundamentals',
      'Large Language Models (LLMs)',
      'Time Series Forecasting with Deep Learning',
      'MakerSuite Google & PaLM API',
      'Azure ML Introduction',
    ]
  },
]

const BATCHES = [
  { course:'Data Science with AI', faculty:'Mr. Hari Krishna', date:'01 Jun', time:'6:00 PM IST', mode:'online',  type:'Online Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'End-to-end Data Science coverage — Python, Statistics, ML, Deep Learning, NLP, Computer Vision & GenAI.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: 'Work on real datasets and build ML models, NLP pipelines, and Power BI dashboards.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from experienced data scientists with live industry project delivery background.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Dedicated placement support, mock interviews, resume preparation and employer referrals.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate validating your Data Science with AI expertise.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock doubt-clearing sessions, lab support, and access to recorded lectures.' },
]

const REVIEWS = [
  { name:'Suresh Kumar',   course:'Data Science with AI', rating:5, initials:'SK', color:'#1565c0', text:'The Data Science with AI course is outstanding. Mr. Hari Krishna explains every concept from Python basics to ML algorithms and Deep Learning with excellent clarity. I transitioned from a BPO role to a data analyst position at a top MNC.' },
  { name:'Preethi Sharma', course:'Data Science with AI', rating:5, initials:'PS', color:'#e05c2a', text:'Best data science training available. The Power BI, NLP, and Computer Vision modules were highlights. Hands-on projects gave me the portfolio I needed to crack multiple interviews. Placement team is very supportive.' },
  { name:'Arun Varma',     course:'Data Science with AI', rating:5, initials:'AV', color:'#2e7d32', text:'Excellent structured course covering the entire data science stack. The Statistics and ML sections are thorough and exactly what interviews test. The Generative AI and OpenAI integration made my resume stand out from other candidates.' },
  { name:'Nisha Reddy',    course:'Data Science with AI', rating:4, initials:'NR', color:'#6a1b9a', text:'Well-structured 60-day intensive programme. The Flask deployment section was practical and immediately applicable. Mock interview sessions and resume workshops helped me secure a data science role at a product startup.' },
]

const RELATED = [
  { title:'Full Stack Data Science & AI', slug:'full-stack-data-science-ai-online-training', icon:'📊' },
  { title:'Full Stack Python',            slug:'full-stack-python-online-training',           icon:'🐍' },
  { title:'Full Stack Java',              slug:'full-stack-java-online-training',             icon:'☕' },
  { title:'Full Stack Software Testing',  slug:'full-stack-software-testing-online-training', icon:'🧪' },
  { title:'UI Full Stack React',          slug:'ui-full-stack-web-development-with-react-online-training', icon:'⚛️' },
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
  { id:'overview',          label:'Overview'          },
  { id:'curriculum',        label:'Curriculum'        },
  { id:'certificate',       label:'Certificate'       },
  { id:'upcoming-batches',  label:'Upcoming Batches'  },
  { id:'training-features', label:'Training Features' },
  { id:'reviews',           label:'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function DataScienceAIDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Mr. Hari Krishna')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 6:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Data Science with AI', mode:'Online' })
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

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link>
            <span>›</span>
            <Link to="/courses">Data Science</Link>
            <span>›</span>
            <span>Data Science with AI</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/images/banner_image_1712229380623"
            alt="Data Science with AI Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Data Science with AI Online Training</h1>
              <p className="fsj-banner__sub">Python · Statistics · ML · Deep Learning · NLP · Computer Vision · GenAI</p>
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
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Mr. Hari Krishna</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 6:00 PM IST</option>
                    <option>15 Jun - 6:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>60 days</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>6000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  href="/curriculum/data-science-ai-curriculum.pdf"
                  className="fsj-btn fsj-btn--outline"
                  onClick={e => e.preventDefault()}
                >
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

      {/* ── Tabs Bar ───────────────────────────────────────────────────────── */}
      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} ref={tabsRef} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ────────────────────────────────────────────────────── */}
      <div className="fsj-container">
        <div className="fsj-layout">

          <main className="fsj-content">

            {/* ── OVERVIEW ─────────────────────────────────────────────── */}
            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  The Data Science with AI programme provides comprehensive instruction in data analysis,
                  visualisation, statistical methods, machine learning algorithms, data wrangling,
                  preprocessing, and tools including Python, SQL, and Power BI — combining theoretical
                  concepts with hands-on application for industry-relevant problem-solving.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  This 60-day intensive course covers the complete data science workflow — from Python
                  fundamentals and statistical analysis through to machine learning model building,
                  deep learning with TensorFlow and PyTorch, NLP, computer vision with OpenCV, and
                  Generative AI with LLMs and OpenAI integration.
                </p>
                <p className="fsj-para">
                  Practical Power BI dashboard building, Flask model deployment, and real-world
                  project work ensure graduates are job-ready for data analyst, data scientist, and
                  AI engineer roles across industries.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Develop comprehensive understanding of data science methodologies</li>
                  <li>Demonstrate proficiency with Python data libraries (Pandas, NumPy, Matplotlib)</li>
                  <li>Build and implement machine learning models for regression and classification</li>
                  <li>Master data cleaning, preprocessing, and feature engineering techniques</li>
                  <li>Develop deep learning models with TensorFlow, PyTorch, CNN and RNN</li>
                  <li>Apply NLP techniques for text analysis and sentiment classification</li>
                  <li>Build computer vision applications using OpenCV and YOLO</li>
                  <li>Work with Generative AI, LLMs, and OpenAI APIs</li>
                  <li>Create Power BI dashboards for business intelligence reporting</li>
                  <li>Deploy ML models to production environments using Flask</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic statistics and mathematics foundation</li>
                  <li>Programming familiarity (Python preferred, not mandatory)</li>
                  <li>Fundamental database and SQL knowledge (helpful)</li>
                  <li>Enthusiasm for data-driven decision-making</li>
                  <li>Prior data science experience not required</li>
                </ul>

                <button
                  className="fsj-btn fsj-btn--primary fsj-enroll-now"
                  onClick={() => scrollToTab('upcoming-batches')}
                >
                  Enroll Now
                </button>
              </div>
            )}

            {/* ── CURRICULUM ───────────────────────────────────────────── */}
            {activeTab === 'curriculum' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Curriculum</h2>
                <div className="fsj-accordion">
                  {CURRICULUM.map((sec, i) => (
                    <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                      <button
                        className="fsj-acc__head"
                        onClick={() => toggleSection(i)}
                        aria-expanded={!!openSections[i]}
                      >
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
                <div style={{ textAlign:'center', marginTop:'2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                    Apply Now
                  </button>
                </div>
              </div>
            )}

            {/* ── CERTIFICATE ──────────────────────────────────────────── */}
            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the Data Science with AI course, you will receive an
                  industry-recognised certificate from Pro Training Tech validating your expertise
                  across Python, ML, Deep Learning, NLP, Computer Vision, and Generative AI.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Data Science with AI Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Data Science with AI</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign:'center', marginTop:'1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline" onClick={() => {}}>
                    Drop a Query
                  </button>
                </div>
              </div>
            )}

            {/* ── UPCOMING BATCHES ─────────────────────────────────────── */}
            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Faculty</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Mode</th>
                        <th>Batch Type</th>
                        <th>Meeting Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td>
                          <td>{b.date}</td>
                          <td>{b.time}</td>
                          <td>
                            <span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>
                              {b.mode}
                            </span>
                          </td>
                          <td>{b.type}</td>
                          <td>
                            <button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>
                              {b.link}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── TRAINING FEATURES ────────────────────────────────────── */}
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

            {/* ── REVIEWS ──────────────────────────────────────────────── */}
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

          {/* Sidebar */}
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
                  <input type="text" name="name" placeholder="Full Name *" required
                    value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="email" name="email" placeholder="Email Address *" required
                    value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" required
                    value={formData.mobile} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Data Science with AI</option>
                    <option>Full Stack Data Science & AI</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Software Testing</option>
                    <option>UI Full Stack React</option>
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

      {/* ── Salary Stats Bar ───────────────────────────────────────────────── */}
      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">
              Average package of course <strong>(Data Science with AI)</strong>
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

      {/* ── MNC Logos Carousel ─────────────────────────────────────────────── */}
      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button
              className="fsj-logo-arrow fsj-logo-arrow--left"
              aria-label="Previous logos"
              disabled={logoPage === 0}
              onClick={() => setLogoPage(p => Math.max(0, p - 1))}
            >
              &#8592;
            </button>
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
            <button
              className="fsj-logo-arrow fsj-logo-arrow--right"
              aria-label="Next logos"
              disabled={logoPage >= totalLogoPages - 1}
              onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* ── Related Courses ────────────────────────────────────────────────── */}
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

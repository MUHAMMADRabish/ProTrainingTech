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
    count: 26,
    topics: [
      'Introduction to Data Science & Python','Python Installation (Jupyter, Colab, .py)',
      'Data Types & Type Conversion','Variables & Operators',
      'Flow Control (If / Elif / Else)','Loops & Iteration',
      'Built-in Functions (print, type, len, sys)','Lists & List Comprehension',
      'List Methods (append, pop, insert, sort, reverse)','Sets, Tuples & Dictionaries',
      'Dictionary Comprehension & Operations','Functions: Built-in vs User-defined',
      'Lambda / Anonymous Functions','Packages, Map & Reduce',
      'Object-Oriented Programming (OOPs)','Classes, Objects & __init__ Method',
      'Instance, Class & Static Methods','Inheritance & Polymorphism',
      'Magic Methods & Abstract Classes','Iterators & Generators',
      'Error & Exception Handling','File Handling & Docstrings',
      'Modularization','Pickling & Unpickling',
      'Python Decorators','Inner & Outer Classes',
    ]
  },
  {
    title: 'Pandas',
    count: 20,
    topics: [
      'Introduction & Fundamentals','Series Creation & Operations',
      'NaN Value Handling','Series Attributes (values, index, dtypes)',
      'DataFrame Fundamentals','Loading Various File Formats (CSV, Excel, JSON)',
      'DataFrame Attributes & Methods','Column & Index Renaming',
      'Missing / NaN Value Handling','iLoc & Loc Operations',
      'DataFrame Filtering & Sorting','GroupBy Operations',
      'Merging & Joining DataFrames','Concatenation Operations',
      'Adding & Dropping Columns / Rows','Date & Time Operations',
      'Multiple CSV File Concatenation','Pivot Tables',
      'Apply & Map Functions','Data Type Conversions',
    ]
  },
  {
    title: 'NumPy',
    count: 14,
    topics: [
      'NumPy Array Creation & Manipulation','Mathematical Operations',
      'Indexing & Slicing','NumPy Attributes',
      'Methods (min, max, sum, reshape, sort, flatten)','Array Value Addition',
      'Matrix Diagonal & Trace','Matrix Operations (add, subtract, multiply)',
      'Statistical Functions (mean, median, std)','NumPy Filtering',
      'Broadcasting','View vs Copy',
      'Linear Algebra with NumPy','Random Module',
    ]
  },
  {
    title: 'Matplotlib & Seaborn',
    count: 16,
    topics: [
      'Introduction & Pyplot Module','Figure & Axes Classes',
      'Line, Bar, Histogram, Scatter, Pie Plots','3D Plots & Image Working',
      'Multiple Plots & Legend Configuration','catplot, stripplot, boxplot, violinplot',
      'pointplot, barplot, relplot, scatterplot','regplot & lmplot Functions',
      'Facetgrid & Multi-Plot Grids','Statistical & Distribution Plots',
      'Categorical & Regression Plots','Pair Plots',
      'Color Palettes','Plot Customization',
      'Seaborn Heatmaps','Annotations & Subplots',
    ]
  },
  {
    title: 'Mathematics & Statistics',
    count: 24,
    topics: [
      'Set Theory & Database Operations','Permutations & Combinations',
      'Probability Basics','Bayes Theorem & Conditional Probability',
      'Bernoulli, Gaussian, Multinomial Distributions','Binomial & Poisson Distributions',
      'Normal Distribution & Z-Score','Skewness & Kurtosis',
      'Linear Algebra (Matrices, Vectors, Eigenvalues)','Calculus (Differentiation, Partial Derivatives)',
      'Population & Sampling Techniques','Measures of Central Tendency (Mean, Median, Mode)',
      'Variance, Standard Deviation, IQR','Covariance & Pearson / Spearman Correlation',
      'Confidence Intervals','Central Limit Theorem',
      'Hypothesis Testing (p-value, T-test, Z-test)','ANOVA & Chi-Square Tests',
      'Type-I & Type-II Errors','Entropy & Information Gain',
      'Bias & Variance Tradeoff','Loss Functions (MSE, MAE, Cross-Entropy)',
      'Markov Chains','Euclidean & Manhattan Distances',
    ]
  },
  {
    title: 'SQL for Data Analysis',
    count: 18,
    topics: [
      'DBMS vs RDBMS & SQL Fundamentals','SQL vs NoSQL & MySQL Installation',
      'Primary & Foreign Keys','Constraints (Unique, NOT NULL, Check, Default)',
      'CRUD Operations (Create, Read, Update, Delete)','DDL – CREATE, ALTER, DROP',
      'DML – INSERT, UPDATE, DELETE','DQL – SELECT, DISTINCT, WHERE',
      'SQL Clauses (GROUP BY, HAVING, ORDER BY, LIMIT)','Aggregate Functions',
      'Wildcards & LIKE Operator','Joins (Inner, Left, Right, Self, Cross)',
      'Natural Joins','Subqueries & Nested Queries',
      'DCL (GRANT, REVOKE)','TCL (COMMIT, ROLLBACK)',
      'Views & Indexes','Window Functions',
    ]
  },
  {
    title: 'EDA & Machine Learning',
    count: 28,
    topics: [
      'Exploratory Data Analysis (Univariate, Bivariate, Multivariate)',
      'Data Visualization for Continuous & Discrete Variables',
      'Feature Engineering & Data Cleaning','Missing Values & Outlier Treatment',
      'Data Encoding & Scaling / Normalization',
      'Feature Selection (Filter, Wrapper, Embedded)','PCA & Dimensionality Reduction',
      'Train-Test Split & Cross-Validation','Scikit-learn Framework Introduction',
      'Simple & Multiple Linear Regression','Polynomial, Lasso, Ridge & Elastic Net Regression',
      'Regression Metrics (MAE, MSE, RMSE, R²)','K-Nearest Neighbors',
      'Logistic Regression','Support Vector Machines (Linear & Kernel)',
      'Naïve Bayes (Bernoulli, Gaussian, Multinomial)','Decision Trees',
      'Random Forest & Bagging','AdaBoost & Gradient Boosting',
      'XGBoost','Classification Metrics (Accuracy, F1, AUC-ROC)',
      'K-Means & Hierarchical Clustering','DBSCAN Clustering',
      'Market Basket Analysis & Apriori','Recommendation Engines (Collaborative Filtering)',
      'Time Series (ARIMA, SARIMAX)','ML Pipelines & GridSearchCV',
      'ML Model Deployment with Flask',
    ]
  },
  {
    title: 'Power BI',
    count: 14,
    topics: [
      'Power BI Introduction for Data Scientists','Report Types & Data Sources',
      'Basic Report Design (Canvas, Fields, Tables)','Visual Types & Format Options',
      'Slicer Visuals (Number, Text, List)','Binning & Bin Count',
      'Hierarchy Creation & Drill-Down','Visual, Page & Report Filters',
      'Drill-Through Reports','Power Query Transformations',
      'Column & Text Transformations','Merge & Append Operations',
      'DAX Architecture & Syntax Rules','DAX Measures & Calculated Columns',
    ]
  },
  {
    title: 'Deep Learning',
    count: 22,
    topics: [
      'Neural Network Introduction','Biological vs Artificial Neurons',
      'Perceptron & Learning Rules','Multilayer Perceptron & Loss Functions',
      'Activation Functions','Backpropagation & Gradient Descent',
      'Vanishing & Exploding Gradient Problems','Regularization & Optimizers',
      'TensorFlow Introduction & Basic Syntax','Keras Integration',
      'ANN Architecture & Forward / Backward Propagation','Hyperparameter Fine-Tuning',
      'PyTorch Library Introduction','RNN & Backpropagation Through Time',
      'LSTM & GRU Networks','Bidirectional RNN',
      'Encoder-Decoder Architecture','BERT Transformers',
      'Text Generation & Classification','CNN Architecture',
      'Transfer Learning with Pre-Trained Models','Image Classification Projects',
    ]
  },
  {
    title: 'Natural Language Processing (NLP)',
    count: 18,
    topics: [
      'Text Cleaning & Tokenization','Bag of Words & Count Vectorizer',
      'TF-IDF Vectorizer','n-grams (Unigram, Bigram)',
      'Word2Vec & GloVe','Word Clouds & Gensim',
      'One-Hot Encoding for Text','Text Classification using Word2Vec',
      'Parts of Speech Tagging (PoS)','Topic Modeling using LDA',
      'Sentiment Analysis','Twitter Sentiment Analysis with TextBlob',
      'NLTK & Spacy Libraries','Stemming & Lemmatization',
      'Named Entity Recognition (NER)','Dependency Parsing',
      'Word Frequency Analysis','NLTK Twitter Corpus',
    ]
  },
  {
    title: 'Computer Vision & Generative AI',
    count: 16,
    topics: [
      'Human vs Computer Vision','CNN Architecture (Convolution, Pooling, Flatten)',
      'Striding, Padding & Data Augmentation','OpenCV Introduction & Image Basics',
      'Face Detection with OpenCV','Video Processing & Object Detection',
      'YOLOv3 & YOLOv8 Introduction','Reinforcement Learning Architecture',
      'OpenAI Integration','Generative AI Fundamentals',
      'Large Language Models (LLMs)','ChatGPT (GPT-3.5 / GPT-4)',
      'Content Generation & Summarization','Information Retrieval Workflows',
      'Deep Learning Time Series Forecasting','Azure ML Introduction',
    ]
  },
]

const BATCHES = [
  { course:'Full Stack Data Science & AI', faculty:'Mr. Omkar', date:'01 Jun', time:'9:00 AM IST', mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Full Stack Data Science & AI', faculty:'Mr. Omkar', date:'01 Jun', time:'9:00 AM IST', mode:'offline', type:'Classroom Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'From Python and Statistics to Machine Learning, Deep Learning, NLP, Computer Vision and Generative AI.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: 'Build real-world ML models, NLP pipelines, and Power BI dashboards on live datasets.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from industry-active data scientists and AI engineers with live project experience.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Dedicated placement support, mock interviews, resume preparation and employer referrals.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate validating your full-stack Data Science & AI expertise.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock assistance via live doubt sessions, virtual labs and recorded lectures.' },
]

const REVIEWS = [
  { name:'Aditya Kumar',  course:'Full Stack Data Science & AI', rating:5, initials:'AK', color:'#1565c0', text:'The Full Stack Data Science & AI course is exceptional. Mr. Omkar covers everything from Python and ML to Deep Learning and Generative AI with great clarity. I transitioned from a software role to a data science position at a top MNC.' },
  { name:'Divya Menon',   course:'Full Stack Data Science & AI', rating:5, initials:'DM', color:'#e05c2a', text:'Outstanding curriculum that covers the entire data science stack. The hands-on Power BI, NLP, and Computer Vision modules were highlights. Placement support helped me secure a senior analytics role within weeks.' },
  { name:'Rohit Sharma',  course:'Full Stack Data Science & AI', rating:5, initials:'RS', color:'#2e7d32', text:'Best data science course I have come across. The deep learning and generative AI sections with ChatGPT integration were cutting-edge. Mock interview sessions prepared me thoroughly for technical rounds at top companies.' },
  { name:'Sneha Patil',   course:'Full Stack Data Science & AI', rating:4, initials:'SP', color:'#6a1b9a', text:'Very structured programme covering Statistics, SQL, ML, and Deep Learning comprehensively. The real-world projects and flask deployment section gave me practical experience that impressed interviewers. Highly recommend.' },
]

const RELATED = [
  { title:'Full Stack Java',             slug:'full-stack-java-online-training',                 icon:'☕' },
  { title:'Full Stack Python',           slug:'full-stack-python-online-training',               icon:'🐍' },
  { title:'Full Stack Software Testing', slug:'full-stack-software-testing-online-training',     icon:'🧪' },
  { title:'UI Full Stack React',         slug:'ui-full-stack-react',                              icon:'⚛️' },
  { title:'Full Stack .NET',             slug:'full-stack-dotnet',                                icon:'🔷' },
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

export default function FullStackDataScienceDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Mr. Omkar')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 9:00 AM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Full Stack Data Science & AI', mode:'Online' })
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

  const toggleSection   = (i) => setOpenSections(p => ({ ...p, [i]: !p[i] }))
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
            <Link to="/full-stack-courses">Full Stack Courses</Link>
            <span>›</span>
            <span>Full Stack Data Science &amp; AI</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/Data_Analytics.jpg"
            alt="Full Stack Data Science & AI Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Full Stack Data Science &amp; AI Online Training</h1>
              <p className="fsj-banner__sub">Python · ML · Deep Learning · NLP · Computer Vision · Generative AI</p>
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
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Mr. Omkar</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 9:00 AM IST</option>
                    <option>15 Jun - 9:00 AM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>4 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>27000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  href="/curriculum/full-stack-data-science-curriculum.pdf"
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
                  The Full Stack Data Science &amp; AI programme offers a thorough and immersive experience
                  meticulously crafted to empower participants with competencies across the complete data
                  science and AI stack. Through interactive modules, virtual labs, and instructor-led sessions,
                  learners master handling real-world datasets and implementing cutting-edge AI algorithms.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  The curriculum initiates with foundational Python programming and progresses through data
                  collection, preprocessing, exploratory data analysis (EDA), statistical analysis, and
                  machine learning algorithms — reinforced through exercises, projects, and case studies.
                </p>
                <p className="fsj-para">
                  Advanced topics cover deep learning with TensorFlow, PyTorch, CNNs and RNNs, Natural
                  Language Processing, Computer Vision with OpenCV and YOLO, and Generative AI including
                  Large Language Models and ChatGPT integration. Power BI is also covered for business
                  intelligence and data storytelling.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Gain Python programming proficiency for data science and AI workflows</li>
                  <li>Master data collection, preprocessing, and exploratory data analysis (EDA)</li>
                  <li>Apply statistical analysis and probability theory to real-world datasets</li>
                  <li>Build supervised, unsupervised, and reinforcement learning models</li>
                  <li>Develop deep learning architectures (ANN, CNN, RNN, LSTM, Transformers)</li>
                  <li>Implement NLP pipelines for text classification and sentiment analysis</li>
                  <li>Build computer vision applications with OpenCV and YOLO</li>
                  <li>Work with Generative AI, LLMs, and ChatGPT integration</li>
                  <li>Create interactive dashboards and reports using Power BI</li>
                  <li>Deploy ML models to production environments</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic Python programming understanding</li>
                  <li>Statistics and mathematics familiarity</li>
                  <li>Data manipulation library knowledge (NumPy, Pandas — helpful)</li>
                  <li>Data visualisation technique understanding</li>
                  <li>Machine learning concept basics (helpful but not required)</li>
                  <li>SQL and database familiarity</li>
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
                  Upon successful completion of the Full Stack Data Science &amp; AI course, you will receive
                  an industry-recognised certificate from Pro Training Tech validating your expertise across
                  the complete data science and AI stack.
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
                            <div class="fsj-cert-placeholder__course">Full Stack Data Science &amp; AI</div>
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
                    <option>Full Stack Data Science & AI</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Software Testing</option>
                    <option>UI Full Stack React</option>
                    <option>Full Stack .NET</option>
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
              Average package of course <strong>(Full Stack Data Science &amp; AI)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">5–9L</span>
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

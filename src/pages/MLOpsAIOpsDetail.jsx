import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Module 1: DevOps Fundamentals',
    count: 10,
    topics: [
      'Introduction to DevOps – Philosophy, Lifecycle & ROI',
      'Linux Fundamentals – Commands, Shell Scripting, File System & Permissions',
      'Version Control with Git – Branching (GitFlow), Pull Requests, Git Hooks',
      'CI/CD Fundamentals – Jenkins, GitHub Actions & Pipeline Design Patterns',
      'Infrastructure as Code (IaC) – Ansible, Terraform, CloudFormation',
      'Containerisation with Docker – Dockerfile, Networking, Registries',
      'Container Orchestration with Kubernetes – Pods, Deployments, Services',
      'Cloud Computing Fundamentals – AWS, Azure, GCP (IaaS, PaaS, SaaS)',
      'Monitoring & Observability – Prometheus, Grafana, ELK/EFK Stack',
      'DevSecOps Integration – Vulnerability Scanning, Secret Management, Compliance as Code',
    ]
  },
  {
    title: 'Module 2: MLOps',
    count: 10,
    topics: [
      'Introduction to MLOps – ML Lifecycle, MLOps vs DevOps, Maturity Model',
      'Data Engineering for ML – Pipelines, Feature Engineering, Feature Stores (Feast)',
      'ML Experimentation & Tracking – MLflow, Weights & Biases, Hyperparameter Optimisation',
      'ML Version Control – Git for ML, DVC for Data, Experiment Reproducibility',
      'ML Model Packaging & Deployment – ONNX, FastAPI Model Serving, Batch Inference',
      'ML CI/CD Pipelines – Testing ML Models, Continuous Training & Deployment',
      'Model Monitoring & Management – Data Drift, Concept Drift, A/B Testing',
      'ML Infrastructure Orchestration – Kubeflow, SageMaker, Vertex AI',
      'ML on Edge and Mobile – TensorFlow Lite, PyTorch Mobile, Federated Learning',
      'MLOps for Computer Vision & NLP – End-to-End CV/NLP Deployment Pipelines',
    ]
  },
  {
    title: 'Module 3: LLMOps',
    count: 10,
    topics: [
      'Introduction to LLMOps – LLM Lifecycle, LLMOps vs MLOps, Business Applications',
      'Foundation Model Management – Open-source vs Proprietary LLMs, Model Hosting',
      'Prompt Engineering & Management – Prompt Versioning, Templates & Testing',
      'LLM Fine-tuning & Customisation – LoRA, QLoRA, Domain Adaptation',
      'Retrieval Augmented Generation (RAG) – Architecture, Vector Databases, Hybrid Search',
      'LLM Deployment Architectures – Quantisation, Distillation, Caching, Load Balancing',
      'LLM Evaluation & Testing – Metrics, Red-Teaming, Automated Evaluation Frameworks',
      'LLM Observability & Monitoring – Output Quality, Cost Tracking, Anomaly Detection',
      'Responsible LLM Implementation – Alignment, Content Filtering, Explainability',
      'Multimodal LLMs – Vision-Language Models, Audio-Text Integration, Multimodal Fine-tuning',
    ]
  },
  {
    title: 'Module 4: AI Fundamentals',
    count: 10,
    topics: [
      'Introduction to AI & Machine Learning – AI History, Types, Ethics',
      'Mathematics for AI – Linear Algebra, Probability, Calculus, Information Theory',
      'Machine Learning Fundamentals – Supervised, Unsupervised, RL, Feature Engineering',
      'Deep Learning Essentials – Neural Networks, Backpropagation, CNNs, RNNs',
      'Transformer Architecture – Attention Mechanisms, Encoder-Decoder, Positional Encodings',
      'Natural Language Processing – Text Preprocessing, Word Embeddings, Transformers for NLP',
      'Computer Vision Basics – Object Detection, Image Segmentation, Vision Transformers',
      'Reinforcement Learning – Value-Based Methods, Policy Gradient, Deep RL',
      'AI Tools & Frameworks – TensorFlow, Keras, PyTorch, Hugging Face, JAX',
      'AI Ethics & Governance – Bias, Fairness, Privacy, Explainability, Regulatory Frameworks',
    ]
  },
  {
    title: 'Module 5: AIOps',
    count: 10,
    topics: [
      'Introduction to AIOps – AIOps Concept, Business Value, Maturity Model',
      'IT Operations Data Collection – Telemetry, Log Aggregation, Metrics Collection',
      'AIOps Data Processing – Normalisation, Time-Series Processing, Event Correlation',
      'Anomaly Detection Systems – Statistical, ML-Based & Time-Series Anomaly Detection',
      'Predictive Analytics for IT – Failure Prediction, Capacity Planning, SLA Prediction',
      'Root Cause Analysis & Remediation – Causal Inference, Automated Remediation',
      'AIOps Platforms & Integration – Commercial Platforms, ITSM Integration, Incident Automation',
      'Self-Healing Systems – Automated Remediation, Chaos Engineering, Resilience Testing',
      'Cloud-Native AIOps – Kubernetes Observability, Microservices & Serverless Monitoring',
      'AIOps & DevSecOps Integration – Security Monitoring, Threat Detection, Compliance Automation',
    ]
  },
  {
    title: 'Module 6: Generative AI',
    count: 10,
    topics: [
      'Introduction to Generative AI – Generative vs Discriminative Models, Use Cases',
      'Foundation Models – Pre-training, Transfer Learning, Scaling Laws',
      'Text Generation Models – GPT, Autoregressive Models, Control Mechanisms',
      'Image Generation – GANs, Diffusion Models (DALL-E, Stable Diffusion), Text-to-Image',
      'Audio & Speech Generation – Speech Synthesis, Music Generation, Voice Cloning',
      'Video Generation – Text-to-Video Systems, Video Diffusion, Temporal Consistency',
      'Multimodal Generation – Cross-Modal Techniques, Text-to-3D, Multimodal Pipelines',
      'Generative AI Deployment – Serving, Latency Optimisation, Cost Management',
      'Generative AI for Business – Content Creation, Personalisation, Enterprise Integration',
      'Responsible Generative AI – Bias Detection, Content Filtering, Attribution & Copyright',
    ]
  },
  {
    title: 'Module 7: AI Agents',
    count: 10,
    topics: [
      'Introduction to AI Agents – Architecture, Types, Capabilities & Business Applications',
      'Agent Development Frameworks – LangChain, AutoGPT, BabyAGI, CrewAI',
      'Tool Use & Function Calling – Tool Libraries, API Connectivity, Tool Selection Reasoning',
      'Agent Memory Systems – Short/Long-term Memory, Vector Databases, Retrieval Strategies',
      'Planning & Reasoning – Chain-of-Thought, Tree of Thought, Task Decomposition',
      'Multi-Agent Systems – Communication Protocols, Role Specialisation, Emergent Behaviours',
      'Autonomous Decision Making – Decision Theory, Utility Functions, Risk Assessment',
      'Agent Evaluation & Testing – Benchmarking, Simulation Environments, Adversarial Testing',
      'Human-Agent Interaction – Conversational Interfaces, Explainability, Trust Building',
      'Enterprise Agent Deployment – Security, Scalable Infrastructure, Governance & Compliance',
    ]
  },
  {
    title: 'Module 8: Real-World Projects & Job Preparation',
    count: 8,
    topics: [
      'MLOps End-to-End Project – ML CI/CD System with Data Pipeline, Training & Monitoring',
      'LLMOps Production Project – Production LLM App with Fine-tuning & Prompt Management',
      'AIOps Implementation Project – Anomaly Detection + Predictive Maintenance for IT Infra',
      'AI Agent Solution Project – Enterprise Multi-Agent System with Tool Integration',
      'Industry-Specific Implementation – Vertical AI Solution with Compliance Considerations',
      'Future-Proofing Skills – Emerging Tech, Research Paper Analysis, Open Source Contribution',
      'Portfolio & Resume Development – LinkedIn Optimisation, Technical Interview Preparation',
      'Industry Mentorship – Career Path Guidance, Networking Strategies, Salary Negotiation',
    ]
  },
]

const BATCHES = [
  { course:'MLOps & AIOps', faculty:'Real-Time Expert', date:'01 Jun', time:'7:00 PM IST', mode:'online',  type:'Online Training',    link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: '8 modules covering DevOps, MLOps, LLMOps, AI, AIOps, Generative AI, AI Agents and real projects.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: '4 capstone projects: MLOps pipeline, LLMOps deployment, AIOps system & enterprise AI agent.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from industry practitioners with real-time MLOps and AIOps deployment experience.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Portfolio development, mock interviews, resume prep, and system design interview practice.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate validating your MLOps, AIOps & Generative AI expertise.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock lab access, expert mentor sessions, and lifetime access to course materials.' },
]

const REVIEWS = [
  { name:'Kiran Reddy',    course:'MLOps & AIOps', rating:5, initials:'KR', color:'#1565c0', text:'The MLOps & AIOps course is exceptional. The curriculum is the most comprehensive I have seen — covering everything from DevOps fundamentals to LLMOps, AI Agents and Generative AI. I transitioned to a senior MLOps engineer role at a product company.' },
  { name:'Priya Nair',     course:'MLOps & AIOps', rating:5, initials:'PN', color:'#e05c2a', text:'Outstanding programme. The RAG and LLMOps modules are cutting-edge and immediately applicable. The AI Agents section with LangChain and CrewAI gave me skills that most candidates at my level simply do not have. Highly recommend.' },
  { name:'Arjun Sharma',   course:'MLOps & AIOps', rating:5, initials:'AS', color:'#2e7d32', text:'Best MLOps training available. The Kubeflow, MLflow and model monitoring sections are thorough and the hands-on projects create a strong portfolio. The AIOps module for IT infrastructure automation was an unexpected highlight.' },
  { name:'Divya Venkat',   course:'MLOps & AIOps', rating:4, initials:'DV', color:'#6a1b9a', text:'Incredibly well-structured programme covering the full ML engineering lifecycle. The Generative AI and AI Agent deployment modules are future-forward. Interview preparation and mentorship sessions helped me secure a great role quickly.' },
]

const RELATED = [
  { title:'Full Stack Data Science & AI', slug:'full-stack-data-science-ai-online-training', icon:'📊' },
  { title:'Data Science with AI',         slug:'data-science-online-training',               icon:'🤖' },
  { title:'Data Analytics & Business Analytics', slug:'data-analytics-online-training',      icon:'📈' },
  { title:'Full Stack Python',            slug:'full-stack-python-online-training',           icon:'🐍' },
  { title:'Full Stack Software Testing',  slug:'full-stack-software-testing-online-training', icon:'🧪' },
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

export default function MLOpsAIOpsDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 7:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'MLOps & AIOps', mode:'Online' })
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
            <span>MLOps &amp; AIOps</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/banner_image_1747737422024.jpg"
            alt="MLOps & AIOps Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">MLOps &amp; AIOps Online Training</h1>
              <p className="fsj-banner__sub">DevOps · MLOps · LLMOps · AI Agents · Generative AI · AIOps</p>
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
                    <option>15 Jun - 7:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>4 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}>
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>25000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  style={{ display: 'none' }}
                  href="/curriculum/mlops-aiops-curriculum.pdf"
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
                  The MLOps &amp; AIOps programme is designed to bridge the gap between machine learning
                  development and operations, while introducing you to AI-driven IT operations. It
                  emphasises automating and monitoring ML model deployment through hands-on labs and
                  real-time projects across 8 comprehensive modules.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  This programme covers MLOps and AIOps as enterprise transformation tools, providing
                  in-depth knowledge and hands-on experience in automating the end-to-end lifecycle of
                  machine learning models. Key tools covered include MLflow, Kubeflow, TensorFlow
                  Extended (TFX), Jenkins, Docker, Kubernetes, Prometheus, Grafana, and the ELK stack.
                </p>
                <p className="fsj-para">
                  Beyond MLOps, the course extends into LLMOps (managing large language models in
                  production), Generative AI deployment, AI Agents with LangChain and CrewAI, and
                  AIOps for IT infrastructure — equipping learners for the most in-demand roles in
                  modern AI engineering.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Understand MLOps &amp; AIOps concepts, lifecycle, and industry use cases</li>
                  <li>Implement CI/CD pipelines specifically for ML model training and deployment</li>
                  <li>Automate data workflows, model training, and continuous evaluation</li>
                  <li>Monitor, deploy, and manage ML models in production environments</li>
                  <li>Use MLflow, Kubeflow, and TFX for end-to-end MLOps operations</li>
                  <li>Manage LLMs in production using RAG, LoRA fine-tuning, and LLM monitoring</li>
                  <li>Build and deploy AI Agents using LangChain, CrewAI, and multi-agent systems</li>
                  <li>Apply AIOps to automate IT observability, anomaly detection, and self-healing</li>
                  <li>Deploy Generative AI (text, image, audio, video) to production at scale</li>
                  <li>Complete 4 capstone projects and prepare for senior ML engineering roles</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic understanding of Python and Machine Learning</li>
                  <li>Familiarity with DevOps concepts (optional but beneficial)</li>
                  <li>Knowledge of cloud platforms like AWS, Azure, or GCP (recommended)</li>
                  <li>Prior experience in data science or IT operations (a plus)</li>
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
                  Upon successful completion of the MLOps &amp; AIOps course, you will receive an
                  industry-recognised certificate from Pro Training Tech validating your expertise
                  across ML engineering, LLMOps, AIOps, Generative AI, and AI Agent development.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="MLOps & AIOps Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">MLOps &amp; AIOps</div>
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
                    <option>MLOps & AIOps</option>
                    <option>Full Stack Data Science & AI</option>
                    <option>Data Science with AI</option>
                    <option>Data Analytics & Business Analytics</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Java</option>
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
              Average package of course <strong>(MLOps &amp; AIOps)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">3–6L</span>
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

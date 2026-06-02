import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Home.css'

/* ── DATA ─────────────────────────────────────────── */

const HERO_SLIDES = [
  { image: 'https://images.nareshit.com/ms-azure-and-devops-online-training-nareshit.jpg', title: 'MS Azure + Azure DevOps', instructor: 'Pro Training Tech', duration: '60 Days', rating: 4.5, date: 'Jun 2026' },
  { image: 'https://images.nareshit.com/Data_Analytics.jpg', title: 'Data Analytics & Business Analytics', instructor: 'Pro Training Tech', duration: '3 Months', rating: 5.0, date: 'Jun 2026' },
  { image: 'https://images.nareshit.com/playwright-automation-online-training.jpg', title: 'Playwright Automation', instructor: 'Pro Training Tech', duration: '2 Months', rating: 4.8, date: 'Jun 2026' },
  { image: 'https://images.nareshit.com/Java.jpg', title: 'Full Stack Java', instructor: 'Pro Training Tech', duration: '6 Months', rating: 5.0, date: 'May 2026' },
]

const COURSE_TABS = ['Trending', 'Full Stack Courses', 'Job Placement Assistance Programs', 'Internships', 'Certification Courses']

const ALL_COURSES = {
  'Trending': [
    { id: 1,  slug: 'generative-ai-online-training',                          image: 'https://images.nareshit.com/Generative_AI_&_Agentic_AI_with_Python.png',          title: 'Generative AI & Agentic AI with Python',    instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.8, date: 'Jun 2026' },
    { id: 2,  slug: 'advanced-generative-and-agentic-ai',                     image: 'https://images.nareshit.com/Advanced_Generative_and_Agentic_AI_Online_Training_NARESHIT.jpg', title: 'Advanced Generative & Agentic AI',  instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.9, date: 'Jun 2026' },
    { id: 3,  slug: 'data-analytics-online-training',                         image: 'https://images.nareshit.com/Data_Analytics.jpg',                                   title: 'Data Analytics & Business Analytics',       instructor: 'Pro Training Tech', duration: '3 Months', rating: 5.0, date: 'Jun 2026' },
    { id: 4,  slug: 'playwright-with-typescript',                             image: 'https://images.nareshit.com/Playwright_with_TypeScript_at_Naresh_IT_(1).png',      title: 'Playwright with TypeScript',                instructor: 'Pro Training Tech', duration: '2 Months', rating: 4.8, date: 'Jun 2026' },
    { id: 5,  slug: 'full-stack-java-online-training',                        image: 'https://images.nareshit.com/Java.jpg',                                             title: 'Full Stack Java',                           instructor: 'Pro Training Tech', duration: '6 Months', rating: 5.0, date: 'May 2026' },
    { id: 6,  slug: 'full-stack-python-online-training',                      image: 'https://images.nareshit.com/python.jpg',                                           title: 'Full Stack Python',                         instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.7, date: 'Jun 2026' },
    { id: 7,  slug: 'full-stack-data-science-ai-online-training',             image: 'https://images.nareshit.com/Data_Sci_(1).jpg',                                     title: 'Full Stack Data Science & AI',              instructor: 'Pro Training Tech', duration: '5 Months', rating: 4.9, date: 'Jun 2026' },
    { id: 8,  slug: 'mlops-and-aiops-online-training',                        image: 'https://images.nareshit.com/MLOps_and_AIOps_Online_Training_Naresh_IT.jpg',        title: 'MLOps & AIOps',                             instructor: 'Pro Training Tech', duration: '3 Months', rating: 4.5, date: 'Jun 2026' },
  ],
  'Full Stack Courses': [
    { id: 1,  slug: 'full-stack-java-online-training',                        image: 'https://images.nareshit.com/Java.jpg',                                             title: 'Full Stack Java',                           instructor: 'Pro Training Tech', duration: '6 Months', rating: 5.0, date: 'May 2026' },
    { id: 2,  slug: 'full-stack-python-online-training',                      image: 'https://images.nareshit.com/python.jpg',                                           title: 'Full Stack Python',                         instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.7, date: 'Jun 2026' },
    { id: 3,  slug: 'full-stack-data-science-ai-online-training',             image: 'https://images.nareshit.com/Data_Sci_(1).jpg',                                     title: 'Full Stack Data Science & AI',              instructor: 'Pro Training Tech', duration: '5 Months', rating: 4.9, date: 'Jun 2026' },
    { id: 4,  slug: 'full-stack-dot-net-core-online-training',                image: 'https://images.nareshit.com/dot net.jpg',                                          title: 'Full Stack .NET Core',                      instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.6, date: 'Jun 2026' },
    { id: 5,  slug: 'ui-full-stack-web-development-with-react-online-training',image: 'https://images.nareshit.com/web.jpg',                                             title: 'UI Full Stack Web Development with React',  instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.5, date: 'Jun 2026' },
    { id: 6,  slug: 'full-stack-software-testing-online-training',            image: 'https://images.nareshit.com/full_stack_software_testing_by_naresh_it.jpg',         title: 'Full Stack Software Testing',               instructor: 'Pro Training Tech', duration: '3 Months', rating: 4.5, date: 'Jun 2026' },
  ],
  'Job Placement Assistance Programs': [
    { id: 1,  slug: 'full-stack-java-online-training',                        image: 'https://images.nareshit.com/Java.jpg',                                             title: 'Full Stack Java',                           instructor: 'Pro Training Tech', duration: '6 Months', rating: 5.0, date: 'May 2026' },
    { id: 2,  slug: 'full-stack-python-online-training',                      image: 'https://images.nareshit.com/python.jpg',                                           title: 'Full Stack Python',                         instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.7, date: 'Jun 2026' },
    { id: 3,  slug: 'full-stack-software-testing-online-training',            image: 'https://images.nareshit.com/full_stack_software_testing_by_naresh_it.jpg',         title: 'Full Stack Software Testing',               instructor: 'Pro Training Tech', duration: '3 Months', rating: 4.5, date: 'Jun 2026' },
    { id: 4,  slug: 'full-stack-data-science-ai-online-training',             image: 'https://images.nareshit.com/Data_Sci_(1).jpg',                                     title: 'Full Stack Data Science & AI',              instructor: 'Pro Training Tech', duration: '5 Months', rating: 4.9, date: 'Jun 2026' },
  ],
  'NASSCOM Approved Courses': [
    { id: 1,  slug: 'full-stack-data-science-ai-certification-online-training', image: 'https://images.nareshit.com/full-stack-data-science-certification-online-training-nareshit.jpg', title: 'Full Stack Data Science Program',   instructor: 'Pro Training Tech', duration: '6 Months', rating: 4.5, date: 'Jun 2026' },
    { id: 2,  slug: 'full-stack-java-online-training',                        image: 'https://images.nareshit.com/Java.jpg',                                             title: 'Full Stack Java',                           instructor: 'Pro Training Tech', duration: '6 Months', rating: 5.0, date: 'May 2026' },
    { id: 3,  slug: 'full-stack-python-online-training',                      image: 'https://images.nareshit.com/python.jpg',                                           title: 'Full Stack Python',                         instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.7, date: 'Jun 2026' },
    { id: 4,  slug: 'full-stack-software-testing-online-training',            image: 'https://images.nareshit.com/full_stack_software_testing_by_naresh_it.jpg',         title: 'Full Stack Software Testing',               instructor: 'Pro Training Tech', duration: '3 Months', rating: 4.5, date: 'Jun 2026' },
  ],
  'Internships': [
    { id: 1,  slug: 'data-science-online-training',                           image: 'https://images.nareshit.com/data-science-ai-online-training-nareshit.jpg',         title: 'Data Science with AI',                      instructor: 'Pro Training Tech', duration: '3 Months', rating: 5.0, date: 'Jun 2026' },
    { id: 2,  slug: 'numpy-pandas-matplotlib-online-training',                image: 'https://images.nareshit.com/Numpy-Pandas-Matplotlib-online-training-nareshit.jpg', title: 'Numpy | Pandas | Matplotlib',               instructor: 'Pro Training Tech', duration: '45 Days',  rating: 5.0, date: 'Jun 2026' },
    { id: 3,  slug: 'full-stack-python-online-training',                      image: 'https://images.nareshit.com/python.jpg',                                           title: 'Full Stack Python',                         instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.7, date: 'Jun 2026' },
  ],
  'Certification Courses': [
    { id: 1,  slug: 'full-stack-data-science-ai-certification-online-training', image: 'https://images.nareshit.com/full-stack-data-science-certification-online-training-nareshit.jpg', title: 'Full Stack Data Science & AI Certification', instructor: 'Pro Training Tech', duration: '6 Months', rating: 4.5, date: 'Jun 2026' },
    { id: 2,  slug: 'generative-ai-online-training',                          image: 'https://images.nareshit.com/Generative_AI_&_Agentic_AI_with_Python.png',          title: 'Generative AI & Agentic AI with Python',    instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.8, date: 'Jun 2026' },
    { id: 3,  slug: 'advanced-generative-and-agentic-ai',                     image: 'https://images.nareshit.com/Advanced_Generative_and_Agentic_AI_Online_Training_NARESHIT.jpg', title: 'Advanced Generative & Agentic AI',  instructor: 'Pro Training Tech', duration: '4 Months', rating: 4.9, date: 'Jun 2026' },
  ],
}

const TRAINING_SERVICES = [
  { title: 'Real-Time Projects', image: 'https://images.nareshit.com/images/image_1706336260793.jpg', desc: 'Hands-on learning with real-world scenarios, mentor support, and state-of-the-art labs for practical experience.', link: '/services/real-time-projects' },
  { title: 'Internships', image: 'https://images.nareshit.com/image_1706335329390.jpg', desc: 'Government-recognized certificate. 30-day program covering AI, Machine Learning, Data Analytics, and Python EDA.', link: '/internships' },
  { title: 'Workshops', image: 'https://images.nareshit.com/images/image_1706335756779.jpg', desc: 'Latest technologies, hands-on exercises, expert guidance, and real-world use cases with networking opportunities.', link: '/services/workshops' },
  { title: 'Weekend Training', image: 'https://images.nareshit.com/images/image_1706336807195.jpeg', desc: 'Flexible scheduling for working professionals with tailored curriculum covering the latest in-demand technologies.', link: '/services/weekend-training' },
]

const VALUES_STATS = [
  { icon: 'https://cdn.nareshit.com/images/22plus_years_experience.svg', label: '22+ Years Experience' },
  { icon: 'https://cdn.nareshit.com/images/10pluslakhs_students_trained.svg', label: '10+ Lakhs Students Trained' },
  { icon: 'https://cdn.nareshit.com/images/95plus_carrer_launch_success_2.svg', label: '95%+ Career Launch Success' },
]

const DOMAINS = [
  { name: 'Full Stack',           image: 'https://images.nareshit.com/images/image_1708755533965.jpg',  id: 1  },
  { name: 'Cloud Computing',      image: 'https://images.nareshit.com/images/image_1706090706296.jpg',  id: 2  },
  { name: 'Operating System',     image: 'https://images.nareshit.com/images/image_1706093906274.jpg',  id: 3  },
  { name: 'Software Testing',     image: 'https://images.nareshit.com/images/image_1706094154234.jpg',  id: 4  },
  { name: 'Mulesoft',             image: 'https://images.nareshit.com/images/image_1706094359583.jpg',  id: 5  },
  { name: 'Soft Skills',          image: 'https://images.nareshit.com/images/image_1706164993158.jpg',  id: 6  },
  { name: 'NASSCOM',              image: 'https://images.nareshit.com/images/image_1711014922224.jpg',  id: 7  },
  { name: 'Data Science',         image: 'https://images.nareshit.com/images/image_1706357525308.jpg',  id: 8  },
  { name: 'Digital Marketing',    image: 'https://images.nareshit.com/images/image_1706532388312.jpg',  id: 9  },
  { name: 'Analytics',            image: 'https://images.nareshit.com/images/image_1706532336352.jpg',  id: 10 },
  { name: 'Automations',          image: 'https://images.nareshit.com/images/image_1706532317771.jpg',  id: 11 },
  { name: 'Data Base',            image: 'https://images.nareshit.com/images/image_1706532292403.jpg',  id: 12 },
  { name: 'DevOps',               image: 'https://images.nareshit.com/devops_logo.jpg',                 id: 13 },
  { name: 'Mobile Technologies',  image: 'https://images.nareshit.com/images/image_1706164046559.jpg',  id: 14 },
  { name: 'Programming',          image: 'https://images.nareshit.com/images/image_1706093917022.jpg',  id: 15 },
  { name: 'Web Development',      image: 'https://images.nareshit.com/images/image_1706532234414.jpg',  id: 16 },
  { name: 'Frameworks',           image: 'https://images.nareshit.com/images/image_1706687556313.png',  id: 17 },
  { name: 'Placement Assistance', image: 'https://images.nareshit.com/images/image_1711197677976.jpg',  id: 18 },
  { name: 'Internships',          image: 'https://images.nareshit.com/intern.jpg',                      id: 19 },
  { name: 'DevSecOps',            image: 'https://images.nareshit.com/devsecops_nareshit.png',          id: 20 },
  { name: 'Workshops',            image: 'https://images.nareshit.com/images/image_1712297718267.jpg',  id: 21 },
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

const TESTIMONIALS = [
  { name: 'Shanmuk Reddy', course: 'MultiCloud DevOps', photo: 'https://images.nareshit.com/Cev_review_image.png', rating: 5, text: 'Pro Training Tech completely transformed my career. The training was incredibly comprehensive and the trainers were true industry experts. Got placed within a month!' },
  { name: 'Shakina Bano',  course: 'Full Stack',        photo: 'https://images.nareshit.com/python_review_image.png', rating: 5, text: 'The Full Stack course at Pro Training Tech is top-notch. Real-world projects and hands-on experience made all the difference. The placement support team is excellent.' },
  { name: 'Sai Krishna Teja', course: 'Data Science',  photo: 'https://images.nareshit.com/DS_internship_review_image.png', rating: 5, text: 'I enrolled for Data Science and it exceeded all expectations. The curriculum is perfectly aligned with industry standards. The mock interviews gave me a real edge.' },
  { name: 'Abhinav',       course: 'Data Science & AI', photo: 'https://images.nareshit.com/DSAC_review_image.png', rating: 5, text: 'Exceptional training quality with hands-on projects and industry-relevant curriculum. The placement assistance is top-class and helped me land my dream job.' },
]

const PLACED_STUDENTS = [
  { name: 'Debashis Behera',   role: 'Java Developer',    company: 'Emagia Corporation',    photo: 'https://images.nareshit.com/3.jpg'       },
  { name: 'Anshuman Swain',    role: 'Web Developer',     company: 'Conseqta Technology',   photo: 'https://images.nareshit.com/5.jpg'       },
  { name: 'Rupal Borkar',      role: 'QA Engineer',       company: 'Mphasis Ltd',           photo: 'https://images.nareshit.com/10.jpg'      },
  { name: 'Shreya Tawalare',   role: 'Data Scientist',    company: 'Sisnx Techno',          photo: 'https://images.nareshit.com/1.jpg'       },
  { name: 'Sai Bharathi',      role: 'Java Developer',    company: 'Gisfy Pvt Ltd',         photo: 'https://images.nareshit.com/7.jpg'       },
  { name: 'Sameer',            role: 'Full Stack Dev',    company: 'Celium Pvt Ltd',        photo: 'https://images.nareshit.com/2.jpg'       },
  { name: 'Indrani Malladi',   role: 'Python Developer',  company: 'Virinchi',              photo: 'https://images.nareshit.com/6.jpg'       },
  { name: 'K Tejeswari',       role: 'QA Engineer',       company: 'eGlobal Infotech',      photo: 'https://images.nareshit.com/8.jpg'       },
  { name: 'Ganga Muthyala',    role: 'Business Analyst',  company: 'SS Solutions Pvt Ltd',  photo: 'https://images.nareshit.com/9.jpg'       },
  { name: 'Naveena',           role: 'Data Analyst',      company: 'Edubot Technologies',   photo: 'https://images.nareshit.com/Oct_24-6.jpg'},
  { name: 'Ganga BhavyaSri',   role: 'DevOps Engineer',   company: 'Fenix Commerce',        photo: 'https://images.nareshit.com/Oct_24-7.jpg'},
  { name: 'Devika M. Sarkar',  role: '.NET Developer',    company: 'Adulla IT Solutions',   photo: 'https://images.nareshit.com/Oct_24-8.jpg'},
  { name: 'Rani Sarangi',      role: 'Cloud Engineer',    company: 'Alacriti Pvt Ltd',      photo: 'https://images.nareshit.com/Oct_24-9.jpg'},
  { name: 'Swikruti Shende',   role: 'React Developer',   company: 'RJAY Technology',       photo: 'https://images.nareshit.com/Oct_24-10.jpg'},
  { name: 'Gaurav Kelode',     role: 'ML Engineer',       company: 'Ray Business Tech',     photo: 'https://images.nareshit.com/Oct_24-5.jpg'},
  { name: 'Janaki Raghava',    role: 'Full Stack Dev',    company: 'HCL Technologies',      photo: 'https://images.nareshit.com/Oct_24-4.jpg'},
  { name: 'Tanmay Shyamal',    role: 'Software Engineer', company: 'TCS',                   photo: 'https://images.nareshit.com/Oct_24-2.jpg'},
  { name: 'Sathish Kumar',     role: 'DevOps Engineer',   company: 'Infosys',               photo: 'https://images.nareshit.com/Oct_24-3.jpg'},
  { name: 'Aman Khan',         role: 'Data Scientist',    company: 'Wipro',                 photo: 'https://images.nareshit.com/Oct_24-1.jpg'},
]

const BLOGS = [
  { id: 1,  image: 'https://images.nareshit.com/Oracle_.NET_Interview_Questions_and_Answers.png',     title: 'Oracle .NET Interview Questions and Answers'      },
  { id: 2,  image: 'https://images.nareshit.com/Become_Oracle_.NET_Developer_in_90_Days.png',          title: 'Become Oracle .NET Developer in 90 Days'           },
  { id: 3,  image: 'https://images.nareshit.com/Oracle_PLSQL_Basics_for_.NET_Developers.png',          title: 'Oracle PL/SQL Basics for .NET Developers'          },
  { id: 4,  image: 'https://images.nareshit.com/Best_Practices_for_Oracle_DB_Security.png',            title: 'Best Practices for Oracle DB Security'             },
  { id: 5,  image: 'https://images.nareshit.com/SQL_Server_Job_Roles_and_Responsibilities_Explained.png', title: 'SQL Server Job Roles and Responsibilities'      },
  { id: 6,  image: 'https://images.nareshit.com/Using_Entity_Framework_with_Oracle_DB.png',            title: 'Entity Framework with Oracle DB'                   },
  { id: 7,  image: 'https://images.nareshit.com/Best_Way_to_Learn_T-SQL_in_2026_for_Beginners.png',    title: 'Best Way to Learn T-SQL in 2026'                   },
  { id: 8,  image: 'https://images.nareshit.com/SQL_Server_Mini_Projects_for_Students.png',            title: 'SQL Server Mini Projects for Students'             },
  { id: 9,  image: 'https://images.nareshit.com/What_Makes_Oracle_SQL_Different_from_Other_Databases.png', title: 'What Makes Oracle SQL Different from Others'   },
  { id: 10, image: 'https://images.nareshit.com/Why_Strong_SQL_Knowledge_Still_Matters_in_the_AI_Era.png', title: 'Why SQL Knowledge Still Matters in the AI Era' },
  { id: 11, image: 'https://images.nareshit.com/Oracle_SQL_Interview_Questions_for_Fresher.png',       title: 'Oracle SQL Interview Questions for Freshers'       },
  { id: 12, image: 'https://images.nareshit.com/Stored_Procedures_in_Oracle_with_C_sharp.png',         title: 'Stored Procedures in Oracle with C#'               },
]

const COURSE_OPTIONS = [
  'Full Stack Java', 'Full Stack Python', 'Data Analytics', 'MS Azure + Azure DevOps',
  'Playwright Automation', 'Full Stack Data Science & AI', 'DevOps with Multi Cloud',
  'Software Testing', 'Salesforce', 'Full Stack Python with Gen AI', 'Other',
]

/* ── COMPONENT ────────────────────────────────────── */

export default function Home() {
  const [heroSlide,  setHeroSlide]  = useState(0)
  const [activeTab,  setActiveTab]  = useState('Trending')
  const [submitted,  setSubmitted]  = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', mode: 'online', message: '' })
  const blogRef      = useRef(null)
  const courseCarRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setHeroSlide(s => (s + 1) % HERO_SLIDES.length), 4500)
    return () => clearInterval(t)
  }, [])

  const prevSlide = () => setHeroSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  const nextSlide = () => setHeroSlide(s => (s + 1) % HERO_SLIDES.length)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', course: '', mode: 'online', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleShare = title => {
    if (navigator.share) navigator.share({ title, url: window.location.href })
    else navigator.clipboard?.writeText(window.location.href)
  }

  const stars = n => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n))

  const tabCourses = ALL_COURSES[activeTab] || []

  return (
    <div className="home">
      <Navbar />

      {/* ═══ 1. HERO SLIDER ═══ */}
      <section className="hs">
        <button className="hs__arrow hs__arrow--prev" onClick={prevSlide} aria-label="Previous">&#8249;</button>
        <button className="hs__arrow hs__arrow--next" onClick={nextSlide} aria-label="Next">&#8250;</button>

        <div className="hs__viewport">
          <div className="hs__track" style={{ transform: `translateX(-${heroSlide * 100}%)` }}>
            {HERO_SLIDES.map((slide, i) => (
              <div key={i} className="hs__slide">
                <div className="hs__slide-img">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="hs__slide-info">
                  <div className="hs__stars">{stars(slide.rating)} <span className="hs__rating">{slide.rating}</span></div>
                  <h2 className="hs__slide-title">{slide.title}</h2>
                  <div className="hs__slide-meta">
                    <span>&#128100; {slide.instructor}</span>
                    <span>&#128197; Starts: {slide.date}</span>
                    <span>&#9201; Duration: {slide.duration}</span>
                  </div>
                  <div className="hs__slide-btns">
                    <a href="#enroll" className="hs__btn hs__btn--enroll">ENROLL</a>
                    <button className="hs__btn hs__btn--share" onClick={() => handleShare(slide.title)}>SHARE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hs__dots">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} className={`hs__dot${i === heroSlide ? ' hs__dot--on' : ''}`} onClick={() => setHeroSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ═══ 2. COURSE CARDS CAROUSEL ═══ */}
      <section className="cc">
        <div className="cc__head">
          <h2 className="cc__heading">Our Courses</h2>
          <div className="cc__nav">
            <button className="cc__nav-btn" onClick={() => courseCarRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}>&#8249;</button>
            <button className="cc__nav-btn" onClick={() => courseCarRef.current?.scrollBy({ left:  320, behavior: 'smooth' })}>&#8250;</button>
          </div>
        </div>
        <div className="cc__track" ref={courseCarRef}>
          {ALL_COURSES['Trending'].map(c => (
            <Link key={c.id} to={`/courses/${c.slug}`} className="ccard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="ccard__img"><img src={c.image} alt={c.title} /></div>
              <div className="ccard__body">
                <div className="ccard__stars">{stars(c.rating)}</div>
                <h3 className="ccard__title">{c.title}</h3>
                <div className="ccard__meta">
                  <span>&#128100; {c.instructor}</span>
                  <span>&#128197; {c.date}</span>
                  <span>&#9201; {c.duration}</span>
                </div>
                <div className="ccard__btns">
                  <span className="ccard__btn ccard__btn--enroll">ENROLL</span>
                  <button className="ccard__btn ccard__btn--share" onClick={e => { e.stopPropagation(); handleShare(c.title) }}>SHARE</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="cc__footer">
          <Link to="/course-listing" className="cc__more-btn">Explore More Courses</Link>
        </div>
      </section>

      {/* ═══ 3. OUR COURSES TABS ═══ */}
      <section className="oc">
        <div className="oc__wrap">
          <div className="oc__tabs">
            {COURSE_TABS.map(tab => (
              <button key={tab} className={`oc__tab${activeTab === tab ? ' oc__tab--active' : ''}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className="oc__grid">
            {tabCourses.map(c => (
              <Link key={c.id} to={`/courses/${c.slug}`} className="ccard" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ccard__img"><img src={c.image} alt={c.title} /></div>
                <div className="ccard__body">
                  <div className="ccard__stars">{stars(c.rating)}</div>
                  <h3 className="ccard__title">{c.title}</h3>
                  <div className="ccard__meta">
                    <span>&#128100; {c.instructor}</span>
                    <span>&#128197; Starts: {c.date}</span>
                    <span>&#9201; {c.duration}</span>
                  </div>
                  <div className="ccard__btns">
                    <span className="ccard__btn ccard__btn--enroll">ENROLL</span>
                    <button className="ccard__btn ccard__btn--share" onClick={e => { e.stopPropagation(); handleShare(c.title) }}>SHARE</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="oc__footer">
            <Link to="/course-listing" className="cc__more-btn">Explore More Courses</Link>
          </div>
        </div>
      </section>

      {/* ═══ 4. TRAINING SERVICES 2×2 ═══ */}
      <section className="ts">
        <div className="ts__wrap">
          <div className="ts__grid">
            {TRAINING_SERVICES.map(s => (
              <div key={s.title} className="ts__card">
                <div className="ts__card-img"><img src={s.image} alt={s.title} /></div>
                <div className="ts__card-body">
                  <h3 className="ts__card-title">{s.title}</h3>
                  <p className="ts__card-desc">{s.desc}</p>
                  <Link to={s.link} className="ts__card-link">View More &#8594;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. VALUES / STATS SECTION ═══ */}
      <section className="vs">
        <div className="vs__wrap">
          <div className="vs__left">
            <p className="vs__eyebrow">Our Core Values</p>
            <h2 className="vs__title">Empowering Tech Talent</h2>
            <p className="vs__desc">
              At Pro Training Tech, we believe in practical learning that builds real careers.
              Our philosophy combines deep industry expertise with hands-on project experience.
            </p>
            <div className="vs__pills">
              <span>&#10004; Practical Learning</span>
              <span>&#10004; Building Careers</span>
              <span>&#10004; Industry Experts</span>
            </div>
          </div>
          <div className="vs__right">
            {VALUES_STATS.map(s => (
              <div key={s.label} className="vs__stat">
                <img src={s.icon} alt={s.label} className="vs__stat-icon" />
                <span className="vs__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIDDEN - Browse by Domains section
      <section className="dm">
        <div className="dm__wrap">
          <h2 className="dm__heading">Browse by Domain</h2>
          <div className="dm__grid">
            {DOMAINS.map(d => (
              <Link key={d.id} to="/course-listing" className="dm__card">
                <img src={d.image} alt={d.name} />
                <div className="dm__overlay"><span>{d.name}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ═══ 7. CORPORATE TRAINING DARK ═══ */}
      <section className="ct">
        <div className="ct__wrap">
          <div className="ct__content">
            <h2 className="ct__title">Elevate Your Team with Pro Training Tech's Corporate Training Programs</h2>
            <p className="ct__desc">Tailored corporate training to enhance workforce skills and efficiency in the evolving business landscape.</p>
            <Link to="/services/corporate-training" className="ct__btn">View More</Link>
          </div>
          <div className="ct__visual">
            <img src="https://images.nareshit.com/images/image_1706343100768.jpg" alt="Corporate Training" />
          </div>
        </div>
      </section>

      {/* ═══ 8. MNC LOGOS STRIP ═══ */}
      <section className="mnc">
        <div className="mnc__head">
          <h3 className="mnc__heading">Our Trainees are Working With Leading MNC's</h3>
        </div>
        <div className="mnc__mask">
          <div className="mnc__track">
            {[...MNC_LOGOS, ...MNC_LOGOS].map((src, i) => (
              <div key={i} className="mnc__item">
                <img src={src} alt={`Company ${(i % MNC_LOGOS.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. TESTIMONIALS ═══ */}
      <section className="tst">
        <div className="tst__wrap">
          <div className="tst__left">
            <div className="tst__big-stat">
              <div className="tst__big-num">98%</div>
              <p className="tst__big-text">of students would recommend Pro Training Tech to a friend</p>
            </div>
          </div>
          <div className="tst__right">
            <div className="tst__grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="tst__card">
                  <p className="tst__card-text">&#8220;{t.text}&#8221;</p>
                  <div className="tst__card-stars">{stars(t.rating)}</div>
                  <div className="tst__card-author">
                    <img src={t.photo} alt={t.name} className="tst__card-photo" onError={e => { e.target.style.display='none' }} />
                    <div>
                      <div className="tst__card-name">{t.name}</div>
                      <div className="tst__card-course">{t.course} &middot; Pro Training Tech</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. PLACED STUDENTS ═══ */}
      <section className="ps">
        <div className="ps__wrap">
          <h2 className="ps__heading">2801+ Our students placed in the recent Years</h2>
          <div className="ps__grid">
            {PLACED_STUDENTS.map((s, i) => (
              <div key={i} className="ps__card">
                <img src={s.photo} alt={s.name} className="ps__card-photo" onError={e => { e.target.style.background='#eee' }} />
                <div className="ps__card-info">
                  <div className="ps__card-name">{s.name}</div>
                  <div className="ps__card-role">{s.role}</div>
                  <div className="ps__card-company">&#127970; {s.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11. BLOG CAROUSEL ═══ */}
      <section className="bl">
        <div className="bl__wrap">
          <div className="bl__head">
            <h2 className="bl__heading">Our Blogs</h2>
            <div className="bl__nav">
              <button className="bl__nav-btn" onClick={() => blogRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}>&#8249;</button>
              <button className="bl__nav-btn" onClick={() => blogRef.current?.scrollBy({ left:  320, behavior: 'smooth' })}>&#8250;</button>
            </div>
          </div>
          <div className="bl__track" ref={blogRef}>
            {BLOGS.map(b => (
              <div key={b.id} className="bl__card">
                <div className="bl__card-img"><img src={b.image} alt={b.title} /></div>
                <div className="bl__card-body">
                  <h3 className="bl__card-title"><Link to="/blog">{b.title}</Link></h3>
                  <div className="bl__card-actions">
                    <Link to="/blog" className="bl__read-more">Read more</Link>
                    <button className="bl__share-btn" onClick={() => handleShare(b.title)}>Share</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. DIGITAL CLASSES ═══ */}
      <section className="dc">
        <div className="dc__wrap">
          <h2 className="dc__heading">Smart Learning in the Digital Era</h2>
          <div className="dc__grid">
            <div className="dc__col">
              <h3 className="dc__col-title">Online Classes</h3>
              <div className="dc__col-imgs">
                <img src="https://cdn.nareshit.com/images/digital-calsses-02.jpg" alt="Online Classes" />
                <img src="https://cdn.nareshit.com/images/digital-calsses-03.jpg" alt="Online Classes 2" />
              </div>
            </div>
            <div className="dc__col">
              <h3 className="dc__col-title">Offline Classes</h3>
              <div className="dc__col-imgs dc__col-imgs--single">
                <img src="https://cdn.nareshit.com/images/digital-calsses-04.jpg" alt="Offline Classes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 13. ENROLL FORM + GOOGLE MAP ═══ */}
      <section className="ef" id="enroll">
        <div className="ef__wrap">
          <div className="ef__form-col">
            <h2 className="ef__title">Enroll Now</h2>
            <p className="ef__sub">Fill in your details and our expert counsellors will contact you.</p>
            <p className="ef__services-link"><Link to="/training-services">Explore Services &#8594;</Link></p>

            {submitted ? (
              <div className="ef__success">
                <div className="ef__check">&#10003;</div>
                <h3>Enquiry Submitted!</h3>
                <p>Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="ef__form" onSubmit={handleSubmit} noValidate>
                <input name="name"  type="text"  placeholder="Full Name *"      value={form.name}  onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email address *"  value={form.email} onChange={handleChange} required />
                <input name="phone" type="tel"   placeholder="Mobile Number *"  value={form.phone} onChange={handleChange} required />
                <select name="course" value={form.course} onChange={handleChange} required>
                  <option value="">Select a Course *</option>
                  {COURSE_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <div className="ef__modes">
                  <label><input type="radio" name="mode" value="online"  checked={form.mode === 'online'}  onChange={handleChange} /> Online</label>
                  <label><input type="radio" name="mode" value="offline" checked={form.mode === 'offline'} onChange={handleChange} /> Offline</label>
                  <label><input type="radio" name="mode" value="live"    checked={form.mode === 'live'}    onChange={handleChange} /> Live</label>
                </div>
                <textarea name="message" placeholder="Message (optional)" rows={3} value={form.message} onChange={handleChange} />
                <button type="submit" className="ef__submit">Submit</button>
              </form>
            )}
          </div>
          <div className="ef__map-col">
            <iframe
              title="Pro Training Tech Location"
              src="https://maps.google.com/maps?q=1340+Old+Chain+Bridge+Rd+McLean+VA+22101&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ═══ 14. FOOTER 6-COLUMN ═══ */}
      <footer className="sf">
        <div className="sf__top">

          {/* Col 1 — Brand */}
          <div className="sf__col sf__col--brand">
            <img src="/PT-logo.png" alt="Pro Training Tech" className="sf__logo" />
            <p className="sf__bio">Pro Training Tech is a premier IT training institute offering industry-aligned courses with guaranteed placement assistance and expert trainers.</p>
            <div className="sf__socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="sf__social" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="sf__social" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="sf__social" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sf__social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://wa.me/17035651995" target="_blank" rel="noopener noreferrer" className="sf__social" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://t.me/protrainingtech" target="_blank" rel="noopener noreferrer" className="sf__social" aria-label="Telegram">
                <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Company */}
          <div className="sf__col">
            <h4 className="sf__col-title">Company</h4>
            <ul className="sf__links">
              {[['About Us','/about'],['Trainers Profile','/trainers'],['Privacy Policy','/privacy-policy'],['Refund Policy','/refund-policy'],['Terms & Conditions','/terms-conditions'],['Careers','/careers'],['Testimonials','/testimonials'],['News & Events','/news'],['Placement Registration','/training/placement-registration'],['Contact Us','/contact']].map(([l,to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Access */}
          <div className="sf__col">
            <h4 className="sf__col-title">Quick Access</h4>
            <ul className="sf__links">
              {[['Hire from Us','/hire-with-us'],['New Batches','/new-batches'],['Interview Questions','/interview-questions/category'],['Blogs','/blog'],['Internships','/internships'],['Online Training','/services/online-training'],['Classroom Training','/services/classroom-training'],['Weekend Training','/services/weekend-training'],['Corporate Training','/services/corporate-training']].map(([l,to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Full Stack + Job Placement */}
          <div className="sf__col">
            <h4 className="sf__col-title">Full Stack Courses</h4>
            <ul className="sf__links">
              {[['Full Stack Software Testing','/courses/full-stack-software-testing'],['Full Stack Python','/courses/full-stack-python-online-training'],['UI Full Stack Web with React','/courses/ui-full-stack-react'],['Full Stack Data Science & AI','/courses/full-stack-data-science-ai'],['Full Stack .NET Core','/courses/full-stack-dotnet'],['Full Stack Java','/courses/full-stack-java-online-training']].map(([l,to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
            <h4 className="sf__col-title" style={{ marginTop: '1.25rem' }}>Job Placement Programs</h4>
            <ul className="sf__links">
              {[['Full Stack .NET Placement Assistance','/courses/full-stack-dotnet'],['Full Stack Java Placement Assistance','/courses/full-stack-java-online-training']].map(([l,to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 5 — NASSCOM + Internships */}
          <div className="sf__col">
            <h4 className="sf__col-title">NASSCOM Approved</h4>
            <ul className="sf__links">
              {[['Full Stack Java Developer Program','/nasscom-courses'],['AWS Solutions Architect Associate','/nasscom-courses'],['Full Stack Data Science Program','/nasscom-courses'],['Software Testing','/nasscom-courses'],['DevOps Certification Course','/nasscom-courses'],['Python Developer','/nasscom-courses']].map(([l,to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
            <h4 className="sf__col-title" style={{ marginTop: '1.25rem' }}>Internships</h4>
            <ul className="sf__links">
              {[['Internship Program on DevOps with Cloud','/internships'],['Internship Program on Python','/internships'],['Internship Program on Data Science','/internships']].map(([l,to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 6 — Trending Courses */}
          <div className="sf__col">
            <h4 className="sf__col-title">Trending Courses</h4>
            <ul className="sf__links">
              {[['Azure Data Engineer','/course-listing'],['Data Analytics','/course-listing'],['Playwright Automation','/course-listing'],['Full Stack Java','/courses/full-stack-java-online-training'],['Full Stack Python','/course-listing'],['DevOps & AWS','/course-listing'],['Data Science & AI','/course-listing'],['React & Angular','/course-listing'],['Salesforce','/course-listing'],['Cyber Security','/course-listing'],['Machine Learning','/course-listing'],['Power BI','/course-listing']].map(([l,to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="sf__contact-bar">
          <span>📞 +1-703-565-1995</span>
          <span>✉ info@protrainingtech.com</span>
          <span>💬 WhatsApp: +1-703-565-1995</span>
          <span>📍 6560 Backlick Rd, Springfield, VA 22150</span>
        </div>

        <div className="sf__bottom">
          <span>© 2025 Pro Training Tech. All rights reserved.</span>
          <div className="sf__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}

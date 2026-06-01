import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NewBatches from './pages/NewBatches'
import Internships from './pages/Internships'
import Trainers from './pages/Trainers'
import Testimonials from './pages/Testimonials'
import News from './pages/News'
import FullStackCourses from './pages/FullStackCourses'
import JobAssistanceCourses from './pages/JobAssistanceCourses'
import CertificationCourses from './pages/CertificationCourses'
import TrendingCourses from './pages/TrendingCourses'
import Login from './pages/Login'
import InterviewQuestions from './pages/InterviewQuestions'
import HireFromUs from './pages/HireFromUs'
import PlacementRegistration from './pages/PlacementRegistration'
import JobAssistance from './pages/JobAssistance'
import Careers from './pages/Careers'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import TermsConditions from './pages/TermsConditions'
import OnlineTraining from './pages/OnlineTraining'
import ClassroomTraining from './pages/ClassroomTraining'
import CorporateTraining from './pages/CorporateTraining'
import Workshops from './pages/Workshops'
import WeekendTraining from './pages/WeekendTraining'
import RealTimeProjects from './pages/RealTimeProjects'
import OurTheme from './pages/OurTheme'
import AllCourses from './pages/AllCourses'
import FullStackJavaDetail from './pages/FullStackJavaDetail'
import FullStackPythonDetail from './pages/FullStackPythonDetail'
import FullStackSoftwareTestingDetail from './pages/FullStackSoftwareTestingDetail'
import FullStackDataScienceDetail from './pages/FullStackDataScienceDetail'
import FullStackDotNetDetail from './pages/FullStackDotNetDetail'
import UIFullStackReactDetail from './pages/UIFullStackReactDetail'
import DataScienceAIDetail from './pages/DataScienceAIDetail'
import DataAnalyticsDetail from './pages/DataAnalyticsDetail'
import MLOpsAIOpsDetail from './pages/MLOpsAIOpsDetail'
import GenerativeAIDetail from './pages/GenerativeAIDetail'
import AdvancedGenAIDetail from './pages/AdvancedGenAIDetail'
import ChatGPTDetail from './pages/ChatGPTDetail'
import NumpyPandasDetail from './pages/NumpyPandasDetail'
import FullStackDSProgramDetail from './pages/FullStackDSProgramDetail'
import PlaywrightTSDetail from './pages/PlaywrightTSDetail'
import FullStackJavaPlacementDetail from './pages/FullStackJavaPlacementDetail'
import FullStackDotNetPlacementDetail from './pages/FullStackDotNetPlacementDetail'
import TerraformDetail from './pages/TerraformDetail'
import DataScienceInternshipDetail from './pages/DataScienceInternshipDetail'
import PythonInternshipDetail from './pages/PythonInternshipDetail'
import DevOpsInternshipDetail from './pages/DevOpsInternshipDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/17035651995"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with Pro Training Tech on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp official icon path */}
      <svg
        className="whatsapp-fab__icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="whatsapp-fab__label">Chat with us</span>
    </a>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-listing" element={<AllCourses />} />
        <Route path="/courses/full-stack-java-online-training"    element={<FullStackJavaDetail />} />
        <Route path="/courses/full-stack-python-online-training"          element={<FullStackPythonDetail />} />
        <Route path="/courses/full-stack-software-testing-online-training" element={<FullStackSoftwareTestingDetail />} />
        <Route path="/courses/full-stack-data-science-ai-online-training"  element={<FullStackDataScienceDetail />} />
        <Route path="/courses/full-stack-dot-net-core-online-training"                        element={<FullStackDotNetDetail />} />
        <Route path="/courses/ui-full-stack-web-development-with-react-online-training"   element={<UIFullStackReactDetail />} />
        <Route path="/courses/data-science-online-training"                               element={<DataScienceAIDetail />} />
        <Route path="/courses/data-analytics-online-training"                             element={<DataAnalyticsDetail />} />
        <Route path="/courses/mlops-and-aiops-online-training"                           element={<MLOpsAIOpsDetail />} />
        <Route path="/courses/generative-ai-online-training"                             element={<GenerativeAIDetail />} />
        <Route path="/courses/advanced-generative-and-agentic-ai"                         element={<AdvancedGenAIDetail />} />
        <Route path="/courses/chat-gpt-online-training"                                   element={<ChatGPTDetail />} />
        <Route path="/courses/numpy-pandas-matplotlib-online-training"                     element={<NumpyPandasDetail />} />
        <Route path="/courses/full-stack-data-science-ai-certification-online-training"    element={<FullStackDSProgramDetail />} />
        <Route path="/courses/playwright-with-typescript"                                  element={<PlaywrightTSDetail />} />
        <Route path="/courses/full-stack-java-placement-assistance-program-online-training"     element={<FullStackJavaPlacementDetail />} />
        <Route path="/courses/full-stack-dot-net-placement-assistance-program-online-training"  element={<FullStackDotNetPlacementDetail />} />
        <Route path="/courses/terraform-associate-certification-training-003"                   element={<TerraformDetail />} />
        <Route path="/courses/internship-program-on-data-science"                              element={<DataScienceInternshipDetail />} />
        <Route path="/courses/internship-program-on-python"                                    element={<PythonInternshipDetail />} />
        <Route path="/courses/internship-program-on-devops-with-cloud"                         element={<DevOpsInternshipDetail />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog"         element={<Blog />} />
        <Route path="/new-batches"  element={<NewBatches />} />
        <Route path="/internships"  element={<Internships />} />
        <Route path="/trainers"      element={<Trainers />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/news"         element={<News />} />
        <Route path="/full-stack-courses"    element={<FullStackCourses />} />
        <Route path="/job-guarantee-courses" element={<JobAssistanceCourses />} />
        <Route path="/certification-courses" element={<CertificationCourses />} />
        <Route path="/trending-course"       element={<TrendingCourses />} />
        <Route path="/services/online-training"    element={<OnlineTraining />} />
        <Route path="/services/classroom-training" element={<ClassroomTraining />} />
        <Route path="/services/corporate-training" element={<CorporateTraining />} />
        <Route path="/services/workshops"          element={<Workshops />} />
        <Route path="/services/weekend-training"   element={<WeekendTraining />} />
        <Route path="/services/real-time-projects" element={<RealTimeProjects />} />
        <Route path="/login"                                element={<Login />} />
        <Route path="/interview-questions/category"         element={<InterviewQuestions />} />
        <Route path="/hire-with-us"                         element={<HireFromUs />} />
        <Route path="/training/placement-registration"      element={<PlacementRegistration />} />
        <Route path="/training/job-assistance"              element={<JobAssistance />} />
        <Route path="/careers"                              element={<Careers />} />
        <Route path="/privacy-policy"   element={<PrivacyPolicy />} />
        <Route path="/refund-policy"    element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/our-theme"        element={<OurTheme />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

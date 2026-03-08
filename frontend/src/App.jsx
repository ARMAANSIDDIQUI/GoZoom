import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Integration from './pages/Integration';
import Retail from './pages/Retail';
import WebDevelopment from './pages/WebDevelopment';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';

// Missing Root Pages
import Kiosks from './pages/Kiosks';
import Angular from './pages/Angular';
import Laravel from './pages/Laravel';
import ReactJs from './pages/ReactJs';
import Success from './pages/Success';

// Missing Webpages
import MobileAppDev from './pages/MobileAppDev';
import AndroidDev from './pages/AndroidDev';
import IosDev from './pages/IosDev';
import Chatbot from './pages/Chatbot';
import SeoServices from './pages/SeoServices';

// New Service Pages
import AllServices from './pages/AllServices';
import CloudServices from './pages/CloudServices';
import AiApplications from './pages/AiApplications';
import AiAutomation from './pages/AiAutomation';
import UseCases from './pages/UseCases';
import ServiceConsulting from './pages/ServiceConsulting';
import AgenticDevelopment from './pages/AgenticDevelopment';
import AiAgentCustomization from './pages/AiAgentCustomization';
import NextJs from './pages/NextJs';
import DevOpsServices from './pages/DevOpsServices';
import UiUxDesign from './pages/UiUxDesign';
import CyberSecurity from './pages/CyberSecurity';
import ReactNative from './pages/ReactNative';
import Flutter from './pages/Flutter';
import Swift from './pages/Swift';
import Django from './pages/Django';
import Java from './pages/Java';
// Hiring Developer Pages (Premium Separate Pages)
import HireAngular from './pages/hire/HireAngular';
import HireCodeIgniter from './pages/hire/HireCodeIgniter';
import HireHtml from './pages/hire/HireHtml';
import HireJquery from './pages/hire/HireJquery';
import HirePhp from './pages/hire/HirePhp';
import HireReact from './pages/hire/HireReact';
import HireLaravel from './pages/hire/HireLaravel';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAddBlog from './pages/admin/AdminAddBlog';
import TestimonialManager from './admin/components/TestimonialManager';

// Context
import { AuthProvider, useAuth } from './context/AuthContext';

import { useState, useEffect } from 'react';
// Components
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // Or a loading spinner

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />}
        </AnimatePresence>
        <ScrollToTop />
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="integration" element={<Integration />} />
            <Route path="retail" element={<Retail />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<BlogDetails />} />

            {/* Root Level Missing Pages */}
            <Route path="kiosks" element={<Kiosks />} />
            <Route path="angular" element={<Angular />} />
            <Route path="laravel" element={<Laravel />} />
            <Route path="react" element={<ReactJs />} />
            <Route path="success" element={<Success />} />

            {/* Webpages Level Services */}
            <Route path="mobile-application-development" element={<MobileAppDev />} />
            <Route path="android-development" element={<AndroidDev />} />
            <Route path="ios-development" element={<IosDev />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="expert-seo-services" element={<SeoServices />} />

            {/* Tech page aliases */}
            <Route path="angular-development" element={<Angular />} />
            <Route path="react-development" element={<ReactJs />} />
            <Route path="laravel-development" element={<Laravel />} />
            <Route path="seo-services" element={<SeoServices />} />

            {/* New Service Routes */}
            <Route path="services" element={<AllServices />} />
            <Route path="cloud-services" element={<CloudServices />} />
            <Route path="ai-applications" element={<AiApplications />} />
            <Route path="ai-automation" element={<AiAutomation />} />
            <Route path="use-cases" element={<UseCases />} />
            <Route path="service-consulting" element={<ServiceConsulting />} />
            <Route path="agentic-development" element={<AgenticDevelopment />} />
            <Route path="ai-agent-customization" element={<AiAgentCustomization />} />
            <Route path="nextjs-development" element={<NextJs />} />
            <Route path="devops-services" element={<DevOpsServices />} />
            <Route path="ui-ux-design" element={<UiUxDesign />} />
            <Route path="cyber-security" element={<CyberSecurity />} />
            <Route path="react-native-development" element={<ReactNative />} />
            <Route path="flutter-development" element={<Flutter />} />
            <Route path="swift-development" element={<Swift />} />
            <Route path="django-development" element={<Django />} />
            <Route path="java-development" element={<Java />} />

            {/* Hiring Developer Pages - Premium Dedicated Pages */}
            <Route path="hire-angular-developer" element={<HireAngular />} />
            <Route path="hire-codeIgniter-developers" element={<HireCodeIgniter />} />
            <Route path="hire-html-developer" element={<HireHtml />} />
            <Route path="hire-jquery-developers" element={<HireJquery />} />
            <Route path="hire-php-developer" element={<HirePhp />} />
            <Route path="hire-react-developer" element={<HireReact />} />
            <Route path="laravel-development-company" element={<HireLaravel />} />
          </Route>

          {/* Admin Portal Routes (No Global Header/Footer Layout) */}
          <Route path="/admin">
            <Route index element={<AdminLogin />} />
            <Route path="dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="add-blog" element={
              <ProtectedRoute>
                <AdminAddBlog />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

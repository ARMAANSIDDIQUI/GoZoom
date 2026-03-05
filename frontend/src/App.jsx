import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import HirePage from './pages/HirePage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAddBlog from './pages/admin/AdminAddBlog';

// Utility Components
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
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
          {/* Hiring Developer Pages using Reusable Component */}
          <Route path="hire-angular-developer" element={<HirePage title="Hire Angular Developers" bgFrom="from-red-600" bgTo="to-red-800" />} />
          <Route path="hire-codeIgniter-developers" element={<HirePage title="Hire CodeIgniter Developers" bgFrom="from-orange-500" bgTo="to-red-600" />} />
          <Route path="hire-html-developer" element={<HirePage title="Hire HTML Developers" bgFrom="from-orange-400" bgTo="to-orange-600" />} />
          <Route path="hire-jquery-developers" element={<HirePage title="Hire jQuery Developers" bgFrom="from-blue-400" bgTo="to-blue-600" />} />
          <Route path="hire-php-developer" element={<HirePage title="Hire PHP Developers" bgFrom="from-indigo-500" bgTo="to-purple-700" />} />
          <Route path="hire-react-developer" element={<HirePage title="Hire React Developers" bgFrom="from-cyan-600" bgTo="to-blue-800" />} />
          <Route path="laravel-development-company" element={<HirePage title="Laravel Development Company" bgFrom="from-red-500" bgTo="to-red-700" />} />
        </Route>

        {/* Admin Portal Routes (No Global Header/Footer Layout) */}
        <Route path="/admin">
          <Route index element={<AdminLogin />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-blog" element={<AdminAddBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

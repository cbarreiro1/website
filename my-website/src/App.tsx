// my-website/src/App.tsx
// Main application component for the website

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useAnalytics } from './hooks/useAnalytics';

function AppContent() {
  const location = useLocation();
  const { trackPageView, initializeGA4 } = useAnalytics();

  // Initialize GA4 on mount
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      initializeGA4(gaId);
    }
  }, [initializeGA4]);

  // Track page views when route changes
  useEffect(() => {
    const pageTitle = location.pathname === '/' ? 'Home' : location.pathname.replace('/', '');
    trackPageView(location.pathname, pageTitle);
  }, [location, trackPageView]);

  return (
    <>
      <Header />
      <hr className="border-b-2 border-gray-300 my-4 mt-0" />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Planner from './pages/Planner';
import Pricing from './pages/Pricing';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-sand font-sans text-charcoal">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Planner />} path="/planner" />
          <Route element={<Pricing />} path="/pricing" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Admin />} path="/admin" />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

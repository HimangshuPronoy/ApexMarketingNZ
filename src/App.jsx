import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PromoBar from './components/PromoBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import FabricBanner from './components/FabricBanner';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <HowItWorks />
      <FabricBanner />
      <Reviews />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <Router>
      <PromoBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;

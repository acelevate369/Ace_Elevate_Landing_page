import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './UI/Navbar';
import HeroSection from './UI/HeroSection';
import Marquee from './components/Marquee';
import PhilosophySection from './UI/PhilosophySection';
import ArsenalSection from './UI/ArsenalSection';
import FounderSection from './UI/FounderSection';
import FAQSection from './UI/FAQSection';
import Footer from './UI/Footer';
import PrivacyPolicy from './UI/PrivacyPolicy';
import TermsConditions from './UI/TermsConditions';
import RefundPolicy from './UI/RefundPolicy';
import ValeriaPage from './pages/ValeriaPage';

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marquee />
      <PhilosophySection />
      <ArsenalSection />
      <FounderSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-[#080707] min-h-screen w-full text-[#F9F8F6] font-sans selection:bg-[#C48B68] selection:text-black overflow-x-hidden cursor-none">
          <CustomCursor />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/valeria" element={<ValeriaPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}
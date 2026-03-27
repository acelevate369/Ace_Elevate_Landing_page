import CustomCursor from './components/CustomCursor';
import Navbar from './UI/Navbar';
import HeroSection from './UI/HeroSection';
import Marquee from './components/Marquee';
import PhilosophySection from './UI/PhilosophySection';
import ArsenalSection from './UI/ArsenalSection';
import FounderSection from './UI/FounderSection';
import Footer from './UI/Footer';

export default function App() {
  return (
    <div className="bg-[#080707] min-h-screen w-full text-[#F9F8F6] font-sans selection:bg-[#C48B68] selection:text-black overflow-x-hidden cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <Marquee />
      <PhilosophySection />
      <ArsenalSection />
      <FounderSection />
      <Footer />
    </div>
  );
}
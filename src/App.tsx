import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#7621B0] selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default App;

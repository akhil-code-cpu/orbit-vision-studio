import { HeroSection } from '@/components/Sections/HeroSection';
import { TechnologySection } from '@/components/Sections/TechnologySection';
import { ContactSection } from '@/components/Sections/ContactSection';
import { AboutSection } from '@/components/Sections/AboutSection';
import { ProjectsSection } from '@/components/Sections/ProjectsSection';
import { TeamSection } from '@/components/Sections/TeamSection';
import { MethodologySection } from '@/components/Sections/MethodologySection';
import { CareerSection } from '@/components/Sections/CareerSection';
import { Navbar } from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TechnologySection />
        <AboutSection />
        <ProjectsSection />
        <TeamSection />
        <MethodologySection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

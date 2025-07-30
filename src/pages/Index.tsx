import HeroSection from '@/components/Sections/HeroSection';
import TechnologySection from '@/components/Sections/TechnologySection';
import ContactSection from '@/components/Sections/ContactSection';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Target, Award } from 'lucide-react';

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

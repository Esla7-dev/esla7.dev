import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { WhySection } from "@/components/sections/WhySection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

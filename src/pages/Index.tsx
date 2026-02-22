import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import BenefitsSection from "@/components/BenefitsSection";
import ContentSection from "@/components/ContentSection";
import MethodSection from "@/components/MethodSection";
import ModulesSection from "@/components/ModulesSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <LogoMarquee />
      <BenefitsSection />
      <ContentSection />
      <MethodSection />
      <ModulesSection />
      <PricingSection />
      <GuaranteeSection />
      <AboutSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;

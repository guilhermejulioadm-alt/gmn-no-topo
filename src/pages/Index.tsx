import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import WhatsAppButton from "@/components/WhatsAppButton";


const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const ContentSection = lazy(() => import("@/components/ContentSection"));
const MethodSection = lazy(() => import("@/components/MethodSection"));
const ModulesSection = lazy(() => import("@/components/ModulesSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <WhatsAppButton />
      <HeroSection />
      <Suspense fallback={null}>
        <LogoMarquee />
        <BenefitsSection />
        <ContentSection />
        <MethodSection />
        <ModulesSection />
        <PricingSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;

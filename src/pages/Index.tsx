import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { GuideSection } from "@/components/GuideSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ExperienceSection />
      <ScheduleSection />
      <PricingSection />
      <GuideSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

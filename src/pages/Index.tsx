import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { GuideSection } from "@/components/GuideSection";
import { TestimonialSection } from "@/components/TestimonialSection";

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
    </div>
  );
};

export default Index;

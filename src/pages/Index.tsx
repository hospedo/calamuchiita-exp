import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { AccommodationSection } from "@/components/AccommodationSection";
import { LocationSection } from "@/components/LocationSection";
import { ParticipantsSection } from "@/components/ParticipantsSection";
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
      <AccommodationSection />
      <LocationSection />
      <ParticipantsSection />
      <GuideSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

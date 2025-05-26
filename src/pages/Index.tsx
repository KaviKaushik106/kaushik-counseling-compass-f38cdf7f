
import { Hero } from "@/components/Hero";
import { ValueSection } from "@/components/ValueSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { PricingSection } from "@/components/PricingSection";
import { FormCTASection } from "@/components/FormCTASection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ValueSection />
      <WhyChooseSection />
      <PricingSection />
      <FormCTASection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

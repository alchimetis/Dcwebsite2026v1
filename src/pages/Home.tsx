

import HeroSection from "@/components/home/HeroSection";
import ComplianceIntro from "@/components/home/ComplianceIntro";
import FeatureCards from "@/components/home/FeatureCards";
import ComplianceWorkflow from "@/components/home/ComplianceWorkflow";
import ComplianceVideo from "@/components/home/ComplianceVideo";
import ExpertResources from "@/components/home/ExpertResources";
import SuccessStories from "@/components/home/SuccessStories";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <ComplianceIntro />
      <FeatureCards />
      <ComplianceWorkflow />
      <ComplianceVideo />
      <ExpertResources />
      <SuccessStories />
      <TrustedCompanies />
      <FinalCTA />
    </main>
  );
}
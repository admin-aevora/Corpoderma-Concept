import Hero from "@/components/sections/Hero";
import ChooseGoal from "@/components/sections/ChooseGoal";
import TopTreatments from "@/components/sections/TopTreatments";
import Results from "@/components/sections/Results";
import Packages from "@/components/sections/Packages";
import WhyCorpofino from "@/components/sections/WhyCorpofino";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1) Hero Section - Above the fold */}
      <Hero />
      
      {/* 2) Choose Your Goal - Funnel section */}
      <ChooseGoal />
      
      {/* 3) Top Treatments - Most requested */}
      <TopTreatments />
      
      {/* 4) Results / Before & After */}
      <Results />
      
      {/* 5) Packages - AOV boost */}
      <Packages />
      
      {/* 6) Why Corpofino - Trust section */}
      <WhyCorpofino />
      
      {/* 7) Testimonials / Reviews */}
      <Reviews />
      
      {/* 8) FAQ - Removes friction */}
      <FAQ />
      
      {/* 9) Contact / Location */}
      <Location />
      
      {/* 10) Final CTA - Closing section */}
      <FinalCTA />
    </>
  );
}

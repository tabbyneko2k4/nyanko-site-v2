
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import SocialLinks from "@/components/SocialLinks";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    document.title = "Tabby Neko | Music Producer & Programmer";
  }, []);

  return (
    <div className="min-h-screen flex flex-col animate-page-enter">
      <Hero />
      <SocialLinks />
      <CategoryCards />
      <ScrollToTop />
    </div>
  );
};

export default Index;

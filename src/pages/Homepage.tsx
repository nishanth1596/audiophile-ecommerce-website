import { useEffect } from "react";
import ProductShowcase from "../feature/Product/ProductShowcase";
import HeroSection from "../ui/HeroSection";

function Homepage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroSection />
      <ProductShowcase />
    </>
  );
}

export default Homepage;

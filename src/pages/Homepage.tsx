import ProductShowcase from "../feature/product/ProductShowcase";
import GallerySection from "../ui/GallerySection";
import HeroSection from "../ui/HeroSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ProductShowcase />
    </>
  );
}

export default Homepage;

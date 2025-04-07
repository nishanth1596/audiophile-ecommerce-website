import GalleryCategoryCard from "./GalleryCategoryCard";

import headphoneImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerMobileImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesMobileImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

function GallerySection() {
  return (
    <section className="mx-6 mt-[5.75rem] space-y-[4.25rem]">
      <GalleryCategoryCard
        image={headphoneImg}
        title="Headphone"
        navigateTo="/headphones"
      />

      <GalleryCategoryCard
        image={speakerMobileImg}
        title="speakers"
        navigateTo="/speakers"
      />

      <GalleryCategoryCard
        image={earphonesMobileImg}
        title="earphones"
        navigateTo="/earphones"
      />
    </section>
  );
}

export default GallerySection;

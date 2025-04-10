import GalleryCategoryCard from "./GalleryCategoryCard";

import headphoneThumbnailImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerThumbnailImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnailImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

type GallerySectionProp = {
  setIsMenuOpen?: (value: false) => void;
  mobile: boolean;
};

function GallerySection({ setIsMenuOpen, mobile }: GallerySectionProp) {
  return (
    <section
      className={`mx-6 mt-[5.75rem] ${mobile ? "space-y-[4.25rem] sm:hidden" : "hidden sm:mx-10 sm:mt-[148px] sm:grid sm:grid-cols-3 sm:gap-x-2.5 lg:mx-12 lg:mt-[7.5rem] lg:max-w-[69.38rem] lg:gap-x-[30px] xl:mx-auto"}`}
    >
      <GalleryCategoryCard
        image={headphoneThumbnailImg}
        title="Headphone"
        navigateTo="/headphones"
        setIsMenuOpen={setIsMenuOpen}
      />

      <GalleryCategoryCard
        image={speakerThumbnailImg}
        title="speakers"
        navigateTo="/speakers"
        setIsMenuOpen={setIsMenuOpen}
      />

      <GalleryCategoryCard
        image={earphonesThumbnailImg}
        title="earphones"
        navigateTo="/earphones"
        setIsMenuOpen={setIsMenuOpen}
      />
    </section>
  );
}

export default GallerySection;

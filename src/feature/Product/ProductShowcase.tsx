import SeeProductNavLink from "../../ui/SeeProductNavLink";

import patternCircles from "/assets/home/desktop/pattern-circles.svg";
import GallerySection from "../../ui/GallerySection";

// ZX9 Speaker Images
import zx9SpeakerMobileImg from "/assets/home/mobile/image-speaker-zx9.png";
import zx9SpeakerTabletImg from "/assets/home/tablet/image-speaker-zx9.png";
import zx9SpeakerDesktopImg from "/assets/home/desktop/image-speaker-zx9.png";

// YX1 Earphones Images
import earphonesMobileImg from "/assets/home/mobile/image-earphones-yx1.jpg";
import earphonesTabletImg from "/assets/home/tablet/image-earphones-yx1.jpg";
import earphonesDesktopImg from "/assets/home/desktop/image-earphones-yx1.jpg";

function ProductShowcase() {
  return (
    <>
      <GallerySection mobile={false} />

      <section className="mx-6 mt-[7.5rem] sm:mx-10 sm:mt-24">
        <article className="bg-PrimaryColor flex flex-col items-center rounded-lg py-14 text-center sm:pt-[54px] sm:pb-16">
          <div className="relative w-[10.75rem]">
            <picture>
              <source srcSet={zx9SpeakerMobileImg} media="(max-width:767px)" />
              <source
                srcSet={zx9SpeakerTabletImg}
                media="(min-width:767px) and (max-width:1023px)"
              />
              <source
                srcSet={zx9SpeakerDesktopImg}
                media="(min-width:1024px)"
              />

              <img
                src={zx9SpeakerMobileImg}
                alt="ZX9 Speaker"
                className="w-full"
              />
            </picture>
            <img
              src={patternCircles}
              alt=""
              className="absolute top-[-170px] left-[-194px] z-10 max-w-[558px]"
            />
          </div>

          <h3 className="text-White mt-8 px-6 text-4xl leading-10 font-bold tracking-[1.29px] uppercase sm:mt-16 sm:text-[3.5rem] sm:leading-[3.63rem]">
            Zx9 <span className="block">speaker</span>
          </h3>

          <p className="text-White mt-6 mb-6 px-6 sm:mb-10 sm:max-w-96">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <SeeProductNavLink
            navigateTo="speakers/6/zx9-speaker"
            backgroundColor="#000000"
            textColor="#fff"
            isBorderRequired={false}
          />
        </article>

        <article className="bg-LightGray speakerBackgroundImg mt-6 rounded-lg px-6 py-[6.31rem] sm:px-[3.88rem]">
          <h4 className="mb-8">ZX7 speaker</h4>
          <SeeProductNavLink
            navigateTo="/speakers/5/zx7-speaker"
            backgroundColor=" #f1f1f1"
            textColor="#000"
            isBorderRequired={true}
          />
        </article>

        <article className="mt-6 sm:mt-8 sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-[11px]">
          <picture>
            <source srcSet={earphonesMobileImg} media="(max-width:767px)" />
            <source
              srcSet={earphonesTabletImg}
              media="(min-width:767px) and (max-width:1023px)"
            />
            <source srcSet={earphonesDesktopImg} media="(min-width:1024px)" />
            <img
              src={earphonesMobileImg}
              alt="YX1 Earphone with charger connected in a black background"
              className="mx-auto rounded-lg"
            />
          </picture>

          <div className="bg-LightGray mt-6 rounded-lg px-6 py-10 sm:mt-0 sm:py-[6.31rem] sm:pl-[51px]">
            <h4 className="mb-8">yx1 Earphones</h4>
            <SeeProductNavLink
              backgroundColor="#f1f1f1"
              navigateTo="/earphones/1/yx1-earphones"
              textColor="#000"
              isBorderRequired={true}
            />
          </div>
        </article>
      </section>
    </>
  );
}

export default ProductShowcase;

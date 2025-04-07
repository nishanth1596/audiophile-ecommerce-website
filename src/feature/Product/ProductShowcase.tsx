import SeeProductNavLink from "../../ui/SeeProductNavLink";

import zx9SpeakerMobileImg from "/assets/home/mobile/image-speaker-zx9.png";
import patternCircles from "/assets/home/desktop/pattern-circles.svg";
import earphonesMobileImg from "/assets/home/mobile/image-earphones-yx1.jpg";

function ProductShowcase() {
  return (
    <section className="mx-6 mt-[7.5rem]">
      <article className="bg-PrimaryColor flex flex-col items-center rounded-lg py-14 text-center">
        <div className="relative w-[10.75rem]">
          <img src={zx9SpeakerMobileImg} alt="ZX9 Speaker" className="w-full" />
          <img
            src={patternCircles}
            alt=""
            className="absolute top-[-170px] left-[-194px] z-10 max-w-[558px]"
          />
        </div>

        <h3 className="text-White mt-8 px-6 text-4xl leading-10 font-bold tracking-[1.29px] uppercase">
          Zx9 <span className="block">speaker</span>
        </h3>

        <p className="text-White mt-6 mb-6 px-6">
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

      <article className="bg-LightGray speakerBackgroundImg mt-6 rounded-lg px-6 py-[6.31rem]">
        <h4 className="mb-8">ZX7 speaker</h4>
        <SeeProductNavLink
          navigateTo="/speakers/5/zx7-speaker"
          backgroundColor=" #f1f1f1"
          textColor="#000"
          isBorderRequired={false}
        />
      </article>

      <article className="mt-6">
        <img
          src={earphonesMobileImg}
          alt="YX1 Earphone with charger connected in a black background"
          className="rounded-lg"
        />

        <div className="bg-LightGray mt-6 rounded-lg px-6 py-10">
          <h4 className="mb-8">yx1 Earphones</h4>
          <SeeProductNavLink
            backgroundColor="#f1f1f1"
            navigateTo="/earphones/1/yx1-earphones"
            textColor="#000"
            isBorderRequired={false}
          />
        </div>
      </article>
    </section>
  );
}

export default ProductShowcase;

import SeeProductNavLink from "../../ui/SeeProductNavLink";

import zx9SpeakerMobileImg from "../../assets/home/mobile/image-speaker-zx9.png";
import patternCircles from "../../assets/home/desktop/pattern-circles.svg";
import earphonesMobileImg from "../../assets/home/mobile/image-earphones-yx1.jpg";

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

        <p className="text-White mt-6 mb-6 px-6 text-[0.94rem] leading-[1.56rem] font-medium tracking-[0px] opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <SeeProductNavLink
          navigateTo="/"
          backgroundColor="#000000"
          textColor="#fff"
        />
      </article>

      <article className="bg-LightGray speakerBackgroundImg mt-6 rounded-lg px-6 py-[6.31rem]">
        <h3 className="mb-8 text-[1.75rem] leading-[2.375rem] font-bold tracking-[2px] uppercase">
          ZX7 speaker
        </h3>
        <SeeProductNavLink
          navigateTo="/"
          backgroundColor=" #f1f1f1"
          textColor="#000"
        />
      </article>

      <article className="mt-6">
        <img
          src={earphonesMobileImg}
          alt="YX1 Earphone with charger connected in a black background"
          className="rounded-lg"
        />

        <div className="bg-LightGray mt-6 rounded-lg px-6 py-10">
          <h3 className="mb-8 text-[1.75rem] leading-[2.375rem] font-bold tracking-[2px] uppercase">
            yx1 Earphones
          </h3>
          <SeeProductNavLink
            backgroundColor="#f1f1f1"
            navigateTo="/"
            textColor="#000"
          />
        </div>
      </article>
    </section>
  );
}

export default ProductShowcase;

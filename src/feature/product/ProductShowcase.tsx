import { Link } from "react-router-dom";
import zx9SpeakerMobileImg from "../../assets/home/mobile/image-speaker-zx9.png";
import patternCircles from "../../assets/home/desktop/pattern-circles.svg";

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

        <p className="text-White mt-6 px-6 text-[0.94rem] leading-[1.56rem] font-medium tracking-[0px] opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <Link
          to="*"
          className="text-White bg-PureBlack mt-6 px-8 py-4 text-[0.813rem] leading-[1.13rem] tracking-[1px] uppercase"
        >
          see product
        </Link>
      </article>
    </section>
  );
}

export default ProductShowcase;
//   ZX9 speaker
//
//   See product

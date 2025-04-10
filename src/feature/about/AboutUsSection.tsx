// Best Gear Section Images
import bestGearMobileImg from "/assets/shared/mobile/image-best-gear.jpg";
import bestGearTabletImg from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktopImg from "/assets/shared/desktop/image-best-gear.jpg";

function AboutUsSection() {
  return (
    <section className="mx-6 mt-[7.5rem] sm:mx-10 sm:mt-24 lg:mx-12 lg:mt-[200px] lg:grid lg:max-w-[69.38rem] lg:grid-cols-2 lg:gap-x-[125px] xl:mx-auto">
      <picture className="lg:order-1">
        <source srcSet={bestGearMobileImg} media="(max-width:767px)" />
        <source
          srcSet={bestGearTabletImg}
          media="(min-width:767px) and (max-width:1023px)"
        />
        <source srcSet={bestGearDesktopImg} media="(min-width:1024px)" />
        <img
          src={bestGearMobileImg}
          alt="A man listening to music in headphones"
          className="rounded-lg"
        />
      </picture>

      <article className="mt-10 text-center sm:mx-auto sm:mt-16 sm:max-w-[35.81rem] lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:text-left">
        <h3 className="text-[1.75rem] leading-[2.34rem] font-bold tracking-[1px] uppercase sm:text-[2.5rem] sm:leading-11">
          Bringing you the <span className="text-PrimaryColor">best</span> audio
          gear
        </h3>
        <p className="mt-8 text-[0.94rem] leading-[1.56rem] font-medium tracking-normal opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
    </section>
  );
}

export default AboutUsSection;

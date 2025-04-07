import bestGearMobileImg from "/assets/shared/mobile/image-best-gear.jpg";

function AboutUsSection() {
  return (
    <section className="mx-6 mt-[7.5rem]">
      <img src={bestGearMobileImg} alt="" />

      <article className="mt-10 text-center">
        <h3 className="text-[1.75rem] leading-[2.34rem] font-bold tracking-[1px] uppercase">
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

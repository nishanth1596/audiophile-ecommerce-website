import SeeProductNavLink from "./SeeProductNavLink";

function HeroSection() {
  return (
    <section className="text-White headphoneBackgroundImg px-6 pt-[6.75rem] pb-28 text-center">
      <p className="Overline opacity-50">New product</p>
      <h1 className="mt-4 text-4xl leading-10 font-bold tracking-[1.29px] uppercase">
        XX99 Mark II Headphones
      </h1>
      <p className="mt-6 mb-7 text-[0.94rem] leading-[1.56rem] font-medium opacity-75">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>

      <SeeProductNavLink
        backgroundColor="#d87d4a"
        isBorderRequired={false}
        textColor="#fff"
        navigateTo="/headphones/4/xx99-mark-two-headphones"
      />
    </section>
  );
}

export default HeroSection;

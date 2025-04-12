import SeeProductNavLink from "./SeeProductNavLink";

function HeroSection() {
  return (
    <section className="text-White headphoneBackgroundImg px-6 pt-[6.75rem] pb-28 text-center sm:pt-32 sm:pb-[167px] lg:px-0 lg:pt-32 lg:pb-40 lg:text-left">
      <div className="lg:mx-12 lg:max-w-[69.38rem] xl:mx-auto">
        <div className="mx-auto sm:max-w-96 lg:mx-0 lg:max-w-[24.88rem]">
          <p className="Overline opacity-50">New product</p>
          <h1 className="mt-4 text-4xl leading-10 font-bold tracking-[1.29px] uppercase sm:text-[3.5rem] sm:leading-[3.63rem] sm:tracking-[2px] lg:mt-6 lg:text-[3.5rem]">
            XX99 Mark II Headphones
          </h1>
          <p className="mt-6 mb-7 text-[0.94rem] leading-[1.56rem] font-medium opacity-75 sm:mb-10 sm:px-5 lg:pl-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <SeeProductNavLink
            backgroundColor="orange"
            isBorderRequired={false}
            navigateTo="/headphones/4/xx99-mark-two-headphones"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

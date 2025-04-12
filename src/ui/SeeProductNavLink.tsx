import { Link } from "react-router-dom";

type SeeProductNavLinkProps = {
  navigateTo: string;
  backgroundColor: "black" | "orange" | "lightGray";
  isBorderRequired: boolean;
};

function SeeProductNavLink({
  navigateTo,
  backgroundColor,
  isBorderRequired,
}: SeeProductNavLinkProps) {
  const colorClassMap = {
    orange: "bg-PrimaryColor text-White hover:bg-SecondaryColor",
    black:
      "bg-PureBlack text-White hover:bg-LightGray hover:text-PureBlack hover:outline-2",
    lightGray: "bg-LightGray hover:bg-PureBlack hover:text-White",
  };

  const colorClass = colorClassMap[backgroundColor];

  return (
    <Link
      to={navigateTo}
      className={`${colorClass} relative z-30 inline-block cursor-pointer px-8 py-4 text-[0.813rem] leading-[1.13rem] font-bold tracking-[1px] uppercase transition-all duration-300 ease-in-out lg:self-start`}
      style={{
        boxShadow: isBorderRequired ? "0 0 0 2px #000" : "",
      }}
    >
      see product
    </Link>
  );
}

export default SeeProductNavLink;

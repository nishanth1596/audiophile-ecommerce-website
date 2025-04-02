import { Link } from "react-router-dom";

type SeeProductNavLinkProps = {
  navigateTo: string;
  backgroundColor: string;
  textColor: string;
};

function SeeProductNavLink({
  navigateTo,
  backgroundColor,
  textColor,
}: SeeProductNavLinkProps) {
  return (
    <Link
      to={navigateTo}
      className="text-White bg-PureBlack inline-block px-8 py-4 text-[0.813rem] leading-[1.13rem] font-bold tracking-[1px] uppercase shadow-[inset_0_0_0_2px_black]"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      see product
    </Link>
  );
}

export default SeeProductNavLink;

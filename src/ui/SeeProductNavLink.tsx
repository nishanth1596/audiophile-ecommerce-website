import { Link } from "react-router-dom";

type SeeProductNavLinkProps = {
  navigateTo: string;
  backgroundColor: string;
  textColor: string;
  isBorderRequired: boolean;
};

function SeeProductNavLink({
  navigateTo,
  backgroundColor,
  textColor,
  isBorderRequired,
}: SeeProductNavLinkProps) {
  return (
    <Link
      to={navigateTo}
      className="inline-block px-8 py-4 text-[0.813rem] leading-[1.13rem] font-bold tracking-[1px] uppercase"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        boxShadow: isBorderRequired ? "0 0 0 2px #000" : "",
      }}
    >
      see product
    </Link>
  );
}

export default SeeProductNavLink;

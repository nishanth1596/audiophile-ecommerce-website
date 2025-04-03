import { Link } from "react-router-dom";

type GalleryCategoryCardProps = {
  title: string;
  image: string;
  navigateTo: string;
};

function GalleryCategoryCard({
  title,
  image,
  navigateTo,
}: GalleryCategoryCardProps) {
  return (
    <div className="bg-LightGray relative rounded-lg pt-[5.5rem] pb-[1.375rem] text-center">
      <h2 className="text-PureBlack text-[0.94rem] leading-5 font-bold tracking-[1.07px] uppercase">
        {title}
      </h2>

      <img
        src={image}
        alt={title}
        className="absolute -top-11 right-1/2 h-[104px] translate-x-1/2"
      />

      <Link
        to={navigateTo}
        className="mt-4 flex items-center justify-center gap-3.5"
      >
        <span className="text-[0.81rem] leading-[1.125rem] font-bold tracking-[1px] uppercase opacity-50">
          shop
        </span>
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}

export default GalleryCategoryCard;

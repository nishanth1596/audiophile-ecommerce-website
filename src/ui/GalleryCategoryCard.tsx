import { useNavigate } from "react-router-dom";

type GalleryCategoryCardProps = {
  title: string;
  image: string;
  navigateTo: string;
  setIsMenuOpen?: (value: false) => void;
};

function GalleryCategoryCard({
  title,
  image,
  navigateTo,
  setIsMenuOpen,
}: GalleryCategoryCardProps) {
  const navigate = useNavigate();

  function handleButtonClick() {
    if (setIsMenuOpen) setIsMenuOpen(false);

    navigate(navigateTo);
  }

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

      <button
        onClick={handleButtonClick}
        className="hover:text-PrimaryColor mx-auto mt-4 flex cursor-pointer items-center justify-center gap-3.5 transition-colors duration-300 ease-in-out"
      >
        <span className="text-[0.81rem] leading-[1.125rem] font-bold tracking-[1px] uppercase opacity-50 hover:opacity-100">
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
      </button>
    </div>
  );
}

export default GalleryCategoryCard;

import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-PureBlack hover:text-PrimaryColor mt-4 inline-block cursor-pointer text-[0.94rem] leading-[1.56rem] capitalize opacity-50 transition-all duration-300 ease-in-out hover:opacity-100 sm:mt-8 lg:mt-20"
    >
      Go back
    </button>
  );
}

export default GoBackButton;

import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-PureBlack mt-4 inline-block text-[0.94rem] leading-[1.56rem] capitalize opacity-50"
    >
      Go back
    </button>
  );
}

export default GoBackButton;

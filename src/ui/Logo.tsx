import { useNavigate } from "react-router-dom";
import audioPhileLogo from "/assets/shared/desktop/logo.svg";

function Logo() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button onClick={handleButtonClick} className="cursor-pointer">
      <img src={audioPhileLogo} alt="Audiophile logo" />
    </button>
  );
}

export default Logo;

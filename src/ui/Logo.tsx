import { Link } from "react-router-dom";
import audioPhileLogo from "../../public/assets/shared/desktop/logo.svg";

function Logo() {
  return (
    <Link to="/">
      <img src={audioPhileLogo} alt="Audiophile logo" />
    </Link>
  );
}

export default Logo;

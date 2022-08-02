import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Logo = ({ topBarScroll }) => {
  return (
    <div className="w-60 max-w-full px-4 cursor-pointer">
      <Link
        to="/"
        spy={true}
        smooth={true}
        duration={1000}
        exact="true"
        offset={-80}
        className={
          topBarScroll
            ? "block w-full py-0 lg:py-0"
            : "block w-full py-6 lg:py-5"
        }
      >
        <img src={logo} alt="logo" className="w-full h-auto" />
      </Link>
    </div>
  );
};

export default Logo;

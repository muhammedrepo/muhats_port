import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { Wrapper } from "../assets/wrapper/Header";
import Logo from "./Logo";

const Header = () => {
  const [switchToggled, setSwitchToggled] = useState(false);
  const [topBarScroll, setTopBarScroll] = useState(false);

  const ToggleSwitch = () => {
    setSwitchToggled(!switchToggled);
  };

  const animateTopBar = () => {
    if (window.scrollY >= 100) {
      setTopBarScroll(true);
    } else {
      setTopBarScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateTopBar);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Wrapper className={topBarScroll ? "header-sticky" : "header-transparent"}>
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 items-center justify-between relative">
          <Logo topBarScroll={topBarScroll} onClick={toggleHome} />
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                onClick={ToggleSwitch}
                className={
                  switchToggled
                    ? "navbarTogglerActive navbarToggler"
                    : "navbarToggler"
                }
              >
                <span className="mobile-menu-bar"></span>
                <span className="mobile-menu-bar"></span>
                <span className="mobile-menu-bar"></span>
              </button>
              <nav
                className={
                  switchToggled ? "navbarCollapseActive" : "navbarCollapse"
                }
              >
                <ul className="lg:flex">
                  <li className="relative" onClick={ToggleSwitch}>
                    <NavLink to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="relative" onClick={ToggleSwitch}>
                    <NavLink to="projects" className="nav-link">
                      Projects
                    </NavLink>
                  </li>
                  <li className="relative" onClick={ToggleSwitch}>
                    <NavLink to="resources" className="nav-link">
                      Resources
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="sm:flex justify-end hidden pr-16 lg:pr-0">
              <Link
                activeClass="#fff"
                className="btn"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                exact="true"
                offset={-80}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

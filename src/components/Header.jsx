import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import Button from './Button';
import Logo from './Logo';

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
    window.addEventListener('scroll', animateTopBar);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const links = [
    {
      menu: 'Home',
      path: '/',
    },
    {
      menu: 'Projects',
      path: 'projects',
    },
    {
      menu: 'Resources',
      path: 'resources',
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <li key={link.menu} className="relative" onClick={ToggleSwitch}>
        <NavLink
          to={link.path}
          className="text-lg font-semibold text-gray-500/100 hover:opacity-70 py-4 lg:py-5 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
        >
          {link.menu}
        </NavLink>
      </li>
    );
  });
  return (
    <header
      className={`fixed top-0 w-full flex items-center
        ${
          topBarScroll
            ? ' bg-white/80  backdrop-blur-sm backdrop-filter shadow-md z-50 transition-all duration-300'
            : 'bg-transparent left-0 z-50 '
        }
          
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 items-center justify-between relative">
          <Logo topBarScroll={topBarScroll} onClick={toggleHome} />
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                onClick={ToggleSwitch}
                className={`block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden px-3 py-1.5 rounded-lg
                  ${switchToggled ? 'navbarTogglerActive ' : ''}
                    
                `}
              >
                <span className="mobile-menu-bar"></span>
                <span className="mobile-menu-bar"></span>
                <span className="mobile-menu-bar"></span>
              </button>
              <nav
                className={`absolute py-5 lg:py-0 lg:px-4 xl:px-6 lg:bg-transparent rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static
                  ${
                    switchToggled
                      ? ' bg-white/100 block'
                      : ' bg-[rgba(29,33,68,10)] hidden'
                  }
                    `}
              >
                <ul className="lg:flex">{renderedLinks}</ul>
              </nav>
            </div>
            <div class="hidden md:flex justify-end pr-16 lg:pr-0">
              <Button primary>
                <Link
                  activeClass="#fff"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  exact="true"
                  offset={-80}
                >
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

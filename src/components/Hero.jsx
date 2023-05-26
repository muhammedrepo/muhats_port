import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import heroShape from '../assets/images/hero-shape-1.svg';
import heroShape2 from '../assets/images/hero-shape-2.svg';
import Button from './Button';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] 2xl:pt-[210px]"
    >
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4" data-aos="fade-in">
            <div className="flex flex-col justify-center  items-center max-w-xl mx-auto">
              <span className="font-medium paragraph text-gray-500 text-lg md:text-xl mb-3">
                Hi, my name is Muhammed Tijani.
              </span>
              <h2 className="mb-5 text-xl sm:text-2xl lg:text-2xl font-bold text-center">
                I’m a full-stack developer, specialized in development of web
                applications using React, Next.js, Node.js & more
              </h2>

              <div className="flex justify-center items-center space-x-4">
                <Button primary>
                  <Link
                    activeClass="#fff"
                    to="work"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    exact="true"
                    offset={-80}
                  >
                    Projects
                  </Link>
                </Button>
                <Button secondary>
                  <NavLink to="/resources">Resources</NavLink>
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
        </div>
      </div>
      <div className="projects-bg-image absolute top-0 left-0 -z-10 h-full w-full opacity-20 bg-"></div>
      <img src={heroShape} alt="" className="absolute top-0 left-0 -z-10 " />
      <img src={heroShape2} alt="" className="absolute top-0 right-0 -z-10" />
    </div>
  );
};

export default Hero;

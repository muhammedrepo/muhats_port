import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import heroShape from "../assets/images/hero-shape-1.svg";
import heroShape2 from "../assets/images/hero-shape-2.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] 2xl:pt-[210px]"
    >
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4" data-aos="fade-in">
            <div className="hero-content flex flex-col justify-center  items-center max-w-[570px] mx-auto">
              <span
                className="
                  font-bold blue-text text-lg
                  md:text-xl
                  mb-3 uppercase
                "
              >
                HI, my name is
              </span>
              <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-5xl font-bold text-center">
                Muhammed T.
              </h1>
              <p className="max-w-[540px] text-xl md:text-xl paragraph text-center">
                I am a software engineer who specializes in crafting amazing
                digital experiences.
              </p>
              <ul className="flex justify-center items-center">
                <li className="btn">
                  <Link
                    activeClass="#fff"
                    className="hero-btn mx-2 py-4"
                    to="work"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    exact="true"
                    offset={-80}
                  >
                    Projects
                  </Link>
                </li>
                <li className="btn bg-gray-700 ml-4">
                  <NavLink to="/resources">Resources</NavLink>
                </li>
              </ul>
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

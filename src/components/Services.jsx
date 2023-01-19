import { Link } from "react-scroll";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { serviceData } from "../utils/serviceData";
import ContentPanel from "./ContentPanel";

const Services = () => {
  const renderedServices = serviceData.map((item) => {
    return (
      <div className="flex w-full md:w-1/2 lg:w-1/3 px-4" key={item.name}>
        <div className="bg-white/100 mb-10">
          <a href="#home" className="block w-full">
            <img src={item.image} alt="" className="w-full" />
          </a>
          <div className="p-8 sm:p-11 md:p-8 lg:px-6 xl:p-10 2xl:p-11">
            <h3>
              <a
                href="#home"
                className="font-bold text-[rgba(29,33,68)]/100 text-lg
  sm:text-xl hover:text-opacity-100 hover:text-blue-500/100 block mb-4"
              >
                {item.name}
              </a>
            </h3>
            <p className="text-base text-[rgba(149,156,177,1)] pb-7 mb-6 border-b border-[rgba(243,243,243,1)]">
              {item.desc}
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              exact="true"
              offset={-80}
              className="font-medium text-[rgba(149,156,177)]/100
    hover:text-opacity-100 hover:text-blue-500/100
    text-base inline-flex items-center cursor-pointer"
            >
              Get Started
              <span className="ml-3">
                <MdOutlineArrowRightAlt />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section
      id="services"
      className="bg-blue-500 bg-opacity-5 pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]"
    >
      <div className="container mx-auto px-4">
        <ContentPanel
          title="What I do"
          subtitle="I work with clients to create their dream projects."
          className="max-w-[625px]"
          data-aos="fade-in"
        />

        <div className="flex flex-wrap justify-center -mx-4" data-aos="fade-in">
          {renderedServices}
        </div>
      </div>
    </section>
  );
};

export default Services;

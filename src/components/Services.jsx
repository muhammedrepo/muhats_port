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
              <a href="#home" className="title">
                {item.name}
              </a>
            </h3>
            <p className="text-basetext-[rgba(149,156,177,1)] pb-7 mb-6 border-b border-[rgba(243,243,243,1)]">
              {item.desc}
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              exact="true"
              offset={-80}
              className="view-detail-btn cursor-pointer"
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
        <div
          className="
            flex flex-wrap items-end -mx-4 mb-10
            lg:mb-[60px]
          "
        >
          <ContentPanel
            title="What I do"
            subtitle="I work with clients to create their dream projects."
            className="max-w-[625px]"
            data-aos="fade-in"
          />
        </div>

        <div className="flex flex-wrap justify-center -mx-4" data-aos="fade-in">
          {renderedServices}
        </div>
      </div>
    </section>
  );
};

export default Services;

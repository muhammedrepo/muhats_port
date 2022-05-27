import { Link } from "react-scroll";
import { serviceData } from "../utils/serviceData";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[rgba(74,108,247,var(--tw-bg-opacity))] bg-opacity-5 pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]"
    >
      <div className="container mx-auto px-4">
        <div
          className="
            flex flex-wrap items-end -mx-4 mb-10
            lg:mb-[60px]
          "
        >
          <div className="w-full lg:w-2/3 px-4" data-aos="fade-in">
            <div className="max-w-[625px] mb-5">
              <span
                className="
                  font-semibold text-lg text-opacity-100 text-[rgba(74,108,247,var(--tw-text-opacity))] mb-2 block
                "
              >
                WHAT I DO
              </span>
              <h2
                className="
                  font-bold text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-opacity-100 text-[rgba(9,14,52,var(--tw-text-opacity))]
                "
              >
                I work with clients to create their dream projects.
              </h2>
            </div>
          </div>
          {/* <div className="w-full lg:w-1/3 px-4">
            <div className="flex lg:justify-end mb-5">
              <a
                href="#home"
                className="
                  text-lg font-medium text-opacity-100 text-[rgba(9,14,52,var(--tw-text-opacity))] underline
                  hover:text-opacity-100 hover:text-[rgba(74,108,247,var(--tw-text-opacity))]
                "
              >
                EXPLORE SERVICES
              </a>
            </div>
          </div> */}
        </div>

        <div className="flex flex-wrap justify-center -mx-4" data-aos="fade-in">
          {serviceData.map((item, index) => (
            <div className="flex w-full md:w-1/2 lg:w-1/3 px-4" key={index}>
              <div className="bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))] mb-10">
                <a href="#home" className="block w-full">
                  <img src={item.image} alt="" className="w-full" />
                </a>
                <div
                  className="
                  p-8
                  sm:p-11
                  md:p-8
                  lg:px-6
                  xl:p-10
                  2xl:p-11
                "
                >
                  <h3>
                    <a
                      href="#home"
                      className="title
                    "
                    >
                      {item.name}
                    </a>
                  </h3>
                  <p
                    className="
                    services-paragraph
                  "
                  >
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
                      <svg
                        width="20"
                        height="8"
                        viewBox="0 0 20 8"
                        className="fill-current"
                      >
                        <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2813 0.281319C16.0625 0.468819 16.0313 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0313 7.21882 16.0625 7.56257 16.2813 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7813 7.90632 16.9375 7.84382 17.0313 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

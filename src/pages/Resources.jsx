import { Link } from "react-scroll";
import { Contact, ScrollToTop } from "../components";
import heroShape from "../assets/images/hero-shape-1.svg";
import heroShape2 from "../assets/images/hero-shape-2.svg";
import {
  colorData,
  cssresource,
  fontData,
  htmldata,
  iconsData,
  imgVidData,
  jscriptData,
  btnData,
  tools,
} from "../utils";

const Resources = () => {
  return (
    <>
      <ScrollToTop />
      <div className="relative z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="hero-content flex flex-col justify-center  items-center max-w-[570px] mx-auto">
                <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-5xl font-bold text-center">
                  Resources for Crafting Beautiful Websites
                </h1>
                <p
                  className="max-w-[540px] text-xl md:text-xl mb-12 text-center 
    paragraph"
                >
                  Resources for hand-crafting Beautiful and Performant Websites.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center">
                {btnData.map((item, index) => (
                  <div
                    className="resource-btn rounded-full lg:rounded-none px-4 lg:px-5"
                    key={index}
                    type="button"
                  >
                    <Link
                      className="inline-flex items-center gap-2"
                      to={item.url}
                      spy={true}
                      smooth={true}
                      duration={1000}
                      exact="true"
                      offset={-80}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>

              <section id="devtools" className="flex-wrap pt-[120px] pb-[50px]">
                <h2 className="sub-heading mb-20 text-center">
                  Development Tools
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {tools.map((tool, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={tool.icon}
                            alt={tool.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={tool.url}
                          >
                            {tool.title}
                          </a>
                        </h3>
                        <p className="paragraph">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* HTML RESOURCES */}

              <section id="html" className="flex-wrap pt-[80px] pb-[50px]">
                <h2 className="sub-heading mb-20 text-center">
                  HTML5 RESOURCES
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {htmldata.map((item, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CSS RESOURCES */}
              <section id="css" className="flex-wrap pt-[80px] pb-[50px]">
                <h2 className="sub-heading mb-20 text-center">CSS RESOURCES</h2>
                <div className="flex flex-wrap -mx-4">
                  {cssresource.map((item, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* JAVASCRIPT RESOURCES */}
              <section
                id="javascript"
                className="flex-wrap pt-[80px] pb-[50px]"
              >
                <h2 className="sub-heading mb-20 text-center">
                  JAVASCRIPT RESOURCES
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {jscriptData.map((item, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FONT RESOURCES */}
              <section id="fonts" className="flex-wrap pt-[80px] pb-[50px]">
                <h2 className="sub-heading mb-20 text-center">
                  FONTS AND TYPOGRAPHY TOOLS
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {fontData.map((item, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COLORS RESOURCES */}
              <section id="colors" className="flex-wrap pt-[80px] pb-[50px]">
                <h2 className="sub-heading mb-20 text-center">
                  GREAT COLORS AND TOOLS
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {colorData.map((item, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* IMAGES AND VIDEOS RESOURCES */}
              <section id="images" className="flex-wrap pt-[80px] pb-[50px]">
                <h2 className="sub-heading mb-20 text-center">
                  IMAGES AND VIDEOS
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {imgVidData.map((item, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ICONS RESOURCES */}
              <section id="icons" className="flex-wrap pt-[80px] pb-[50px]">
                <h2 className="sub-heading mb-20 text-center">
                  BEST ICONS AND TOOLS
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {iconsData.map((item, index) => (
                    <div className="resources-card" key={index}>
                      <div className="mb-[70px]">
                        <div className="icon">
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className="fill-current"
                          />
                        </div>
                        <h3 className="title">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Contact />
              </section>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
          </div>
        </div>

        <div className="projects-bg-image absolute top-0 left-0 -z-10 h-full w-full opacity-20 bg-"></div>
        <img src={heroShape} alt="" className="absolute top-0 left-0 -z-10 " />
        <img src={heroShape2} alt="" className="absolute top-0 right-0 -z-10" />
      </div>
    </>
  );
};

export default Resources;

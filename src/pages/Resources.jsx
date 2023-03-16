import { Link } from 'react-scroll';
import {
  Button,
  Contact,
  ContentPanel,
  ResourcePanel,
  ScrollToTop,
} from '../components';
import heroShape from '../assets/images/hero-shape-1.svg';
import heroShape2 from '../assets/images/hero-shape-2.svg';
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
} from '../utils';

const Resources = () => {
  return (
    <>
      <ScrollToTop />
      <div className="relative z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] 2xl:pt-[210px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <ContentPanel
                subtitle="Resources for Crafting Beautiful Websites"
                desc="Resources for hand-crafting Beautiful and Performant Websites."
                className="flex flex-col justify-center items-center text-center max-w-lg mx-auto"
              />

              <div className="flex items-center justify-center">
                {btnData.map((item, index) => (
                  <Button primary roundedCorner key={index}>
                    <Link
                      className="inline-flex items-center gap-1 md:gap-2"
                      to={item.url}
                      spy={true}
                      smooth={true}
                      duration={1000}
                      exact="true"
                      offset={-80}
                    >
                      <span className="hidden md:block">{item.icon}</span>
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
              <ResourcePanel
                heading="Development Tools"
                items={tools}
                id="devtools"
              />
              <ResourcePanel
                heading="HTML5 RESOURCES"
                items={htmldata}
                id="html"
              />
              <ResourcePanel
                heading="CSS RESOURCES"
                items={cssresource}
                id="css"
              />
              <ResourcePanel
                heading="JAVASCRIPT RESOURCES"
                items={jscriptData}
                id="javascript"
              />
              <ResourcePanel
                heading="FONTS AND TYPOGRAPHY TOOLS"
                items={fontData}
                id="fonts"
              />
              <ResourcePanel
                heading="GREAT COLORS AND TOOLS"
                items={colorData}
                id="colors"
              />
              <ResourcePanel
                heading="IMAGES AND VIDEOS"
                items={imgVidData}
                id="images"
              />
              <ResourcePanel
                heading="BEST ICONS AND TOOLS"
                items={iconsData}
                id="icons"
              />
              <Contact />
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

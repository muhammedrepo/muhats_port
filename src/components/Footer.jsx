import { Logo, SocialMedia } from '../components';
import FooterIconLeft from './FooterIconLeft';
import FooterIconRight from './FooterIconRight';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[rgba(74,108,247)]/5 pt-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap -mx-4">
          <div className="flex items-center justify-center w-full md:w-1/2 lg:w-1/3 xl:w-[41.666667%] px-4">
            <div className="flex flex-wrap item center justify-center mb-16 max-w-[360px]">
              <Logo />
              <p className="paragraph text-center mb-9">
                As a creative and helpful professional, I am here to assist you
                achieve your goals.
              </p>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-[rgba(74,108,247)]/10">
        <div className="container mx-auto px-4">
          <p className=" text-[rgba(149,156,177)]/100 text-base text-center">
            &copy; {new Date().getFullYear()} Crafted by Muhammed Tijani. All
            rights reserved. Built with{' '}
            <a
              className="text-blue-400"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-[3.5rem] -z-[1]">
        <FooterIconLeft />
      </div>
      <div className="absolute left-0 bottom-24 -z-[1]">
        <FooterIconRight />
      </div>
    </footer>
  );
};

export default Footer;

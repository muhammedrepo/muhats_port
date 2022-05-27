import { SocialMedia } from "../components";

const About = () => {
  return (
    <section id="about" className="pt-[145px] pb-[120px] relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div
            className="
                w-full
                lg:w-1/2
                xl:w-[58.333333%]
                px-4 mb-8
                lg:mb-0
              "
            data-aos="fade-in"
          >
            <span
              className="
                  font-bold blue-text text-lg
                  md:text-xl
                  mb-3
                "
            >
              ABOUT ME
            </span>
            <h2 className="sub-heading max-w-[400px]">
              Better design, better experience
            </h2>
            <p className="paragraph max-w-[570px]">
              I consult, design, create, and scale innovative online, mobile,
              and custom software solutions. Every project is a milestone for
              me. As a software developer, I custom-tailor digital solutions
              with industry best practices for Fortune 500 companies, SMEs, and
              startups throughout the world.
            </p>
          </div>
          <div
            className="w-full lg:w-1/2 xl:w-[41.666667%] px-4"
            data-aos="fade-in"
          >
            <h3
              className="
                  font-semibold text-opacity-100 text-[rgba(9,14,52,var(--tw-text-opacity))] text-2xl
                  md:text-3xl
                  mb-6
                "
            >
              Connect With Me
            </h3>
            <p className="paragraph">
              Discuss your project. Contact me for a free, no-obligation
              consultation and project estimate. I'll respond in under a minute,
              do my finest work, finish on schedule, and be positive. If it has
              been done in the past, we can do it even better.
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <svg
          width="60"
          height="120"
          viewBox="0 0 60 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="60" fill="url(#paint0_radial_18:24)" />
          <defs>
            <radialGradient
              id="paint0_radial_18:24"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(60) rotate(90) scale(120)"
            >
              <stop stop-color="white" />
              <stop offset="0.569" stop-color="#F0F4FD" />
              <stop offset="0.993" stop-color="#D9E0F0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default About;

import { ContentPanel, SocialMedia } from '../components';

const About = () => {
  return (
    <section id="about" className="pt-[145px] pb-[120px] relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <ContentPanel
            title="About"
            subtitle="Better experience"
            desc="As a front-end developer, I have a proven track record of delivering fast, clean, and easy-to-maintain web applications that scale seamlessly. With over 5 years of experience, I specialize in React, Next.js, Node.js, and other frameworks. My workflow involves a thorough understanding of project requirements, documentation, estimation, installation, and development."
            className="lg:w-1/2 xl:w-[58.333333%] mb-8 lg:mb-0"
            data-aos="fade-in"
          />

          <ContentPanel
            subtitle="Connect With Me"
            desc="Discuss your project. Contact me for a free, no-obligation
              consultation and project estimate. I'll respond in under a minute,
              do my finest work, finish on schedule, and be positive. If it has
              been done in the past, we can do it even better."
            className="lg:w-1/2 xl:w-[41.666667%]"
            data-aos="fade-in"
          >
            <SocialMedia />
          </ContentPanel>
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

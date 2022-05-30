import {
  About,
  Contact,
  Hero,
  ScrollToTop,
  Services,
  Work,
} from "../components";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <About />
      <Services />
      <Work />

      <Contact />
    </>
  );
};
export default Home;

import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="flex items-center">
      {/* <a
        href="/"
        target="_blank"
        rel="noreferrer"
        aria-label="social-link"
        className="social-links"
      >
        <FaFacebookF />
      </a> */}
      <a
        href="https://twitter.com/muhats_"
        target="_blank"
        rel="noreferrer"
        aria-label="social-link"
        className="social-links"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammedtijani/"
        target="_blank"
        rel="noreferrer"
        aria-label="social-link"
        className="social-links"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/coolzyte"
        target="_blank"
        rel="noreferrer"
        aria-label="social-link"
        className="social-links"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;

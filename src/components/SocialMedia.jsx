import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const medias = [
  {
    url: 'https://twitter.com/muhammedtijani_',
    icon: <FaTwitter />,
  },
  {
    url: 'https://www.linkedin.com/in/muhammedtijani/',
    icon: <FaLinkedin />,
  },
  {
    url: 'https://github.com/muhammedrepo',
    icon: <FaGithub />,
  },
];
const SocialMedia = () => {
  const renderedSocialMedia = medias.map((media, index) => (
    <a
      key={index}
      href={media.url}
      target="_blank"
      rel="noreferrer"
      aria-label="social-link"
      className="w-9 h-9 mr-3 rounded-full flex
      items-center
      justify-center
        border border-gray-200/100
     text-gray-400/100 hover:text-white/100
     hover:border-blue-500/100 hover:bg-blue-500/100 transition-all duration-300"
    >
      {media.icon}
    </a>
  ));

  return <div className="flex items-center">{renderedSocialMedia}</div>;
};

export default SocialMedia;

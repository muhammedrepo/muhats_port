import {
  // FaBlogger,
  FaCamera,
  FaCss3Alt,
  FaFonticons,
  FaHtml5,
  // FaNodeJs,
  FaTools,
} from "react-icons/fa";
import {
  IoIosColorFilter,
  IoIosSend,
  // IoIosSpeedometer,
  IoLogoJavascript,
  // IoMdBulb,
} from "react-icons/io";

const btnData = [
  {
    icon: <FaTools />,
    title: "Tools",
    url: "devtools",
  },
  {
    icon: <FaHtml5 />,
    title: "html",
    url: "html",
  },
  {
    icon: <FaCss3Alt />,
    title: "css",
    url: "css",
  },
  {
    icon: <IoLogoJavascript />,
    title: "js",
    url: "javascript",
  },

  {
    icon: <FaFonticons />,
    title: "fonts",
    url: "fonts",
  },
  {
    icon: <IoIosColorFilter />,
    title: "colors",
    url: "colors",
  },
  {
    icon: <FaCamera />,
    title: "images",
    url: "images",
  },
  {
    icon: <IoIosSend />,
    title: "icons",
    url: "icons",
  },
];

export default btnData;

import { AiFillGithub } from "react-icons/ai";
import share from "../assets/images/share.svg";
const Menu = ({ items }) => {
  const renderedProjects = items.map((projectItem) => {
    const { id, title, img, tags, url, source } = projectItem;

    const renderedTags = tags.map((tag, index) => {
      return (
        <button
          key={index}
          className="px-[2%] w-full h-12 inline-flex items-center justify-center text-center text-gray-500 text-base bg-blue-100 bg-opacity-50 transition"
        >
          {tag}
        </button>
      );
    });

    return (
      <article key={id} className="w-full sm:w-1/2 lg:w-1/3 px-4">
        <div
          className="mb-10 rounded-lg border-b-4 border-transparent bg-[rgba(245,248,255,1)] text-center transition-all duration-300 hover:border-[rgb(62,125,255)]  hover:scale-[1.02]"
          style={{ boxShadow: "0 5px 15px rgb(0 0 0 / 10%)" }}
        >
          <div className="mb-6 overflow-hidden rounded">
            <img src={img} alt={title} className="max-w-full h-auto w-full" />
          </div>
          <div className="item-info">
            <header className="grid grid-rows-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white p-3 rounded-[50%] block m-auto border-8 border-solid bg-blue-500 -translate-y-1/2"
              >
                <img src={share} alt="" />
              </a>
              <h4>{title}</h4>
              <div className="flex justify-center px-4 space-x-4">
                {renderedTags}
              </div>
              <div className="flex items-center justify-between w-full bg-blue-100 px-4">
                <AiFillGithub className="text-blue-500" />

                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Source Code
                </a>
              </div>
            </header>
          </div>
        </div>
      </article>
    );
  });
  return <div className="flex flex-wrap -mx-4 ">{renderedProjects}</div>;
};

export default Menu;

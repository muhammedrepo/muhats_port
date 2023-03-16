import { Link } from 'react-router-dom';

const ResourcePanel = ({ heading, items, id }) => {
  const renderedItems = items.map((item, index) => (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={index}>
      <div className="mb-4">
        <div className="icon">
          <img src={item.icon} alt={item.icon} className="fill-current" />
        </div>
        <h3 className="font-bold text-[rgba(29,33,68)]/100 text-lg sm:text-xl hover:text-opacity-100 hover:text-blue-500/100 block mb-4">
          <Link target="_blank" rel="noopener noreferrer" to={item.url}>
            {item.title}
          </Link>
        </h3>
        <p className="paragraph">{item.desc}</p>
      </div>
    </div>
  ));

  return (
    <section id={id} className="flex-wrap pt-24">
      <h2 className="text-4xl font-bold mb-20 text-center uppercase">
        {heading}
      </h2>
      <div className="flex flex-wrap -mx-4">{renderedItems}</div>
    </section>
  );
};
export default ResourcePanel;

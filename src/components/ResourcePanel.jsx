const ResourcePanel = ({ heading, items, id }) => {
  const renderedItems = items.map((item, index) => (
    <div className="w-full md:w-[50%] lg:w-[33.333333%] px-4" key={index}>
      <div className="mb-[70px]">
        <div className="icon">
          <img src={item.icon} alt={item.icon} className="fill-current" />
        </div>
        <h3 className="font-bold text-[rgba(29,33,68)]/100 text-lg sm:text-xl hover:text-opacity-100 hover:text-blue-500/100 block mb-4">
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            {item.title}
          </a>
        </h3>
        <p className="paragraph">{item.desc}</p>
      </div>
    </div>
  ));

  return (
    <section id={id} className="flex-wrap pt-[120px] pb-[50px]">
      <h2 className="text-4xl font-bold mb-20 text-center uppercase">
        {heading}
      </h2>
      <div className="flex flex-wrap -mx-4">{renderedItems}</div>
    </section>
  );
};
export default ResourcePanel;

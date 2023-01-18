const ResourcePanel = ({ heading, items, id }) => {
  const renderedItems = items.map((item, index) => (
    <div className="resources-card" key={index}>
      <div className="mb-[70px]">
        <div className="icon">
          <img src={item.icon} alt={item.icon} className="fill-current" />
        </div>
        <h3 className="title">
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
      <h2 className="sub-heading mb-20 text-center">{heading}</h2>
      <div className="flex flex-wrap -mx-4">{renderedItems}</div>
    </section>
  );
};
export default ResourcePanel;

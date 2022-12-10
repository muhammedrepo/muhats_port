const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex justify-center mx-auto mb-20 ">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
            className="resource-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

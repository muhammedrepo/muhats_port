import Button from "./Button";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex justify-center mx-auto mb-20">
      {categories.map((category, index) => {
        return (
          <Button
            primary
            roundedCorner
            key={index}
            onClick={() => filterItems(category)}
            className="capitalize"
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};

export default Categories;

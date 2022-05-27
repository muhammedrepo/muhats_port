import React, { useState } from "react";

const activeLink =
  "text-white bg-blue-600 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 uppercase cursor-pointer gap-4";

const normalLink =
  "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 uppercase cursor-pointer gap-4";

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

import React, { useState } from "react";
import Project from "../components/Project";
import Categories from "../components/Categories";
import items from "../utils/data";
import heroShape from "../assets/images/hero-shape-1.svg";
import heroShape2 from "../assets/images/hero-shape-2.svg";
import { Contact, ScrollToTop } from "../components";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Projects() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <ScrollToTop />
      <section className="pt-48 pb-28 z-10 relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
            <h2 className="text-4xl font-semibold">All Projects</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />

          <Project items={menuItems} />
        </div>
        <div className="projects-bg-image absolute top-0 left-0 -z-10 h-full w-full opacity-20 bg-"></div>
        <img src={heroShape} alt="" className="absolute top-0 left-0 -z-10 " />
        <img src={heroShape2} alt="" className="absolute top-0 right-0 -z-10" />
        <Contact />
      </section>
    </>
  );
}

export default Projects;

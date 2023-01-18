import React from "react";
import Project from "../components/Project";
import { useState } from "react";
import { Link } from "react-router-dom";
import items from "../utils/data";
import Button from "./Button";

const Work = () => {
  const [expanded] = useState(false);
  const dataForDisplay = expanded ? items : items.slice(0, 3);
  return (
    <div id="work" className="pt-20 pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4" data-aos="fade-in">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[600] text-center">
              <span className="font-semibold text-lg blue-text block mb-2 uppercase">
                projects
              </span>
              <h2 className="sub-heading">Recent Works</h2>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-12 flex flex-wrap items-center justify-center">
              <Project items={dataForDisplay} />

              <Button primary rounded>
                {/* {expanded ? "Show Less" : "Show More"} */}
                <Link to="/projects"> View More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

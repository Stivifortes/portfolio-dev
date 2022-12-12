import React from "react";
import portfolio from '../data/portfolio.js';
import PortfolioItem from "./PortfolioItem";


export default function Portfolio() {
  return (
    <div id="projects" className="py-8">
    <h2  className="text-center font-bold text-3xl text-primary-orange ">Recent Works</h2>
    <h4 className="text-center text-third-gray">My Portfolio</h4>
  <div className="flex flex-col md:flex-row items-center justify-center m-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
    {
      portfolio.map(project => (
        <PortfolioItem
        key={project.tittle}
         imgUrl={project.imgUrl}
         link={project.link}
         stack={project.stack}
         title={project.tittle}
        />
      ))
    }
    </div>
  </div>
  </div>
  );
}

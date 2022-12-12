import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

export default function Timeline() {
  return (<div className="flex flex-col md:flex-row justify-center my-20">
    <div className="w-full md:w-7/12">
      <Title id="timeline">Timeline</Title>
    {
      timeline.map((item, i) => (
        <TimelineItem
        details={item.details}
        duration={item.duration}
        title={item.title}
        year={item.year}
        key={i}        
        />
      ))
    }
    </div>
  </div>);
}

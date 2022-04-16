import React from "react";
import TrackSectionCard from "../../common/trackSectionCard";
import "./style.css";

import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";

const TrackSection = () => {
  const data = [
    {
      icon: icon1,
      title: "Level-Up Your Design Skills",
      content:
        "The Design Career Kickstarter track is here to help you master all the essential skills clients and agency are looking to hire- and then some!",
      buttonText: "Learn Design",
    },
    {
      icon: icon2,
      title: "Launch Your Creative Business",
      content:
        "The Entrepreneur Launchpad track has everything you need to get your creative business up and running.",
      buttonText: "Start your business",
    },
    {
      icon: icon3,
      title: "Skyrocket Your Agency",
      content:
        "All the resources you need to land bigger clients and scale are waiting for you in our Agency Accelerator track.",
      buttonText: "Grow your business",
    },
  ];

  return (
    <>
      <div className="pt-64 trackSection px-4 md:px-8">
        <div className="font-Calibre flex w-full mb-12 font-normal">
          <div className="w-full h-full min-w-full grid md:grid-cols-3 gap-y-24 md:gap-y-0 gap-10">
            {data.map((singleData) => {
              return (
                <TrackSectionCard
                  {...singleData}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackSection;

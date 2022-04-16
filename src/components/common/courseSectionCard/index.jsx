import React from "react";
import "./style.css";

const CourseSectionCard = () => {
  return (
    <>
      <div className="flex w-4/8 h-full pt-10 pl-6 md:pt-0 md:ml-1 md:pl-14 md:pr-32 flex-col justify-center items-start">
        <a href="">
          <h3 className=" leading-10 font-bold text-3xl mb-6">
            Instagram Carousel Design
          </h3>
          <p className="text-gray-700 mb-6 text-lg tracking-wide pr-4">
            From writing and design, to maximizing engagement with carousels and
            Reels, Learn Chris Do's exact process for make attention-grabbing
            Instagram content meant to grow your industry authority.
          </p>
          <div>
            <span className="text-lg text-gray-500">
              <del>$199</del>
            </span>
            <span className="ml-4 text-lg text-gray-500">$149</span>
          </div>
        </a>
        <div className="flex justify-center items-center w-3/4">
          <a
            href=""
            className="mt-8 w-full text-center p-4 courseSectionButton flex-col font-medium cursor-pointer uppercase"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};

export default CourseSectionCard;

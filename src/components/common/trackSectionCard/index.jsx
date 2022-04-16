import React from "react";
import "./style.css";

const TrackSectionCard = ({ icon, title, content, buttonText }) => {
  return (
    <>
      <div className="trackCard py-12 md:px-16 shadow-sm md:shadow-sm hover:shadow-xl">
        <div className="w-28 h-28 -mt-24 ml-8 md:w-36 md:h-36 md:-mt-28 mb-8 p-4 relative flex justify-center items-center rounded-full bg-white boxShadow">
          <img src={icon} alt="icon1" className="w-16" />
        </div>
        <div className="flex flex-col justify-between items-start px-8 md:px-0">
          <div>
            <h2 className="mb-4 text-4xl font-semibold leading-9 md:leading-none">{title}</h2>
          </div>
          <div className="mb-4 md:mb-12 mt-5">
            <p className="mb-2 pl-1 break-words font-extralight text-base leading-8 text-gray-600 tracking-wide">
              {content}
            </p>
          </div>
          <div>
            <a
              href=""
              className="bottom-0 inline-block text-white bg-black w-auto py-4 px-6 md:px-12 flex-col cursor-pointer uppercase text-center font-medium text-xs md:text-[15.5px] trackSectionButton"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackSectionCard;

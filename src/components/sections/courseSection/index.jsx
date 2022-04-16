import React from "react";
import "./style.css";

import igCarouselImg from "../../../assets/images/icon4.png";
import CourseSectionCard from "../../common/courseSectionCard";

const CourseSection = () => {
  return (
    <>
      <div className="pt-8 courseSection">
        <div className="relative flex pt-16 md:pr-8 md:pl-8 flex-col justify-start items-center">
          <div className="ml-4 relative w-full mx-auto font-normal mb-12">
            <div className="w-3/4">
              <div className="mb-1">
                <div className="mr-0.5 courseSectionTitle uppercase tracking-widest">
                  our courses
                </div>
              </div>
              <h2 className="font-bold text-7xl leading-10 md:mt-10">Open For Enrollment</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row courseSection">
        <div className="w-full md:w-3/5">
          <img src={igCarouselImg} alt="" />
        </div>
        <div className="w-full md:w-2/5">
          <CourseSectionCard />
        </div>
      </div>
    </>
  );
};

export default CourseSection;

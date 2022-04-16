import React from "react";
import "./style.css";

const ProGroupHome = () => {
  return (
    <>
      <div className="py-20 mb-0 relative flex  px-6 md:px-0 w-full md:w-2/4 font-normal proGroupHome">
        <div>
          <div className="max-w-max">
            <h2 className="md:pl-10 font-semibold text-7xl md:text-8xl tracking-normal leading-tight proGroupHome">
              Premium Coaching <br /> Like No Other
            </h2>
          </div>
          <div className="space-y-2"></div>
          <div className="md:pl-10 md:pr-20 md:pt-10 pt-10 flex justify-between items-center flex-col">
            <p className=" font-extralight text-xl leading-10">
              Accelerate your business growth and gain access to a business
              advisory board of experts.
              <br />
              <br />
              Access weekly, live group coaching from Chris Do and his team of
              subject-matter leaders along with other like-minded creatives and
              entrepreneurs from around the globe in our community-backed
              learning portal.
            </p>
          </div>
          <div className="h-8 self-stretch"></div>
          <div className="md:grid md:grid-rows-1 md:grid-cols-2 justify-center items-end">
            <div className="flex w-full flex-col items-center px-4 pb-2">
              <div className="font-bold text-8xl">+650</div>
              <div className="md:pl-10 w-full h-[2px] mb-4 bg-white"></div>
              <div className="w-full uppercase text-center proGroupMono">
                pro group members
              </div>
            </div>

            <div className="flex w-full items-center flex-col px-4">
              <div className="font-bold text-8xl">+354</div>
              <div className="md:pl-10 w-full h-[2px] mb-4 bg-white"></div>
              <div className="w-full uppercase text-center proGroupMono">
                hours of videos
              </div>
            </div>
          </div>
          <div className="mb-20 self-stretch"></div>
          <div className="w-full md:pl-10">
            <div className=" md:w-1/2">
              <a
                href=""
                className="w-full px-6 py-4 md:px-10 md:py-6 font-bold -tracking-tighter text-white uppercase proGroupBtn proGroupMono"
              >
                Join the Pro Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProGroupHome;

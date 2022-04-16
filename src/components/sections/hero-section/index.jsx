import "./style.css";

const HeroSection = function () {
  return (
    <div className="bg-black w-full">
      <div className="md:flex md:flex-row ">
        <div className="flex-1 md:basis-2/3 text-white ">
          <div className="text-left px-4 py-8 md:py-16 md:px-20 md:py-32">
            <h1 className="text-8xl leading-tight font-semibold tracking-tight md:header text-8xl">
              Courses, Coaching, and Community for Creatives
            </h1>
            <div className="sub-header text-xl font-extralight mt-10 md:text-2xl md:mt-14 md:pr-52">
              On a mission to help one billion people make a living doing what
              they love (without losing their soul). We’re like a private art
              school - minus the crippling debt.
            </div>
            <div className="shop-courses-button mt-10 uppercase text-xs font-semibold px-6 py-4 md:px-20 md:py-5 w-fit">
              Shop Courses
            </div>
          </div>
        </div>
        <div className="flex-1 md:basis-1/3 text-white">
          <div className="mx-auto md:px-2 md:py-32 w-11/12 md:h-screen">
            <iframe
              src="https://www.videoask.com/fw67dvax8"
              frameborder="0"
              title="videoask"
              className="video-height w-full rounded-3xl translate-y-28 md:scale-x-105 md:scale-y-125 "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

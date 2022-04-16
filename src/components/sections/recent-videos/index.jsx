import "./style.css";

const RecentVideos = ({ title }) => {
  return (
    <div className="relative bg-black text-white lg:px-32 pb-20">
      <div className="pt-10 pb-6 pl-6 text-2xl font-semibold">{title}</div>
      <div className="  custom-border flex overflow-x-auto pl-6 border-opacity-50 no-scrollbar ">
        <span className="md:block hidden absolute left-16 top-56">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-down-circle"
            width="48"
            height="48"
            viewBox="0 -1 24 26"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="12" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        </span>
        <div
          className={`relative flex-shrink-0 my-5 mr-2 w-96  ${
            title === "Podcast" ? "h-96" : "h-64"
          }  ${
            title === "Podcast"
              ? "bg-podcast-1"
              : title === "Business Fundamentals"
              ? "bg-business-1"
              : title === "Design Fundamentals"
              ? "bg-design-1"
              : title === "Blog"
              ? "bg-blog-1"
              : "bg-recent-1"
          } bg-cover group`}
        >
          <div className=" flex justify-between gap-1 w-full absolute bottom-4  ">
            <p className={` hidden group-hover:block font-bold`}>
              Document and show your creative process
            </p>
            <p className="hidden group-hover:block font-bold">Watch&nbsp;Now</p>
          </div>
        </div>
        <div
          className={`relative flex-shrink-0 my-5 mr-2 w-96 ${
            title === "Podcast" ? "h-96" : "h-64"
          }  ${
            title === "Podcast"
              ? "bg-podcast-2"
              : title === "Business Fundamentals"
              ? "bg-business-2"
              : title === "Design Fundamentals"
              ? "bg-design-2"
              : title === "Blog"
              ? "bg-blog-2"
              : "bg-recent-2"
          } bg-cover group`}
        >
          <div className=" flex justify-between gap-1 w-full absolute bottom-4  ">
            <p className={` hidden group-hover:block font-bold`}>
              Document and show your creative process
            </p>
            <p className="hidden group-hover:block font-bold">Watch&nbsp;Now</p>
          </div>
        </div>
        <div
          className={`relative flex-shrink-0 my-5 mr-2 w-96 ${
            title === "Podcast" ? "h-96" : "h-64"
          } ${
            title === "Podcast"
              ? "bg-podcast-3"
              : title === "Business Fundamentals"
              ? "bg-business-3"
              : title === "Design Fundamentals"
              ? "bg-design-3"
              : title === "Blog"
              ? "bg-blog-3"
              : "bg-recent-3"
          } bg-cover group`}
        >
          <div className=" flex justify-between gap-1 w-full absolute bottom-4  ">
            <p className={` hidden group-hover:block font-bold`}>
              Document and show your creative process
            </p>
            <p className="hidden group-hover:block font-bold">Watch&nbsp;Now</p>
          </div>
        </div>
        <div
          className={`relative flex-shrink-0 my-5 mr-2 w-96  ${
            title === "Podcast" ? "h-96" : "h-64"
          }  ${
            title === "Podcast"
              ? "bg-podcast-4"
              : title === "Business Fundamentals"
              ? "bg-business-4"
              : title === "Design Fundamentals"
              ? "bg-design-4"
              : title === "Blog"
              ? "bg-blog-4"
              : "bg-recent-4"
          } bg-cover group`}
        >
          {" "}
          <div className=" flex justify-between gap-1 w-full absolute bottom-4  ">
            <p className={` hidden group-hover:block font-bold`}>
              Document and show your creative process
            </p>
            <p className="hidden group-hover:block font-bold">Watch&nbsp;Now</p>
          </div>
        </div>
        <div
          className={`relative flex-shrink-0 my-5 mr-2 w-96  ${
            title === "Podcast" ? "h-96" : "h-64"
          }  ${
            title === "Podcast"
              ? "bg-podcast-5"
              : title === "Business Fundamentals"
              ? "bg-business-5"
              : title === "Design Fundamentals"
              ? "bg-design-5"
              : title === "Blog"
              ? "bg-blog-5"
              : "bg-recent-5"
          } bg-cover group`}
        >
          <div className=" flex justify-between gap-1 w-full absolute bottom-4  ">
            <p className={` hidden group-hover:block font-bold`}>
              Document and show your creative process
            </p>
            <p className="hidden group-hover:block font-bold">Watch&nbsp;Now</p>
          </div>
        </div>
        <span className="absolute right-16 top-56  hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-down-circle"
            width="48"
            height="48"
            viewBox="0 -1 24 26"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="12" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="15" y1="16" x2="19" y2="12" />
            <line x1="15" y1="8" x2="19" y2="12" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default RecentVideos;

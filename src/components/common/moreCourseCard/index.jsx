import "./style.css";
const MoreCourseCard = ({
  title,
  money,
  writer,
  banner,
  writerImage,
  description,
  productId,
}) => {
  return (
    <div
      className="card-height max-w-sm rounded overflow-hidden shadow-lg group "
    >
      <div className=" transition ease-in-out delay-250 duration-500 group-hover:-translate-y-24 ">
        <img class="h-80 w-full object-cover" src={banner} alt="banner" />
      </div>
      <div className="md:hidden block">
        <div className="px-6 md:pr-10 pt-4 pb-2 font-semibold text-lg  h-16">
          {title}
        </div>
        <div className="text-left pl-6 mb-2 text-sm text-black font-thin ">
          Learn More
        </div>
      </div>

      <div className="hidden md:block bg-white transition ease-in-out delay-250 duration-500 group-hover:-translate-y-48">
        <div className="px-6 md:pr-10 pt-4 pb-2 font-semibold text-lg mb-2 h-20">
          {title}
        </div>
        <div className=" flex flex-row mx-5 py-3 ">
          <img
            src={writerImage}
            alt=""
            className="object-contain w-12 box-shadow h-12 rounded-full"
          />
          <div className="ml-4 w-full uppercase flex items-center text-xs">
            <div style={{ fontFamily: "Founders Grotesk Mono" }}>{writer}</div>
            <div className="ml-auto text-2xl font-thin pr-2 text-gray-700">
              {money}
            </div>
          </div>
        </div>
        <div className="pt-2 px-4">
          <div className="tracking-wide font-thin pl-3 mt-2">{description}</div>
          <div className="flex flex-row pl-2">
            <div className="px-8 py-4 mt-7 mb-2 text-center text-xs bg-[#3761C8] text-white uppercase font-thin shadow-lg">
              Buy Now
            </div>
            <div className="flex-end text-center pl-12 mt-10 mb-2 text-sm text-black font-thin ">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreCourseCard;

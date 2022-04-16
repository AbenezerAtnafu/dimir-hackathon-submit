import MoreCourseCard from "../../common/moreCourseCard";
import banner1 from "../../../assets/images/banner1.jpeg";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.jpeg";
import banner4 from "../../../assets/images/banner4.jpeg";
import banner5 from "../../../assets/images/banner5.jpeg";
import banner6 from "../../../assets/images/banner6.jpg";
import writer1 from "../../../assets/images/writer1.jpg";

const moreCourseList = [
  {
    title: "Positioning & Lead Generation",
    money: "$699",
    writer: "Chris Do",
    banner: banner1,
    writerImage: writer1,
    description:
      "Build awareness for your services, market to a global audience, and command a price premium through strategic positioning and lead generation.",
    productId: 38883,
  },
  {
    title: "Instagram Carousel Design",
    money: "$149",
    writer: "Chris Do",
    banner: banner2,
    writerImage: writer1,
    description:
      "Build awareness for your services, market to a global audience, and command a price premium through strategic positioning and lead generation.",
    productId: 38883,
  },
  {
    title: "Brand Style Guide Kit",
    money: "$699",
    writer: "Chris Do",
    banner: banner3,
    writerImage: writer1,
    description:
      "Build awareness for your services, market to a global audience, and command a price premium through strategic positioning and lead generation.",
    productId: 38883,
  },
  {
    title: "Positioning & Lead Generation",
    money: "$699",
    writer: "Chris Do",
    banner: banner4,
    writerImage: writer1,
    description:
      "Build awareness for your services, market to a global audience, and command a price premium through strategic positioning and lead generation.",
    productId: 38883,
  },
  {
    title: "Positioning & Lead Generation",
    money: "$699",
    writer: "Chris Do",
    banner: banner5,
    writerImage: writer1,
    description:
      "Build awareness for your services, market to a global audience, and command a price premium through strategic positioning and lead generation.",
    productId: 38883,
  },
  {
    title: "Positioning & Lead Generation",
    money: "$699",
    writer: "Chris Do",
    banner: banner6,
    writerImage: writer1,
    description:
      "Build awareness for your services, market to a global audience, and command a price premium through strategic positioning and lead generation.",
    productId: 38883,
  },
];

const MoreCourseSection = function () {
  return (
    <div className="md:flex flex-row bg-[#F3F3F3] md:px-24 py-32 px-6">
      <div className="basis-1/4">
        <div className="uppercase tracking-widest font-normal text-sm pb-10">
          More Courses
        </div>
      </div>
      <div className="basis-3/4">
        <div className="grid md:grid-cols-3 gap-8 w-full h-full min-w-full">
          {moreCourseList.map((course, index) => (
            <MoreCourseCard {...course} key={{ index }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreCourseSection;

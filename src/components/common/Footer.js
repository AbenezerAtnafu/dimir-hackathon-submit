const Footer = () => {
  return (
    <div className="px-16 pb-6 flex flex-col space-y-96 pt-48 text-white bg-black">
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="flex justify-between lg:flex-nowrap flex-wrap lg:w-1/2 ">
          <div className="flex flex-col space-y-4">
            <p className="pb-10 cursor-pointer font-medium text-md lg:text-lg">
              Learn
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Pricing
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Logo Design
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Branding
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Lead Generation
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Design
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              View All
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="pb-10 cursor-pointer font-medium text-md lg:text-lg">
              Shop
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Business Skills
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Creative Skills
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Business Resources
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Merchandise
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              The Pro Group
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Private Coaching
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              View All
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="pb-10 cursor-pointer font-medium text-md lg:text-lg">
              Collaborate
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Work With Us
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Become An Affilate
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Advertise With Us
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Hire Us To Speak
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              FAQs
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Get Support
            </p>
            <p className="cursor-pointer hover:text-yellow-600 text-sm lg:text-[18px] font-thin">
              Report A Bug
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:pl-52 pb-36 lg:pb-0">
          <div className="flex flex-col items-start space-y-7">
            <p className="text-4xl">Be the first to know</p>
            <button className=" px-14 py-4 text-md font-semibold bg-yellow-400 hover:bg-yellow-500 tracking-wide text-black">
              JOIN OUR NEWSLETTER
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap lg:flex-nowrap ">
        <div className="text-gray-400 pb-10 lg:pb:0">
          Copyright © 2012-2021 The Futur LLC
        </div>
        <div className="flex space-x-10 text-gray-400">
          <div>Terms&nbsp;&amp;&nbsp;Condition</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

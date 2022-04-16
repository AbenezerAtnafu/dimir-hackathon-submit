const LearnAndCollaborate = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap text-white items-center">
      <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-36 bg-learn-bg hover:bg-learn-bg-hover h-[25rem] lg:h-[36rem] ">
        <p className="pb-6 text-2xl font-bold hover:bg-opacity-25">Learn</p>
        <p className="pb-6 lg:text-[20px] font-medium ">
          See a comprehensive list of our video content, articles, resources,
          and products about subjects like brand strategy, graphic design,
          typography, logo design, business, and lots more.
        </p>
        <div className="flex space-x-6 pb-6 ">
          <p className="lg:text-[20px] font-medium">Learn&nbsp;anything</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-arrow-right opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 hover:opacity-0`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-36 bg-collaborate-bg hover:bg-collaborate-bg-hover h-[25rem] lg:h-[36rem] bg-opacity-25">
        <p className="pb-6 text-2xl font-bold hover:bg-opacity-25">
          Collaborate
        </p>
        <p className="pb-6 lg:text-[20px] font-medium ">
          Let's Collaborate! Hire our team to speat at your event, advertise on
          our platforms, or appear on our show.
        </p>
        <div className="flex space-x-6 pb-6 ">
          <p className="lg:text-[20px] font-medium">
            Collaborate&nbsp;with&nbsp;The&nbsp;Futur
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-arrow-right opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 hover:opacity-0`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LearnAndCollaborate;

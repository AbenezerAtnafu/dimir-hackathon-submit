import "./style.css";

import Drawer from "../common/Drawer";

function MobileNavbar({ isMobileNavOpen, setIsMobileNavOpen }) {
  return (
    <Drawer isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen}>
      <div
        className={`flex items-center justify-between px-4 pt-4 lg:px-16 lg:pt-6 ${
          !isMobileNavOpen
            ? "transition-all delay-500 opacity-0 translate-y-full ease-out"
            : "transition-opacity opacity-100 duration-1000 translate-x-0"
        }`}
      >
        <div className="text-white">
          <svg
            width="100%"
            height="30"
            viewBox="0 0 945 202"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M41.87 40.6104H0V197.19H41.87V111.97H66.05V76.7604H41.87V40.6104Z"
                fill="currentColor"
              ></path>
              <path
                d="M162.86 72.7703C146.19 72.7703 134.22 78.8803 124.36 92.0203H123.89V40.6104H81.17V197.19H123.89V135.45C123.89 121.37 129.29 106.81 146.19 106.81C163.33 106.81 165.44 121.37 165.44 135.45V197.19H208.16V123.48C208.16 93.0004 193.38 72.7703 162.86 72.7703Z"
                fill="currentColor"
              ></path>
              <path
                d="M288.26 72.7705C249.06 72.7705 221.6 96.9505 221.6 137.091C221.6 178.641 251.41 201.181 291.32 201.181C305.17 201.181 318.78 197.891 329.81 191.081C340.84 184.271 349.3 174.001 352.58 159.861H311.5C306.81 167.861 300.24 170.861 291.08 170.861C273.47 170.861 264.32 161.471 264.32 144.101H354.23V139.641C354.23 98.5905 330.05 72.7705 288.26 72.7705ZM265 119.491C267.59 107.051 277.92 100.491 290.36 100.491C301.86 100.491 312.42 108.001 314.53 119.491H265Z"
                fill="currentColor"
              ></path>
              <path
                d="M394.65 19.2504C382.91 32.6304 382.44 44.8404 382.44 61.5104V76.7604H367.44V112H382.44V197.22H425.16V112H455V76.7604H425.16V57.2804C425.16 43.6604 428.92 37.0904 439.95 37.0904C445.59 37.0904 450.05 38.9704 454.95 41.0904V4.2304C449.303 1.32259 443.02 -0.131261 436.67 0.000396282C428.685 -0.0529818 420.786 1.6427 413.526 4.96831C406.267 8.29392 399.824 13.1688 394.65 19.2504V19.2504Z"
                fill="currentColor"
              ></path>
              <path
                d="M556.27 141.081C556.27 156.341 552.51 167.141 534.9 167.141C517.29 167.141 513.54 156.341 513.54 141.081V76.7607H470.82V149.301C470.82 188.971 498.75 201.181 534.9 201.181C571.05 201.181 599 189.001 599 149.301V76.7607H556.27V141.081Z"
                fill="currentColor"
              ></path>
              <path
                d="M670.84 40.6104H628.11V76.7604H614.26V111.97H628.11V197.19H670.84V111.97H695.02V76.7604H670.84V40.6104Z"
                fill="currentColor"
              ></path>
              <path
                d="M795.39 141.081C795.39 156.341 791.64 167.141 774.03 167.141C756.42 167.141 752.67 156.341 752.67 141.081V76.7607H709.94V149.301C709.94 188.971 737.88 201.181 774.03 201.181C810.18 201.181 838.11 189.001 838.11 149.301V76.7607H795.39V141.081Z"
                fill="currentColor"
              ></path>
              <path
                d="M936.18 75.1201C919.51 75.1201 905.42 81.6901 897.18 96.4801H896.71V76.7601H854V197.19H896.73V148.6C896.73 127.94 902.59 112.21 926.3 112.21C932.88 112.21 938.51 112.91 944.38 116.21V75.1201H936.18Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="944.39" height="201.18" fill="currentColor"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex space-x-2 items-center">
          <p
            className={`font-extralight block pt-2 text-[10px] text-white pb-2 pr-6 lg:hidden`}
          >
            Sign in
          </p>
          <p
            className={`font-extralight block pt-2 text-[10px] text-white pb-2 lg:text-lg pr-6 lg:pr-20`}
          >
            Login
          </p>
          <div
            className="flex flex-col justify-center items-center group cursor-pointer"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <div
              className={`h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300 ${
                isMobileNavOpen
                  ? "rotate-45 translate-y-3  group-hover:opacity-100"
                  : " group-hover:opacity-100"
              }`}
            ></div>
            <div
              className={`h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300 ${
                isMobileNavOpen ? "opacity-0" : " group-hover:opacity-100"
              }`}
            ></div>
            <div
              className={`h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300 ${
                isMobileNavOpen
                  ? "-rotate-45 -translate-y-3  group-hover:opacity-100"
                  : " group-hover:opacity-100"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="relative lg:static">
        <div
          className={`flex justify-between flex-col lg:flex-row lg:space-x-12 px-40 mx-auto text-white pt-10 ${
            !isMobileNavOpen
              ? "transition-all delay-500 opacity-0 translate-y-full ease-out"
              : "transition-opacity opacity-100 duration-1000 translate-x-0"
          } absolute -right-20 lg:static`}
        >
          <div className={`flex flex-col space-y-6 group `}>
            <p className="text-md lg:text-2xl font-medium link link-underline link-underline-black">
              Bootcamp&nbsp;
            </p>
            <p className="text-md font-thin leading-8 hidden lg:block">
              Are you ready to scale your business? Join our intense Business
              Bootcamp and learn how.
            </p>
            <div className=" space-x-8 items-center hidden lg:flex">
              <p className="text-md font-semibold">Scale your business</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`icon icon-tabler icon-tabler-arrow-right opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 hover:opacity-0`}
                width="30"
                height="30"
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
          <div className="flex flex-col space-y-6 group">
            <p className="text-md lg:text-2xl  font-medium link link-underline link-underline-black">
              Pro&nbsp;Group
            </p>
            <p className="text-md font-thin leading-8 hidden lg:block">
              Ever feel lonely as a freelancer, founder or studio owner? Join
              our vibrant community of creative entrepreneurs!
            </p>
            <div className=" space-x-8 items-center hidden lg:flex">
              <p className="text-md font-semibold">Join the group</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`icon icon-tabler icon-tabler-arrow-right opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 hover:opacity-0`}
                width="30"
                height="30"
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
          <div className="flex flex-col space-y-6 group">
            <p className="text-md lg:text-2xl  font-medium link link-underline link-underline-black">
              Carousel&nbsp;Design
            </p>
            <p className="text-md font-thin leading-8 hidden lg:block">
              Learn Chris Do’s exact process for make attention-grabbing
              Instagram content meant to grow your industry authority.
            </p>
            <div className=" space-x-8 items-center hidden lg:flex">
              <p className="text-md font-semibold">Enroll Now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`icon icon-tabler icon-tabler-arrow-right opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 hover:opacity-0`}
                width="30"
                height="30"
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
        <div
          className={`px-36 pt-10 hidden lg:block ${
            !isMobileNavOpen
              ? "transition-all delay-300 opacity-0 -translate-x-full ease-out"
              : "transition-opacity opacity-100 duration-1000 translate-x-0"
          }`}
        >
          <hr className="border" />
        </div>
        <div
          className={`flex justify-between flex-col lg:flex-row lg:space-x-12 px-44 text-white ${
            !isMobileNavOpen
              ? "transition-all delay-500 opacity-0 translate-y-full ease-out"
              : "transition-opacity opacity-100 duration-1000 translate-x-0"
          } absolute -left-20 top-10 lg:static lg:mt-10`}
        >
          <div className="flex flex-col space-y-4">
            <p className="text-md lg:text-lg ">Learn</p>
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Pricing
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Logo Design
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

            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Lead Generation
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

            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Design
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

            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Branding
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

            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                View All
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
          <div className="flex flex-col space-y-4">
            <p className="text-md lg:text-lg">Shop</p>
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Business Skills
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Creative Skills
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Business Resources
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Private Coaching
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Merchandise
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Shop All
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
          <div className="flex flex-col space-y-4">
            <p className="text-md lg:text-lg">Explore</p>

            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">Blog</p>
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Email Newsletter
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Podcast
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                The Futur Alumni
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Upcoming Events
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer ">
                Video Content
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
          <div className="flex flex-col space-y-4">
            <p className="text-md lg:text-lg">Collaborate</p>

            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Adverise With Us
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Become An Affliate
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Hire Us To Speak{" "}
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Work With Us{" "}
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
          <div className="flex flex-col space-y-4">
            <p className="text-md lg:text-lg">Connect</p>

            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Meet Our Team
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Report A Bug
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">FAQ</p>
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Contact Us
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
            <div className="group hidden items-center space-x-2 lg:flex">
              <p className="group-hover:font-extrabold cursor-pointer  ">
                Sign In
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
      </div>
    </Drawer>
  );
}

export default MobileNavbar;

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-7 px-20">
      <div className="flex items-center w-auto space-x-16 h-9">
        <svg
          width="100%"
          height="auto"
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
        <p className="text-xl pt-2 font-medium">
          Courses&nbsp;&amp;&nbsp;Tools
        </p>
        <p className="text-xl pt-2 font-medium">Content</p>
        <p className="text-xl pt-2 font-medium">Our&nbsp;Mission</p>
      </div>

      <div className="flex items-center space-x-16">
        <p className="text-xl font-medium">Login</p>
        <div className="flex flex-col items-end space-y-2 group">
          <div className="b-burger-line-top bg-black w-7 h-0.5 group-hover:w-9"></div>
          <div className="b-burger-line-top bg-black w-9 h-0.5"></div>
          <div className="b-burger-line-top bg-black w-8 h-0.5 group-hover:w-9"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

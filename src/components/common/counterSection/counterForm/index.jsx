import React from "react";
import "./style.css";


const CounterForm = () => {
  return (
    <>
      <div className="md:w-3/5 flex-col">
        <div className="h-4"></div>
        <div>
          <div className="w-full flex flex-nowrap justify-end">
            <div className="font-bold m-1.5 flex items-center justify-center max-w-[300px] w-full text-center bg-black rounded-md text-white text-7xl pb-0.5 h-auto">
              2
            </div>
            <div className="font-bold m-1.5 flex items-center justify-center max-w-[300px] w-full text-center bg-black rounded-md text-white text-7xl pb-0.5 h-auto">
              9
            </div>
            <div className="font-bold m-1.5 flex items-center justify-center max-w-[300px] w-full text-center bg-black rounded-md text-white text-7xl pb-0.5 h-auto">
              1
            </div>
            <div className="font-bold m-1.5 flex items-center justify-center max-w-[300px] w-full text-center bg-black rounded-md text-white text-7xl pb-0.5 h-auto">
              4
            </div>
            <div className="font-bold m-1.5 flex items-center justify-center max-w-[300px] w-full text-center bg-black rounded-md text-white text-7xl pb-0.5 h-auto">
              4
            </div>
          </div>
        </div>
        <div className="h-8"></div>
        <div>
          <h3 className="font-bold max-w-[700px] text-[40px] text-white">
            Get your number
          </h3>
        </div>
        <div className="h-8"></div>
        <div className="mb-4 mt-8">
          <form action="">
            <div className="flex justify-between mb-8">
              <input
                type="text"
                placeholder="First name"
                className="w-[47%] cursor-auto mb-4 pr-0.5 pb-0.5 border-solid border-[1px] border-transparent border-b-white rounded-none bg-transparent text-white counterFormInput"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-[47%] cursor-auto mb-4 pr-0.5 pb-0.5 border-solid border-[1px] border-transparent border-b-white rounded-none bg-transparent text-white counterFormInput"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full cursor-auto mb-8 pr-0.5 pb-0.5 border-solid border-[1px] border-transparent border-b-white rounded-none bg-transparent text-white counterFormInput"
            />
            <div>
              <h5 className="text-white mt-0 mb-5 font-Calibre text-[26px] font-[600]">
                Can we contact you?
              </h5>
              <label
                htmlFor=""
                className="relative z-10 min-h-[36px] mt-8 pl-0 cursor-pointer"
              >
                <div className="absolute left-0 top-0 right-auto bottom-auto block w-9 h-9 mt-0 ml-0 float-left rounded-none bg-white text-center cursor-pointer"></div>
                <input type="checkbox" className="opacity-0 absolute -z-[1]" />
                <span className="z-[11] mt-0.5 mb-0 ml-12 float-none text-white font-normal text-left">
                  Yes, I’d like to receive emails from The Futur
                </span>
              </label>
              <div className="my-12 py-4">
                <input
                  type="submit"
                  className=" text-[14px] font-bold tracking-wider submitButton md:mr-2.5 md:my-2.5 px-2 py-4 uppercase"
                  value="Get your number"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CounterForm;

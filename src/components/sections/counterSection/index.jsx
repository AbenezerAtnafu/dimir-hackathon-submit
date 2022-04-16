import React from "react";
import CounterForm from "../../common/counterSection/counterForm";
import CounterText from "../../common/counterSection/counterText";

import peoples from "../../../assets/images/peoples.png";
import "./style.css";

const CounterSection = () => {
  return (
    <>
      <div className="px-10 pt-40 md:px-7 counterSection overflow-visible">
        <div className="relative md:flex justify-between w-full font-medium">
          <CounterText />
          <div className="mx-8"></div>
          <CounterForm />
        </div>
        <div className="w-full -mt-10">
          <img src={peoples} alt="" />
        </div>
      </div>
    </>
  );
};

export default CounterSection;

import React from "react";
import "./style.css";

const CounterText = () => {
  return (
    <>
      <div className="md:w-2/5 text-white px-2">
        <h2 className="font-bold text-6xl counterText lineHeight tracking-wide mb-2">
          Welcome to the School of Tomorrow
        </h2>
        <div className="h-8"></div>
        <p className="text-[22px] counterText">
          The #1BMinusOne project is an ambitious undertaking to change the way
          we learn and teach. And the march to one billion begins with you.
          <br />
          <br />
          Enter your email address and you’ll be assigned a permanent
          number—you’ll be one in a billion, officially. You'll also be added to
          our email newsletter, of which you can opt out any time.
        </p>
      </div>
    </>
  );
};

export default CounterText;

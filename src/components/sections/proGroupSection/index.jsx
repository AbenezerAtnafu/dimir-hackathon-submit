import React from "react";
import ProGroupBadge from "../../common/proGroupSection/proGroupBadge";
import ProGroupHome from "../../common/proGroupSection/proGroupHome";
import "./style.css";

const ProGroupSection = () => {
  return (
    <>
      <div className="md:pt-0 md:pb-16 proGroupSection relative flex md:pl-7 flex-col-reverse md:flex-row justify-start items-center">
        <ProGroupHome />
        <ProGroupBadge />
      </div>
    </>
  );
};

export default ProGroupSection;

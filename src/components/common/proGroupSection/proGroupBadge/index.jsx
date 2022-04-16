import React from "react";
import "./style.css";

const ProGroupBadge = () => {
  return (
    <>
      <div className="top-0 bottom-0 overflow-hidden w-full md:w-2/4 ">
        <img
          src={
            "https://assets-global.website-files.com/5d816b07d269385f68dbcab0/614102de7c709e0aec8580f5_progroup-badge-min.png"
          }
          loading="lazy"
          sizes="(max-width: 991px) 100vw, (max-width: 1439px) 78vw, 80vw"
          srcSet="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/614102de7c709e0aec8580f5_progroup-badge-min-p-500.png 500w, https://assets-global.website-files.com/5d816b07d269385f68dbcab0/614102de7c709e0aec8580f5_progroup-badge-min-p-800.png 800w, https://assets-global.website-files.com/5d816b07d269385f68dbcab0/614102de7c709e0aec8580f5_progroup-badge-min.png 1273w"
          alt=""
          className="relative top-[5%] md:right-[10%]  max-w-none"
        />
      </div>
    </>
  );
};

export default ProGroupBadge;

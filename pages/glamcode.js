import Image from "next/image";
import React from "react";
import GlameCodeHead from "../components/GlameCodeHead";
import GlameCodeHeadMobile from "../components/GlameCodeHead/Mobile";
import glamecode from "../assets/img/glamecode-banner.png";

const glamcode = () => {
  return (
    <div className="glamecode-bg">
      {/* <GlameCodeHead />
      <div className="glamecode-bg-banner">
        <Image src={glamecode} width={500} height={400} />
      </div> */}
      <GlameCodeHeadMobile />
      <div className="glamecode-bg-banner">
        <Image src={glamecode} width={500} height={400} />
      </div>

      <div className="glamecode-head2-button-head">
        <button className="glamecode-head2-button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default glamcode;

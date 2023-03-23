import Image from "next/image";
import React, { useEffect, useState, Fragment } from "react";
import GlameCodeHead from "../components/GlameCodeHead";
import GlameCodeHeadMobile from "../components/GlameCodeHead/Mobile";
import glamecode from "../assets/img/glamecode-banner.png";
import { isMobile } from "react-device-detect";
import glame from "../assets/img/glam.png";
import { AiOutlineSearch } from "react-icons/ai";

const glamcode = () => {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  return (
    <Fragment>
      <div className="glamecode-bg" hidden={_isMobile}>
        <GlameCodeHead />
        <div className="glamecode-bg-banner">
          <Image src={glamecode} width={500} height={400} />
        </div>
        <div className="glamecode-head2-button-head">
          <button className="glamecode-head2-button-pc">BOOK NOW</button>
        </div>
      </div>
      <div className="glamecode-bg" hidden={!_isMobile}>
        <GlameCodeHeadMobile />

        <div>
          <Image src={glame.src} width="80" height="80" />
          <div className="glamecode-head2-input-m-w">
            <div className="glamecode-head2-input-m">
              <input type="text" className="glamecode-head2-input2" />
              <AiOutlineSearch size={20} />
              <span className="glamecode-head2-span">LOCATION</span>
            </div>
          </div>
        </div>
        <div className="glamecode-bg-banner">
          <Image src={glamecode} width={500} height={400} />
        </div>

        <div className="glamecode-head2-button-head">
          <button className="glamecode-head2-button">BOOK NOW</button>
        </div>
      </div>
    </Fragment>
  );
};

export default glamcode;

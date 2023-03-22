import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/glamecode.png";
import { AiFillHome } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import glame from "../../assets/img/glam.png";
import { AiOutlineSearch } from "react-icons/ai";
const Mobile = () => {
  return (
    <Fragment>
      <div className="glamecode-head-css">
        <div className="glamecode-head-css-logo">
          <div>
            <Image
              src={logo}
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="glamecode-head-css-logo-p2">Vineet khand, Gomti</p>
            <p className="glamecode-head-css-logo-p2">Lucknow,</p>
          </div>
        </div>
        <div className="glamecode-head-css-link">
          <div style={{ marginLeft: "20px" }}>
            <Link href="/">
              <AiFillHome size={30} color="#000" />
            </Link>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <Link href="/">
              <MdManageAccounts size={30} color="#000" />
            </Link>
          </div>
        </div>
      </div>
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
    </Fragment>
  );
};

export default Mobile;

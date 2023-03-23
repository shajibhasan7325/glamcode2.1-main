import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/glamecode.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Fragment } from "react";
import glame from "../../assets/img/glam.png";
import { AiOutlineSearch } from "react-icons/ai";

const index = () => {
  return (
    <Fragment>
      <div className="glamecode-head-css">
        <div className="glamecode-head-css-logo">
          <div>
            <Image
              src={logo}
              width={50}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="glamecode-head-css-logo-p1">Glamcode</p>
            <p className="glamecode-head-css-logo-p2">Luxury Home Salon</p>
          </div>
        </div>
        <div className="glamecode-head-css-link">
          <div className="glamecode-head-css-link-nav">
            <Link href="/">
              <span>Home</span>
            </Link>
          </div>
          <div className="glamecode-head-css-link-nav">
            <Link href="/">
              <span>Bookings</span>
            </Link>
          </div>
          <div className="glamecode-head-css-link-nav">
            <Link href="/">
              <span>Blogs</span>
            </Link>
          </div>
          <div className="glamecode-head-css-link-nav">
            <Link href="/">
              <AiOutlineMenu size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="glamecode-head2-css">
        <div>
          <Image src={glame.src} width="100" height="100" />
        </div>
        <div className="glamecode-head2-input">
          <input type="text" className="glamecode-head2-input2" />
          <AiOutlineSearch size={20} />
          <span className="glamecode-head2-span">LOCATION</span>
        </div>
      </div>
    </Fragment>
  );
};

export default index;

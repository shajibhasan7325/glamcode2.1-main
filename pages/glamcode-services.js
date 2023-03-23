import React, { useEffect, useState, Fragment } from "react";
import GlameCodeHead from "../components/GlameCodeHead";
import GlameCodeHeadMobile from "../components/GlameCodeHead/Mobile";
import { isMobile } from "react-device-detect";
import s1 from "../assets/img/s1.png";
import Img from "../assets/img/3flex.png";
import Image from "next/image";
import playstore from "../assets/img/playstore.svg";
import appstore from "../assets/img/appstore.svg";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const index = ({ homeData }) => {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  return (
    <Fragment>
      <div className="glamcode-services" hidden={_isMobile}>
        <GlameCodeHead />

        <div className="title-content text-center mt-5">
          <h2 className=" font-familt-jost">Serving In</h2>
        </div>
        <div className="glamcode-services-img">
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
        </div>
        <div className="glamcode-services-head">
          <h2 className="glamcode-services-text">Why Choose Us?</h2>
          <h4>
            An idea to empower larger number of specialists to deliver services
            at home like never experienced{" "}
          </h4>
        </div>
        <div className="glamcode-services-3">
          <div className="glamcode-services-3-p">
            <p className="glamcode-services-text-p ">
              Trained, Verified Beautician
            </p>
            <p className="glamcode-services-text-p ">
              Best Brands in 1- Time Use Packs
            </p>
            <p className="glamcode-services-text-p ">Mess Free Service</p>
          </div>
          <div>
            <Image
              src={Img}
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="glamcode-services-3-p">
            <p className="glamcode-services-text-p ">
              Trained, Verified Beautician
            </p>
            <p className="glamcode-services-text-p ">
              Best Brands in 1- Time Use Packs
            </p>
            <p className="glamcode-services-text-p ">Mess Free Service</p>
          </div>
        </div>
        <div className="glamcode-services-head">
          <h2 className="glamcode-services-text">About Glamcode</h2>
          <p className="glamcode-services-text-p ">
            Glam Code is an Upscale Fully-Equipped Home Salon Services start-up,
            initiated by mother and daughter in law duo.
          </p>
          <p className="glamcode-services-text-p ">
            Glam Code intends to cater two segments of the market. First segment
            includes catering markets which provides a high quality Skin Care
            services at a market competitive price. Second segment, is a new
            Ultra-Luxury Segment , which includes people who intends to get
            premium, Luxury Experience at their doorstep with no price barrier
            as Luxury comes as a price.
          </p>
        </div>
        <div className="glamcode-services-app ">
          <h5>Download Our App</h5>
          <div className="d-flex align-items-center glamcode-services-app2">
            <Link href="#">
              <Image
                src={playstore.src}
                alt="Glam code"
                className="me-2"
                width={135}
                height={45}
              />
            </Link>

            <Link href="#">
              <Image
                src={appstore.src}
                alt="Glam code"
                className="me-2"
                width={135}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="glamcode-services" hidden={!_isMobile}>
        <GlameCodeHeadMobile />
        <div className=" glamcode-services-m-button-all">
          <button type="button" className=" glamcode-services-m-button1">
            Facial
          </button>
          <button type="button" className=" glamcode-services-m-button2">
            Facial
          </button>
          <button type="button" className=" glamcode-services-m-button3">
            Facial
          </button>
          <button type="button" className=" glamcode-services-m-button4">
            Facial
          </button>
        </div>
        <div className="glamecode-head2-input-m-w">
          <div className="glamecode-head2-input-m">
            <input type="text" className="glamecode-head2-input2" />
            <AiOutlineSearch size={20} />
            <span className="glamecode-head2-span">LOCATION</span>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>Serving In</h3>
        </div>
        <div className="glamcode-services-img-m">
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
          <div>
            <Image
              src={s1}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
            <p>Delhi</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;

import React, { useEffect, useState, Fragment } from "react";
import { GoVerified } from "react-icons/go";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import Image from "next/image";
import ImgA from "../assets/img/Party.png";
import ImgB from "../assets/img/gift-box.png";

const thanks = () => {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  return (
    <Fragment>
      <div className="background2 " hidden={_isMobile}>
        <div className="thanks-p-width">
          <div className="thanks-p-head">
            <div>
              <GoVerified size={70} color="#446FDE" />
            </div>
            <div className="thanks-p-head-m">
              <h3 className="thanks-m-head-title">Congratulations</h3>
              <p className="thanks-m-head-p ">your booking is confirmed</p>
            </div>
          </div>

          <div className="thanks-p-head2">
            <div>
              <Image
                src={ImgA}
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="thanks-m-head-p2 ">Yay you just won a </p>
              <h3 className="thanks-m-head-title2">SCRATCH CARD</h3>
            </div>
          </div>

          <div className="thanks-m-img ">
            <Image
              src={ImgB}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="thanks-m-btn ">
            <button>
              <Link className="thanks-m-color " href="/refer&earn">
                Refer & Earn{" "}
              </Link>
            </button>
            <p>Refer your friend and Earn cash </p>
          </div>
          <div className="thanks-m-btn-tow">
            <button>
              <Link className="thanks-m-color " href="/">
                HOME
              </Link>
            </button>
            <button>
              <Link className="thanks-m-color " href="/refer&earn">
                OK
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="background2 " hidden={!_isMobile}>
        <div className="thanks-m-width">
          <div className="thanks-m-head">
            <div>
              <GoVerified size={60} color="#446FDE" />
            </div>
            <div>
              <h3 className="thanks-m-head-title">Congratulations</h3>
              <p className="thanks-m-head-p ">your booking is confirmed</p>
            </div>
          </div>

          <div className="thanks-m-head2">
            <div>
              <Image
                src={ImgA}
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="thanks-m-head-p2 ">Yay you just won a </p>
              <h3 className="thanks-m-head-title2">SCRATCH CARD</h3>
            </div>
          </div>

          <div className="thanks-m-img ">
            <Image
              src={ImgB}
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="thanks-m-btn ">
            <button>
              <Link className="thanks-m-color " href="/refer&earn">
                Refer & Earn{" "}
              </Link>
            </button>
            <p>Refer your friend and Earn cash </p>
          </div>
          <div className="thanks-m-btn-tow">
            <button>
              <Link className="thanks-m-color " href="/">
                HOME
              </Link>
            </button>
            <button>
              <Link className="thanks-m-color " href="/refer&earn">
                OK
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default thanks;

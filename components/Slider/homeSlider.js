import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import glame from '../../assets/img/glam.png';
import Image from 'next/image';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
function Slider(props) {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  // const [showResults, setShowResults] = React.useState([]);
  // const dataslide = useSelector((state) => state.slide);
  return (
    <>
      <div className="mid-2 d-flex mt-4">

        <Container hidden={_isMobile}>
          <Row className="slidesection">
            <Col lg="4" md="12">
              <div>
                {/* <img
                      src={glame.src}
                      alt="loading"
                      style={{ width: "80px" }}
                    /> */}

                <Image src={glame.src} width="80" height="80" />
                <h1>Salon at Home for Women</h1>
                <p className="spanp">
                  <span className="fa fa-star faimg"></span>4.76(978k)
                </p>
              </div>
            </Col>
            <Col lg="8" md="12">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                ]}
                spaceBetween={0}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                speed={500}
              >
                {props.slider.slider_images.map((item, index) => {
                  return (
                    <SwiperSlide key={Math.random()}>
                      <div className="slideimage">
                        <img
                          src={item.slider_image_base_url}
                          alt="loading"
                          style={{
                            borderRadius: '10px',
                            width: 750,
                          }}
                        />

                        {/* <Image
                              src={item.slider_image_base_url}
                              alt="loading"
                              width="750"
                              height="750"
                            /> */}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>


        <Container hidden={!_isMobile}>
          <Row className="">
            <Col lg="12" md="12">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                ]}
                spaceBetween={0}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                speed={500}
              >
                {props.slider.slider_images.map((item, index) => {
                  return (
                    <SwiperSlide key={Math.random()}>
                      <div className="slideimage2">
                        <img
                          src={item.slider_image_base_url}
                          alt="loading"
                          style={{
                            borderRadius: '10px',
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
}

export default Slider;

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import Slider from '../components/Slider/homeSlider';
import Maincategory from '../components/Maincategory/maincategory';
import Maincategorymobile from '../components/Maincategory/Maincategorymobile';
import Faqs from '../components/Faqs/index';
import Serving from '../components/Serving';
import Knowmore from '../components/Knowmore';
import Head from 'next/head';
//import Header from '../components/Header';

const Header = dynamic(() => import('../components/Header'),
  { ssr: false });
import {
  menuSave,
  mainLocation
} from '../store/actions/index';


import PreferredPackages from '../components/PreferredPackages';
import ReferAndEarn from '../components/ReferAndEarn';
import CustomerTestimonials from '../components/CustomerTestimonials';
import { isMobile } from 'react-device-detect';
import OtpModal from '../components/Modal/OtpModal';
import Global from '../_helpers/global';
import { useDispatch, useSelector } from 'react-redux';
export default function Home({ slider, homeData }) {

  const [bannerData, setBannerData] = useState([]);

  const datacat = useSelector((state) => state.maincat);
  const dataloctions = useSelector((state) => state.loctions);
  const [category, setCategory] = useState([]);
  const [serving, setServing] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();


    dispatch(mainLocation(homeData.locations));

  }, [homeData]);







  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://admin.glamcode.in/api/offers-banners';
      const response = await fetch(apiUrl);
      const data = await response.json();
      setBannerData(data.offers_banner);
    };
    fetchData();
  }, []);


  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);



  useEffect(() => {
    setCategory(datacat);
    setServing(dataloctions);


    dispatch(menuSave(slider));
  }, []);






  return (
    <div className="background2">

      <Head>
        <title>{homeData.home.seo_title}</title>

        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />

        <meta name="title" content={homeData.home.seo_title} data-react-helmet="true"></meta>

        <meta name="description" content={homeData.home.seo_desc} data-react-helmet="true"></meta>

        <meta name="keywords" content={homeData.home.seo_key} data-react-helmet="true"></meta>

        <meta
          name="robots"
          content="index, follow"
          data-react-helmet="true"
        ></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
          data-react-helmet="true"
        ></meta>
        <meta
          name="language"
          content="English"
          data-react-helmet="true"
        ></meta>
        <meta
          name="revisit-after"
          content="1 days"
          data-react-helmet="true"
        ></meta>
        <meta
          name="author"
          content="Glamcode"
          data-react-helmet="true"
        ></meta>
        <meta name="zipcode" content="201301" data-react-helmet="true"></meta>
        <meta name="city" content="Noida" data-react-helmet="true"></meta>
        <meta name="country" content="India" data-react-helmet="true"></meta>
        <meta
          name="Geography"
          content="B1002 Amrapali Zodiac, Sector 120, Noida, Uttar Pradesh 201301"
          data-react-helmet="true"
        ></meta>
        <meta
          name="geo.position"
          content="28.5839021,77.3959942"
          data-react-helmet="true"
        ></meta>
        <meta
          name="ICBM"
          content="28.5839021,77.3959942"
          data-react-helmet="true"
        ></meta>
      </Head>

      <Header />

      <Slider slider={slider} />

      <div className="col-12 " style={{ marginTop: '50px' }} hidden={_isMobile}>
        <hr
          style={{
            border: '2px solid rgb(102, 102, 102)',
            margin: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px',
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        />
      </div>



      <div className="title-content" style={{ marginTop: '32px' }}>
        <h2
          className="title font-familt-jost"
          style={{ width: '100%', textAlign: 'center' }}
        >
          Home Salon Services
        </h2>
      </div>




      <div hidden={_isMobile}>
        <Maincategory data={homeData.maincategory} />
      </div>


      <div hidden={!_isMobile}>
        <hr className="hr-white"></hr>
        <Maincategorymobile data={homeData.maincategory} />
      </div>



      <div className="col-12 " style={{ marginTop: '50px' }} hidden={_isMobile}>
        <hr
          style={{
            border: '2px solid rgb(102, 102, 102)',
            margin: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px',
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        />
      </div>

      {/* <ReferAndEarn /> */}
      {/* <PreferredPackages /> */}
      {/* <CustomerTestimonials /> */}

      {/* <div className="testimonial " hidden={_isMobile}>
        {bannerData.map((banner, i) => (
          <img
            key={i}
            src={`https://admin.glamcode.in/${banner.image}`}
            style={{ width: '100%', height: '24rem', objectFit: 'cover' }}
          />
        ))}
      </div>

      <div className="testimonial2 " hidden={!_isMobile}>
        {bannerData.map((banner, i) => (
          <img
            key={i}
            src={`https://admin.glamcode.in/${banner.image}`}
            style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
          />
        ))}
      </div> */}


      <Faqs data={homeData.faqs} />

      <div className="col-12 " style={{ marginTop: '50px' }} hidden={_isMobile}>
        <hr
          style={{
            border: '2px solid rgb(102, 102, 102)',
            margin: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.5px 0.5px',
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        />
      </div>


      <div hidden={_isMobile}><Serving data={homeData.locations} /></div>

      <Knowmore data={homeData.home.content} />

      <OtpModal />

    </div>
  );
}

export const getServerSideProps = async ({ req }) => {

  //Slider
  try {
    //Slider
    const url = Global.BASE_API_PATH + `/allslider`;
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        method: 'GET',
      },
    });
    const dataslide = await res.json();

    //HomeData
    const url1 = Global.BASE_API_PATH + `/homedata`;
    const res1 = await fetch(url1, {
      headers: {
        Accept: 'application/json',
        method: 'GET',
      },
    });





    const HomeData = await res1.json();
    return {
      props: {
        slider: dataslide,
        homeData: HomeData,

      },
    };
  } catch (error) {
    console.log(error);
  }
};


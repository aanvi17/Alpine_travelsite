import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import "../font.css";
import "./style.css";

import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image4 from "../images/image-4.jpg";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from 'swiper/modules';
import { Scrollbar } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/scrollbar";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

//text slice 
// const TextSlice = ({ text }) => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const chars = textRef.current.querySelectorAll('.char');
//     gsap.from(chars, {
//       duration: 1.5,
//       y: 100,
//       opacity: 1,
//       stagger: 0.7,
//       ease: 'power3.inOut',
//     });
    
//   }, []);
//   return (
//     <div ref={textRef}>
//       {text.split('').map((char, index) => (
//         <span key={index} className="char" style={{ display: 'inline-block' }}>
//           {char}
//         </span>
//       ))}
//     </div>
//   );
// };

const HeroSection = () => {
  return (
    <>
      {/* hero section  */}
      <Container  className="heroswiper">
        <Row className="">
          <Col lg={6} className="">
            <div className="banner-title text-white text-wrap text-lg  fw-bolder ">
            AMAZING MOUNTAIN TO EXPLORE
            </div>
            <hr className="space-lg" />
            <div className="quote text-white text-wrap fs-7">
              Do not follow where the path may lead. Go instead where there is
              no path and leave a trail.
              <p className="quote-author text-p text-white">Ralph Emerson</p>
            </div>
          </Col>
          <Col lg={6}>
            <hr className="space-xs" />
            <div className=" text-white">
              <div>
                <h3>Altitude</h3>
                <div className="value">
                  <span className="text-md text-white">1650</span>
                  <span>m</span>
                </div>
              </div>
            </div>
            <hr className="space-sm hidden-lg" />
            <div className=" text-white">
              <div>
                <h3>Tracks</h3>
                <div className="value">
                  <span className="text-md text-white">7</span>
                  <span></span>
                </div>
              </div>
            </div>
            <hr className="space-sm hidden-lg" />
            <div className=" text-white">
              <div>
                <h3>Tourists / year</h3>
                <div className="value">
                  <span className="text-md  text-white">2000</span>
                  <span>+</span>
                </div>
              </div>
            </div>

            <div className="">
              <Swiper
                modules={[Scrollbar]}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                slidesPerView={3}
                className="mySwiper"
              >
                <SwiperSlide className="">
                  <img src={image1} alt="img1" />
                </SwiperSlide>
                <SwiperSlide className="">
                  <img src={image2} alt="img2" />
                </SwiperSlide>
                <SwiperSlide className="">
                  <img src={image3} alt="img2" />
                </SwiperSlide>
                <SwiperSlide className="">
                  <img src={image4} alt="img2" />
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;

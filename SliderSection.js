import React from "react";
import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import { Scrollbar } from "swiper/modules";

//import images
import hdimg3 from "../images/hd-3.jpg";
import hdimg4 from "../images/hd-4.jpg";
import hdimg5 from "../images/hd-5.jpg";
import hdimg6 from "../images/hd-6.jpg";
import hdimg7 from "../images/hd-7.jpg";
import longimg1 from "../images/long-1.jpg";
import longimg2 from "../images/long-2.jpg";
import longimg3 from "../images/long-3.jpg";
import longimg4 from "../images/long-4.jpg";
import longimg5 from "../images/long-6.jpg";

// import Swiper and modules styles
import "swiper/css";
// import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderSection = () => {
  return (
    <>
      <section className="slider-sec">
        <div className="bg-slider">
          <div
            className="active bg-img"
            style={{ backgroundImage: `url(${hdimg3})` }}
          ></div>
          <div style={{ backgroundImage: `url(${hdimg4})` }} className="bg-img"></div>
          <div style={{ backgroundImage: { hdimg5 } }} className="bg-img"></div>
          <div style={{ backgroundImage: { hdimg6 } }} className="bg-img"></div>
          <div style={{ backgroundImage: { hdimg7 } }} className="bg-img"></div>
        </div>

        <div className="container">
          <Row>
            <Col lg={6} className="slider-col">
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{
            
                }}
                navigation={{
                    clickable: true,
                  }}
                cssMode={true}
                spaceBetween={15}
                slidesPerView={2}
                className="mySwiper3"
              >
                <SwiperSlide>
                  <div className="slider-img-box" >  
                    <img src={longimg1} alt="img" />
                    <div className="caption">
                      <h2>Bianco</h2>
                      <h3>Alpes, Italy</h3>
                      <p className="hover-text">
                        Lorem ipsum dolore consectetur adipisicing e ididunto
                        pertinole.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-img-box" /* style={{ backgroundImage: {longimg2} }}*/>
                    <img src={longimg2} alt="img" />
                    <div className="caption">
                      <h2>Bianco</h2>
                      <h3>Alpes, Italy</h3>
                      
                      <p className="hover-text">
                        Lorem ipsum dolore consectetur adipisicing e ididunto
                        pertinole.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-img-box" /* style={{ backgroundImage: {longimg3} }}*/>
                    <img src={longimg3} alt="img" />
                    <div className="caption">
                      <h2>Bianco</h2>
                      <h3>Alpes, Italy</h3>
                      
                      <p className="hover-text">
                        Lorem ipsum dolore consectetur adipisicing e ididunto
                        pertinole.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-img-box"/* style={{ backgroundImage: {longimg4} }}*/>
                    <img src={longimg4} alt="img" />
                    <div className="caption">
                      <h2>Bianco</h2>
                      <h3>Alpes, Italy</h3>
                      
                      <p className="hover-text">
                        Lorem ipsum dolore consectetur adipisicing e ididunto
                        pertinole.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-img-box" /* style={{ backgroundImage: {longimg5} }}*/>
                    <img src={longimg1} alt="img" />
                    <div className="caption">
                      <h2>Bianco</h2>
                      <h3>Alpes, Italy</h3>
                      
                      <p className="hover-text"> 
                        Lorem ipsum dolore consectetur adipisicing e ididunto
                        pertinole.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-img-box">
                    <img src={longimg5} alt="img" />
                    <div className="caption">
                      <h2>Bianco</h2>
                      <h3>Alpes, Italy</h3>
                      
                      <p className="hover-text">
                        Lorem ipsum dolore consectetur adipisicing e ididunto
                        pertinole.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col lg={6} className="text-col">
              <div className="trek-content">
                <h1 className="text-lg text-uppercase text-white trek-title">
                  The treks of our team
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiure consectetur adipisicing a didunto persmo.
                </p>
                <a href="treks.html" className="btn btn-sm btn-circle p-3">
                  All treks
                </a>{" "}
                <a
                  href="team.html"
                  className="btn btn-sm btn-circle btn-border p-3"
                >
                  The team
                </a>
                <hr className="space hidden-md" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default SliderSection;

import React from "react";
import { Row, Col } from "react-bootstrap";
// import TripCard from "./TripCard";

import swiperimg1 from "../images/square-1.jpg";
import swiperimg2 from "../images/square-2.jpg";
import swiperimg3 from "../images/square-3.jpg";
import swiperimg4 from "../images/square-4.jpg";
import swiperimg5 from "../images/square-5.jpg";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import { Scrollbar } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
// import "swiper/css/scrollbar";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

function LatestNewsSection() {
  return (
    <>
      {/* section-2  */}
      <section className="trip-section">
        <Row className="mt-3">
          <Col
            lg={8}
            className="swiper-col flex justify-content-center align-items-center"
          >
            <div className="swiper-wrapper">
              <Swiper
                modules={[Pagination]}
                pagination={{
                  clickable: false,
                }}
                spaceBetween={35}
                slidesPerView={2}
                className="mySwiper2"
              >
                <SwiperSlide className="">
                  <div className="trip-card">
                    <div className="trip-card-imgbox">
                      <div className="trip-price">$49</div>
                      <img src={swiperimg1} alt="img1" />
                      <div className="trip-card-stats">
                        <div>
                        <strong>3</strong>
                          <span>Days</span>
                          
                        </div>
                        <div>
                        <strong>10</strong>
                          <span>Group size</span>
                          
                        </div>
                        <div>
                        <strong>Easy</strong>
                          <span>Difficulty</span>
                          
                        </div>
                      </div>
                      </div>
                      <div className="trip-details">
                        <h3 className="trip-card-title">Bianco Excursion</h3>
                        <p className="trip-card-description">
                          Monte bianco is a mountain located in the deep nature
                          and rivers.
                        </p>
                        <div className="trip-card-location">
                          Monte bianco, Alpes, Italy
                        </div>
                      </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="trip-card">
                    <div className="trip-card-imgbox">
                      <div className="trip-price">$49</div>
                      <img src={swiperimg2} alt="img1" />
                      <div className="trip-card-stats">
                        <div>
                        <strong>3</strong>
                          <span>Days</span>
                          
                        </div>
                        <div>
                        <strong>10</strong>
                          <span>Group size</span>
                          
                        </div>
                        <div>
                        <strong>Easy</strong>
                          <span>Difficulty</span>
                          
                        </div>
                      </div>
                      <div className="trip-details">
                        <h3 className="trip-card-title">Bianco Excursion</h3>
                        <p className="trip-card-description">
                          Monte bianco is a mountain located in the deep nature
                          and rivers.
                        </p>
                        <div className="trip-card-location">
                          Monte bianco, Alpes, Italy
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="trip-card">
                    <div className="trip-card-imgbox">
                      <div className="trip-price">$49</div>
                      <img src={swiperimg3} alt="img1" />
                      <div className="trip-card-stats">
                        <div>
                        <strong>3</strong>
                          <span>Days</span>
                          
                        </div>
                        <div>
                        <strong>10</strong>
                          <span>Group size</span>
                          
                        </div>
                        <div>
                        <strong>Easy</strong>
                          <span>Difficulty</span>
                          
                        </div>
                      </div>
                      <div className="trip-details">
                        <h3 className="trip-card-title">Bianco Excursion</h3>
                        <p className="trip-card-description">
                          Monte bianco is a mountain located in the deep nature
                          and rivers.
                        </p>
                        <div className="trip-card-location">
                          Monte bianco, Alpes, Italy
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="trip-card">
                    <div className="trip-card-imgbox">
                      <div className="trip-price">$49</div>
                      <img src={swiperimg4} alt="img1" />
                      <div className="trip-card-stats">
                        <div>
                        <strong>3</strong>
                          <span>Days</span>
                          
                        </div>
                        <div>
                        <strong>10</strong>
                          <span>Group size</span>
                          
                        </div>
                        <div>
                        <strong>Easy</strong>
                          <span>Difficulty</span>
                          
                        </div>
                      </div>
                      <div className="trip-details">
                        <h3 className="trip-card-title">Bianco Excursion</h3>
                        <p className="trip-card-description">
                          Monte bianco is a mountain located in the deep nature
                          and rivers.
                        </p>
                        <div className="trip-card-location">
                          Monte bianco, Alpes, Italy
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="trip-card">
                    <div className="trip-card-imgbox">
                      <div className="trip-price">$49</div>
                      <img src={swiperimg5} alt="img1" />
                      <div className="trip-card-stats">
                        <div>
                        <strong>3</strong>
                          <span>Days</span>
                          
                        </div>
                        <div>
                        <strong>10</strong>
                          <span>Group size</span>
                          
                        </div>
                        <div>
                        <strong>Easy</strong>
                          <span>Difficulty</span>
                          
                        </div>
                      </div>
                      <div className="trip-details">
                        <h3 className="trip-card-title">Bianco Excursion</h3>
                        <p className="trip-card-description">
                          Monte bianco is a mountain located in the deep nature
                          and rivers.
                        </p>
                        <div className="trip-card-location">
                          Monte bianco, Alpes, Italy
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="trip-card">
                    <div className="trip-card-imgbox">
                      <div className="trip-price">$49</div>
                      <img src={swiperimg1} alt="img1" />
                      <div className="trip-card-stats">
                        <div>
                        <strong>3</strong>
                          <span>Days</span>
                          
                        </div>
                        <div>
                        <strong>10</strong>
                          <span>Group size</span>
                          
                        </div>
                        <div>
                        <strong>Easy</strong>
                          <span>Difficulty</span>
                          
                        </div>
                      </div>
                      <div className="trip-details">
                        <h3 className="trip-card-title">Bianco Excursion</h3>
                        <p className="trip-card-description">
                          Monte bianco is a mountain located in the deep nature
                          and rivers.
                        </p>
                        <div className="trip-card-location">
                          Monte bianco, Alpes, Italy
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
          <Col lg={4}>
            <div className="info-title">
              <h1>LATEST TRIPS</h1>
              {/* <hr className="space-xs" /> */}
              <p className="info-body">Explore the unexplored world  {/*<span className="line">.</span>*/}</p>
            </div>
            <hr className="space-sm " />
            <p className="info-body">
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim
              ad minim veniam quiso.
            </p>
            <a href="contacts.html" className="btn btn-circle btn-xs info-body">
              Join us now
            </a>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default LatestNewsSection;

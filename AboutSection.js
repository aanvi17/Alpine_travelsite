import React from "react";
import { Accordion } from "react-bootstrap";


const AboutSection = () => {
  return (
    <>
      <section className="section-base ">
        <div className="container">
          <div className="title align-center align-left-md">
            <h2>ABOUT US</h2>
            <p>We live for the nature</p>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                esectetur adipiscing elitsed do eiusmoiusmod tempor incididunt
                utlabore et dolore magna aliqua. Utenim ad minim veniam quis
                nostrud exercitation ullamco laboris scing elitsed do esectetur
                adipiscing elite nature.
              </p>
            </div>
            <div className="col-lg-3 no-margin-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing el adipiscing
                sscing elitsed do esectetur adipiscing eliectetur adipiscing
                elitsed do eiusmoelitsed do eiusmod tempor incididusmod titsed
                do eiusmod tempore.
              </p>
              <hr className="space-sm" />
              <a href="about.html" className="btn-text">
                Read more
              </a>
            </div>
            <div className="col-lg-6 acc-box">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="acc-title">
                    Our mountains and our location
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitation.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="acc-title">About our treks and trips</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitation .
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="acc-title">About our team and guests</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitation .
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../src/SmoothScroll.css';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  

  return (
    <div className="smooth-scroll-wrapper">
      <div className="smooth-scroll-content">

      </div>
    </div>
  );
};

export default SmoothScroll;

import React, { useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../src/SmoothScroll.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import LatestNewsSection from "./components/LatestNewsSection";
import AboutSection from "./components/AboutSection";
import SliderSection from "./components/SliderSection";
import TopserviceSection from "./components/TopserviceSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

// Style css
import "./components/style.css";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let scrollTween;

    const updateHeight = () => {
      document.body.style.height = `${wrapper.scrollHeight}px`;
    };

    const smoothScroll = () => {
      scrollTween = gsap.to(wrapper, {
        y: () =>
          -(wrapper.scrollHeight - document.documentElement.clientHeight),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    updateHeight();
    smoothScroll();

    ScrollTrigger.addEventListener("refresh", updateHeight);

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(wrapper);

    return () => {
      scrollTween && scrollTween.kill();
      ScrollTrigger.removeEventListener("refresh", updateHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
        {/* begin: Header */}
        <NavBar />
        {/* end: Header */}
      <div className="wrapperclass" ref={wrapperRef}>        
        <HeroSection />
        <LatestNewsSection />
        <AboutSection />
        <SliderSection />
        <TopserviceSection />
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;

import React, { useEffect, useState } from "react";
import Page3 from "./StickyPages/Page3";
import Page3Mobile from "./StickyPages/Page3Mobile";
import Page4 from "./StickyPages/Page4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window size in the browser environment
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Update on window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {isMobile ? <Page3Mobile /> : <Page3 />}
      <Page4 />
    </>
  );
};

export default FourthSection;

import React, { useEffect, useRef } from "react";
import Page3 from "./StickyPages/Page3";
import Page3Mobile from "./StickyPages/Page3Mobile";
import Page4 from "./StickyPages/Page4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {


  const isMobile = window.innerWidth < 768;

  return (
    <>

      {isMobile ? <Page3Mobile /> : <Page3 />}
     
      <Page4 />
    </>
  );
};

export default FourthSection;
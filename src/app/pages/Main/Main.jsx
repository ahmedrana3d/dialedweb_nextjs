"use client";
import React, { useEffect, useRef, useState } from "react";
import { Section1 } from "./Section1";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section6 } from "./Section6";
import { Section8 } from "./Section8";
import { SectionScrollVideoOnScroll } from "./SectionVideoOnScroll";
import { Section2 } from "./Section2";
import { SectionVideoMobile } from "./SectionVideoMobile";
import { SectionFooter } from "./SectionFooter";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Navigation } from "../../Navigation";

const Main = () => {
  const section3Ref = useRef(null);
  const section6Ref = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <ReactLenis root>
      <Section1 section3Ref={section3Ref} />
      <div ref={section3Ref} >
        <Section3 />
      </div>
      <Section2 />
      <div ref={section6Ref} id="section6">
        <Section6 />
      </div>
      <Section4 />
      {isMobile ? <SectionVideoMobile /> : <SectionScrollVideoOnScroll />}
      <SectionScrollVideoOnScroll />
      <Section8 />
      <SectionFooter />
    </ReactLenis>
    </>
  );
};

export default Main;
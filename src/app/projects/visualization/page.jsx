"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const VisualizationPage = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }

    window.scrollTo(0, 0);
  }, []);

      useEffect(() => {
    
        gsap.fromTo(".overlay", 
          { width: "125%" },
          { width: "0%", duration: 1, ease: "none" }
        );
        
    }, []);

    useEffect(() => {
      // Fade in animation for the button when component mounts
      gsap.fromTo(
        ".introduction-text-box-right-text",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
      );
    }, []);

    useEffect(() => {
      gsap.to(".introduction-image", {
        width: "100%",
        scrollTrigger: {
          trigger: ".introduction-image",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        }
      });
      gsap.to(".introduction-section-title-top", {
        marginLeft: "15%",
        scrollTrigger: {
          trigger: ".introduction-image",
          start: isMobile ? "top 40%" : "top 70%",
          end: "bottom center",
          scrub: 1,
        }
      });
      gsap.to(".introduction-section-title-bottom", {
        marginRight: "15%",
        scrollTrigger: {
          trigger: ".introduction-image",
          start: isMobile ? "top 40%" : "top 70%",
          end: "bottom center",
          scrub: 1,
        }
      });
    }, []);

    return (
        <>
  <ReactLenis root>
    <section className="introduction">
      <div className="introduction-content">
        <div className="introduction-text-box">
          <div className="introduction-text-box-left">
            <h1 className="introduction-section-title visualization-text-title-effect" > <span className="introduction-section-title-top" >Architectural</span> <br /> <span className="introduction-section-title-bottom" >Visualization</span> </h1>
          </div>
          <div className="introduction-text-box-right">
            <p className="introduction-text-box-right-text" >Our architectural visualization studio excels in crafting stunning renderings of luxurious villas, elegant houses, and sophisticated hotels.</p>
          </div>
        </div>
          <div className="introduction-image">
            <div className="overlay" />
            <div className="introduction-image-img" />
            {/* <img className="introduction-image-img" src="/bali.jpg" alt="" /> */}
          </div>
      </div>
      <div className="introduction-content-images">
        <div className="introduction-content-images-sticky-box">
            <h1 className="introduction-images-sticky-text" >Featured Real Estate Projects</h1>
        </div>
        <div className="introduction-content-images-container">

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" >
              <h1 className="introduction-image-row-number" >01</h1>
              <img src="/v1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >The Manor</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" >
              <h1 className="introduction-image-row-number" >02</h1>
              <img src="/v2.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Modern Beverly Hills Mansion</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" >
              <h1 className="introduction-image-row-number" >03</h1>
              <img src="/tr1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Tropical Vacation Home</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" >
              <h1 className="introduction-image-row-number" >04</h1>
              <img src="/st1.jpg"  className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Minimalisitic Studio </h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" >
              <h1 className="introduction-image-row-number" >05</h1>
              <img src="/ur1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Urban Sanctuary Hotel</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right">
              <h1 className="introduction-image-row-number" >06</h1>
              <img src="/co1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Contemporary Home</h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  </ReactLenis>
        </>
      );
    };

export default VisualizationPage;
"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/navigation';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const VisualizationPage = () => {

  const titleRef = useRef()
  const descriptionRef = useRef()
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // ISMOBILE

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }

    window.scrollTo(0, 0);
  }, []);

  // GSAP ANIMATIONS

  useLayoutEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleRef.current, { rotationX: 70, opacity: 0, transformOrigin: 'center bottom', transformPerspective: 500, },
      { rotationX: 0, opacity: 1, duration: 1.25, ease: 'back.out' }
    );
    gsap.from(titleSplitText.chars, { yPercent: 50, stagger: 0.03, opacity: 0, ease: 'power1.out', duration: 0.5 });

    const split = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(split.words, 
      { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, {
        ease: 'sine',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.025,
        delay: 1,
      }
    );
  }, [])

  useEffect(() => {
    
    gsap.fromTo(".overlay", 
      { width: "125%" },
      { width: "0%", duration: 1, ease: "none" }
    );

    gsap.fromTo(
      ".introduction-text-box-right-text",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
    );

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

  // NAVIGATION

  const handleVisualizationNavigate = (subpage) => {
    router.push(`/projects/visualization/${subpage}`);
  };
  

    return (
        <>
  <ReactLenis root>
    <section className="introduction">
      <div className="introduction-content">
        <h1 className="headline" ref={titleRef} >Architectural Visualization</h1>
        <p className="description grey" ref={descriptionRef} >Our architectural visualization studio excels in crafting stunning renderings of luxurious villas, elegant houses, and sophisticated hotels.</p>
        <div className="introduction-image">
          <div className="overlay" />
          <div className="introduction-image-img" />
        </div>
      </div>
      <div className="introduction-content-images">
        <div className="introduction-content-images-sticky-box">
            <h1 className="introduction-images-sticky-text" >Featured Real Estate Projects</h1>
        </div>
        <div className="introduction-content-images-container">

          <div className="introduction-images-container-row-left" >
            <div className="introduction-images-row-left" onClick={() => { handleVisualizationNavigate('the-manor'); }} >
              <h1 className="introduction-image-row-number" >01</h1>
              <img src="/v1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >The Manor</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right" >
            <div className="introduction-images-row-right" onClick={() => { handleVisualizationNavigate('modern-beverly-hills-mansion'); }} >
              <h1 className="introduction-image-row-number" >02</h1>
              <img src="/v2.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Modern Beverly Hills Mansion</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left" >
            <div className="introduction-images-row-left" onClick={() => { handleVisualizationNavigate('tropical-vacation-home'); }} >
              <h1 className="introduction-image-row-number" >03</h1>
              <img src="/tr1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Tropical Vacation Home</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" onClick={() => { handleVisualizationNavigate('minimalistic-studio'); }} >
              <h1 className="introduction-image-row-number" >04</h1>
              <img src="/st1.jpg"  className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Minimalisitic Studio </h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" onClick={() => { handleVisualizationNavigate('urban-sanctuary-hotel'); }} >
              <h1 className="introduction-image-row-number" >05</h1>
              <img src="/ur1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Urban Sanctuary Hotel</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" onClick={() => { handleVisualizationNavigate('contemporary-home'); }} >
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
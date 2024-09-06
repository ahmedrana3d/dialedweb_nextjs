import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { Canvas } from "@react-three/fiber";
// import { Sphere } from "../Sphere";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { Sphere } from "./Sphere";
import { title } from "process";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section8 = () => {
  const router = useRouter()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const buttonRef1 = useRef()
  const buttonRef2 = useRef()
  const [isMobile, setIsMobile] = useState(false)

  // ISMOBILE

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768)
    }
  })

  // GSAP ANIMATIONS

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleRef.current, { rotationX: 70, opacity: 0, transformOrigin: 'center bottom', transformPerspective: 500, },
      { rotationX: 0, opacity: 1, duration: 1.25, ease: 'back.out', scrollTrigger: { trigger: titleRef.current, start: "top bottom" } }
    );
    gsap.from(titleSplitText.chars, { yPercent: 50, stagger: 0.03, opacity: 0, ease: 'power1.out', duration: 0.5, scrollTrigger: { trigger: titleRef.current, start: "top bottom" } });

    gsap.fromTo(descriptionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power1", scrollTrigger: { trigger: descriptionRef.current, start: "top bottom" } });
    gsap.fromTo(buttonRef1.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: ".eight-buttons", start: "top bottom" } });
    gsap.fromTo(buttonRef2.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: ".eight-buttons", start: "top bottom" } });
  }, []);

  // NAVIGATION

  const handleNavigateClick = (linkUrl) => {
    router.push(linkUrl);
  };

  // SOUND

  const hoverSound = typeof Audio !== 'undefined' ? new Audio('/fx.mp3') : null;

  const hoverSoundStart = () => {
    if (!isMobile) {
      hoverSound.play();
      hoverSound.currentTime = 0;
    }
  };

  const hoverSoundEnd = () => {
    if (!isMobile) {
      hoverSound.pause();
      hoverSound.currentTime = 0;
    }
  };

  const hoverSoundMobile = () => {
    if (isMobile) {
      hoverSound.play();
    }
  };

  return (
    <>
      <section className="section eight">
        <div className="eight-content">
          <h1 className="headline eight-main-title" ref={titleRef} >Let’s talk about the  <br /> impact you'd like to make.</h1>
          <p className="description eight-title" ref={descriptionRef}>Let our projects speak for themselves and schedule your free consultation with us today.</p>
          <div className="eight-buttons">
            <motion.button
              className="one-button"
              onClick={() => { hoverSoundMobile(); handleNavigateClick('/projects'); }}
              onMouseEnter={hoverSoundStart}
              onMouseLeave={hoverSoundEnd}
              ref={buttonRef1}
            >
              <div className="navigation-left-content">
                <span className="navigation-text">PROJECTS</span>
                <span className="navigation-text">PROJECTS</span>
              </div>
              <div className="navigation-arrow-box">
                <FontAwesomeIcon icon={faLocationArrow} className="fa-location-arrow" />
              </div>
            </motion.button>
            <motion.button
              className="one-button-transparent eight-bottom-buttons"
              onClick={() => { handleNavigateClick('/contact'); hoverSoundMobile(); }}
              onMouseEnter={hoverSoundStart}
              onMouseLeave={hoverSoundEnd}
              ref={buttonRef2}
            >
              <div className="navigation-left-content">
                <span className="navigation-text">GET IN TOUCH</span>
                <span className="navigation-text">GET IN TOUCH</span>
              </div>
              <div className="navigation-arrow-box">
              <FontAwesomeIcon icon={faLocationArrow} className="fa-location-arrow" />
              </div>
            </motion.button>
          </div>
        </div>

        <div className="experience-one">
          <Canvas camera={{ position: [0, 0, isMobile ? 5.5 : 7.5], fov: 35 }}>
            <Sphere />
            <Environment preset="night" />
          </Canvas>
        </div>
      </section>
    </>
  );
};

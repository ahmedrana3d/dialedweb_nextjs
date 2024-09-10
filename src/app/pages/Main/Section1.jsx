import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Marquee from "react-fast-marquee";
import { Item3 } from "./Coins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../Loading";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Section1 = ({ section3Ref }) => {

  const titleRef = useRef()
  const router = useRouter();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const hoverSound = typeof Audio !== 'undefined' ? new Audio('/fx.mp3') : null;

  // GSAP ANIMATIONS

  useLayoutEffect(() => {

    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleRef.current, { rotationX: 70, opacity: 0, transformOrigin: 'center bottom', transformPerspective: 500, },
      { rotationX: 0, opacity: 1, duration: 1.25, ease: 'back.out', delay: 0.75 }
    );
    gsap.from(titleSplitText.chars, { yPercent: 50, stagger: 0.03, opacity: 0, ease: 'power1.out', duration: 0.5, delay: 0.75 });


    gsap.fromTo(
      ".one-button, .one-button-transparent, .one-description",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
    );
  }, []);

  // SCROLLING TO SECTION

  const handleScrollToSection3 = () => {
    section3Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // NAVIGATE

  const handleContactNavigate = () => {
    if (router.pathname === "/contact") {
      router.push("/");
    } else {
      router.push("/contact");
    }
  };

  // SOUND

  const hoverSoundStart = () => {
    if (!isMobile && hoverSound) {
      hoverSound.play();
      hoverSound.currentTime = 0;
    }
  };

  const hoverSoundEnd = () => {
    if (!isMobile && hoverSound) {
      hoverSound.pause();
      hoverSound.currentTime = 0;
    }
  };

  const hoverSoundMobile = () => {
    if (isMobile && hoverSound) {
      hoverSound.play();
    }
  };

  return (
    <>
      <section className="section one">
        <div className="background-element-small" />
        <div className="background-element-grid-small" />
        <div className="one-content">
          <div className="one-content-left">
            <h1 className="headline anim one-opacity" ref={titleRef} >Crafting Digital <br /> Masterpieces</h1>
            <p className="one-description one-opacity">Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
            <div className="one-content-buttons">
              <motion.button
                className="one-button-transparent one-opacity"
                onClick={() => { handleScrollToSection3(); hoverSoundMobile(); }}
                onMouseEnter={hoverSoundStart}
                onMouseLeave={hoverSoundEnd}
              >
                <div className="navigation-left-content">
                  <span className="navigation-text">SEE MORE</span>
                  <span className="navigation-text">SEE MORE</span>
                </div>
                <div className="navigation-arrow-box">
                  <FontAwesomeIcon icon={faLocationArrow} className="fa-location-arrow" />
                </div>
              </motion.button>
              <motion.button
                className="one-button one-opacity"
                onClick={() => { handleContactNavigate(); hoverSoundMobile(); }}
                onMouseEnter={hoverSoundStart}
                onMouseLeave={hoverSoundEnd}
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
          <div className="one-content-right">
            {/* <div className="one-content-right-experience" >
              <Suspense fallback={<Loading />}>
                <Canvas camera={{ position: [isMobile ? 0 : 5, 0, isMobile ? 8.5 : 12], fov: 35 }}>
                  <Suspense>
                    <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
                      <Item3 />
                    </Float>
                  </Suspense>
                  <Environment preset="sunset" />
                  <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={true} enablePan={false} />
                </Canvas>
              </Suspense>
            </div> */}
          </div>
        </div>
        <div className="one-content-logos">
          <Marquee speed={50}>
            <div className="marquee-row">
              <img className="marquee-image" src="/webflow.png" alt="" />
              <img className="marquee-image" src="/spline.png" alt="" />
              <img className="marquee-image" src="/threejs.png" alt="" />
              <img className="marquee-image" src="/shopify.png" alt="" />
              <img className="marquee-image" src="/react.png" alt="" />
              <img className="marquee-image" src="/hostinger.png" alt="" />
              <img className="marquee-image" src="/figma.png" alt="" />
              <img className="marquee-image" src="/gsap.png" alt="" />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

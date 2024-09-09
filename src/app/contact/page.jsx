"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { SectionFooter } from "../pages/Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const ContactPage = () => {

  const titleRef = useRef()
  const [isMobile, setIsMobile] = useState(false);
  const hoverSound = typeof Audio !== 'undefined' ? new Audio('/fx.mp3') : null;
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const boxRef4 = useRef();
  const boxRef5 = useRef();
  const boxRef6 = useRef();
  const boxRef7 = useRef();

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

    gsap.fromTo(boxRef1.current, { yPercent: 25, opacity: 0 }, { delay: 0, yPercent: 0, opacity: 1, duration: 1, ease: "power3" });
    gsap.fromTo(boxRef2.current, { yPercent: 25, opacity: 0 }, { delay: 0.2, yPercent: 0, opacity: 1, duration: 1, ease: "power3" });
    gsap.fromTo(boxRef3.current, { yPercent: 25, opacity: 0 }, { delay: 0.4, yPercent: 0, opacity: 1, duration: 1, ease: "power3" });
    gsap.fromTo(boxRef4.current, { yPercent: 25, opacity: 0 }, { delay: 0.6, yPercent: 0, opacity: 1, duration: 1, ease: "power3" });
    gsap.fromTo(boxRef5.current, { yPercent: 25, opacity: 0 }, { delay: 0.8, yPercent: 0, opacity: 1, duration: 1, ease: "power3" });
    gsap.fromTo(boxRef6.current, { yPercent: 25, opacity: 0 }, { delay: 1, yPercent: 0, opacity: 1, duration: 1, ease: "power3" });
    gsap.fromTo(boxRef7.current, { yPercent: 25, opacity: 0 }, { delay: 1.2, yPercent: 0, opacity: 1, duration: 1, ease: "power3" });
  }, [])

  // NAVIGATION

  const handleClick = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };

  // SOUND

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

  // MOVING KEYCAPS

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) / 150; // Adjust the divisor to control the movement intensity
    const y = (clientY - centerY) / 150;
    setPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


    return (
      <>
        <ReactLenis root>
          <div className="contact-overlay" >
            <div className="contact-overlay-left">
              <h1 className="headline" ref={titleRef} >Get in Touch</h1>
              <div className="contact-overlay-left-box">

                <div className="contact-person-box" ref={boxRef1} >
                  <div className="contact-person-image contact-image" />
                  <div className="contact-description-box">
                    <p className="description grey" >Let's bring your idea to life. <span className="white" > Get in touch with management directly.</span>  </p>
                  </div>
                </div>

                <div className="contact-options-box">
                  <a className="contact-small-box" href="tel:+16193176418" ref={boxRef2} onClick={() => { hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                    <FontAwesomeIcon icon={faPhone} className="option-icon"/>
                    <p className="small-description grey" >Call</p>
                  </a>
                  <a className="contact-small-box" href="mailto:support@dialedworldwide.com" ref={boxRef3} onClick={() => { hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                    <FontAwesomeIcon icon={faEnvelope} className="option-icon"/>
                    <p className="small-description grey" >Email</p>
                  </a>
                  <div className="contact-small-box" ref={boxRef4} onClick={() => { handleClick('https://www.linkedin.com/company/dialed-web/'); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                    <FontAwesomeIcon icon={faLinkedin} className="option-icon"/>
                    <p className="small-description grey" >LinkedIn</p>
                  </div>
                </div>

                <a className="contact-box" href="https://tidycal.com/dialedweb/discoverycall" target="_blank" ref={boxRef5} onClick={() => { hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <p className="small-description grey" >Videocall</p>
                  <p className="description white" >Book a Call</p>
                </a>

                <a className="contact-box" href="mailto:admin@dialedweb.com" ref={boxRef6} onClick={() => { hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <p className="small-description grey" >Email</p>
                  <p className="description white" >admin@dialedworldwide.com</p>
                </a>

                <div className="contact-box" ref={boxRef7}  > 
                  <p className="small-description grey" >Address</p>
                  <p className="description white" >545 La Jolla Village Drive</p>
                  <p className="description white" >San Diego</p>
                  <p className="description white" >CA 92122</p>
                </div>

              </div>
            </div>
            <div className="contact-overlay-right" onMouseMove={handleMouseMove}>
              <img className="contact-video" src="/loading.png" style={{ transform: `translate3d(${-position.x * 8}px, ${-position.y * 8}px, 0) rotateX(${position.x}deg) rotateY(${position.y}deg)`,}}/>
            </div>
          </div>
          <SectionFooter />
        </ReactLenis>
      </>
    )
}

export default ContactPage;
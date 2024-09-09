"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export const Cookies = () => {

    const [showCookiesPopup, setShowCookiesPopup] = useState(false);
    const hoverSound = typeof Audio !== 'undefined' ? new Audio('/fx.mp3') : null;
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    // ISMOBILE

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
      window.scrollTo(0, 0);
    }, []);

    // SHOW COOKIES

    useLayoutEffect(() => {
      setTimeout(() => {
        setShowCookiesPopup(true);
      }, 4000)
    }, []);
    
    const handleCookiesResponse = () => {
      setShowCookiesPopup(false);
    };

    // NAVIGATION

    const handleVisualizationNavigate = () => {
      router.push("/privacy-policy");
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

  return (
    <>
      <div className={`cookies-popup ${!showCookiesPopup ? 'fade-out' : ''}`}>
        <h1 className="small-subheadline" >We value your privacy</h1>
        <p className="small-description grey" >This website uses cookies to help you have a superior browsing experience on the website. <span className="cookies-underlined" onClick={() => {  handleVisualizationNavigate() }} >Read more</span></p>
        <div className="cookies-row">
          <motion.button className="cookies-button" onClick={() => { handleCookiesResponse(); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
            <div className="navigation-left-content">
              <span className="navigation-text">ACCEPT</span>
              <span className="navigation-text">ACCEPT</span>
            </div>
          </motion.button>
          <motion.button className="cookies-button" onClick={() => { handleCookiesResponse(); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
            <div className="navigation-left-content">
              <span className="navigation-text">DECLINE</span>
              <span className="navigation-text">DECLINE</span>
            </div>
          </motion.button>
        </div>
      </div>
    </>
  );
};
"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Cookies = () => {

    const [showCookiesPopup, setShowCookiesPopup] = useState(false);

    useLayoutEffect(() => {
      setTimeout(() => {
        setShowCookiesPopup(true);
      }, 4000)
    }, []);
    
    const handleCookiesResponse = () => {
      setShowCookiesPopup(false);
    };

  return (
    <>
      <div className={`cookies-popup ${!showCookiesPopup ? 'fade-out' : ''}`}>
        <h1 className="small-subheadline" >We value your privacy</h1>
        <p className="small-description grey" >This website uses cookies to help you have a superior browsing experience on the website. <span className="cookies-underlined" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Read more</span></p>
        <div className="cookies-row">
          <motion.button className="cookies-button" onClick={handleCookiesResponse} >
            <div className="navigation-left-content">
              <span className="navigation-text">ACCEPT</span>
              <span className="navigation-text">ACCEPT</span>
            </div>
          </motion.button>
          <motion.button className="cookies-button" onClick={handleCookiesResponse} >
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
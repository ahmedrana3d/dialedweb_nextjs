"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Navigation = () => {

  // NAV OVERLAY
  const [menu, setMenu] = useState(false);
  const menuContentRef = useRef(null);
  const menuNavRef = useRef(null);
  const menuSocialRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const hoverSound = typeof Audio !== 'undefined' ? new Audio('/fx.mp3') : null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  });

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".menu",
      { display: "none" },
      { display: "block", duration: 0.5, ease: "power1" },
      0
    );

    tl.fromTo(
      menuContentRef.current,
      { opacity: 0, gap: "150px" },
      { opacity: 1, duration: 0.5, gap: "1vw", ease: "power1" },
      0
    );

    tl.fromTo(
      menuNavRef.current,
      { transform: "translate3d(0, 5vh, 0) rotate(5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: "power1",
      },
      0
    );

    tl.fromTo(
      menuSocialRef.current,
      { transform: "translate3d(0, 5vh, 0) rotate(-5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: "power1",
      },
      0
    );

    const handleOpen = (isClosed) => {
      if (isClosed) {
        tl.play();
      } else {
        tl.progress(1).reverse();
      }
    };

    handleOpen(menu);

    return () => {
      tl.kill();
    };
  }, [menu]);

  useEffect(() => {
    if (menu) {
      setMenu(false);
    }
  }, []);

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

  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      if (window.scrollY > scrollThreshold) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };

  return (
    <>
      <div className={`menu-container z-50 ${menu ? 'open' : ''}`} onClick={() => setMenu(!menu)}>
        <div className="menu">
          <div className="menu-hover-close hover-area" data-cursor-text="CLOSE" />
          <div key="menuContent" className="menuContent" ref={menuContentRef}>
            <div className="menuNav" ref={menuNavRef}>
              {/* Update navigation links */}
              <div className="menu-text">
                <Link href="/">
                  <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                    <span className="menu-text">Home</span>
                    <span className="menu-text">Home</span>
                  </div>
                </Link>
              </div>
              <div className="menu-text">
                <Link href="/about">
                  <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                    <span className="menu-text">About</span>
                    <span className="menu-text">About</span>
                  </div>
                </Link>
              </div>
              <div className="menu-text">
                <Link href="/projects">
                  <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                    <span className="menu-text">Projects</span>
                    <span className="menu-text">Projects</span>
                  </div>
                </Link>
              </div>
              <div className="menu-text">
                <Link href="/services">
                  <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                    <span className="menu-text">Services</span>
                    <span className="menu-text">Services</span>
                  </div>
                </Link>
              </div>
              <div className="menu-text">
                <Link href="/learn-more">
                  <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                    <span className="menu-text">Learn More</span>
                    <span className="menu-text">Learn More</span>
                  </div>
                </Link>
              </div>
              <div className="menu-text">
                <Link href="/contact">
                  <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                    <span className="menu-text">Get In Touch</span>
                    <span className="menu-text">Get In Touch</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="menuSocial" ref={menuSocialRef}>
              <FontAwesomeIcon icon={faInstagram} className="nav-brands" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/') }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} />
              <FontAwesomeIcon icon={faYoutube} className="nav-brands" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/') }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} />
              <FontAwesomeIcon icon={faLinkedin} className="nav-brands" onClick={() => { hoverSoundMobile(); handleClick('https://www.linkedin.com/company/dialed-web/') }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} />
            </div>
          </div>
        </div>
      </div>

      <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
        <motion.button
          className="navigation-left"
          onClick={() => { setMenu(!menu); hoverSoundMobile(); }}
          onMouseEnter={hoverSoundStart}
          onMouseLeave={hoverSoundEnd}
        >
          {isMobile ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <>
              <div className="navigation-left-content">
                <span className="navigation-text">MENU</span>
                <span className="navigation-text">MENU</span>
              </div>
            </>
          )}
        </motion.button>
        
        <div className="navigation-center">
          <Link href="/" className="navigation-center" >
            <img src="/loading.png" className="navigation-image" alt="" />
          </Link>
        </div>

        <motion.button
          className="navigation-right"
          onClick={() => { /* Handle Get In Touch */ hoverSoundMobile(); }}
          onMouseEnter={hoverSoundStart}
          onMouseLeave={hoverSoundEnd}
        >
          <Link href="/contact">
          {isMobile ? (
            <i className="fa-solid fa-envelope"></i>
          ) : (
            <>
              <div className="navigation-right-content">
                <span className="navigation-text">GET IN TOUCH</span>
                <span className="navigation-text">GET IN TOUCH</span>
              </div>
            </>
          )}
          </Link>
        </motion.button>
      </div>
    </>
  );
};



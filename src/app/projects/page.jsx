"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/navigation';
import { SectionFooter } from "../pages/Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const ProjectPage = () => {

  const titleRef = useRef()
  const [isMobile, setIsMobile] = useState(false);
  const hoverSound = typeof Audio !== 'undefined' ? new Audio('/fx.mp3') : null;
  const router = useRouter();
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const boxRef4 = useRef();
  const boxRef5 = useRef();
  const boxRef6 = useRef();
  const boxRef7 = useRef();
  const boxRef8 = useRef();

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
  }, [])

  useEffect(() => {
    gsap.fromTo(boxRef1.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef1.current, start: "top bottom" } });
    gsap.fromTo(boxRef2.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef2.current, start: "top bottom" } });
    gsap.fromTo(boxRef3.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef3.current, start: "top bottom" } });
    gsap.fromTo(boxRef4.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef4.current, start: "top bottom" } });
    gsap.fromTo(boxRef5.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef5.current, start: "top bottom" } });
    gsap.fromTo(boxRef6.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef6.current, start: "top bottom" } });
    gsap.fromTo(boxRef7.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef7.current, start: "top bottom" } });
    gsap.fromTo(boxRef8.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef8.current, start: "top bottom" } });
  }, []);

  // NAVIGATION

  const handleClick = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };

  const handleVisualizationNavigate = () => {
    router.push("/projects/visualization");
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
      <ReactLenis root>
        <section className="projects-section">
          <div className="projects-section-content">
            <div className="projects-top-texts">
              <h1 className="headline projects-animate-text" ref={titleRef} >Projects</h1>
            </div>
            <div className="projects-section-container">
              
                <div ref={boxRef1} className="project" onClick={() => { handleVisualizationNavigate(); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/visualization.jpg" alt="Project 1" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Architectural Visualization</p>
                    </div>
                    <p className="description" >3D Renderings</p>
                    <p className="description" >(2024)</p>
                  </div>
                </div>

                <div ref={boxRef2} className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.peakcreations.ee/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/peakcreations.jpeg" alt="Project 3" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Peak Creations</p>
                    </div>
                    <p className="description" >UI/UX Design, Development</p>
                    <p className="description" >(2024)</p>
                  </div>
                </div>

                <div ref={boxRef3} className="project" onClick={() => { hoverSoundMobile(); handleClick('https://vitalenta.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/vitalentaproject.jpg" alt="Project 4" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Vita Lenta</p>
                    </div>
                    <p className="description" >UI/UX Design, Development</p>
                    <p className="description" >(2024)</p>
                  </div>
                </div>

                <div ref={boxRef4} className="project" onClick={() => { hoverSoundMobile(); handleClick('https://ring-configurator-lac.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/ringproject.jpg" alt="Project 4" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Dialedweb Jewelry</p>
                    </div>
                    <p className="description" >UI/UX Design, Development</p>
                    <p className="description" >(2024)</p>
                  </div>
                </div>
    
                <div ref={boxRef5} className="project" onClick={() => { hoverSoundMobile(); handleClick("https://dialedwebseltzers.vercel.app/") }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/project7.png" alt="Project 2" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >DialedWeb Seltzer</p>
                    </div>
                    <p className="description" >UI/UX Design, Development</p>
                    <p className="description" >(2024)</p>
                  </div>
                </div>
    
                <div ref={boxRef6} className="project" onClick={() => { hoverSoundMobile(); handleClick('https://stalikenglish-main.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/stalikproject.jpg" alt="Project 3" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Liran Stalik</p>
                    </div>
                    <p className="description" >UI/UX Design, Development</p>
                    <p className="description" >(2024)</p>
                  </div>
                </div>

                <div ref={boxRef7} className="project" onClick={() => { hoverSoundMobile(); handleClick('https://ecomwaveprojectmain.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/ecomwaveproject.jpg" alt="Project 3" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Ecomwave</p>
                    </div>
                    <p className="description" >UI/UX Design, Development</p>
                    <p className="description" >(2024)</p>
                  </div>
                </div>
    
            </div>
          </div>
        </section>
        <SectionFooter />
      </ReactLenis>
        </>
      );
    };

export default ProjectPage;
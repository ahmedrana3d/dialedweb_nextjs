"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { SectionFooter } from "../../../pages/Main/SectionFooter";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const ModernBeverlyHillsMansion = () => {

    const titleRef = useRef()
    const [isMobile, setIsMobile] = useState(false);
    const boxRef1 = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const boxRef4 = useRef();

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
        gsap.fromTo(boxRef1.current, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef1.current, start: "top bottom" } });
        gsap.fromTo(boxRef2.current, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef2.current, start: "top bottom" } });
        gsap.fromTo(boxRef3.current, { yPercent: 50, opacity: 0 }, { yPercent: 0, delay: isMobile ? 0 : 0.25, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef3.current, start: "top bottom" } });
        gsap.fromTo(boxRef4.current, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef4.current, start: "top bottom" } });
      }, []);

    return (
        <>
            <ReactLenis root>
                <section className="visualizationsub">
                    <h1 className="headline bali-title-text" ref={titleRef} >The Manor</h1>
                    <div className="visualizationsub-row">
                        <div className="visualizationsub-image beverly-image-1" ref={boxRef1}/>
                    </div>
                    <div className="visualizationsub-row">
                        <div className="visualizationsub-image beverly-image-2" ref={boxRef2} />
                        <div className="visualizationsub-image beverly-image-3" ref={boxRef3} />
                    </div>
                    <div className="visualizationsub-row">
                        <div className="visualizationsub-image beverly-image-4" ref={boxRef4} />
                    </div>
                </section>
                <SectionFooter />
            </ReactLenis>
        </>
      );
    };

export default ModernBeverlyHillsMansion;
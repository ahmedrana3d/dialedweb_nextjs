import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import { useAnimateText } from "../ScrollAnimations";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const SectionScrollVideoOnScroll = () => {

    // SCROLLY VIDEO

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/scrolly-video@latest/dist/scrolly-video.js";
        script.async = true;
        script.onload = () => {
            new ScrollyVideo({
                scrollyVideoContainer: "scrolly-video",
                src: "/flowerkey3.mp4",
                transitionSpeed: 14,
                frameThreshold: 0.01,
                full: true,
            });
        };
        document.body.appendChild(script);

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const boxRef1 = useRef();
    const boxRef2 = useRef();

    // GSAP ANIMATIONS

    useEffect(() => {
        gsap.fromTo(boxRef1.current, { scale: 0, rotate: 10 },
            { scale: 1, rotate: 0, duration: 0.5, scrollTrigger: { trigger: boxRef1.current, start: "top bottom" } }
        )
        gsap.fromTo(boxRef2.current, { scale: 0, rotate: -10 },
            { scale: 1, rotate: 0, duration: 0.5, scrollTrigger: { trigger: boxRef2.current, start: "top bottom" } }
        )
    }, [])

    const animateTitle = (elementRef) => {
        const splitTextInstance = new SplitText(elementRef.current, { type: 'chars' });
      
        gsap.fromTo(
          elementRef.current,
          {
            rotationX: 70,
            opacity: 0,
            transformOrigin: 'center bottom',
            transformPerspective: 500,
          },
          {
            rotationX: 0,
            opacity: 1,
            duration: 1.25,
            ease: 'back.out',
            scrollTrigger: {
              trigger: elementRef.current,
              start: "top bottom",
            },
          }
        );
      
        gsap.from(splitTextInstance.chars, {
          yPercent: 50,
          stagger: 0.03,
          opacity: 0,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top bottom",
          },
        });
      };
      
      // Usage example
      const titleRef1 = useRef(null);
      const titleRef2 = useRef(null);
      const titleRef3 = useRef(null);
      const titleRef4 = useRef(null);
      const titleRef5 = useRef(null);
      const titleRef6 = useRef(null);
      const titleRef7 = useRef(null);
      const titleRef8 = useRef(null);
      
      useEffect(() => {
        animateTitle(titleRef1);
        animateTitle(titleRef2);
        animateTitle(titleRef3);
        animateTitle(titleRef4);
        animateTitle(titleRef5);
        animateTitle(titleRef6);
        animateTitle(titleRef7);
        animateTitle(titleRef8);
    }, []);
      

    // FLOATING DIV

    const floatingDiv = useRef();
    const [showFloatingDiv, setShowFloatingDiv] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        const speed = 0.1;

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const animate = () => {
            const distX = mouseX - ballX;
            const distY = mouseY - ballY;

            ballX += distX * speed;
            ballY += distY * speed;

            if (floatingDiv.current) {
                floatingDiv.current.style.left = `${ballX}px`;
                floatingDiv.current.style.top = `${ballY}px`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (showFloatingDiv) {
            gsap.to(floatingDiv.current, {
                autoAlpha: 1, // This sets both opacity and visibility
                scale: 1,
                duration: 0.3,
                ease: 'power3.out',
            });
        } else {
            gsap.to(floatingDiv.current, {
                autoAlpha: 0, // This sets both opacity and visibility
                scale: 0,
                duration: 0.3,
                ease: 'power3.in',
            });
        }
    }, [showFloatingDiv]);
    

    const handleMouseEnter = () => {
        setShowFloatingDiv(true);
    };
    
    const handleMouseLeave = () => {
        setShowFloatingDiv(false);
    };

    return (
        <>
            <section className="section scroll-video-on-scroll" onMouseEnter={() => { handleMouseEnter(); }} onMouseLeave={() => { handleMouseLeave(); }} >
                <div className="scroll-video-on-scroll-items">
                    <div className="scroll-video-items-wrapper">
                        <h1 className="headline scroll-headline-1" ref={titleRef1} >Grow</h1>
                        <h1 className="headline scroll-headline-2" ref={titleRef2} >your</h1>
                        <h1 className="headline scroll-headline-3 scroll-purple" ref={titleRef3} >Digital</h1>
                        <motion.div ref={boxRef1} whileHover={{ scale: 2, rotate: 10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-small box-between-words-image-1" />
                        <h1 className="headline scroll-headline-4" ref={titleRef4} >Presence,</h1>
                        <h1 className="headline scroll-headline-5" ref={titleRef5} >let</h1>
                        <h1 className="headline scroll-headline-6" ref={titleRef6} >your</h1>
                        <h1 className="headline scroll-headline-7 scroll-purple" ref={titleRef7} >Vision</h1>
                        <motion.div ref={boxRef2} whileHover={{ scale: 2, rotate: -10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-big box-between-words-image-3" />
                        <h1 className="headline scroll-headline-8" ref={titleRef8} >Bloom</h1>
                    </div>
                </div>
                <div id="scrolly-video" className="video-background"></div>
                <div className="floating-div" ref={floatingDiv}>
                    <h1>SCROLL</h1>
                </div>
            </section>
        </>
    )
}
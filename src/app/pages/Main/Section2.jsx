import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import Image from 'next/image'

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section2 = () => {
    const titleRef = useRef()
    const router = useRouter();
    const floatingDiv = useRef();
    const [showFloatingDiv, setShowFloatingDiv] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const hoverSound = typeof Audio !== 'undefined' ? new Audio('/fx.mp3') : null;

    // ISMOBILE

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    })

    // GSAP ANIMATIONS

    const boxRef1 = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const boxRef4 = useRef();

    useEffect(() => {
        const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
        gsap.fromTo(titleRef.current, { rotationX: 70, opacity: 0, transformOrigin: 'center bottom', transformPerspective: 500, },
          { rotationX: 0, opacity: 1, duration: 1.25, ease: 'back.out', scrollTrigger: { trigger: titleRef.current, start: "top bottom" } }
        );
        gsap.from(titleSplitText.chars, { yPercent: 50, stagger: 0.03, opacity: 0, ease: 'power1.out', duration: 0.5, scrollTrigger: { trigger: titleRef.current, start: "top bottom" } });
        
        gsap.fromTo(boxRef1.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef1.current, start: "top bottom" } });
        gsap.fromTo(boxRef2.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef2.current, start: "top bottom" } });
        gsap.fromTo(boxRef3.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef3.current, start: "top bottom" } });
        gsap.fromTo(boxRef4.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef4.current, start: "top bottom" } });
    }, []);

    // NAVIGATION

    const handleProjectsNavigate = () => {
        router.push("/projects");
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

    // FLOATING DIV

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
                autoAlpha: 0,
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
            <section className="section two">
                <div className="two-content">
                    <h1 className="headline two-title" ref={titleRef} >Featured Projects</h1>
                    <div
                        className="two-images-container"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="two-images-container-row">
                            <div
                                className="two-images-box-big hover-area"
                                ref={boxRef1}
                                data-cursor-text="CLICK"
                                onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }}
                                onMouseEnter={hoverSoundStart}
                                onMouseLeave={hoverSoundEnd}
                            >
                                <Image width={500} height={500} priority={false} className="two-images-box-big-image" src="/visualization.jpg" alt="" />
                                <div className="two-images-box-content">
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                        <h1 className="small-description black">Websites</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Design</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Visualisation</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Animation</h1>
                                    </motion.div>
                                </div>
                            </div>
                            <div
                                className="two-images-box-small hover-area"
                                ref={boxRef2}
                                data-cursor-text="CLICK"
                                onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }}
                                onMouseEnter={hoverSoundStart}
                                onMouseLeave={hoverSoundEnd}
                            >
                                <Image width={500} height={500} priority={false} className="two-images-box-big-image" src="/peakcreations.jpeg" alt="" />
                                <div className="two-images-box-content">
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                        <h1 className="small-description black">Websites</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Design</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Visualisation</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Animation</h1>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="two-images-container-row">
                            <div
                                className="two-images-box-small hover-area"
                                ref={boxRef3}
                                data-cursor-text="CLICK"
                                onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }}
                                onMouseEnter={hoverSoundStart}
                                onMouseLeave={hoverSoundEnd}
                            >
                                <Image width={500} height={500} priority={false} loading="lazy" className="two-images-box-big-image" src="/project7.png" alt="" />
                                <div className="two-images-box-content">
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                        <h1 className="small-description black">Websites</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Design</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Consultation</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Data</h1>
                                    </motion.div>
                                </div>
                            </div>
                            <div
                                className="two-images-box-big hover-area"
                                ref={boxRef4}
                                data-cursor-text="CLICK"
                                onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }}
                                onMouseEnter={hoverSoundStart}
                                onMouseLeave={hoverSoundEnd}
                            >
                                <Image width={500} height={500} priority={false} loading="lazy" className="two-images-box-big-image" src="/vitalentaproject.jpg" alt="" />
                                <div className="two-images-box-content">
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                        <h1 className="small-description black">Websites</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Design</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Visualisation</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                        <h1 className="small-description black">Animation</h1>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="floating-div" ref={floatingDiv}>
                    <h1>DISCOVER</h1>
                </div>
            </section>
        </>
    );
};

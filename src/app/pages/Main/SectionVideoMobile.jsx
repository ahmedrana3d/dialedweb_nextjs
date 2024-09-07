import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import { useAnimateText } from "../ScrollAnimations";

export const SectionVideoMobile = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/scrolly-video@latest/dist/scrolly-video.js";
        script.async = true;
        script.onload = () => {
            new ScrollyVideo({
                scrollyVideoContainer: "scrolly-video",
                src: "/flowermobile.mp4",
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

    // useAnimateText(".scroll-headline-1, .scroll-headline-2, .scroll-headline-3, .scroll-headline-4, .scroll-headline-5, .scroll-headline-6, .scroll-headline-7, .scroll-headline-8, .box-between-words-image-1, .box-between-words-image-2, .box-between-words-image-3")

    return (
        <>
            <section className="section scroll-video-on-scroll hover-area" data-cursor-text="SCROLL">
                <div className="scroll-video-on-scroll-items">
                    <div className="scroll-video-items-wrapper">
                      <div className="scroll-video-items-wrapper-inside">
                        <h1 className="headline scroll-headline-1">Grow</h1>
                        <h1 className="headline scroll-headline-2">your</h1>
                        <h1 className="headline scroll-headline-3 scroll-purple">Digital</h1>
                        <motion.div whileHover={{ scale: 2, rotate: 10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-small box-between-words-image-1" />
                        <h1 className="headline scroll-headline-4">Presence,</h1>
                        <h1 className="headline scroll-headline-5">let</h1>
                        <h1 className="headline scroll-headline-6">your</h1>
                        <h1 className="headline scroll-headline-7 scroll-purple">Vision</h1>
                        <motion.div whileHover={{ scale: 2, rotate: -10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-big box-between-words-image-3" />
                        <h1 className="headline scroll-headline-8">Bloom</h1>
                      </div>
                    </div>
                </div>
                <div id="scrolly-video" className="video-background"></div>
            </section>
        </>
    )
}
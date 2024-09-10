import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section3 = () => {

//   useAnimateText(".three-title, .three-top-text-animate");

  const descriptionRef = useRef()
  const typewriterRef = useRef()
  const titleRef = useRef()
  const [isMobile, setIsMobile] = useState(false);

  // ISMOBILE

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  })

  // GSAP ANIMATIONS

  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleRef.current, { rotationX: 70, opacity: 0, transformOrigin: 'center bottom', transformPerspective: 500, },
      { rotationX: 0, opacity: 1, duration: 1.25, ease: 'back.out', scrollTrigger: { trigger: titleRef.current, start: "top bottom" } }
    );
    gsap.from(titleSplitText.chars, { yPercent: 50, stagger: 0.03, opacity: 0, ease: 'power1.out', duration: 0.5, scrollTrigger: { trigger: titleRef.current, start: "top bottom" } });
    const split = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(split.words, 
      { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, {
        ease: 'sine',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.025,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom"
        }
      });
    gsap.fromTo( typewriterRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2", scrollTrigger: { trigger: typewriterRef.current, start: "top bottom"}});
  }, []);

  return (
    <>
      <section className="section three">
        {!isMobile && (
          <div className="three-content-box-right">
            <div className="container">
              <Suspense>
                <video loading="lazy" className="three-video" src="/laptop3.webm" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop></video>
              </Suspense>
            </div>
          </div>
        )}
        <div className="three-content">
          <div className="three-content-box-left">
            <h1 className="headline three-title" ref={titleRef} >Virtual Turns <br />Tangible</h1>
            <p className="description three-description grey" ref={descriptionRef} >To innovate and enhance digital experiences by crafting tailored, user-centric web solutions. We create captivating web experiences that takes users on an immersive journey beyond their imagination.</p>
            <div className="typewriter-box" >
              <h1 className="typewriter" ref={typewriterRef} >
                <span className='typewriter-main'>We<span className="typewriter-text"></span></span>
              </h1>
            </div>
          </div>
          {isMobile && (
            <div className="three-content-box-right">
              <div className="container">
                <Suspense>
                  <video loading="lazy" className="three-video" src="/laptop3.webm" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop></video>
                </Suspense>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Meteors from "../Components/Styles/Meteor";
gsap.registerPlugin(SplitText);

const FirstSection = () => {
  const headText = useRef();
  const el = useRef();


  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;


  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
     
      const tl = gsap.timeline();

      tl.fromTo(
        ".line-inner",
        {
          x: 0,
          opacity: 0,
          y: "2em",
          rotationX: -60,
          rotationY: -20,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          delay: 0.5,
          rotationX: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
  
      tl.fromTo(
        ".line-inner",
        {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 1,
        },
        {
          x: 0,
          y: "1.5em",
          rotationX: -60,
          rotationY: -20,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: headText.current,
            start: "center center",
            end: "+=55%",
            scrub: true,
          },
        }
      );



    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);





  return (
    <>
      <div
        ref={el}
        className="w-screen !h-screen relative flex justify-center items-center md:items-start flex-col bg-black z-10"
      >
        <Meteors number={20} />

        <div className="background-element hidden md:block" bis_skin_checked="1"></div>
        <div className="background-element-grid " bis_skin_checked="1"></div>

        <h1
          ref={headText}
          className="text-gray-50 text-[9vw] md:text-[7vw] md:text-start text-center mb-16 md:mb-0 font-sf-pro uppercase md:mx-32 leading-[1.1] md:leading-[1]"
        >
          {[
            "how do these",
            "features actually",
            <>
              <span className="bg-gradient-to-b bg-clip-text text-transparent from-white dark:to-slate-900/10">
                boost
              </span>{" "}
              your digital
            </>,
            "conversions?",
          ].map((text, index) => (
            <div
              key={index}
              className="overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <div className="line-inner opacity-0">{text}</div>
            </div>
          ))}
        </h1>
      </div>
    </>
  );
};

export default FirstSection;

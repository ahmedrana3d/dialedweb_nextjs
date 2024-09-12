import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RetroGrid from "../../Components/Styles/RetroGrid";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Page3 = () => {
  const meterContainer = useRef(true);
  const parent = useRef(null);

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;


  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
     

      if (meterContainer.current) {
        // GSAP Timeline Configuration
        const tl = gsap.timeline({
          ease: "power0",
          scrollTrigger: {
            trigger: ".parent-web-stats",
            start: "top top",
            end: `+=280%`,
            scrub: true,
            pin: true,
            // pinSpacing: true,
            onEnter: () => {
              ScrollTrigger.refresh();
            },
          },
        });
  
        // Animate .number-stats from x: 130% to x: -130%
        tl.fromTo(
          ".number-stats",
          { x: "130%" },
          { x: "-120%", duration: 1 },
          "<"
        );
  
        // Animate .odo-meter and .make-your opacity in parallel to the .number-stats animation
        tl.to(
          ".odo-meter",
          {
            opacity: 0,
            duration: 0.1,
            ease: "none",
          },
          "-=0.7"
        ); // Start the opacity change 0.7 seconds before the end of the number-stats animation
  
        tl.to(
          ".make-your",
          {
            opacity: 1,
            duration: 0.1,
            ease: "none",
          },
          "-=0.7"
        ); // Start the opacity change 0.7 seconds before the end of the number-stats animation
  
        gsap.to(".clip-path-svg", {
          duration: 1,
          clipPath: "inset(0px 0px calc(10%))",
          scrollTrigger: {
            trigger: ".clip-path-svg",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        });
      }


    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);


  return (
    <>
    <div
      ref={parent}
      className="z-10 relative w-screen hidden md:block md:h-screen parent-web-stats"
      >

      <div className="trigger1 absolute h-16 w-16 z-30 bottom-0 top-1/2"></div>
      <div className="h-[100vh] w-full flex justify-center items-center flex-col">
        <div className="trigger absolute h-16 w-16 z-30 top-1/2"></div>

        {/* Banner */}
        <div className="number-stats w-screen z-20 h-screen flex justify-center items-center bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            className="!w-[160vw] max-w-[140vw] !h-[150vh]"
            src="./number_new.svg"
            alt=""
            />
        </div>

        {/* Meter */}
        <div
          ref={meterContainer}
          className="flex w-screen h-screen flex-col gap-7 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
          <div className="odo-meter flex justify-center items-center flex-col">
            <div className=" absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[4vw]">
              Approximately 252,000 <p>new websites are created</p>
              <span>every day</span>
            </div>
          </div>

          {/* Makes Your Standout Text */}
          <div className="make-your opacity-0 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[5vw]">
            How do you make yours <p>stand out?</p>
          </div>
        </div>
      </div>
    </div>


{/* Mobile /////// */}

<div className=" md:hidden dark relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
    
        <div className="odo-meter flex justify-center items-center flex-col">
            <div className=" absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[4vw]">
              Approximately 252,000 <p>new websites are created</p>
              <span>every day</span>
            </div>
          </div>

          {/* Makes Your Standout Text */}
          <div className="make-your opacity-0 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[5vw]">
            How do you make yours <p>stand out?</p>
          </div>
 
      <RetroGrid />
    </div>

          </>
  );
};

export default Page3;
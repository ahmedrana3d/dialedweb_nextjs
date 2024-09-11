import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
    <div
      ref={parent}
      className="z-10 relative w-screen md:h-screen parent-web-stats"
    >
      <div
        style={{ clipPath: "inset(0px 0px calc(110%))" }}
        className=" absolute flex w-full justify-center clip-path-svg  md:hidden"
      >
        <svg
          className="absolute  -ml-0.5 translate-x-1/2"
          width="92"
          height="335"
          viewBox="0 0 115 419"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 418.5C1 418.5 8 370 63 317.5C118 265 113.5 214 113.5 209C113.5 204 118 154 63 101.5C8 49 1 0.5 1 0.5"
            stroke="url(#paint0_linear_449_15)"
            strokeWidth="2"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_449_15"
              x1="57.2945"
              y1="-451.5"
              x2="57.2945"
              y2="901.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#808080" />
              <stop offset="0.0001" stopColor="#C1C1C1" />
              <stop offset="1" stopColor="#514F4F" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute top-[428px] ml-0.5 -translate-x-1/2"
          width="92"
          height="335"
          viewBox="0 0 115 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M113.59 1C113.59 1 106.59 49.5 51.5898 102C-3.41016 154.5 1.08984 205.5 1.08984 210.5C1.08984 215.5 -3.41016 265.5 51.5898 318C106.59 370.5 113.59 419 113.59 419"
            stroke="url(#paint0_linear_474_15)"
            strokeWidth="2"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_474_15"
              x1="57.2953"
              y1="871"
              x2="57.2953"
              y2="-482"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#808080" />
              <stop offset="0.0001" stopColor="#C1C1C1" />
              <stop offset="1" stopColor="#514F4F" />
            </linearGradient>
          </defs>
        </svg>
        <div className="h-[115vh] w-0.5 bg-gray-400"></div>
      </div>

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
  );
};

export default Page3;
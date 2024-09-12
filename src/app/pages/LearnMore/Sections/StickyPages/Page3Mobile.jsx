import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RetroGrid from "../../Components/Styles/RetroGrid";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Page3Mobile = () => {
  const meterContainer = useRef(null);
  const lineFirstRefs = useRef([]);
  const makeYourRefs = useRef([]);
  lineFirstRefs.current = [];
  makeYourRefs.current = [];

  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: meterContainer.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers : true,
        },
      });

      tl.to(lineFirstRefs.current, {
        duration: 1,
        y: "-200%",
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.1,
      })

      .fromTo(makeYourRefs.current, 
        {
          y: "200%",
          opacity: 0,
        },
        {
          y: "0%",
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          stagger: 0.1,
        }
       
      );



    });

    return () => ctx.revert(); // <-- CLEANUP!
  }, []);

  return (
    <div ref={meterContainer} className="md:hidden dark relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div className="odo-meter-mobile flex justify-center items-center flex-col">
        <div className="absolute w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[4vw]">
          <p ref={(el) => addToRefs(el, lineFirstRefs)} className="line-first overflow-hidden">Approximately 252,000</p>
          <p ref={(el) => addToRefs(el, lineFirstRefs)} className="line-first overflow-hidden">new websites are created</p>
          <p ref={(el) => addToRefs(el, lineFirstRefs)} className="line-first overflow-hidden">every day</p>
        </div>
      </div>

      {/* Second Set of Paragraphs */}
      <div className="make-your-mobile  absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stand-out font-sf-bold leading-tight text-[#fefeff] text-center text-[7vw] md:text-[5vw]">
        <p ref={(el) => addToRefs(el, makeYourRefs)} className=" opacity-0 ">How do you make yours</p>
        <p ref={(el) => addToRefs(el, makeYourRefs)} className=" opacity-0 ">stand out?</p>
      </div>

      <RetroGrid />
    </div>
  );
};

export default Page3Mobile;

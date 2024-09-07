import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText, TextPlugin } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ThirdPage = () => {
  const paraRef = useRef(null);
  const headText1Ref = useRef(null);
  const headText2Ref = useRef(null);
  const svgPath = useRef(null);

  useEffect(() => {
    const splitPara = new SplitText(paraRef.current, { type: "words, chars" });
    const splitHead1 = new SplitText(headText1Ref.current, { type: "words" });
    const splitHead2 = new SplitText(headText2Ref.current, { type: "words" });

    gsap.fromTo(
      splitPara.words,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.01,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 99%",
          end: "top 99%",
          toggleActions: "play none reset none",
        },
      }
    );

    gsap.fromTo(
      splitHead1.words,
      {
        y: 250,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: headText1Ref.current,
          start: "top 99%",
          end: "top 99%",
          toggleActions: "play none reset none",
        },
      }
    );

    gsap.fromTo(
      splitHead2.words,
      {
        y: -250,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: {
          each: 0.3,
          from: "end",
        },
        scrollTrigger: {
          trigger: headText2Ref.current,
          start: "top 99%",
          end: "top 99%",
          toggleActions: "play none reset none",
        },
      }
    );

    const path = svgPath.current;
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    gsap.fromTo(
      path,
      { strokeDashoffset: pathLength },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: path,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.to(headText1Ref.current, {
      x: "18%",
      scrollTrigger: {
        trigger: headText1Ref.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="w-screen h-auto bg-black flex flex-col items-center gap-12 md:gap-0 md:items-start ">
      <svg
        className="absolute w-screen h-[250vw] md:h-[150vw] left-0"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          ref={svgPath}
          d="M-13 17.5C-46.2521 -28.3137 475.634 302.292 320 455C233.7 531.813 122.952 458.201 166.5 344.5C193.788 273.253 330.649 117.107 510.5 393C547.281 449.422 538.5 504.5 609.5 476.5C680.5 448.5 727.243 671 774.5 671C935.994 672.176 1039.92 724.796 1072.5 781"
          stroke="url(#paint0_linear_79_8)"
          strokeLinecap="round"
          strokeWidth="16"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_79_8"
            x1="517.199"
            y1="4.05438"
            x2="517.199"
            y2="671"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#808080" />
            <stop offset="0.0001" stopColor="#C1C1C1" />
            <stop offset="1" stopColor="#514F4F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full  ">
        <div className="overflow-hidden w-full">
          <div
            ref={headText1Ref}
            className="text-[9vw] md:text-[8vw] font-sf-bold text-gray-50 tracking-tight leading-tight pl-6 md:pl-12"
          >
            Great Experiences
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            ref={headText2Ref}
            className=" text-[9vw] md:text-[8vw] font-sf-bold text-gray-50 tracking-tight leading-tight pl-6 md:pl-12"
          >
            Build Loyalty
          </div>
        </div>
      </div>

      <div className="w-full  md:pr-[9vw] text-left md:text-left mt-8 flex  justify-center md:justify-end">
        <div
          ref={paraRef}
          className=" w-4/5 md:w-[35vw] mr-0 md:mr-8 one-description"
        >
          A negative experience on a website will deter 88% of online consumers
          from revisiting, and 79% of consumers who encounter performance issues
          are less likely to buy from that site again, highlighting the critical
          importance of maintaining customer loyalty and sales.
        </div>
      </div>

      <div className=" z-10 w-full flex justify-center md:justify-start md:pl-32">
        <video
          className=" w-[90%] rounded-3xl md:w-2/5"
          src="./video2.mp4"
          playsInline
          muted
          autoPlay
          loop
        ></video>
      </div>
    </div>
  );
};

export default ThirdPage;
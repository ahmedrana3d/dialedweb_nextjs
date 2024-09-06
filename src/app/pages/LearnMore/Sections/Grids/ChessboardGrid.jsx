import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import CursorAnimation from "../../assets/cursor_new.json";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import TextPlugin from "gsap/TextPlugin";
import ChessBoard from "../../Components/Models/ChessBoards";
import ShineBorder from "../../Components/Styles/ShineBorder";
import {
  Avatar,
  Button,
  Card,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ChessboardGrid = () => {
  const textRef = useRef();
  const numberRef = useRef();

  const [scaleValues, setScaleValues] = useState({ left: 1, right: 1 });
  const [isFollowed, setIsFollowed] = useState(false);

  const chessBoardRef = useRef();

  useGSAP(() => {
    if (window.innerWidth > 768) {
      const handleMouseMove = (event) => {
        const { clientX } = event;
        const windowWidth = window.innerWidth;
        const mouseX = clientX;
        const scaleFactor = mouseX / windowWidth;
        const newScaleValues = {
          left: 0.5 + scaleFactor,
          right: 1.5 - scaleFactor,
        };
        setScaleValues(newScaleValues);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  });

  useEffect(() => {
    const split = new SplitText(textRef.current, { type: "words, chars" });

    gsap.fromTo(
      split.chars,
      { opacity: 0.1 },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 99%",
          end: "top 99%",
          // markers: true,
          toggleActions: "play none reset none",
        },
      }
    );

    gsap.fromTo(
      numberRef.current,
      { innerText: "0%" },
      {
        duration: 2,
        innerText: "89%",
        stagger: 0.05,
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          numberRef.current.innerText = `${Math.round(
            parseFloat(this.targets()[0].innerText)
          )}%`;
        },
      }
    );

    ScrollTrigger.create({
      trigger: ".canvas-chess",
      start: "top 99%",
      end: "top 99%",
      onEnter: () => {
        chessBoardRef.current.playAnimation();
      },
    });
  }, []);

  return (
    <div className="w-screen h-[100vh] flex justify-center items-center bg-transparent">
      {/* <div className=" absolute w-full h-full background-dots -z-10"></div> */}
      <div className=" absolute w-full h-full background-dots  -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:grid-rows-3 gap-4 w-[95%] h-[90%] md:w-[90%] md:h-[70%] z-10 p-2 md:p-4 rounded-2xl">
        <div className="col-span-1 md:col-span-2 justify-center row-span-1 md:row-span-3 flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4 h-2/5">
            <ShineBorder
              className="bg-[#111111] w-[60%] flex justify-center items-center rounded-3xl"
              color={["white"]}
            >
              <div
                ref={numberRef}
                className="text-[12vw] md:text-[5.5vw] font-international-bold  bg-gradient-to-b  bg-clip-text  text-transparent from-white dark:to-slate-900/10"
              >
                89%
              </div>
            </ShineBorder>
            <div className="bg-[#111111] w-[40%] flex justify-center items-center rounded-3xl">
              <div className="scale-75">
                <Lottie animationData={CursorAnimation} loop={true} />
              </div>
            </div>
          </div>
          <Card className=" dark bg-[#111111] h-30% md:h-full rounded-3xl ">
            <div className=" flex flex-col h-full justify-center  md:mx-10 ">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="lg"
                    src="./linearity.jpg"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600 text-[2vw] md:text-[1vw]">
                      Linearity
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400 text-[2vw] md:text-[1vw]">
                      @linearityhq
                    </h5>
                  </div>
                </div>
                <Button
                  className={
                    isFollowed
                      ? "bg-transparent text-foreground border-default-200"
                      : ""
                  }
                  color="primary"
                  radius="full"
                  variant={isFollowed ? "bordered" : "solid"}
                  onPress={() => setIsFollowed(!isFollowed)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </Button>
              </CardHeader>
              <div className="px-3 py-0 text-[4vw] md:text-[2vw] text-default-800 !h-auto flex flex-col justify-center">
                <p ref={textRef} className=" font-inter font-semibold">
                  89% of users turn to a competitor after a poor user experience
                </p>
              </div>

              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-600 text-[3vw] md:text-[1vw]">
                    189
                  </p>
                  <p className=" text-default-600 text-[3vw] md:text-[1vw]">
                    Following
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold6text-default-400 text-[3vw] md:text-[1vw]">
                    12.6K
                  </p>
                  <p className="text-default-600 text-[3vw] md:text-[1vw]">
                    Followers
                  </p>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
        <div className="bg-transparent col-span-1 md:col-span-2 row-span-1 md:row-span-3 flex justify-center items-center rounded-3xl relative canvas-chess">
          <Canvas
            className="!w-full !h-[35vh] md:!h-[40vh] lg:!h-full z-10"
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 11] }}
          >
            <group>
              <ChessBoard ref={chessBoardRef} />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
              />
            </group>
            <Environment preset="city" />
            <ambientLight intensity={Math.PI / 2} />
          </Canvas>

          <div className="absolute left-0 top-0 w-full h-full grid gap-x-10 grid-cols-2  pointer-events-none">
            <div
              className="rounded-3xl bg-[#111111] scale-transition origin-left"
              style={{ transform: `scale(${scaleValues.left}, 1)` }}
            ></div>
            <div
              className="rounded-3xl bg-neutral-200 scale-transition origin-right"
              style={{ transform: `scale(${scaleValues.right}, 1)` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessboardGrid;
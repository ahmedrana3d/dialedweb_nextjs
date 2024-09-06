import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import UserAnimation from "../../assets/user.json";
import { Canvas } from "@react-three/fiber";
import { Environment, Stage } from "@react-three/drei";
import Monitor from "../../Components/Models/Monitor";
import TextPlugin from "gsap/TextPlugin";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import BorderBeam from "../../Components/Styles/BorderBeam";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const MonitorGrid = () => {
  const textRef = useRef();
  const numberRef = useRef();
  const [isFollowed, setIsFollowed] = useState(false);

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
        innerText: "90%",
        stagger: 0.05,
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 99%",
          end: "top 99%",
          // markers: true,
          toggleActions: "play none reset none",
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          numberRef.current.innerText = `${Math.round(
            parseFloat(this.targets()[0].innerText)
          )}%`;
        },
      }
    );
  }, []);

  return (
    <div className="w-screen h-[100vh] flex justify-center items-center bg-transparent  ">
      <div className=" absolute w-full h-full background-dots  -z-10"></div>

      {/* <div class="absolute inset-0 size-full  " ></div> */}

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 z-10 md:grid-rows-3 gap-4 w-[95%] h-[90%] md:w-[90%] md:h-[70%] p-2 md:p-4  bg-transparent ">
        <div className="bg-[#111111]   col-span-1  md:col-span-2 row-span-1 md:row-span-3 flex justify-center items-center rounded-3xl relative ">
          <BorderBeam
            size={350}
            duration={12}
            delay={9}
            colorTo="white"
            colorFrom="grey"
          />

          <Canvas
            className="!w-full !h-[35vh] md:!h-[40vh] lg:!h-[50vh] xl:!h-[75vh]"
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 11] }}
          >
            <group>
              <Stage>
                <Monitor />
              </Stage>
            </group>
            <Environment preset="city" />
            <ambientLight intensity={Math.PI / 2} />
          </Canvas>
        </div>

        <div className="col-span-1 md:col-span-2 row-span-2 md:row-span-3 flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4 h-2/5">
            <div className="bg-[#111111] w-[60%] flex justify-center items-center rounded-3xl">
              <div
                ref={numberRef}
                className="text-[12vw] md:text-[5.5vw] font-international-bold bg-gradient-to-b  bg-clip-text  text-transparent from-white dark:to-slate-900/10"
              >
                90%
              </div>
            </div>
            <div className="bg-white w-[40%] flex justify-center items-center rounded-3xl">
              <div className="scale-75">
                <Lottie animationData={UserAnimation} loop={true} />
              </div>
            </div>
          </div>

          <Card className=" dark bg-[#111111] h-30% md:h-full rounded-3xl">
            <div className=" flex flex-col h-full justify-center  md:mx-10 ">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="lg"
                    src="./forbes.jpg"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600 text-[2vw] md:text-[1vw]">
                      Forbes
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400 text-[2vw] md:text-[1vw]">
                      @Forbes
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
                  90% of users cite poor design as a primary reason for not
                  trusting a website
                </p>
              </div>

              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-600 text-[3vw] md:text-[1vw]">
                    4,877
                  </p>
                  <p className=" text-default-600 text-[3vw] md:text-[1vw]">
                    Following
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold6text-default-400 text-[3vw] md:text-[1vw]">
                    20.1M
                  </p>
                  <p className="text-default-600 text-[3vw] md:text-[1vw]">
                    Followers
                  </p>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MonitorGrid;
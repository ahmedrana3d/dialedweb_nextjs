import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Page4 = () => {
  const statRef = useRef(true);


  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;


  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
     
      if (statRef.current) {
        const animationsTriggered = {};
  
        const tl = gsap.timeline({
          ease: "power0",
          scrollTrigger: {
            trigger: ".scroller-pin",
            //  endTrigger : endTrigger.current,
            start: "center center",
            end: `+=400%`,
            ease: "none",
            scrub: true,
            pin: true,
            // markers: true,
          },
        });
  
        // Function to update opacity based on scale
        const updateOpacity = (element, scale) => {
          const opacity = scale === 1 ? 0 : 1;
          gsap.set(element, { opacity: opacity });
        };
  
        const highlightText = (element) => {
          gsap.to(`.tes-button.${element}`, { opacity: 1 });
          gsap.to(`.tes-button:not(.${element})`, {
            opacity: 0.5,
          });
        };
  
        tl.fromTo(
          statRef.current,
          { translateY: "1%" },
          { translateY: "-18%", ease: "none" },
          ">"
        )
          .to(
            ".image-1",
            {
              scale: 1,
              ease: "none",
              onUpdate: function () {
                updateOpacity(".image-1", this.targets()[0]._gsap.scaleX);
                highlightText("user-eng");
              },
            },
            "<"
          )
          .to(
            ".image-2",
            {
              scale: 0.9,
              ease: "none",
            },
            "<"
          )
          .to(
            ".image-3",
            {
              scale: 0.8,
              ease: "none",
            },
            "<"
          )
          .to(
            ".image-4",
            {
              scale: 0.7,
              ease: "none",
            },
            "<"
          );
  
        tl.fromTo(
          statRef.current,
          { translateY: "-18%" },
          { translateY: "-44%", ease: "none" },
          ">"
        )
          .to(
            ".image-2",
            {
              scale: 1,
              ease: "none",
              onUpdate: function () {
                updateOpacity(".image-2", this.targets()[0]._gsap.scaleX);
                highlightText("conversion-rate");
              },
            },
            "<"
          )
          .to(
            ".image-3",
            {
              scale: 0.9,
              ease: "none",
            },
            "<"
          )
          .to(
            ".image-4",
            {
              scale: 0.8,
              ease: "none",
            },
            "<"
          );
  
        tl.fromTo(
          statRef.current,
          { translateY: "-44%" },
          { translateY: "-70%", ease: "none" },
          ">"
        )
          .to(
            ".image-3",
            {
              scale: 1,
              ease: "none",
              onUpdate: function () {
                updateOpacity(".image-3", this.targets()[0]._gsap.scaleX);
                highlightText("customer-exp");
              },
            },
            "<"
          )
          .to(
            ".image-4",
            {
              scale: 0.9,
              ease: "none",
            },
            "<"
          );
  
        tl.fromTo(
          statRef.current,
          { translateY: "-70%" },
          { translateY: "-79%", ease: "none" },
          ">"
        ).to(
          ".image-4",
          {
            scale: 1,
            ease: "none",
            onUpdate: () => {
              highlightText("brand-img");
            },
          },
          "<"
        );
      }


    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);






  function takeToElement(element) {
    const targetElement = document.getElementById(`${element}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <section className=" hidden md:block z-20 testimonials  text-gray-200   relative">
        <div className=" scroller-pin   top-0 ">
          <div className="h-[100vh]  w-[10rem]  top-0 buttons pl-[calc(100vw/12)] z-[200] flex flex-col justify-center text-regular30 gap-[.67rem]">
            <button
              data-name="events"
              className="text-left tes-button capitalize user-eng text-3xl leading-relaxed"
              onClick={() => {
                takeToElement("engagement");
              }}
            >
              Engagement
            </button>

            <button
              data-name="share homes"
              className="text-left tes-button capitalize conversion-rate text-3xl leading-relaxed opacity-50"
              onClick={() => {
                takeToElement("conversion");
              }}
            >
              Conversion
            </button>
            <button
              data-name="cost splitting"
              className="text-left tes-button capitalize customer-exp text-3xl leading-relaxed opacity-50"
              onClick={() => {
                takeToElement("experience");
              }}
            >
              {" "}
              Experience
            </button>
            <button
              data-name="sync plans"
              className="text-left tes-button capitalize brand-img text-3xl leading-relaxed opacity-50"
              onClick={() => {
                takeToElement("image");
              }}
            >
              Image
            </button>
          </div>
          <div className=" mt-[-100vh] h-screen  top-[0] px-[calc(100vw/12)] flex flex-row justify-center  md:justify-between items-center">
            <div className="h-[100vh] w-[7rem] buttons  flex-col justify-center text-regular30 gap-[.67rem] hidden md:flex"></div>
            <div
              className="frame-container w-[100vw] md:w-[calc((100vw/12)*8)] bg-red-gradient border-4 border-white md:pr-[0.4rem] h-[calc(13rem+53vh)] rounded-[4rem] flex justify-between"
              style={{
                backgroundImage: `linear-gradient(111deg, rgb(0, 0, 0) 13.66%, rgb(106 106 106) 63.68%)`,
              }}
            >
              <div className="relative w-full md:w-[57%] h-full overflow-hidden flex justify-center rounded-[3rem]">
                <div className="relative w-full lg:w-[100%] h-full overflow-hidden mx-[3vw] ">
                  <div
                    ref={statRef}
                    className="tes-scroll-content w-4/5 text-center md:text-start absolute flex flex-col gap-80 md:pl-[2.03rem] md:pr-[.2rem] top-[calc(((71vh-20.3rem)/2)*-1)]"
                    style={{ transform: "translate(0px, 13%)" }}
                  >
                    <div className="min-h-[15.6rem] user-engagement tes-content h-screen gap-[5rem] flex flex-col justify-center">
                      <h6 className="text-[1.64rem] md:text-[2.2vw] leading-snug font-sf-bold tracking-wide capitalize">
                        Increase User Engagement with Interactivity
                      </h6>
                      <h6 className="text-[4vw] md:text-xl xl:text-[1.3vw] xl:leading-[1.4] font-inter">
                        Websites with interactive elements see a 40% increase in
                        user time spent on site
                      </h6>

                      <div className="test-img-mask block md:hidden ">
                        <img
                          alt=""
                          loading="lazy"
                          className="w-[100%] origin-top   rounded-[3rem] object-cover"
                          src="./car_image.jpg"
                        />
                      </div>
                    </div>
                    <div className="min-h-[15.6rem] tes-content h-screen gap-[5rem] flex flex-col justify-center">
                      <h6 className="text-[1.64rem] md:text-[2.4vw] leading-snug font-sf-bold tracking-wide capitalize">
                        Transform Sales with 3D Product Configurations
                      </h6>
                      <h6 className="text-[4vw] md:text-[2vw] xl:text-[1.3vw] xl:leading-[1.4] font-inter">
                        3D product views can increase conversion rates by up to
                        250%
                      </h6>
                      <div className="test-img-mask block md:hidden ">
                        <img
                          alt=""
                          loading="lazy"
                          className="w-[100%] origin-top   rounded-[3rem] object-cover"
                          src="/soda_image.jpg"
                        />
                      </div>
                    </div>
                    <div className="min-h-[15.6rem] tes-content h-screen gap-[5rem] flex flex-col justify-center">
                      <h6 className="text-[1.64rem] md:text-[2.4vw] leading-snug font-sf-bold tracking-wide capitalize">
                        Avoid Losing Customers, Enhance User Experience
                      </h6>
                      <h6 className="text-[4vw] md:text-[2vw] xl:text-[1.3vw] xl:leading-[1.4] font-inter">
                        89% of consumers turn to a competitor after a poor user
                        experience
                      </h6>
                      <div className="test-img-mask block md:hidden ">
                        <img
                          alt=""
                          loading="lazy"
                          className="w-[100%] origin-top   rounded-[3rem] object-cover"
                          src="./vr_image.jpg"
                        />
                      </div>
                    </div>
                    <div className="min-h-[15.6rem] tes-content h-screen gap-[5rem] flex flex-col justify-center">
                      <h6 className="text-[1.64rem] md:text-[2.4vw] leading-snug font-sf-bold tracking-wide capitalize">
                        Get ahead of the curve.
                      </h6>
                      <h6 className="text-[4vw] md:text-xl xl:text-[1.3vw] xl:leading-[1.4] font-inter">
                        A 3D website sets your brand apart from competitors by
                        offering a cutting-edge, modern online experience.
                      </h6>
                      <div className="test-img-mask block md:hidden ">
                        <img
                          alt=""
                          loading="lazy"
                          className="w-[100%] origin-top   rounded-[3rem] object-cov[2rem] xl:leading-[1.2]"
                          src="./player_image.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="images-container w-[43%] relative hidden md:block">
                <div
                  className="test-img-mask"
                  style={{ opacity: 1, display: "flex" }}
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="1000"
                    height="1200"
                    className="w-[100%] origin-top absolute h-3/4 top-[50%] rounded-[2rem] object-cover image-1"
                    style={{
                      transform:
                        "translate(0%, -50%) translate(0px, 1rem) scale(0.9, 0.9)",
                      opacity: 2.132,
                      zIndex: 4,
                    }}
                    src="/soda_image.jpg"
                  />
                </div>
                <div className="test-img-mask">
                  <img
                    alt=""
                    loading="lazy"
                    width="1000"
                    height="1200"
                    className="w-[100%] origin-top absolute h-3/4 top-[50%] rounded-[2rem] object-cover image-2"
                    style={{
                      transform:
                        "translate(0%, -50%) translate(0px, 0.35rem) scale(0.8, 0.8)",
                      opacity: 1.558,
                      zIndex: 3,
                    }}
                    src="./car_image.jpg"
                  />
                </div>
                <div className="test-img-mask">
                  <img
                    alt=""
                    loading="lazy"
                    width="1000"
                    height="1200"
                    className="w-[100%] origin-top absolute h-3/4 top-[50%] rounded-[2rem] object-cover image-3"
                    style={{
                      transform:
                        "translate(0%, -50%) translate(0px, -0.3rem) scale(0.7, 0.7)",

                      zIndex: 2,
                    }}
                    src="./vr_image.jpg"
                  />
                </div>
                <div className="test-img-mask">
                  <img
                    alt=""
                    loading="lazy"
                    width="1000"
                    height="1200"
                    className="w-[100%] origin-top absolute h-3/4 top-[50%] rounded-[2rem] object-cover image-4"
                    style={{
                      transform:
                        "translate(0%, -50%) translate(0px, -0.95rem) scale(0.6, 0.6)",

                      zIndex: 1,
                    }}
                    src="./player_image.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tes-scroller-wrapper w-[calc((100%-((100vw/12)*3))/2)] opacity-0 absolute left-[calc((100vw/12)*3)] pl-[2.03rem] pr-[2.2rem] top-[0]">
          <div className="tes-scroller h-[100vh] w-full" id="engagement"></div>
          <div
            className="tes-scroller  absolute top-[130vh] h-[20vh] w-full"
            id="conversion"
          ></div>
          <div
            className="tes-scroller  absolute top-[230vh] h-[20vh] w-full"
            id="experience"
          ></div>
          <div
            className="tes-scroller  absolute top-[400vh] h-[20vh] w-full"
            id="image"
          ></div>
        </div>
      </section>

      <section className=" flex justify-center items-center md:hidden h-screen w-screen">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          slidesPerGroup={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container flex justify-center items-center"
        >
          <SwiperSlide>
            <Image
              src="/soda_image.jpg"
              alt="slide_image"
              width={1000}
              height={1000}
              className="h-[20rem] object-cover rounded-[2rem] w-11/12"
            />
            <div className="tes-content h-auto pt-[2rem] flex flex-col justify-between text-center gap-4 text-white w-5/6 bg-black bg-opacity-50 p-4 rounded-lg">
              <h6 className="text-2xl font-bold tracking-wide capitalize leading-tight ">
                Increase User Engagement with Interactivity
              </h6>
              <h6 className="text-lg leading-relaxed text-shadow text-slate-200">
                Websites with interactive elements see a 40% increase in user
                time spent on site
              </h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/car_image.jpg"
              alt="slide_image"
              width={1000}
              height={1000}
              className="h-[20rem] object-cover rounded-[2rem]  w-11/12"
            />

            <div className="tes-content h-auto pt-[2rem] flex flex-col justify-between text-center gap-4 text-white w-5/6 bg-black bg-opacity-50 p-4 rounded-lg">
              <h6 className="text-2xl font-bold tracking-wide capitalize leading-tight ">
                Transform Sales with 3D Product Configurations
              </h6>
              <h6 className="text-lg leading-relaxed text-shadow text-slate-200">
                3D product views can increase conversion rates by up to 250%
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/player_image.jpg"
              alt="slide_image"
              width={1000}
              height={1000}
              className="h-[20rem] object-cover rounded-[2rem]  w-11/12"
            />
            <div className="tes-content h-auto pt-[2rem] flex flex-col justify-between text-center gap-4 text-white w-5/6 bg-black bg-opacity-50 p-4 rounded-lg">
              <h6 className="text-2xl font-bold tracking-wide capitalize leading-tight ">
                Get ahead of the curve.
              </h6>
              <h6 className="text-lg leading-relaxed text-shadow text-slate-200">
                A 3D website sets your brand apart from competitors by offering
                a cutting-edge, modern online experience.
              </h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/vr_image.jpg"
              alt="slide_image"
              width={1000}
              height={1000}
              className="h-[20rem] object-cover rounded-[2rem]  w-11/12"
            />
            <div className="tes-content h-auto pt-[2rem] flex flex-col justify-between text-center gap-4 text-white w-5/6 bg-black bg-opacity-50 p-4 rounded-lg">
              <h6 className="text-2xl font-bold tracking-wide capitalize leading-tight ">
                Avoid Losing Customers, Enhance User Experience
              </h6>
              <h6 className="text-lg leading-relaxed text-shadow text-slate-200">
                89% of consumers turn to a competitor after a poor user
                experience
              </h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Page4;
import React, { useEffect, useRef, useState, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faCube, faLink, faGlobe, faLanguage, faMap, faUser, faKey, faHandshake, } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section4 = () => {

//   useAnimateText(".four-animate-text")

  // useAnimateSmallHeadline(".why-us-title-1, .why-us-title-2, .why-us-title-3")

  const titleRef = useRef()
  const titleRef1 = useRef();
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const titleRef2 = useRef();
  const boxRef4 = useRef();
  const boxRef5 = useRef();
  const boxRef6 = useRef();
  const titleRef3 = useRef();
  const boxRef7 = useRef();
  const boxRef8 = useRef();
  const boxRef9 = useRef();
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

    gsap.fromTo( titleRef1.current, { opacity: 0 }, {  opacity: 1, duration: 1.5, ease: "power1", scrollTrigger: { trigger: titleRef1.current, start: "top bottom"}});
    gsap.fromTo( boxRef1.current, { yPercent: 50, opacity: 0 }, { delay: 0, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef1.current, start: "top bottom"}});
    gsap.fromTo( boxRef2.current, { yPercent: 50, opacity: 0 }, { delay: 0.25, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef2.current, start: "top bottom"}});
    gsap.fromTo( boxRef3.current, { yPercent: 50, opacity: 0 }, { delay: 0.5, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef3.current, start: "top bottom"}});

    gsap.fromTo( titleRef2.current, { opacity: 0 }, {  opacity: 1, duration: 1.5, ease: "power1", scrollTrigger: { trigger: titleRef2.current, start: "top bottom"}});
    gsap.fromTo( boxRef4.current, { yPercent: 50, opacity: 0 }, { delay: 0, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef4.current, start: "top bottom"}});
    gsap.fromTo( boxRef5.current, { yPercent: 50, opacity: 0 }, { delay: 0.25, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef5.current, start: "top bottom"}});
    gsap.fromTo( boxRef6.current, { yPercent: 50, opacity: 0 }, { delay: 0.5, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef6.current, start: "top bottom"}});

    gsap.fromTo( titleRef3.current, { opacity: 0 }, {  opacity: 1, duration: 1.5, ease: "power1", scrollTrigger: { trigger: titleRef3.current, start: "top bottom"}});
    gsap.fromTo( boxRef7.current, { yPercent: 50, opacity: 0 }, { delay: 0, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef7.current, start: "top bottom"}});
    gsap.fromTo( boxRef8.current, { yPercent: 50, opacity: 0 }, { delay: 0.25, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef8.current, start: "top bottom"}});
    gsap.fromTo( boxRef9.current, { yPercent: 50, opacity: 0 }, { delay: 0.5, yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef9.current, start: "top bottom"}});
  
  }, []);

    return (
      <>
        <section className="section four">
          <div className="four-content">
            <h1 className="headline four-animate-text" ref={titleRef} >What Sets Us Apart</h1>
            <div className="why-us-container">

              <div className="why-us-box">
              <div className="why-us-left">
                  <h1 className="subheadline why-us-title-1" ref={titleRef1} >Cutting Edge Technology</h1>
                </div>
                <div className="why-us-right">

                  <div ref={boxRef1} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row left" >
                      <FontAwesomeIcon icon={faFire} className="why-us-icon" />
                      <h1 className="description" >High performance</h1>
                      <p className="why-us-text-description" >Utilizes the power of the Graphics Processing Unit, rendering complex graphics and animations to handle large volumes of data at high frame rates. </p>
                    </div>
                  </div>

                  <div ref={boxRef2} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row center" >
                      <FontAwesomeIcon icon={faCube} className="why-us-icon" />
                      <h1 className="description" >Interactivity</h1>
                      <p className="why-us-text-description" >Supports real-time interactions where users can navigate 3D environments, manipulate objects, and experience dynamic content.</p>
                    </div>
                  </div>

                  <div ref={boxRef3} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row right" >
                      <FontAwesomeIcon icon={faLink} className="why-us-icon" />
                      <h1 className="description" >Cross-Platform Compatibility</h1>
                      <p className="why-us-text-description" >Designed to work flawlessly on a range of devices in order to allow users to enjoy our websites whether they are on a high-end desktop or a mobile device.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="why-us-box">
              <div className="why-us-left">
                  <h1 className="subheadline why-us-title-2" ref={titleRef2} >Global Reach</h1>
                </div>
                <div className="why-us-right">

                  <div ref={boxRef4} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row">
                      <FontAwesomeIcon icon={faGlobe} className="why-us-icon" />
                      <h1 className="description" >International Clientele</h1>
                      <p className="why-us-text-description" >Our services have a global appeal which allows us to attract clients worldwide and understand the nuances of different markets.</p>
                    </div>
                  </div>

                  <div ref={boxRef5} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row">
                      <FontAwesomeIcon icon={faLanguage} className="why-us-icon" />
                      <h1 className="description" >Multi-Lingual Team</h1>
                      <p className="why-us-text-description" >Our team’s diverse linguistic skills enable us to communicate with clients worldwide. We offer our services in multiple languages, ensuring clear and efficient communication.</p>
                    </div>
                  </div>

                  <div ref={boxRef6} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row">
                      <FontAwesomeIcon icon={faMap} className="why-us-icon" />
                      <h1 className="description" >Global Market Insights</h1>
                      <p className="why-us-text-description" >Our team’s international background gives us deep insights into different markets, tailoring our solutions to meet specific regional requirements.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="why-us-box">
              <div className="why-us-left">
                  <h1 className="subheadline why-us-title-3" ref={titleRef3} >Client-Centric Approach</h1>
                </div>

                <div className="why-us-right">

                  <div ref={boxRef7} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row">
                      <FontAwesomeIcon icon={faUser} className="why-us-icon" />
                      <h1 className="description" >Personalized Service</h1>
                      <p className="why-us-text-description" >We commence with thorough consultations to understand your vision and requirements, ensuring our services align seamlessly with your brand.</p>
                    </div>
                  </div>

                  <div ref={boxRef8} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row">
                      <FontAwesomeIcon icon={faKey} className="why-us-icon" />
                      <h1 className="description" >Collaborative Development</h1>
                      <p className="why-us-text-description" >We maintain continuous communication throughout development, ensuring the final product meets and exceeds your expectations.</p>
                    </div>
                  </div>

                  <div ref={boxRef9} className="why-us-right-row-wrapper" >
                    <div className="why-us-right-row">
                      <FontAwesomeIcon icon={faHandshake} className="why-us-icon" />
                      <h1 className="description" >Dedicated Partnership</h1>
                      <p className="why-us-text-description" >We see clients as long-term partners, committed to your success with ongoing support and strategic advice to enhance your client’s web experiences.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    )
}
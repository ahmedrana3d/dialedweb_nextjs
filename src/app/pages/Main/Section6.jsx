import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section6 = () => {

  const titleRef = useRef()
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const boxRef4 = useRef();
  const boxRef5 = useRef();
  const boxRef6 = useRef();
  const [flippedIndex, setFlippedIndex] = useState(null);
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

    gsap.fromTo( boxRef1.current, { scaleX: 0, rotate: 10 }, { delay: 0, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef1.current, start: "top bottom"}});
    gsap.fromTo( boxRef2.current, { scaleX: 0, rotate: 10 }, { delay: 0.25, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef2.current, start: "top bottom"}});
    gsap.fromTo( boxRef3.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0 : 0.5, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef3.current, start: "top bottom"}});
    gsap.fromTo( boxRef4.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0.25 : 0, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef4.current, start: "top bottom"}});
    gsap.fromTo( boxRef5.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0 : 0.25, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef5.current, start: "top bottom"}});
    gsap.fromTo( boxRef6.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0.25 : 0.5, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef6.current, start: "top bottom"}});
  }, []);

  // CARD FLIP
  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  // FLOATING DIV

  const floatingDiv = useRef();
  const [showFloatingDiv, setShowFloatingDiv] = useState(false);

  useEffect(() => {
      let mouseX = 0;
      let mouseY = 0;
      let ballX = 0;
      let ballY = 0;
      const speed = 0.1;

      const handleMouseMove = (event) => {
          mouseX = event.clientX;
          mouseY = event.clientY;
      };

      const animate = () => {
          const distX = mouseX - ballX;
          const distY = mouseY - ballY;

          ballX += distX * speed;
          ballY += distY * speed;

          if (floatingDiv.current) {
              floatingDiv.current.style.left = `${ballX}px`;
              floatingDiv.current.style.top = `${ballY}px`;
          }

          requestAnimationFrame(animate);
      };

      animate();

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);

  useEffect(() => {
      if (showFloatingDiv) {
          gsap.to(floatingDiv.current, {
              autoAlpha: 1, // This sets both opacity and visibility
              scale: 1,
              duration: 0.3,
              ease: 'power3.out',
          });
      } else {
          gsap.to(floatingDiv.current, {
              autoAlpha: 0, // This sets both opacity and visibility
              scale: 0,
              duration: 0.3,
              ease: 'power3.in',
          });
      }
  }, [showFloatingDiv]);
  

  const handleMouseEnter = () => {
      setShowFloatingDiv(true);
  };
  
  const handleMouseLeave = () => {
      setShowFloatingDiv(false);
  };

  return (
    <>
      <section className="section six">
        <div className="six-content">
          <h1 className="headline six-content-headline" ref={titleRef} >Our Services</h1>
          <div className="six-content-top">
            <div className="six-content-row" onMouseEnter={() => { handleMouseEnter(); }} onMouseLeave={() => { handleMouseLeave(); }} >
              {[
                {
                  title: "Websites",
                  services: [
                    "E-commerce Integration",
                    "Interactive 3D configurators",
                    "Frontend Development",
                    "Storytelling Functionalities",
                    "CMS Integration",
                  ],
                },
                {
                  title: "Design",
                  services: [
                    "Layout",
                    "Typography",
                    "Visual Content",
                    "Iconography",
                    "Color theory",
                  ],
                },
                {
                  title: "Visualization",
                  services: [
                    "Exterior/Interior Renderings",
                    "Architectural Walkthroughs",
                    "Augmented Reality (AR)",
                    "Virtual Reality (VR)",
                    "Product Renderings",
                  ],
                },
                {
                  title: "Data",
                  services: [
                    "Performance Analysis",
                    "SEO Audit",
                    "Content Assessment",
                    "Security Assessment",
                    "UI/UX Evaluation",
                  ],
                },
                {
                  title: "Animation",
                  services: [
                    "Custom Micro Animation",
                    "Product Visualization",
                    "SVG Sequences",
                    "VIRTUAL FX",
                    "Motion Graphics",
                  ],
                },
                {
                  title: "Consultation",
                  services: [
                    "Branding",
                    "Market Research",
                    "Audience Analysis",
                    "Maintenance Plans",
                    "Strategic Planning",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`six-content-row-box six-outside ${
                    flippedIndex === index ? "flipped" : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                  ref={ index === 0
                      ? boxRef1
                      : index === 1
                      ? boxRef2
                      : index === 2
                      ? boxRef3
                      : index === 3
                      ? boxRef4
                      : index === 4
                      ? boxRef5
                      : index === 5
                      ? boxRef6
                      : null
                  }
                >
                  <div className="six-inside">
                    <div className="front">
                      <div className="front-top">
                        <h1 className="subheadline">{item.title}</h1>
                      </div>
                      <div className="front-bottom">
                        <h1 className="description">Info</h1>
                        <div className="front-bottom-circle">
                          <FontAwesomeIcon icon={faPlus} className="fa-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="back-content">
                        {item.services.map((service, i) => (
                          <div key={i} className="back-content-box">
                            <h1 className="small-description black">{service}</h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="floating-div" ref={floatingDiv}>
          <h1>CLICK</h1>
        </div>
      </section>
    </>
  );
};
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { SectionFooter } from "../pages/Main/SectionFooter";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const itemRefs = useRef([]);

  // ISMOBILE
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  // GSAP ANIMATIONS
  useEffect(() => {
    const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
    gsap.fromTo(titleRef.current, { rotationX: 70, opacity: 0, transformOrigin: 'center bottom', transformPerspective: 500 },
      { rotationX: 0, opacity: 1, duration: 1.25, ease: 'back.out', scrollTrigger: { trigger: titleRef.current, start: "top bottom" } }
    );
    gsap.from(titleSplitText.chars, { yPercent: 50, stagger: 0.03, opacity: 0, ease: 'power1.out', duration: 0.5, scrollTrigger: { trigger: titleRef.current, start: "top bottom" } });
    
    const split = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(split.words, 
      { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, {
        ease: 'sine',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.025,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom"
        }
      });

    // GSAP animation for each five-content-item
    itemRefs.current.forEach((item, index) => {
      gsap.fromTo(item, 
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.2,
          ease: "power3",
          scrollTrigger: {
            trigger: item,
            start: "top bottom"
          }
        }
      );
    });
  }, []);

  // OTHER
  const teamMembers = [
    { name: "Idan Zeidman", title: "Co-CEO & Co-Founder" },
    { name: "Lorenzo Noya", title: "Co-CEO & Co-Founder" },
    { name: "Matvey Vasilyev", title: "COO & Co-Founder" },
    { name: "Rainer Ahi", title: "CTO" },
    { name: "Sardor Xujamov", title: "Visualization Expert" },
    { name: "Ahmed Farooq", title: "Head of Development" },
    { name: "Ismael Benmoussa", title: "Project Manager" },
  ];

  return (
    <ReactLenis root>
      <section className="section five about">
        <div className="five-content">
          <div className="five-content-textbox">
            <h1 className="headline five-title" ref={titleRef}>A global network of talent</h1>
            <p className="description" ref={descriptionRef}>We've assembled a team of dedicated professionals from diverse backgrounds who share the same passion for your brand as you do.</p>
          </div>
          <div className="five-content-list">
            {teamMembers.map((member, index) => (
              <div 
                className="five-content-item" 
                key={index}
                ref={el => itemRefs.current[index] = el} // Assign each element to itemRefs
              >
                <div className="five-content-item-inside">
                  <h1 className="five-content-item-text">{member.name}</h1>
                </div>
                <div className="five-content-item-inside">
                  <h1 className="five-content-item-text">{member.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};

export default AboutPage;

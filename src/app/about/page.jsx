"use client";
import { useEffect } from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'


const AboutPage = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    { name: "Idan Zeidman", title: "Co-CEO & Co-Founder" },
    { name: "Lorenzo Noya", title: "Co-CEO & Co-Founder" },
    { name: "Matvey Vasilyev", title: "COO & Co-Founder" },
    { name: "Ismael Benmoussa", title: "CFO" },
    { name: "Rainer Ahi", title: "CTO" },
    { name: "Sardor Xujamov", title: "Visualization Expert" },
    { name: "Ahmed Farooq", title: "Head of Development" },
  ];

  return (
  <ReactLenis root>
    <section className="section five about" >
      <div className="five-content">
        <div className="five-content-textbox">
          <h1 className="headline five-title" >A global network of talent</h1>
          <p className="description" >We've assembled a team of dedicated professionals from diverse backgrounds who share the same passion for your brand as you do.</p>
        </div>
        <div className="five-content-list">
          {teamMembers.map((member, index) => (
            <div className="five-content-item" key={index}>
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
  </ReactLenis>
  );
}

export default AboutPage;
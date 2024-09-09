import React, { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const SectionFooter = () => {
    const router = useRouter();
    const logoRef = useRef();
    const titleRef = useRef()
    const descriptionRef = useRef();
    const lineRef = useRef();
    const copyrightRef = useRef();

    // GSAP ANIMATIONS

    useEffect(() => {
        const titleSplitText = new SplitText(titleRef.current, { type: 'chars' });
        gsap.fromTo(titleRef.current, { rotationX: 70, opacity: 0, transformOrigin: 'center bottom', transformPerspective: 500, },
          { rotationX: 0, opacity: 1, duration: 1.25, ease: 'back.out', scrollTrigger: { trigger: titleRef.current, start: "top bottom" } }
        );
        gsap.from(titleSplitText.chars, { yPercent: 50, stagger: 0.03, opacity: 0, ease: 'power1.out', duration: 0.5, scrollTrigger: { trigger: titleRef.current, start: "top bottom" } });

        gsap.fromTo(logoRef.current, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: logoRef.current, start: "top bottom" } });
        
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

        gsap.fromTo(".footer-animate-description", { yPercent: 100, opacity: 0 }, { stagger: { amount: 0.5 }, yPercent: 0, opacity: 1, duration: 0.5, ease: "power3", scrollTrigger: { trigger: ".footer-animate-description", start: "top bottom" } });
        gsap.fromTo(lineRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: lineRef.current, start: "top bottom" } });
        gsap.fromTo(copyrightRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: copyrightRef.current, start: "top bottom" } });
        gsap.fromTo(".footer-icon", { xPercent: 100, opacity: 0 }, { stagger: { amount: 0.5 }, xPercent: 0, opacity: 1, duration: 0.5, ease: "power3", scrollTrigger: { trigger: ".footer-icon", start: "top bottom" } });
    }, []);

    // NAVIGATION

    const handleClick = (linkUrl) => {
        window.open(linkUrl, '_blank');
    };

    const handleNavigateClick = (linkUrl) => {
        router.push(linkUrl);
    };

    return (
        <section className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img loading="lazy" ref={logoRef} className="footer-logo" src="/loading.png" alt="" />
                    <h1 className="headline footer-main-title-text" ref={titleRef} >Dialedweb</h1>
                    <p className="description grey" ref={descriptionRef}>Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
                </div>
                <div className="footer-content-right">
                    <div className="footer-content-right-column">
                        <h2 className="description footer-animate-description">Company</h2>
                        <div className="footer-column-contents">
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/'); }}>Home</p>
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/about'); }}>About</p>
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/projects'); }}>Projects</p>
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/learn-more'); }}>Learn More</p>
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/contact'); }}>Get In Touch</p>
                        </div>
                    </div>
                    <div className="footer-content-right-column">
                        <h2 className="description footer-animate-description">Legal</h2>
                        <div className="footer-column-contents">
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/privacy-policy'); }}>Terms of Service</p>
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/privacy-policy'); }}>Privacy Policy</p>
                            <p className="description footer-description footer-animate-description" onClick={() => { handleNavigateClick('/privacy-policy'); }}>Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-divider" ref={lineRef} />
            <div className="footer-content-bottom">
                <p className="small-description grey" ref={copyrightRef}>2024 © All Rights Reserved</p>
                <div className="footer-socials">
                    <div className="footer-icon-box" onClick={() => { handleClick('https://www.instagram.com/dialedweb/') }} >
                        <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                    </div>
                    <div className="footer-icon-box" onClick={() => { handleClick('https://www.instagram.com/dialedweb/') }} >
                        <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
                    </div>
                    <div className="footer-icon-box" onClick={() => { handleClick('https://www.linkedin.com/company/dialed-web/') }} >
                        <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

import { useEffect, useRef, useState } from "react";
import "./About.css";

import profile from "../assets/image.png"; // change path if needed
import AboutDetails from "../components/AboutDetails";
import SkillStrip from "../components/SkillStrip";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";

import { FaArrowDown, FaArrowUp, FaLocationDot } from "react-icons/fa6";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";

function About() {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);

  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;
      const section = aboutRef.current;
      const image = imageRef.current;
      const height = section.offsetHeight;

      /* Detect direction */
      if (current > lastScroll) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      lastScroll = current;

      /* Fade effect */
      const startFade = height * 0.4;

      if (current > startFade) {
        const progress = (current - startFade) / (height * 0.6);

        const opacity = Math.max(1 - progress, 0);
        const translate = progress * 80;

        section.style.opacity = opacity;
        section.style.transform = `translateY(-${translate}px)`;
      } else {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }

      /* Image slow move (30–40px) */
      if (image) {
        const maxMove = 40; // max pixels
        const move = Math.min(current * 0.08, maxMove);

        image.style.transform = `translateX(-50%) translateY(${move}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Scroll Controls */
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section className="about-section">
        <div className="about-container" ref={aboutRef}>
          {/* Intro */}
          <p className="about-intro">
            👋 my name is Rohit Kavathekar and i am a developer
          </p>

          {/* Headings */}
          <h1 className="about-title">WEB DEVELOPER</h1>
          <h2 className="about-outline">ENGINEER</h2>

          {/* Location */}
          <div className="about-location">
            <FaLocationDot />
            <span>Sangli, Maharashtra</span>
          </div>

          {/* Image */}
          {/* <div className="about-image-box"> */}
          <div className="about-image-box" ref={imageRef}>
            <img src={profile} alt="Rohit" />
          </div>

          {/* Button */}
          <div className="about-btn-box">
            <button className="about-btn">
              Connect Me
              <span>➜</span>
            </button>
          </div>

          {/* Scroll Arrows */}
          <div className="about-scroll">
            <button
              onClick={scrollUp}
              className={`scroll-btn ${scrollDir === "up" ? "active" : ""}`}
            >
              <HiArrowUp />
            </button>

            <button
              onClick={scrollDown}
              className={`scroll-btn ${scrollDir === "down" ? "active" : ""}`}
            >
              <HiArrowDown />
            </button>
          </div>
        </div>
      </section>

      {/* nn */}
      <AboutDetails />

      {/* skill strip  */}
      <SkillStrip />

      <SkillsSection />

      <WorkSection />
    </div>
  );
}

export default About;

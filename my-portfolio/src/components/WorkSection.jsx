import { useState, useEffect, useRef } from "react";
import "./WorkSection.css";
import gsap from "gsap";

import cdac from "../assets/ecom111.png";
import eng1 from "../assets/eng1.jpg";
import eng2 from "../assets/eng2.jpg";
import diploma from "../assets/diploma.png";
import solar from "../assets/solar11.png";

const projects = [
  {
    id: 1,
    title: "CDAC E-Commerce Platform",
    year: "2025",
    image: cdac,
    desc: "Complete e-commerce platform with payment and admin panel.",
  },
  {
    id: 2,
    title: "Solar Dryer System",
    year: "2023",
    image: eng1,
    desc: "Solar-powered agricultural drying system.",
  },
  {
    id: 3,
    title: "Pneumatic Cutting Machine",
    year: "2022",
    image: eng2,
    desc: "Automated metal cutting using pneumatic power.",
  },
  {
    id: 4,
    title: "Diploma",
    year: "2023",
    image: diploma,
    desc: "4 way hacksaw cutting machine .",
  },
  {
    id: 5,
    title: "Research Paper",
    year: "2023",
    image: solar,
    desc: "Advanced research on solar drying techniques.",
  },
];

export default function WorkSection() {
  const [active, setActive] = useState(0);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  /* GSAP Animation */
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6 },
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
    );
  }, [active]);

  /* SHOW ONLY 3 THUMBNAILS */
  const getVisibleThumbs = () => {
    const total = projects.length;

    let start = active - 1;
    let end = active + 1;

    if (start < 0) {
      start = 0;
      end = 2;
    }

    if (end >= total) {
      end = total - 1;
      start = total - 3;
    }

    return projects.slice(start, end + 1);
  };

  const next = () => {
    setActive((p) => (p === projects.length - 1 ? 0 : p + 1));
  };

  const prev = () => {
    setActive((p) => (p === 0 ? projects.length - 1 : p - 1));
  };

  return (
    <section className="work-section">
      {/* HEADER */}
      <div className="work-header">
        <h1>My Work</h1>
        <span className="header-line"></span>
      </div>

      <div className="work-container">
        {/* LEFT SIDE */}
        <div className="work-left">
          {/* THUMBNAILS (ONLY 3) */}
          <div className="thumb-row">
            {getVisibleThumbs().map((p) => {
              const index = projects.findIndex((item) => item.id === p.id);

              return (
                <img
                  key={p.id}
                  src={p.image}
                  alt=""
                  className={index === active ? "thumb active" : "thumb"}
                  onClick={() => setActive(index)}
                />
              );
            })}
          </div>

          {/* BIG IMAGE */}
          <div className="big-image" ref={imageRef}>
            <img src={projects[active].image} alt="" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="work-right" ref={textRef}>
          <span className="work-year">{projects[active].year}</span>

          <h2 className="txt1">{projects[active].title}</h2>

          <p className="txt2">{projects[active].desc}</p>

          {/* NAV */}
          <div className="nav-controls">
            <button onClick={prev}>
              <span className="material-symbols-outlined">
                arrow_circle_left
              </span>
            </button>

            <button onClick={next}>
              <span className="material-symbols-outlined icon1">
                arrow_circle_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

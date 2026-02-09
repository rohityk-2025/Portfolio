import { useState, useRef, useEffect } from "react";
import "./Projects.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";

/* Assets */
import projectMain from "../assets/project-main.jpeg";
// import adminImg from "../assets/admin.jpeg";
// import productImg from "../assets/details.jpeg";
// import profileImg from "../assets/profile1..jpeg";
// import detailsImg from "../assets/product.jpeg";

import adminImg from "../assets/RM-admin.png";
import productImg from "../assets/RM-productdetails111.png";
import profileImg from "../assets/RM-profile.png";
import detailsImg from "../assets/RM-productdetails.png";
import casestudy from "../assets/case-study.svg";

/* GSAP */
gsap.registerPlugin(ScrollTrigger);

function Project() {
  const caseItems = [
    { title: "Admin Dashboard", image: adminImg },
    { title: "Product Listing", image: productImg },
    { title: "User Profile", image: profileImg },
    { title: "Product Details", image: detailsImg },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage =
    activeIndex === null ? projectMain : caseItems[activeIndex].image;

  const caseRef = useRef(null);

  /* Animation */
  useEffect(() => {
    gsap.fromTo(
      ".project-wrapper",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: caseRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section ref={caseRef} className="project-section">
      {/* Header */}
      <div className="project-header">
        <h2 className="project-title">
          <img src={casestudy} alt="case" className="project-icon" />
          Project Case Study
        </h2>

        <p className="project-sub">
          Real projects. Real solutions. Real impact.
        </p>
      </div>

      <div className="project-wrapper">
        {/* Left */}
        <div className="project-left">
          <img
            src={activeImage}
            alt="project preview"
            className="project-image"
          />
        </div>

        {/* Right */}
        <div className="project-right">
          <h3 className="project-name">Recircle Mart</h3>

          <p className="project-desc">
            E-commerce platform with admin management, product systems, and user
            dashboards.
          </p>

          <ul className="project-list">
            {caseItems.map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <span className="material-symbols-outlined">
                  arrow_circle_right
                </span>
                {item.title}
              </li>
            ))}
          </ul>

          <div className="project-actions">
            {/* Live / Details Button */}
            <a
              // href="#"
              className="project-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Full Project
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>

            {/* GitHub Repo */}
            <a
              href="https://github.com/CDAC-Project-ReCircleMart/ReCircle-Mart"
              className="project-github"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

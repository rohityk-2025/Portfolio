import { useEffect, useRef, useState } from "react";
// import {useState} from "react";
import "./Home.css";
import profile from "../assets/image.png";
import newprofile from "../assets/newprofile1.jpeg";
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ======================bg wrapper ================
import BackgroundDecor from "../components/BackgroundDecor";

import {
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaLayerGroup,
  FaCogs,
  FaUserCog,
  FaList,
  FaUser,
  FaBoxOpen,
} from "react-icons/fa";

import { SiFigma } from "react-icons/si";

/* ================= IMAGES (REPLACE WITH YOUR REAL ONES) ================= */

import projectMain from "../assets/project-main.jpeg";
// import adminImg from "../assets/admin.jpeg";
import adminImg from "../assets/RM-admin.png";
import productImg from "../assets/RM-productdetails111.png";
import profileImg from "../assets/RM-profile.png";
import detailsImg from "../assets/RM-productdetails.png";
import casestudy from "../assets/case-study.svg";
import resume from "../assets/my-resume.pdf";

/* ================= GSAP ================= */

gsap.registerPlugin(TextPlugin, ScrollTrigger);

/* ================= SERVICE CARD ================= */

function ServiceCard({ icon, title }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>

      <button className="service-btn">
        Read More <span>→</span>
      </button>
    </div>
  );
}

/* ================= HOME ================= */

function Home() {
  /* ================= DATA ================= */

  const roles = [
    "Web Developer",
    "Software Developer",
    "Frontend Developer",
    "Designer",
  ];

  const caseItems = [
    {
      title: "Admin Dashboard",
      image: adminImg,
    },
    {
      title: "Product Listing",
      image: productImg,
    },
    {
      title: "User Profile",
      image: profileImg,
    },
    {
      title: "Product Details",
      image: detailsImg,
    },
  ];

  /* ================= STATE ================= */

  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage =
    activeIndex === null ? projectMain : caseItems[activeIndex].image;

  /* ================= REFS ================= */

  const stripRef = useRef(null);
  const roleRef = useRef(null);
  const servicesRef = useRef(null);
  const caseRef = useRef(null);

  /* ================= STRIP ================= */

  useEffect(() => {
    const strip = stripRef.current;
    const content = strip.children[0];

    strip.appendChild(content.cloneNode(true));

    let x = 0;
    let speed = 0.8;

    const width = content.offsetWidth;

    const animate = () => {
      x -= speed;

      if (x <= -width) x += width;

      gsap.set(strip, { x });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  /* ================= TYPEWRITER ================= */

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    roles.forEach((role) => {
      tl.to(roleRef.current, {
        duration: role.length * 0.12,
        text: role,
        ease: "none",
      })
        .to({}, { duration: 1.2 })
        .to(roleRef.current, {
          duration: role.length * 0.08,
          text: "",
        });
    });

    return () => tl.kill();
  }, []);

  /* ================= SERVICES SCROLL ================= */

  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: "none",

        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "top 35%",
          scrub: true,
        },
      },
    );
  }, []);

  /* ================= CASE STUDY SCROLL ================= */
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".case-wrapper",
      {
        opacity: 0,
        y: 100,
      },
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
  // ====================================================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyDgCgqTPlTYRJyrcmgjEW6lTJ--FShZQHEJnu4zg8-ED7J8f5o-VY3SecPnnLfsAtt/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );

      alert("Message sent successfully!");

      form.reset();
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  /* ================= JSX =============================================================*/

  return (
    <div className="page-wrapper">
      {/* ============================================= */}
      <BackgroundDecor count={25} />
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="home-left">
          <h1 className="home-title">
            <span className="hello-text">Hello!</span>

            <span className="name-text">
              I'm <b>Rohit</b>
            </span>
          </h1>

          {/* ROLE */}
          <div className="role-box">
            <span className="material-symbols-outlined wand">wand_stars</span>

            <p ref={roleRef} className="home-role"></p>
          </div>

          <p className="home-desc">
            Web Designer and Developer blending{" "}
            <strong className="cr">creativity</strong> with clean code.
            <br />
            Creating digital experiences that perform.
          </p>

          {/* Value Points */}
          <ul className="home-points">
            <li>
              <span className="material-symbols-outlined check-icon">
                check
              </span>
              Building fast, responsive, and reliable web solutions.
            </li>

            <li>
              <span className="material-symbols-outlined check-icon">
                check
              </span>
              Turning ideas into clean, functional digital products.
            </li>

            <li>
              <span className="material-symbols-outlined check-icon">
                check
              </span>
              Designing and developing websites that perform.
            </li>

            <li>
              <span className="material-symbols-outlined check-icon">
                check
              </span>
              Creating scalable, user-friendly web applications.
            </li>
          </ul>

          <div className="home-buttons">
            {/* <button className="btn-main">Let’s Talk</button>

            <button className="btn-outline">Download CV</button> */}
            <button className="btn-main" onClick={() => navigate("/contact")}>
              Let’s Talk
            </button>

            <button
              className="btn-outline"
              onClick={() => {
                window.open("/my-resume.pdf", "_blank");
              }}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="home-right">
          <div className="image-box">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </section>
      {/* ================= STRIP ================= */}
      <section className="skill-strip-gsap">
        <div ref={stripRef} className="strip-track-gsap">
          <div className="strip-content-gsap stripfont">
            <span>Web Development</span> ✦<span>Software Development</span> ✦
            <span>Frontend Development</span> ✦<span>Web Design</span> ✦
            <span>Webflow</span> ✦<span>UI / UX</span> ✦
          </div>
        </div>
      </section>
      {/* ================= SERVICES ================= */}
      <section ref={servicesRef} className="services-section">
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>SCROLL DOWN</span>

          <div className="scroll-line"></div>

          <div className="scroll-circle">↓</div>
        </div>

        {/* Header */}
        <div className="services-header">
          <div>
            <p className="small-title">MY SERVICES</p>

            <h2>
              WHAT I’M <br /> OFFERING
            </h2>
          </div>

          <button className="all-service-btn">ALL SERVICES →</button>
        </div>

        {/* Cards */}
        <div className="services-grid">
          <ServiceCard icon={<FaCode />} title="Web Development" />

          <ServiceCard icon={<FaLaptopCode />} title="Software Development" />

          <ServiceCard icon={<FaLayerGroup />} title="Frontend Development" />

          <ServiceCard icon={<FaPaintBrush />} title="Website Design" />

          <ServiceCard icon={<SiFigma />} title="Figma" />

          <ServiceCard icon={<FaCogs />} title="UI / UX" />
        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
      <section ref={caseRef} className="case-section">
        {/* Title */}
        <div className="case-header">
          <h2 className="case-title">
            {/* <span className="case-title-icon">📌</span> */}
            <img src={casestudy} className="csi"></img>
            Case Study
          </h2>

          <p className="case-sub">
            Real projects. Real solutions. Real impact.
          </p>
        </div>

        <div className="case-wrapper">
          {/* LEFT IMAGE */}
          <div className="case-left">
            {/* Replace with your project images */}
            <img src={activeImage} alt="case-preview" className="case-image" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="case-right">
            <h3 className="case-project">Recircle Mart</h3>

            <p className="case-desc">
              E-commerce platform with admin management, product systems, and
              user dashboards.
            </p>

            {/* List */}
            <ul className="case-list">
              {caseItems.map((item, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  <span class="material-symbols-outlined">
                    arrow_circle_left
                  </span>

                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          {/* Button */}
          <a className="case-btn" onClick={() => navigate("/projects")}>
            See Details
            <span class="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bw-quote-section">
        <div className="quote-container">
          {/* Quote Card 1 */}
          <div className="quote-card">
            <span className="quote-mark">“</span>

            <p className="quote-text">
              <strong className="bold-text txt">Design</strong> is not just what
              it looks like and feels like.
              <br />
              <span className="bold-text txt ">Design</span> is how it works.
            </p>
          </div>

          {/* Quote Card 2 */}
          <div className="quote-card">
            <span className="quote-mark">“</span>

            <p className="quote-text">
              <strong className="bold-text txt">Great design</strong> turns
              complex ideas
              <br />
              into <span className="bold-text txt">simple experiences.</span>
            </p>
          </div>
          <p className="author-name">— Steve Jobs</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h1 className="contact-title">
          <span>Say Hi!</span> and lets have a
          <br />
          talk
        </h1>

        <p className="contact-sub">reach out and let’s chat.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" name="name" placeholder="Hello..." required />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Where can i reply"
                required
              />
            </div>
          </div>

          <div className="form-group full">
            <label>Company name</label>
            <input
              type="text"
              name="company"
              placeholder="Your company or website?"
            />
          </div>

          <button type="submit" className="send-btn">
            Send Me →
          </button>

          <p className="note">I’ll must get back to you within 24 hours</p>
        </form>
      </section>
      {/* Profile Intro Section */}
      <section className="profile-intro">
        <div className="line left"></div>

        <div className="profile-wrapper">
          {/* Circular Text */}
          <div className="circle-text">
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100
               m -75,0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
                />
              </defs>

              <text>
                <textPath href="#circlePath">
                  Code ✦ Create ✦ Improve ✦ Code ✦ Create ✦
                </textPath>
              </text>
            </svg>
          </div>

          {/* Profile Image */}
          <div className="profile-image">
            <img src={newprofile} alt="Profile" />
          </div>
        </div>

        <div className="line right"></div>

        {/* Name */}
        <h2 className="profile-name">Rohit Kavathekar</h2>

        {/* Tagline */}
        <p className="profile-tagline">
          Focused on growth. Committed to quality.
        </p>
      </section>
      {/* END --------------------------------------------------------------------- */}
    </div>
  );
}

export default Home;

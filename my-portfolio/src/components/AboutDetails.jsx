import "./AboutDetails.css";
import profile from "../assets/image.png";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function AboutDetails() {
  return (
    <section className="about-details-section">
      {/* Top Line */}
      {/* <div className="about-top-line"></div> */}

      <div className="about-details-container">
        {/* Left Vertical */}
        <div className="about-vertical">
          <span className="about-arrow">←</span>
          <span className="about-text">« ABOUT ME</span>
        </div>

        {/* Description */}
        <div className="about-desc">
          <p>
            I am a passionate web developer who loves building clean and
            functional websites.
          </p>

          <p>
            I focus on writing simple and efficient code that solves real
            problems.
          </p>

          <p>
            I enjoy working with modern tools like React, JavaScript, and
            Node.js.
          </p>

          <p>I am always learning new technologies and improving my skills.</p>

          <p>
            My goal is to create user-friendly and meaningful digital products.
          </p>
        </div>

        {/* Profile Area */}
        <div className="about-profile">
          {/* Image */}
          <div className="about-circle">
            <img src={profile} alt="Rohit" />
          </div>

          {/* Icons */}
          <div className="about-socials">
            <a href="#" title="GitHub">
              <FaGithub />
            </a>

            <a href="#" title="LinkedIn">
              <FaLinkedin />
            </a>

            <a href="mailto:example@gmail.com" title="Email">
              <FaEnvelope />
            </a>

            <a href="tel:+910000000000" title="Phone">
              <FaPhoneAlt />
            </a>
          </div>

          {/* Line */}
          <div className="about-line"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;

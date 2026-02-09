import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import Arrow from "../assets/right-up.png";
import R from "../assets/letter-r.png";
import K from "../assets/letter-k.png";

import "./Navbar.css";

function Navbar() {
  const rRef = useRef(null);
  const kRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Reset first
    gsap.set([rRef.current, kRef.current], {
      x: 0,
      rotation: 0,
    });

    tl
      // R moves from left
      .fromTo(
        rRef.current,
        { x: -80 },
        { x: 0, duration: 0.8, ease: "power3.out" },
      )

      // K moves from right
      .fromTo(
        kRef.current,
        { x: 80 },
        { x: 0, duration: 0.8, ease: "power3.out" },
        "<",
      )

      // Small bounce (collision)
      .to([rRef.current, kRef.current], {
        x: (i) => (i === 0 ? -6 : 6),
        duration: 0.12,
        ease: "power1.inOut",
      })

      // Back to center
      .to([rRef.current, kRef.current], {
        x: 0,
        duration: 0.15,
      })

      // Only K rotates
      .to(kRef.current, {
        rotation: 360,
        duration: 0.6,
        ease: "power2.out",
      });
  }, []);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <div className="logo-box">
            {/* <span className="logoname">RK✧ </span> */}
            <img ref={rRef} src={R} className="logos" alt="R" />
            <span className="logoname">✧✧ </span>
            {/* <img ref={kRef} src={K} className="logos" alt="K" /> */}
          </div>
        </Link>
      </div>

      {/* MENU */}
      <div className="nav-menu">
        <div className="nav-item">
          <span className="nav-line"></span>
          <Link to="/projects" className="linker">
            My Projects <img src={Arrow} className="arrow" />
          </Link>
          <p>See all my work</p>
        </div>

        <div className="nav-item">
          <span className="nav-line"></span>
          <Link to="/about" className="linker">
            About Me <img src={Arrow} className="arrow" />
          </Link>
          <p>Know more about me</p>
        </div>

        <div className="nav-item">
          <span className="nav-line"></span>
          <Link to="/contact" className="linker">
            Contact Me <img src={Arrow} className="arrow" />
          </Link>
          <p>Let’s work together</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

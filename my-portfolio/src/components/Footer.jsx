import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* LINE */}
      <div className="footer-line"></div>

      {/* CONTENT */}
      <div className="footer-content">
        {/* LEFT - SOCIALS */}
        <div className="footer-socials">
          <a
            href="https://github.com/rohityk-2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rohitykavathekar"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          {/* <a href="https://instagram.com/yourusername" target="_blank">
            Instagram
          </a>

          <a href="https://facebook.com/yourusername" target="_blank">
            Facebook
          </a> */}
        </div>

        {/* RIGHT - EMAIL */}
        <div className="footer-email">rohityk.2024@gmail.com</div>
      </div>
    </footer>
  );
}

export default Footer;

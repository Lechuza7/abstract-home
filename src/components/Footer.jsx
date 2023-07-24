import "./Footer.css";
import logo from "../assets/img/abstract-logo.png";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="abstract-links">
        <h6>Abstract</h6>
        <a href="">Start Trial</a>
        <a href="">Pricing</a>
        <a href="">Download</a>
      </div>

      <div className="resources-links">
        <h6>Resources</h6>
        <a href="">Blog</a>
        <a href="">Help Center</a>
        <a href="">Release Notes</a>
        <a href="">Status</a>
      </div>

      <div className="community-links">
        <h6>Community</h6>
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
        <a href="">Facebook</a>
        <a href="">Dribbble</a>
        <a href="">Podcast</a>
      </div>

      <div className="company-links">
        <h6>Company</h6>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Legal</a>
        <br />
        <p>Contact Us</p>
        <a href="mailto: mail@mail.com">info@abstract.com</a>
      </div>

      <div className="copyright-info">
        <img src={logo} style={{ maxWidth: "25px" }} alt="Corp Logo"></img>
        <p>
          © Copyright 2023<br />
          Abstract Studio Design, Inc.<br />
          All rights reserved<br />
        </p>
      </div>
    </div>
  );
}

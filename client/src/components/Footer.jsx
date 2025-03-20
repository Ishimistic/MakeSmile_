import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>Rotaract Club</h4>
          <ul>
            <li><Link to="/about-drishti">About Us</Link></li>
            <li><Link to="/our-initiative">Initiative</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </div>
       
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/drishti_rcbpit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/drishti-rcbpit/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
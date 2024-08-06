
import { Link } from "react-router-dom";
// import Ab

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="footer-col">
          <h4>Rotaract Club</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Work done</a></li>
          </ul>
        </div>
       
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
 </footer>
  );
}

export default Footer;

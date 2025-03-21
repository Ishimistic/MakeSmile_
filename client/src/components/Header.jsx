import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <div className="txt">MakeSmile</div>
      </div>
      
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      
      {/* Navigation menu - will be toggled on mobile */}
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <ul className="pages">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/our-initiative" onClick={toggleMenu}>Our Initiative</Link></li>
          <li><Link to="/about-drishti" onClick={toggleMenu}>About Drishti</Link></li>
        </ul>

        <div className="donateBtn">
          <Link to="/donate"><button onClick={toggleMenu}>Donate Toys/Books</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
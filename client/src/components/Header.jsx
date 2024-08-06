import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="txt">MakeSmile</div>
      </div>
      <div className="navbar-right">
          <ul className="pages">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-initiative">Our Initiative</Link></li>
            <li><Link to="/about-drishti">About Drishti</Link></li>
            {/* <li><Link to="#footer">Contact Us</Link></li> */}
          </ul>

          <div className="donateBtn">
            <Link to="/donate"><button>Donate Toys/Books</button></Link>
            
          </div>
      </div>
    </div>
  );
}

export default Header;

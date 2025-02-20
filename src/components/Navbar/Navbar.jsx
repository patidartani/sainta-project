import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/black1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar-main">
      <div className="Navbar-content">
        
        {/* Left Side - Logo */}
        <div className="nav-left">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className="ri-menu-3-line"></i>
        </div>

        {/* Right Side - Navigation Links & Button */}
        <div className={`nav-right ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <button className="nav-btn">資料請求</button>
        </div>

      </div> 
    </div>
  );
};

export default Navbar;

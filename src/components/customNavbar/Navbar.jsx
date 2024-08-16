import { useState, useEffect, useRef } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { logo } from "../../assets/icons";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Close menu when clicking outside (only on mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div className="nav">
      <nav className="navbar" ref={menuRef}>
        <div className="company-logo">
          <img src={logo} alt="innovation school" />
        </div>

        {/* Hamburger icon for mobile screens */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation links, visible on larger screens or when mobile menu is open */}
        <div className={`menu-list ${isMobile ? "mobile-menu" : ""}`}>
          <ul>
            <Link
              to="/"
              className="li"
              onClick={() => isMobile && toggleMobileMenu()}
            >
              Home
            </Link>
            <Link
              to="/course"
              className="li"
              onClick={() => isMobile && toggleMobileMenu()}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="li"
              onClick={() => isMobile && toggleMobileMenu()}
            >
              About
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

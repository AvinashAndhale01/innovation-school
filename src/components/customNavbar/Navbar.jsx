import { Link } from "react-router-dom";
import "./navbar.scss";
import { logo } from "../../assets/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar">
        <div className="company-logo">
          <Link to="/">
            <img src={logo} alt="innovation school" />
          </Link>
        </div>
        <div className="menu-list">
          <ul>
            <Link to="/" className="li">
              Home
            </Link>
            <Link to="/course" className="li">
              Courses
            </Link>
            <Link to="/about" className="li">
              About
            </Link>
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navbar;

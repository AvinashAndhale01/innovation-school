import "./footer.scss";
import {
  instagram,
  linkedin,
  youtube,
  twitterx,
  email,
  phone,
} from "../../assets/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <h4 className="title">Follow On</h4>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/innovationschoolio?igsh=MXJsMmlxYTh1N3g2bw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-media-icon instagram"
                src={instagram}
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/legal-innovation-global/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-media-icon linkedin"
                src={linkedin}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://youtube.com/@innovation_school.?si=LA95HZHVmXpItTjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-media-icon youtube"
                src={youtube}
                alt="YouTube"
              />
            </a>
            <a
              href="https://x.com/innovtionschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-media-icon twitterx"
                src={twitterx}
                alt="Twitter"
              />
            </a>
          </div>
        </div>
        <div className="useful-links">
          <h4>Company</h4>
          <div className="info">
            <Link to="/" className="info-d">
              Home
            </Link>
            <Link to="/about" className="info-d">
              About Us
            </Link>
            <a href="#" className="info-d">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="contact-us">
          <h4>Get In Touch</h4>
          <div className="info">
            <div className="phone icon">
              <img src={phone} alt="Phone" />
              <p>+91 7821807146</p>
            </div>
            <div className="email icon">
              <img src={email} alt="Email" />
              <p>innovationschool8@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 Innovation School</p>
      </div>
    </footer>
  );
};

export default Footer;

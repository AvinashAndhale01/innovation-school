import "./footer.scss";
import { instagram, linkedin, youtube, twitterx } from "../../assets/icons";
import { Link } from "react-router-dom";
import { email, phone } from "../../assets/icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <div className="title">
            <h4>Follow On</h4>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/innovationschoolio?igsh=MXJsMmlxYTh1N3g2bw=="
              target="_blank"
            >
              <img className="social-media-icon instagram" src={instagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/legal-innovation-global/"
              target="_blank"
            >
              <img className="social-media-icon linkedin" src={linkedin} />
            </a>
            <a
              href="https://youtube.com/@innovation_school.?si=LA95HZHVmXpItTjs"
              target="_blank"
            >
              <img className="social-media-icon youtube" src={youtube} />
            </a>
            <a href="https://x.com/innovtionschool" target="_blank">
              <img className="social-media-icon twitterx" src={twitterx} />
            </a>
          </div>
        </div>
        <div className="usefull-links">
          <h4>Company</h4>
          <div className="info">
            <Link to={"/about"} className="info-d">
              About Us
            </Link>
            <a href="#" className="info-d">
              {" "}
              Privacy policy
            </a>
          </div>
        </div>
        <div className="contact-us">
          <h4>Get Contact</h4>
          <div className="info">
            <div className="phone icon">
              <img src={phone} />
              <p> +91 7821807146</p>
            </div>
            <div className="email icon">
              <img src={email} />
              <p>innovationschool8@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p> Copyright &copy; 2024 Innovation School</p>
    </footer>
  );
};

export default Footer;

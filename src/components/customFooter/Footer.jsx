import "./footer.scss";
import { instagram, linkedin, youtube, twitterx } from "../../assets/icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <div className="title">
            <h4>Follow On</h4>
          </div>
          <div className="social-icon">
            <a href="#">
              <img className="social-media-icon" src={instagram} />
            </a>
            <a href="#">
              <img className="social-media-icon" src={linkedin} />
            </a>
            <a href="#">
              <img className="social-media-icon" src={youtube} />
            </a>
            <a href="#">
              <img className="social-media-icon" src={twitterx} />
            </a>
          </div>
        </div>
        <div className="usefull-links">
          <h4>Company</h4>
          <div className="info">
            <a href="#">About Us</a>
            <a href="#"> Privacy policy</a>
          </div>
        </div>
        <div className="contact-us">
          <h4>Get Contact</h4>
          <div className="info">
            <p>Phone: +91 7821807146</p>
            <p>Email: innovationschool8@gmail.com</p>
          </div>
        </div>
      </div>
      <p> Copyright &copy; Innvation School</p>
    </footer>
  );
};

export default Footer;

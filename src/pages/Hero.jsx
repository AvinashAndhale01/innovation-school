import "../styles/hero.scss";
import { logo1 } from "../assets/icons";
const Hero = () => {
  return (
    <>
      <main className="hero">
        <div className="hero-image">
          <img src={logo1} alt="hero-img" />
        </div>
        <div className="hero-des">
          <h1>
            Innova<span>tion</span> School
          </h1>
          <h3>
            We are No #1 educational <br /> platfrom in india
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            iste sapiente ipsa quisquam ea accusantium consectetur quasi harum
            nobis ullam accusamus in dignissimos, quaerat, deleniti quam nihil
            saepe assumenda, consequuntur alias sint? Fuga minima odio sequi
            voluptates, expedita id aliquid!
          </p>
        </div>
      </main>
    </>
  );
};

export default Hero;

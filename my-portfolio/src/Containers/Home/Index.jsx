import React from "react";
import "./Style.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import About from "../About/Index";

const Home = () => {
  const navigate = useNavigate();

  const handleHire = () => {
    navigate("/resume");
  };

  return (
    <div id="home" className="home">
      <div className="home__text_wrapper">
        <h1>
          Hello, I'm M Hamza Waqar
          <br />
          Frontend Developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home__contact_me">
          <button onClick={handleHire}>Hire Me</button>
        </div>
      </Animate>
    </div>
  );
};

export default Home;

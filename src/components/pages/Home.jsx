import React from "react";

import Particles1 from "../particles1";
import { Link } from "react-router-dom";
import Footer from "../Footer";



const Home = () => {
  return (
    <div style={styles.homeStyle} className="homepage">
      <div className="tsparticles-img ">
        <Particles1 />
      </div>
      <div className="textContainer">
        <div className="text-on-image">
          <div className="main-name">
            <p> Natalia Venkatesh </p>
            <p className="sub-title"> Full Stack Web Developer</p>
          </div>
        </div>
        <div className="d-grid gap-2 sticky-bottom enterbutton">
          
            <Link 
            className="btn  enterButton"
              to={"./About"}
              style={{ textDecoration: "none", textSize: "25" }}
            >
              <span className="enterbutton">Let's meet</span>
            </Link>
          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

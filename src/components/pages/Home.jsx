import React from "react";
import MyComponent from "../anime1";
import Particles1 from "../particles1";


import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Particles1 />
      <div className="border justify-content-center">
        <p className="main-name"> Natalia Venkatesh </p>
        <p className="sub-title"> Full Stack Web Developer</p>
      </div>
     

      <Footer />
    </div>
  );
};

export default Home;

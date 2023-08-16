import React from "react";

import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <div className="top-section">
        <h3>About</h3>
      </div>
      <div className="bottom-section">
        <p className="pIndentOne">
          {" "}
          <span className="dot"></span>Hello and welcome to my page. {" "}
          
          Hello, I'm Natalia Venkatesh, a passionate engineer and photographer based in Pennsylvania. My journey is defined by a relentless pursuit of learning and creativity. My background in engineering and photography has led me on an exciting path of exploration, always seeking new avenues to expand my horizons.
       
        </p>
        <p className="pIndent">
      
        A few months ago, I ventured into the world of HTML and CSS by taking a class. What started as a simple curiosity quickly transformed into an insatiable passion. The allure of code's logical intricacies and the boundless creativity it offers captivated me completely. An engineer by profession and a photographer by heart, this newfound fascination compelled me to enroll in the UPenn Full Stack Developer Bootcamp.
        </p>
        <p className="pIndent">
        Through this immersive program, I delved deep into the realm of front-end web development. Armed with tools like HTML, CSS, JavaScript, and React, I learned to weave together intricate designs with seamless user experiences. Bridging the gap between front-end and back-end technologies became my forte, as I harnessed the power of Node.js, MySQL, and MongoDB to build applications that resonate with brands and audiences alike.
        
        </p>
        
        <p className="pIndent"> 
        I am a dedicated problem solver with an eye for detail, committed to crafting immersive experiences that forge meaningful connections. Whether collaborating within a team or working independently, I relentlessly pursue creative excellence. My versatility shines through in my ability to seamlessly transition from product design to photography and web development, offering a fresh and unique perspective to every endeavor.

My journey is ongoing, marked by a thirst for knowledge and a commitment to delivering exceptional outcomes. Join me as I continue to explore new dimensions, pushing the boundaries of what's possible in engineering, photography, and web development.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

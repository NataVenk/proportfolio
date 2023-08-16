import React from "react";

import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <div className="top-section">
        <h3>About</h3>
      </div>
      <div className="bottom-section">
        <p>
          {" "}
          <span className="dot"></span>Hello and welcome to my page. {" "}
          
          My name is Natalia Venkatesh and I am located in Pennsylvania.
       
        </p>
        <p className="pIndent">
      
        I am an enginneer and photographer but I always look for a
          new things to learn. Few months back I took a class on HTML and CSS
          just to see if I can improve my website. And it was only a matter of
          time before I was hooked. I love the logic of the code and creativity
          of solutions. An engineer by trade and a photographer by passion, I
          decided to join UPenn Full Stack Developer Bootcamp. I wanted to learn
          more but most of all I wanted to meet peopple who started the same
          journey I am on.
        </p>
        <p className="pIndent">
          The prorgam helped me to develop deep expertise in
          front-end web development, craft visually stunning and user-friendly
          websites and applications. Using technologies such as HTML, CSS,
          JavaScript, and React, I connect front-end and back-end technologies
          to deliver a curated "last-mile" experience. In addition, my
          proficiency in Node.js, MySQL, and MongoDB enables me to build
          scalable applications that bring brands to life on digital platforms.
        
        </p>
        
        <p className="pIndent"> 
         As a creative problem solver with a keen eye for detail, I am
          dedicated to delivering engaging experiences that connect with
          audiences. Whether working independently or collaborating with a team,
          I strive for creative excellence in everything I do. From product
          design to photography to web development, my diverse skill set allows
          me to bring a unique perspective to any project.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

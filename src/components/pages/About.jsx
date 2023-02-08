import React from "react";

import Footer from '../Footer';

const About = () => {
  return (
    <div>
 
      <div className="top-section">
        <h3>About</h3>
      </div>
      <div className="bottom-section">
        <p>
          {" "}
          <span className="dot"></span>Hello and welcome to my page. My name is
          Natalia Venkatesh and I live in Pennsylvania. I am a photographer and
          I always look for a new things to learn. Few months back I took a
          class on HTML and CSS just to see if I can improve my website. And it
          was only a matter of time before I was hooked. I love the logic of the
          code and creativity of solutions. An engineer by trade and a
          photographer by passion, I decided to join UPenn bootcamp program. I
          wanted to learn more but most of all I wanted to meet peopple who
          started the same journey I am on.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

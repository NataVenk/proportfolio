import React from "react";

import Footer from '../Footer';

const Portfolio = () => {
  return (
    <div>
     
      <div className="top-section">
        <h3>Portfolio</h3>
      </div>

      <div className="recent-project">
        <div className="recent">
          <a href="https://natavenk.github.io/code-refactor/">
            {" "}
            Code Refactor Project{" "}
          </a>
        </div>
      </div>
      <div className="recent-project">
        <div className="recent">
          <a href="https://github.com/NataVenk/Project-SportClub">
            {" "}
            Fitness club{" "}
          </a>
        </div>
      </div>
      <div className="recent-project">
        <div className="recent">
          <a href="https://github.com/NataVenk/Note-Taker">
          {" "}
          Note Taker{" "}
           </a>
        </div>
      </div>
      <div className="recent-project">
        <div className="recent">
          <a href="https://github.com/NataVenk/Daily-calendar">
          {" "}
          Daily Calendar{" "}
           </a>
        </div>
      </div>
      <div className="recent-project">
        <div className="recent">
          <a href="https://github.com/NataVenk/password-generator">
          {" "}
          Password Generator{" "}
           </a>
        </div>
      </div>
      <div className="recent-project">
        <div className="recent">
          <a href="https://github.com/NataVenk/Project-Travelers">
          {" "}
          Travelers - Travel Website{" "}
           </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

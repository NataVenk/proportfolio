import React from "react";
import notetaker from "../../images/notetaker.png";
import techblog from "../../images/techblog.png";
import passgen from "../../images/passgen.png";
import gym from "../../images/gym.png";
import weeklycal from "../../images/weeklycal.png";
import travelers from "../../images/travelers.png";
import Footer from '../Footer';


const Portfolio = () => {
  return (
    <div>
     
      <div className="top-section">
        <h3>Portfolio</h3>
      </div>

      <div className="recent-project">
        <div className="recent">
          <p>Tech Blog</p>
           <img className="portfolioImg"  src={techblog} alt={"techblog"} />
          <button type="button" class="btn btn-outline-primary" >
          <a className ="breadcrumb-item"  href="https://tecgblog-natavenk2.herokuapp.com/">
          {" "}Deployed App{" "}
            </a>
            </button>
            <button type="button" class="btn btn-outline-primary" >
            <a href="https://github.com/NataVenk/Tech-Blog">
            {" "}GitHub Link{" "}
          </a>
          </button>
        </div>
      </div>


      <div className="recent-project">
      <div className="recent">
      <p>Hemlock Sport Club</p>
      <img className="portfolioImg"  src={gym} alt={"gym"} />
      <button type="button" class="btn btn-outline-primary" >
           <a href="https://hemlock-fit-club.herokuapp.com/">
           {" "}
            Deployed App{" "}
            </a>
            </button>

       <button type="button" class="btn btn-outline-primary" >
          <a href="https://github.com/NataVenk/Project-SportClub">
            {" "}
            GitHub Link{" "}
          </a>
          </button>
        </div>
      </div>


      <div className="recent-project">
      <div className="recent">
      <p>Note Taker</p>
      <img className="portfolioImg" src={notetaker} alt={"notetaker"} />
      <button type="button" class="btn btn-outline-primary" >
           <a href="https://cryptic-ocean-13240.herokuapp.com/">
           {" "}
            Deployed App{" "}
            </a>
            </button>
            <button type="button" class="btn btn-outline-primary" >
          <a href="https://github.com/NataVenk/Note-Taker">
          {" "}
          GitHub Link{" "}
           </a>
           </button>
        </div>
      </div>


      <div className="recent-project">
        <div className="recent">
        <p>Daily Calendar</p>
        <img className="portfolioImg"  src={weeklycal} alt={"weeklycal"} />
        <button type="button" class="btn btn-outline-primary" >
           <a href="https://natavenk.github.io/Daily-calendar/">
           {" "}
            Deployed App{" "}
            </a>
            </button>
            <button type="button" class="btn btn-outline-primary" >
          <a href="https://github.com/NataVenk/Daily-calendar">
          {" "}
         GitHub Link{" "}
           </a>
           </button>
        </div>
      </div>


      <div className="recent-project">
        <div className="recent">
        <p>Password Generator</p>
        <img className="portfolioImg"  src={passgen} alt={"passgen"} />
        <button type="button" class="btn btn-outline-primary" >
           <a href="https://natavenk.github.io/password-generator/">
           {" "}
            Deployed App{" "}
            </a>
            </button>
            <button type="button" class="btn btn-outline-primary" >
          <a href="https://github.com/NataVenk/password-generator">
          {" "}
          GitHub Link{" "}
           </a>
           </button>
        </div>
      </div>


      <div className="recent-project">
        <div className="recent">
        <p>Travelers - Travel Website</p>
        <img className="portfolioImg"  src={travelers} alt={"travelers"} />
        <button type="button" class="btn btn-outline-primary" >
           <a href="https://natavenk.github.io/Project-Travelers/">
           {" "}
            Deployed App{" "}
            </a>
            </button>
            <button type="button" class="btn btn-outline-primary" >
          <a href="https://github.com/NataVenk/Project-Travelers">
          {" "}
          GitHub Link{" "}
           </a>
           </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

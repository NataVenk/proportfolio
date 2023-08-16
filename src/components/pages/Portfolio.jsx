import React from "react";
import notetaker from "../../images/notetaker.png";
import weather from "../../images/weather.png";
import petplant from "../../images/petplant.png";
import techblog from "../../images/techblog.png";
import passgen from "../../images/passgen.png";
import gym from "../../images/gym.png";
import weeklycal from "../../images/weeklycal.png";
import travelers from "../../images/travelers.png";
import Footer from "../Footer";

const Portfolio = () => {
  return (
    <div>
      <div className="top-section">
        <h3 className="h3P">My Recent projects</h3>
      </div>
      <div className="container  text-center">
        <div className="row">
          {/*first project*/}
          <div className="col-6 ">
              <div className="recent ">
                <p>Tech Blog</p>
                <img className="portfolioImg" src={techblog} alt={"techblog"} />
                <p> Application follows the MVC in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
                <button type="button" className="btn btn-outline-primary">
                  <a
                    className="breadcrumb-item"
                    style={{ textDecoration: "none" }}
                    href="https://tecgblog-natavenk2.herokuapp.com/"
                  >
                    {" "}
                    Deployed App{" "}
                  </a>
                  
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} 
                   href="https://github.com/NataVenk/Tech-Blog">
                    {" "}
                    GitHub Link{" "}
                  </a>
                </button>
              </div>
            
          </div>
          {/*second project*/}
          <div className="col-6 project-recent">
            <div className="container text-center">
              <div className="recent">
                <p>Hemlock Sport Club</p>
                <img className="portfolioImg" src={gym} alt={"gym"} />
                <p> Fitness club website - collaborative full-stack application. Application created utilizing MVC, creating server-side API and user authentication. Node.js, Express.js, MySQL</p>
                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://hemlock-fit-club.herokuapp.com/">
                    {" "}
                    Deployed App{" "}
                  </a>
                </button>

                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://github.com/NataVenk/Project-SportClub">
                    {" "}
                    GitHub Link{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
          
        

        </div>

        <div className="row">

          {/*third project*/}
          <div className="col-6 ">
            
              <div className="recent ">
                <p>Perfect Pet Plant Shoppe </p>
                <img
                  className="portfolioImg" src={petplant} alt={"petplant"}
                />
                <p>Project solving problem identifying safe plants for pets. Application created using React, MongoDB, Node and Express,  </p>
                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://afternoon-coast-06929.herokuapp.com/">
                    {" "}
                    Deployed App{" "}
                  </a>
                </button>

                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://github.com/NataVenk/pet-plant-shoppe">
                    {" "}
                    GitHub Link{" "}
                  </a>
                </button>
              </div>
            
          </div>
          {/* //*forth project */}
          <div className="col-6 project-recent">
            <div className="container text-center">
              <div className="recent">
                <p>Daily Calendar</p>
                <img
                  className="portfolioImg"
                  src={weeklycal}
                  alt={"weeklycal"}
                />
                <p> Application  allows a user to save events for each hour of the day. Features dynamically updated HTML and CSS powered by jQuery and the Moment.js </p>
                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://natavenk.github.io/Daily-calendar/">
                    {" "}
                    Deployed App{" "}
                  </a>
                </button>

                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://github.com/NataVenk/Daily-calendar">
                    {" "}
                    GitHub Link{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
          

          
        </div>

        <div class="row">

          {/* //*fith project */}
          <div className="col-6 ">
            
            <div className="recent ">
                <p>Password Generator</p>
                <img className="portfolioImg" src={passgen} alt={"passgen"} />
                <p>Application generates a random password based on criteria selected. Utilizies dynamically updated HTML and CSS powered by JavaScript code</p>
                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://natavenk.github.io/password-generator/">
                    {" "}
                    Deployed App{" "}
                  </a>
                </button>

                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://github.com/NataVenk/password-generator">
                    {" "}
                    GitHub Link{" "}
                  </a>
                </button>
              
            </div>
          </div>
          {/* //*sixth project */}
          <div className="col-6 project-recent">
            <div className="container text-center">
              <div className="recent">
                <p>Weather Tracker</p>
                <img
                  className="portfolioImg"
                  src={weather}
                  alt={"weather"}
                />
                <p> Appplication utilizing third-party API to make requests with specific parameters to a URL, runs in the browser and features dynamically updated HTML and CSS.</p>
                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://natavenk.github.io/Weather-Forecast/">
                    {" "}
                    Deployed App{" "}
                  </a>
                </button>

                <button type="button" className="btn btn-outline-primary">
                  <a style={{ textDecoration: "none" }} href="https://github.com/NataVenk/Weather-Forecast">
                    {" "}
                    GitHub Link{" "}
                  </a>
                </button>
              </div> 
            </div>
          </div>
        </div>
        
     
    </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;

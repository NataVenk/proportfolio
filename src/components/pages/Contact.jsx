import React from "react";

import Footer from '../Footer';



const Contact = () => {
  return (
    <div>
     
      <div className="top-section">
        <h3>Let's Connect</h3>
      </div>

      <div className="bottom-section">
        <ul>
          <li>
            <a className="contact" href="mailto:nvj971@gmail.com">
              {" "}
              E-mail
            </a>
          </li>
          <li>
            <a className="contact" href="https://github.com/NataVenk">
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <a
              className="contact"
              href="https://www.linkedin.com/in/natalia-venkatesh/"
            >
              {" "}
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <Footer />
     
    </div>
  );
};

export default Contact

import React from "react";



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

      <footer>
        <h4>You are only as big as dreams you dare to live.</h4>
        <h4> @2023 Natalia Venkatesh</h4>
      </footer>
    </div>
  );
};

export default Contact

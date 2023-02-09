import React, { useState } from "react";
import emailjs from 'emailjs-com';

// helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  // state variables for the fields in the form
  // etting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email or name
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async(e) => {
    
    e.preventDefault();

   
    if (!validateEmail(email) || !Name) {
      setErrorMessage("Email or name is invalid");
      
      return;
    }
    setErrorMessage("")


    const tempId = "template_mkkj47c"
    const pubKey = "umF019gOZwo7OWK3B"
    const servId = "service_51c99j4"
const response=await emailjs.send(servId, tempId, {Name, message, email}, pubKey)
response ? console.log ("success") : console.log("failed")
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="Contact">
      <form id="contact-form">
        <div className="form-group">
          <label className="InputEmai1">Email address</label>
          <br></br>

          <input
            className="form-group"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div className="form-group">
        <label className="name">Name</label>
        <br></br>
       
          <input
            className="form-group"
            id="name"
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label className="message"> Message</label>
          <br></br>
          <textarea
            className="form-control"
            id="message"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            rows="5"
            placeholder="Message"
          />
        </div>
        <button type="button" onClick={handleFormSubmit}>
          Let's Connect
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      
    </div>
  );
}
export default Contact;

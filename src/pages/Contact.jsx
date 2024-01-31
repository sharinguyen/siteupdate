import React from "react";
import leftMap from "../assets/board-dice.jpg";
import "../styles/Contact.css";


function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${leftMap})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" 
          placeholder="Enter full name..." 
          type="text" 
          required/>
          
          <label htmlFor="email">Email</label>
          <input name="email" 
          placeholder="Enter email..." 
          type="email" 
          required/>

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            maxLength={300}
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>

          <button type="submit"> Send Message</button>
        </form>
        {/*Sacramento location info */}
        <div className= "leftLocation">
        <h2>@ Sacramento</h2>
            <p>1250 Howe Ave #3a, Sacramento, CA 95825 </p>
            <p>Phone:
              <a href ="tel: +1 916 927 0810">+1 916 927 0810</a>
            </p>
            <ul>
            <li>Mon 12pm - 8pm</li>
            <li>Tues 12pm - 10pm </li>
            <li>Wed 12pm - 8pm</li>
            <li>Thu 12pm - 10pm </li>
            <li>Fri 12pm - 11pm </li>
            <li>Sat 12pm - 10pm </li>
            <li>Sun 12pm - 6pm </li>
        </ul>
        </div>
        <div className = "rightLocation">
        <h2>@ Rocklin</h2>
      
        <ul>
            <p>5050 Rocklin Road, Suite A22, Rocklin, CA 95677</p>
            <li>Mon 12pm - 7pm</li>
            <li>Tues 12pm - 7pm </li>
            <li>Wed 12pm - 9pm</li>
            <li>Thu 12pm - 7pm </li>
            <li>Fri 12pm - 11pm </li>
            <li>Sat 12pm - 10pm </li>
            <li>Sun 12pm - 6pm </li>
        </ul>
        </div>

      </div>
    </div>
  );
}

export default Contact;
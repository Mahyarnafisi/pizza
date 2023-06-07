import React from "react";
import "../styles/contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="contact__bg">bg</div>
      <div className="contact__form">
        <h1>Contact </h1>
        <form className="form" method="post">
          <label htmlFor="inputName">Your Full name</label>
          <input className="form__inputName" name="inputName" type="text" placeholder="Full name" required />
          <label htmlFor="inputEmail">Email Address</label>
          <input className="form__inputEmail" name="inputEmail" type="email" placeholder="Email address" required />
          <textarea id="" cols="30" rows="10" placeholder="Write your massage" required></textarea>
          <button type="submit" className="form__submit-btn">
            Send Massage
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

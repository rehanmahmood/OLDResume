import React, { useRef } from "react";
import "./Email.css";
import emailjs from "emailjs-com";

export default function Email() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_9v9nbwu",
        form.current,
        "user_iV2JrnElcFFbwv2yG6gC8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container-border">
      <form className="row" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="email" className="form-control" />

        <label>Subject</label>
        <input type="text" name="subject" className="form-control" />

        <label>Message</label>
        <textarea name="Message" rows="6" className="form-control" />
        <input
          type="submit"
          value="Send Message"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
}

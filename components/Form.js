import React from "react";
import "./form.css";

const Form = () => {
  const submiHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={submiHandler}>
      <h3>Send Mail Form</h3>
      <label className="label">
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" />
      </label>
      <label>
        Body
        <textarea name="name" />
      </label>

      <br />

      <button className="submitButton">Send Mail</button>
    </form>
  );
};

export default Form;

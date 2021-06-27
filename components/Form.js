import React, { useReducer } from "react";
import "./form.css";

const INTIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
  status: "IDLE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };
    case "updateStatus":
      return { ...state, status: action.status };
    case "reset":
    default:
      return INTIAL_STATE;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INTIAL_STATE);

  const udpateValue = (field) => (event) => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    });
  };

  const setStatus = (status) => dispatch({ type: "updateStatus", status });
  const submiHandler = (event) => {
    event.preventDefault();
    console.log(state);
    setStatus("PENDING");
  };

  if (state.status === "SUCCESS") {
    return (
      <p className="success">
        Message sent successfully!
        <br />
        <button className="reset" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </p>
    );
  }
  return (
    <>
      {state.status === "ERROR" && (
        <p className="error">
          Something went wrong <br /> please try again.
        </p>
      )}
      <form className="form" onSubmit={submiHandler}>
        <h3>Send Mail Form</h3>
        <label className="label">
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={udpateValue("name")}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={udpateValue("email")}
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            value={state.subject}
            onChange={udpateValue("subject")}
          />
        </label>
        <label>
          Body
          <textarea
            name="body"
            value={state.body}
            onChange={udpateValue("body")}
          />
        </label>

        <br />

        <button
          type="submit"
          className="submitButton"
          disabled={state.status === "PENDING" ? true : false}
        >
          {state.status === "PENDING" ? "Please wait ..." : "Send Mail"}
        </button>
      </form>
    </>
  );
};

export default Form;

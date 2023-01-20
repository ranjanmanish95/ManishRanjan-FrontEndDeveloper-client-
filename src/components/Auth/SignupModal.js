import React from "react";
import Modal from "react-bootstrap/Modal";
import useInput from "../../hooks/use-input";

const SignupModal = (props) => {
  //import resuable functions and variables from custom hook useInput
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCompany,
    isValid: enteredCompanyIsValid,
    hasError: companyInputIsInvalid,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: companyReset
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid && enteredCompanyIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredEmailIsValid &&
      !enteredPasswordIsValid &&
      !enteredCompanyIsValid
    ) {
      return;
    }
    let data = {
      email: enteredEmail,
      password: enteredPassword,
      company: enteredCompany
    };
    //post signup on submit
    fetch("http://localhost:8001/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 201) {
        alert("User is saved");
      } else {
        alert("User already exists");
      }
    });
    //reset the signup fields to empty once data is submitted
    emailReset();
    passwordReset();
    companyReset();
  };

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const companyInputClasses = companyInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmitHandler}>
            <div className={emailInputClasses} style={{ border: "none" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={emailChangeHandler}
                value={enteredEmail}
                onBlur={emailBlurHandler}
              />
              {emailInputIsInvalid && (
                <p className="error-text">Email Input must not be empty</p>
              )}
            </div>
            <div className={passwordInputClasses} style={{ border: "none" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={passwordChangeHandler}
                value={enteredPassword}
                onBlur={passwordBlurHandler}
              />
              {passwordInputIsInvalid && (
                <p className="error-text">Password Input must not be empty</p>
              )}
            </div>
            <div className={companyInputClasses} style={{ border: "none" }}>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                onChange={companyChangeHandler}
                value={enteredCompany}
                onBlur={companyBlurHandler}
              />
              {companyInputIsInvalid && (
                <p className="error-text">Company Input must not be empty</p>
              )}
            </div>
            <div className="form-actions">
              <button disabled={!formIsValid} onClick={props.handleClose}>
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupModal;

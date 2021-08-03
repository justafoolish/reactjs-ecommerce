import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { Form } from "react-bootstrap";
import FormInput from "../FormInput";

function SignupForm() {
  const getFirstName = (value) => console.log(value);
  const getLastName = (value) => console.log(value);
  const getEmail = (value) => console.log(value);
  const getPassword = (value) => console.log(value);
  const submitSignup = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const errorMessage = ["Please enter your first name", "Please enter your last name", "Please enter your email address", "Please enter your password"]
  return (
    <>
      <h3>Sign Up</h3>
      <Form className="w-75">
        <FormInput type="text" label="First Name" submitInput={getFirstName} errorMessage={errorMessage[0]}/>
        <FormInput type="text" label="Last Name" submitInput={getLastName} errorMessage={errorMessage[1]}/>
        <FormInput type="email" label="Email" submitInput={getEmail} errorMessage={errorMessage[2]}/>
        <FormInput type="password" label="Password" submitInput={getPassword} errorMessage={errorMessage[3]}/>
        <FormInput type="password" label="Confirm Password" submitInput={getPassword} errorMessage={errorMessage[3]}/>
        <Button type="submit" variant="button-inverse" custom="my-2 w-100" onClick={submitSignup}>
          Sign Up
        </Button>
      </Form>
      <p className="w-75 mb-5" style={{ textAlign: "left" }}>
        <span>Already have an account ?</span> <Link to="/Account/Login">Login</Link>
      </p>
    </>
  );
}

export default SignupForm;

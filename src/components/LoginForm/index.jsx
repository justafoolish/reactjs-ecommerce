import React from "react";

import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { Button, FormInput } from "..";

function LoginForm() {
  const errorMessage = ["Please enter your email address", "Please enter your password", "Not a valid password"];
  const handleSubmitEmail = (value) => console.log(value);
  const handleSubmitPassword = (value) => console.log(value);
  const submitLogin = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <>
      <h3>Login</h3>
      <Form className="w-75">
        <FormInput label="Email" type="mail" submitInput={handleSubmitEmail} errorMessage={errorMessage[0]} />
        <FormInput label="Password" type="password" submitInput={handleSubmitPassword} errorMessage={errorMessage[1]} />
        <Button type="submit" variant="button-inverse" custom="my-2 w-100" onClick={submitLogin}>
          Login
        </Button>
      </Form>
      <p className="w-75 mb-5" style={{ textAlign: "left" }}>
        <span>Dont have an account ?</span> <Link to="/Account/Signup">Sign Up</Link>
      </p>
    </>
  );
}

export default LoginForm;

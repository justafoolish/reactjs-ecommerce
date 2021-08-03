import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import "./form-input.scss";

function FormInput({ type, label, custom = "", submitInput, errorMessage }) {
  const [inputValue, setInputValue] = React.useState("");
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const handleChange = (e) => {
    validate(e);
    setInputValue(e.target.value);
    submitInput(e.target.value);
  };
  const validate = (event) => {
    if (event.target.value === "") {
      setShowErrorMessage(true);
    } else setShowErrorMessage(false);
  };
  return (
    <>
      <Form.Group className={`form-input ${custom}`}>
        <Form.Control type={type} onChange={handleChange} value={inputValue} onBlur={validate} />
        {label.length && <Form.Label className={inputValue.length ? "shrink" : null}>{label}</Form.Label>}
        {showErrorMessage && <label className="error-message">{errorMessage}</label>}
      </Form.Group>
    </>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  custom: PropTypes.string,
  label: PropTypes.string,
  submitInput: PropTypes.func,
};
FormInput.defaultProps = {
  label: "",
  submitInput: null,
};

export default FormInput;

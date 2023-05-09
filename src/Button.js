import React from "react";
import PropTypes from "prop-types";
import styled from "./Button.module.css";
const Button = ({ text }) => {
  return (
    <div>
      <button className={styled.btn}>{text}</button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

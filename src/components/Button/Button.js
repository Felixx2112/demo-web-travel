import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const STYLE = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

Button.propTypes = {
  children: PropTypes.string,
};

function Button(props) {
  const { children, type, onClick, buttonStyle, buttonSize } = props;

  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-in">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;

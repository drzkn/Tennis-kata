import React from "react";
import propTypes from "prop-types";

import "./index.css";

const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.node
};

Button.defaultProps = {
  className: ""
};

export default Button;

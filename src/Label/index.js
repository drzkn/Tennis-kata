import React from "react";
import propTypes from "prop-types";

import "./index.css";

const Label = ({ className, children }) => {
  return <label className={className}>{children}</label>;
};

Label.propTypes = {
  children: propTypes.node
};

export default Label;

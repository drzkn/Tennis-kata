import React from "react";
import propTypes from "prop-types";

import "./index.css";

class Input extends React.Component {
  render() {
    const { className, name, value, onChange } = this.props;
    return (
      <input
        value={value}
        ref={el => (this.input = el)}
        type="text"
        onChange={onChange}
        className={className}
        name={name}
      />
    );
  }
}

Input.propTypes = {
  name: propTypes.string.isRequired
};

export default Input;

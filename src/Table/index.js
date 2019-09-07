import React from "react";
import propTypes from "prop-types";

const Table = ({ list }) => {
  return list.length > 0 ? list.map(element => <div key={element.id}>{element.content}</div>) : "";
};

Table.propTypes = {
  list: propTypes.array
};

export default Table;

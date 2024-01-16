// Tag.js
import React from 'react';
import "./Tag.css"
import img1 from "./images/1.JPG"
const Tag = ({ person, onRemove }) => {
  return (
    <div className="tag">
      <img src={img1} alt={`${person} profile`} />
      <span>{person}</span>
      <button onClick={() => onRemove(person)}>X</button>
    </div>
  );
};

export default Tag;

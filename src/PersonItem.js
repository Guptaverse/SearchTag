// PersonItem.js
import React from 'react';
import './PersonItem.css'; // Add your styling for PersonItem

const PersonItem = ({ person, email, onClick }) => {
  return (
    <div className="person-item" onClick={() => onClick(person)}>
      <div className="person-photo"></div> {/* Add your circular photo styling as needed */}
      <div className="person-details">
        <span className="person-name">{person}</span>
        <span className="person-email">{email}</span>
      </div>
    </div>
  );
};

export default PersonItem;

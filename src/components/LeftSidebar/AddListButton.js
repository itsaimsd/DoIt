// src/components/LeftSidebar/AddListButton.js
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddListButton() {
  return (
    <div className="add-list-button">
      <FontAwesomeIcon icon={faPlus} />
      <span>Add List</span>
    </div>
  );
}

export default AddListButton;

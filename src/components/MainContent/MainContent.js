// src/components/MainContent/MainContent.js
import React from 'react';
import '../../styles/MainContent.css';

function MainContent({ toggleRightSidebar, isLeftSidebarVisible }) {
  return (
    <div className={`main-content ${isLeftSidebarVisible ? 'shifted' : ''}`}>
      <h1>Main Content Area</h1>
      <button className="add-task-button" onClick={toggleRightSidebar}>
        Add Task
      </button>
    </div>
  );
}

export default MainContent;

// src/components/RightSidebar/RightSidebar.js
import React from 'react';
import '../../styles/RightSidebar.css';

function RightSidebar({ isVisible }) {
  return (
    <div className={`right-sidebar ${isVisible ? 'visible' : ''}`}>
      <h2>Right Sidebar</h2>
      {/* Additional sidebar content here */}
    </div>
  );
}

export default RightSidebar;

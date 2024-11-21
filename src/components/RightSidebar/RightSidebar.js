import React, { useState, useEffect } from "react";
import "../../styles/RightSidebar.css";

const RightSidebar = ({ isVisible, task, updateTaskText, closeSidebar }) => {
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    if (task) {
      setEditedText(task.text);
    }
  }, [task]);

  const handleSave = () => {
    if (task && editedText.trim()) {
      updateTaskText(task.id, editedText); // Save the updated text
      closeSidebar(); // Close the sidebar
    }
  };

  // Ensure the sidebar doesn't render if it's not visible or no task is selected
  if (!task) return null;

  return (
    <div className={`right-sidebar ${isVisible ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Edit Task</h2>
        <button className="close-button" onClick={closeSidebar}>
          Close
        </button>
      </div>
      <div className="sidebar-content">
        <label>Edit Task Text:</label>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="task-edit-input"
        />
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;

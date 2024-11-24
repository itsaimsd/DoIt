import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStar as regularStar,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/rightsidebar/TaskControls.css";

const TaskControls = ({
  isCompleted,
  toggleComplete,
  isImportant,
  task,
  toggleFavorite,
}) => {
  if (!task) return null; // Ensure task is passed before using it

  return (
    <div className="task-controls">
      {/* Task Completion Checkbox */}
      <div className="task-name">
        <input
          type="checkbox"
          checked={isCompleted}
          className="checkbox"
          onChange={() => {
            toggleComplete(task.id); // Call parent function to toggle completion
          }}
        />
        <span className="task-text">{task.text}</span>{" "}
        {/* Render the task name */}
        {/* Important Star */}
        <FontAwesomeIcon
          icon={isImportant ? solidStar : regularStar} // Toggle between filled and unfilled star
          className="star-icon"
          onClick={() => {
            toggleFavorite(task.id); // Toggle importance when the star is clicked
          }}
        />
      </div>
    </div>
  );
};

export default TaskControls;



// src/components/MainContent/TaskInputSection/TaskList.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "../../../styles/mainContent/TaskList.css";

const TaskList = ({ tasks, toggleComplete, toggleFavorite }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={task.completed ? "task-text completed" : "task-text"}>
            {task.text}
          </span>
          <FontAwesomeIcon
            icon={task.important ? solidStar : regularStar}
            className="star-icon"
            onClick={() => toggleFavorite(task.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;

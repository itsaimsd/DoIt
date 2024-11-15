// src/components/MainContent/TaskInputSection/TaskList.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import '../../../styles/mainContent/TaskList.css'; 

const TaskList = ({ tasks, toggleComplete, toggleFavorite }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          <span className={task.favorite ? "task-text favorite" : "task-text"}>
            {task.text}
          </span>
          <FontAwesomeIcon
            icon={task.favorite ? solidStar : regularStar}
            className="star-icon"
            onClick={() => toggleFavorite(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;

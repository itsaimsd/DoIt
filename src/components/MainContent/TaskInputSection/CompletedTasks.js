// src/components/MainContent/TaskInputSection/CompletedTasks.js
import React from "react";
import "../../../styles/mainContent/CompletedTasks.css";

const CompletedTasks = ({ tasks, toggleComplete }) => {
  if (tasks.length === 0) return null;

  return (
    <div className="completed-tasks">
      <div className="completed-header">Completed</div>
      {tasks.map((task, index) => (
        <div key={index} className="task-item completed">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          <span className="task-text">{task.text}</span>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;

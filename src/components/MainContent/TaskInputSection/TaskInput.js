// src/components/MainContent/TaskInputSection/TaskInput.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSyncAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/mainContent/TaskInput.css';


const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className="task-input-section">
      <div className="todo-dropdown" onClick={toggleInputVisibility}>
        To Do {isInputVisible ? '▼' : '►'}
      </div>
      {isInputVisible && (
        <div className="task-input-container">
          <input
            type="text"
            className="task-input-field"
            placeholder="Add A Task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <div className="task-icons">
            <FontAwesomeIcon icon={faBell} className="icon" />
            <FontAwesomeIcon icon={faSyncAlt} className="icon" />
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          </div>
          <button className="add-task-button" onClick={handleAddTask}>
            ADD TASK
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskInput;

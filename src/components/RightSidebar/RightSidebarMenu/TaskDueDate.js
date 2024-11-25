import React from "react";
import "../../../styles/rightsidebar/TaskDueDate.css";

const TaskDueDate = ({ dueDate, setDueDate, updateTask, taskId }) => {
  const handleDueDateChange = (e) => {
    const newDate = e.target.value;
    setDueDate(newDate);
    updateTask(taskId, { dueDate: newDate });
  };

  return (
    <div className="task-due-date">
      <label htmlFor="due-date">Set Due Date:</label>
      <input
        type="date"
        id="due-date"
        value={dueDate || ""}
        onChange={handleDueDateChange}
        className="due-date-input"
      />
    </div>
  );
};

export default TaskDueDate;

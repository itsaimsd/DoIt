// src/components/LeftSidebar/TaskSummary.js
import React from 'react';
import '../../styles/LeftSidebar.css';

const TaskSummary = ({ totalTasks, completedTasks }) => {
  // Calculate percentages based on completed and pending tasks
  const donePercentage = (completedTasks / totalTasks) * 100;
  const pendingPercentage = 100 - donePercentage;

  return (
    <div className="task-summary">
      <div className="summary-header">
        <p className="summary-title">Today Tasks</p>
        <span className="info-icon">ℹ️</span>
      </div>
      <div className="task-count">{totalTasks}</div>
      <div className="task-chart">
        <svg width="180" height="180" viewBox="0 0 36 36" className="circular-chart">
          {/* Background Circle */}
          <circle
            className="circle-bg"
            cx="18"
            cy="18"
            r="12"
            fill="none"
            strokeWidth="6"
          />
          {/* Completed Tasks Circle */}
          <circle
            className="circle-done"
            cx="18"
            cy="18"
            r="12"
            fill="none"
            strokeWidth="6"
            strokeDasharray={`${donePercentage} ${100 - donePercentage}`}
            strokeDashoffset="25"
          />
          {/* Pending Tasks Circle */}
          <circle
            className="circle-pending"
            cx="18"
            cy="18"
            r="12"
            fill="none"
            strokeWidth="6"
            strokeDasharray={`${pendingPercentage} ${100 - pendingPercentage}`}
            strokeDashoffset="0"
          />
        </svg>
      </div>
      <div className="legend">
        <div className="legend-item">
          <span className="dot pending-dot"></span> Pending
        </div>
        <div className="legend-item">
          <span className="dot done-dot"></span> Done
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;

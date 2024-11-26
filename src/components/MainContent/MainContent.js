import React from "react";
import TaskInputSection from "./TaskInputSection/TaskInputSection";
import PropTypes from "prop-types";
import "../../styles/mainContent/MainContent.css";

function MainContent({
  isLeftSidebarVisible,
  isRightSidebarVisible,
  tasks,
  toggleComplete,
  toggleFavorite,
  addTask,
  activeTab,
  handleEditTask,
  isNightMode, // Accept the isNightMode prop
}) {
  const filteredTasks =
    activeTab === "All Tasks"
      ? tasks // Show all tasks
      : activeTab === "Today"
        ? tasks.filter((task) => !task.completed) // Show incomplete tasks
        : activeTab === "Important"
          ? tasks.filter((task) => task.important) // Show only important tasks
          : tasks; // Default fallback for other tabs

  return (
    <div
      className={`main-content ${isLeftSidebarVisible ? "shifted" : ""} ${
        isRightSidebarVisible ? "shifted-left" : ""
      } ${isNightMode ? "night-mode" : ""}`} // Add night-mode class
    >
      <TaskInputSection
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        toggleFavorite={toggleFavorite}
        addTask={addTask}
        handleEditTask={handleEditTask} // Pass the handler
        isNightMode={isNightMode}
      />
    </div>
  );
}

MainContent.propTypes = {
  isLeftSidebarVisible: PropTypes.bool.isRequired,
  isRightSidebarVisible: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      important: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  isNightMode: PropTypes.bool.isRequired, // Add this to PropTypes
};

export default MainContent;

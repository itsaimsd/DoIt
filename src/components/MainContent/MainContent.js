import React from "react";
import TaskInputSection from "./TaskInputSection/TaskInputSection";
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
}) {
  const filteredTasks =
    activeTab === "All Tasks"
      ? tasks
      : activeTab === "Today"
      ? tasks // Implement "today" filtering logic if necessary
      : activeTab === "Important"
      ? tasks.filter((task) => task.important)
      : tasks; // Default fallback for other tabs

  return (
    <div
      className={`main-content ${isLeftSidebarVisible ? "shifted" : ""} ${
        isRightSidebarVisible ? "shifted-left" : ""
      }`}
    >
      <TaskInputSection
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        toggleFavorite={toggleFavorite}
        addTask={addTask}
        handleEditTask={handleEditTask} // Pass the handler
      />
    </div>
  );
}

export default MainContent;

import React from "react";
import TaskInputSection from "./TaskInputSection/TaskInputSection";
import "../../styles/mainContent/MainContent.css";

function MainContent({
  isLeftSidebarVisible,
  tasks,
  toggleComplete,
  toggleFavorite,
  addTask,
  activeTab,
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
    <div className={`main-content ${isLeftSidebarVisible ? "shifted" : ""}`}>
      <TaskInputSection
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        toggleFavorite={toggleFavorite}
        addTask={addTask}
      />
    </div>
  );
}

export default MainContent;

import React from "react";
import TaskControls from "./TaskControls"; // Import TaskControls
import "../../styles/rightsidebar/RightSidebar.css";
import Footer from "./Footer"; // Import Footer

const RightSidebar = ({
  isVisible,
  task,
  toggleComplete,
  toggleFavorite,
  closeSidebar,
  handleDelete,
}) => {
  return (
    <div className={`right-sidebar ${isVisible ? "open" : ""}`}>
      <div className="sidebar-content">
        {/* Task Controls: Checkbox and Star */}
        {task && (
          <TaskControls
            isCompleted={task.completed}
            toggleComplete={toggleComplete}
            isImportant={task.important}
            task={task}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>

      {/* Footer with Save and Delete */}
      <Footer
        task={task}
        closeSidebar={closeSidebar}
        handleDelete={handleDelete} // Pass handleDelete to Footer
      />
    </div>
  );
};

export default RightSidebar;

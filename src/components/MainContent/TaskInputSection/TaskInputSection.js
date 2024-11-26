import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import "../../../styles/mainContent/TaskInputSection.css";

const TaskInputSection = ({
  tasks,
  toggleComplete,
  toggleFavorite,
  addTask,
  handleEditTask,
  isNightMode, // Accept isNightMode prop
}) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div
      className={`task-input-section ${isNightMode ? "night-mode" : ""}`} // Apply night-mode class
    >
      <TaskInput addTask={addTask} isNightMode={isNightMode} />
      <TaskList
        tasks={incompleteTasks}
        toggleComplete={toggleComplete}
        toggleFavorite={toggleFavorite}
        handleEditTask={handleEditTask}
        isNightMode={isNightMode} // Pass isNightMode
      />
      <CompletedTasks
        tasks={completedTasks}
        toggleComplete={toggleComplete}
        isNightMode={isNightMode} // Pass isNightMode
      />
    </div>
  );
};

export default TaskInputSection;

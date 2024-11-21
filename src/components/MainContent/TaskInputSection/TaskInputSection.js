// src/components/MainContent/TaskInputSection/TaskInputSection.js
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
  handleEditTask
}) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="task-input-section">
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={incompleteTasks}
        toggleComplete={toggleComplete}
        toggleFavorite={toggleFavorite}
        handleEditTask={handleEditTask} // Pass the handler here
      />

      <CompletedTasks tasks={completedTasks} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TaskInputSection;

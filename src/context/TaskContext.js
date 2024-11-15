// src/context/TaskContext.js
import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => setLeftSidebarOpen(!isLeftSidebarOpen);
  const selectTask = (task) => setSelectedTask(task);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTask,
        selectTask,
        isLeftSidebarOpen,
        toggleLeftSidebar,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

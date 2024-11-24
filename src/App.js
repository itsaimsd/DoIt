import React, { useState, useEffect } from "react";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Today");

  // Load tasks from localStorage, if they exist
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingTask, setEditingTask] = useState(null);
  const [notification, setNotification] = useState(null); // State to manage notification

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to localStorage
  }, [tasks]);

  const toggleLeftSidebar = () => setIsLeftSidebarVisible((prev) => !prev);

  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text: taskText, completed: false, important: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleFavorite = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  // Handle task deletion and show notification
  const handleDelete = (id, taskName) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Delete task
    setNotification(`Your task "${taskName}" has been deleted`); // Show notification
    setIsRightSidebarVisible(false); // Collapse the RightSidebar
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsRightSidebarVisible(true);
  };

  const handleOkNotification = () => {
    setNotification(null); // Hide the notification
  };

  return (
    <div className="app">
      <Header toggleLeftSidebar={toggleLeftSidebar} />
      <div className="content">
        <LeftSidebar
          isVisible={isLeftSidebarVisible}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tasks={tasks}
        />
        <MainContent
          isLeftSidebarVisible={isLeftSidebarVisible}
          isRightSidebarVisible={isRightSidebarVisible}
          tasks={tasks}
          toggleComplete={toggleComplete}
          toggleFavorite={toggleFavorite}
          addTask={addTask}
          activeTab={activeTab}
          handleEditTask={handleEditTask}
        />
        <RightSidebar
          isVisible={isRightSidebarVisible}
          task={editingTask}
          toggleComplete={toggleComplete}
          toggleFavorite={toggleFavorite}
          closeSidebar={() => setIsRightSidebarVisible(false)}
          handleDelete={handleDelete} // Pass handleDelete to RightSidebar
        />
      </div>

      {/* Notification */}
      {notification && (
        <div className="notification">
          <p>{notification}</p>
          <button onClick={handleOkNotification}>OK</button>
        </div>
      )}
    </div>
  );
}

export default App;

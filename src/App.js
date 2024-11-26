import React, { useState, useEffect, useRef } from "react";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Header from "./components/Header";
import { RingtoneAPI } from "./utils/RingtoneAPI"; // Import RingtoneAPI
import "./styles/App.css";

function App() {
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Today");
  const [isNightMode, setIsNightMode] = useState(false); // Night mode state

  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return [];
    }
  });

  const [editingTask, setEditingTask] = useState(null);
  const [notification, setNotification] = useState(null);
  const ringtoneAPIRef = useRef(new RingtoneAPI()); // Initialize RingtoneAPI

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to localStorage
  }, [tasks]);

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  const toggleLeftSidebar = () => setIsLeftSidebarVisible((prev) => !prev);

  const toggleNightMode = () => setIsNightMode((prev) => !prev); // Toggle night mode

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
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const handleDelete = (id, taskName) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setNotification(`Your task "${taskName}" has been deleted`);
    setIsRightSidebarVisible(false);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setTimeout(() => setIsRightSidebarVisible(true), 50);
  };
  const openRightSidebar = () => {
    setIsRightSidebarVisible(true); 
  };

 

  const handleOkNotification = () => {
    setNotification(null);
  };

  const updateTask = (taskId, updatedData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedData } : task
      )
    );
  };

  const handleSaveNotification = (message) => {
    setNotification(message);
  };

  const playReminderRingtone = () => {
    ringtoneAPIRef.current.initializeAudio();
    ringtoneAPIRef.current.playRingtone(5); // Play ringtone for 5 seconds
    setNotification("Reminder Alert: Time to act!"); // Show notification
  };

  return (
    <div className={`app ${isNightMode ? "night-mode" : "light-mode"}`}>
      <Header
        toggleLeftSidebar={toggleLeftSidebar}
        toggleNightMode={toggleNightMode}
        isNightMode={isNightMode}
      />
      <div className="content">
        <LeftSidebar
          isVisible={isLeftSidebarVisible}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tasks={tasks}
          isNightMode={isNightMode}
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
          isNightMode={isNightMode}
          openRightSidebar={openRightSidebar}
        />
        <RightSidebar
          isVisible={isRightSidebarVisible}
          task={tasks.find((task) => task.id === editingTask?.id)}
          toggleComplete={toggleComplete}
          toggleFavorite={toggleFavorite}
          closeSidebar={() => setIsRightSidebarVisible(false)}
          handleDelete={handleDelete}
          updateTask={updateTask}
          handleSaveNotification={handleSaveNotification}
          playReminderRingtone={playReminderRingtone} // Pass ringtone handler
          isNightMode={isNightMode} 
        />
      </div>

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

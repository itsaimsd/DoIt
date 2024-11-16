// // src/App.js
// import React, { useState } from 'react';
// import LeftSidebar from './components/LeftSidebar/LeftSidebar';
// import MainContent from './components/MainContent/MainContent';
// import RightSidebar from './components/RightSidebar/RightSidebar';
// import Header from './components/Header';
// import './styles/App.css';

// function App() {
//   const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
//   const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

//   const toggleLeftSidebar = () => {
//     setIsLeftSidebarVisible((prev) => !prev);
//   };

//   const toggleRightSidebar = () => {
//     setIsRightSidebarVisible((prev) => !prev);
//   };

//   return (
//     <div className="app">
//       <Header toggleLeftSidebar={toggleLeftSidebar} />
//       <div className="content">
//         <LeftSidebar isVisible={isLeftSidebarVisible} />
//         <MainContent
//           toggleRightSidebar={toggleRightSidebar}
//           isLeftSidebarVisible={isLeftSidebarVisible}
//         />
//         <RightSidebar isVisible={isRightSidebarVisible} />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import LeftSidebar from './components/LeftSidebar/LeftSidebar';
// import MainContent from './components/MainContent/MainContent';
// import RightSidebar from './components/RightSidebar/RightSidebar';
// import Header from './components/Header';
// import './styles/App.css';

// function App() {
//   const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
//   const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

//   const toggleLeftSidebar = () => {
//     setIsLeftSidebarVisible((prev) => !prev);
//   };

//   const toggleRightSidebar = () => {
//     setIsRightSidebarVisible((prev) => !prev);
//   };

//   return (
//     <div className="app">
//       <Header toggleLeftSidebar={toggleLeftSidebar} />
//       <div className="content">
//         <LeftSidebar isVisible={isLeftSidebarVisible} />
//         <MainContent
//           toggleRightSidebar={toggleRightSidebar}
//           isLeftSidebarVisible={isLeftSidebarVisible}
//         />
//         <RightSidebar isVisible={isRightSidebarVisible} />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from "react";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Today"); // Tracks which tab is active
  const [tasks, setTasks] = useState([]); // Holds all tasks

  // Toggle the visibility of sidebars
  const toggleLeftSidebar = () => setIsLeftSidebarVisible((prev) => !prev);
  const toggleRightSidebar = () => setIsRightSidebarVisible((prev) => !prev);

  // Add a new task
  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text: taskText, completed: false, important: false },
    ]);
  };

  // Toggle the "completed" state of a task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Toggle the "important" state of a task
  const toggleFavorite = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  return (
    <div className="app">
      <Header toggleLeftSidebar={toggleLeftSidebar} />
      <div className="content">
        <LeftSidebar
          isVisible={isLeftSidebarVisible}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tasks={tasks} // Pass tasks as a prop
        />

        <MainContent
          toggleRightSidebar={toggleRightSidebar}
          isLeftSidebarVisible={isLeftSidebarVisible}
          tasks={tasks}
          toggleComplete={toggleComplete}
          toggleFavorite={toggleFavorite}
          addTask={addTask}
          activeTab={activeTab}
        />
        <RightSidebar isVisible={isRightSidebarVisible} />
      </div>
    </div>
  );
}

export default App;

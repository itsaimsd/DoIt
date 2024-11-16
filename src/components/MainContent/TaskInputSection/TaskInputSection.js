// // src/components/MainContent/TaskInputSection/TaskInputSection.js
// import React, { useState } from "react";
// import TaskInput from "./TaskInput";
// import TaskList from "./TaskList";
// import CompletedTasks from "./CompletedTasks";
// import '../../../styles/mainContent/TaskInputSection.css';


// const TaskInputSection = ({ toggleRightSidebar }) => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (taskText) => {
//     setTasks([...tasks, { text: taskText, completed: false, favorite: false }]);
//   };

//   const toggleComplete = (index) => {
//     setTasks(
//       tasks.map((task, i) =>
//         i === index ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const toggleFavorite = (index) => {
//     setTasks(
//       tasks.map((task, i) =>
//         i === index ? { ...task, favorite: !task.favorite } : task
//       )
//     );
//   };

//   const incompleteTasks = tasks.filter((task) => !task.completed);
//   const completedTasks = tasks.filter((task) => task.completed);

//   return (
//     <div className="task-input-section">
//       <TaskInput addTask={addTask} />
//       <TaskList
//         tasks={incompleteTasks}
//         toggleComplete={toggleComplete}
//         toggleFavorite={toggleFavorite}
//       />
//       <CompletedTasks tasks={completedTasks} toggleComplete={toggleComplete} />
//       <button className="add-task-button" onClick={toggleRightSidebar}>
//         Add Task
//       </button>
//     </div>
//   );
// };

// export default TaskInputSection;



// src/components/MainContent/TaskInputSection/TaskInputSection.js
import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import '../../../styles/mainContent/TaskInputSection.css';

const TaskInputSection = ({ tasks, toggleComplete, toggleFavorite, addTask }) => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-input-section">
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={incompleteTasks}
        toggleComplete={toggleComplete}
        toggleFavorite={toggleFavorite}
      />
      <CompletedTasks tasks={completedTasks} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TaskInputSection;

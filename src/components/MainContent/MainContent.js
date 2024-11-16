// // src/components/MainContent/MainContent.js
// import React from 'react';
// import '../../styles/MainContent.css';

// function MainContent({ toggleRightSidebar, isLeftSidebarVisible }) {
//   return (
//     <div className={`main-content ${isLeftSidebarVisible ? 'shifted' : ''}`}>
//       <h1>Main Content Area</h1>
//       <button className="add-task-button" onClick={toggleRightSidebar}>
//         Add Task
//       </button>
//     </div>
//   );
// }

// export default MainContent;
 

// src/components/MainContent/MainContent.js
// import React from 'react';
// import TaskInputSection from './TaskInputSection/TaskInputSection'; 
// import '../../styles/mainContent/MainContent.css';


// function MainContent({ toggleRightSidebar, isLeftSidebarVisible }) {
//   return (
//     <div className={`main-content ${isLeftSidebarVisible ? 'shifted' : ''}`}>
//       <TaskInputSection toggleRightSidebar={toggleRightSidebar} />
//     </div>
//   );
// }

// export default MainContent;

// src/components/MainContent/MainContent.js
import React from 'react';
import TaskInputSection from './TaskInputSection/TaskInputSection';
import '../../styles/mainContent/MainContent.css';

function MainContent({ toggleRightSidebar, isLeftSidebarVisible, tasks, toggleComplete, toggleFavorite, addTask, activeTab }) {
  const filteredTasks = activeTab === "All Tasks"
    ? tasks
    : activeTab === "Today"
    ? tasks // Implement "today" filtering logic if necessary
    : activeTab === "Important"
    ? tasks.filter(task => task.important)
    : tasks; // Default fallback for other tabs

  return (
    <div className={`main-content ${isLeftSidebarVisible ? 'shifted' : ''}`}>
      <h1>{activeTab} Tasks</h1>
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

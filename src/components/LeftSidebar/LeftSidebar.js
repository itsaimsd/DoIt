// // src/components/LeftSidebar/LeftSidebar.js
// import React, { useState } from "react";
// import ProfileSection from "./ProfileSection";
// import NavItem from "./NavItem";
// import AddListButton from "./AddListButton";
// import TaskSummary from "./TaskSummary";
// import "../../styles/LeftSidebar.css";

// function LeftSidebar({ isVisible, totalTasks, completedTasks }) {
//   // Set "Today" as the default active item
//   const [activeItem, setActiveItem] = useState("Today");

//   // Handle click to change the active item
//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   return (
//     <aside className={`left-sidebar ${isVisible ? "visible" : ""}`}>
//       <ProfileSection />
//       <div className="nav-items">
//         <NavItem
//           icon="list"
//           text="All Tasks"
//           isActive={activeItem === "All Tasks"}
//           onClick={() => handleItemClick("All Tasks")}
//         />
//         <NavItem
//           icon="calendar"
//           text="Today"
//           isActive={activeItem === "Today"}
//           onClick={() => handleItemClick("Today")}
//         />
//         <NavItem
//           icon="star"
//           text="Important"
//           isActive={activeItem === "Important"}
//           onClick={() => handleItemClick("Important")}
//         />
//         <NavItem
//           icon="list"
//           text="Planned"
//           isActive={activeItem === "Planned"}
//           onClick={() => handleItemClick("Planned")}
//         />
//         <NavItem
//           icon="user"
//           text="Assigned to me"
//           isActive={activeItem === "Assigned to me"}
//           onClick={() => handleItemClick("Assigned to me")}
//         />
//       </div>
//       <AddListButton />
//       <TaskSummary totalTasks={totalTasks} completedTasks={completedTasks} />
//     </aside>
//   );
// }

// export default LeftSidebar;


// src/components/LeftSidebar/LeftSidebar.js
import React from "react";
import ProfileSection from "./ProfileSection";
import NavItem from "./NavItem";
import AddListButton from "./AddListButton";
import TaskSummary from "./TaskSummary"; // Import TaskSummary here
import "../../styles/LeftSidebar.css";

function LeftSidebar({ isVisible, activeTab, setActiveTab, tasks }) {
  return (
    <aside className={`left-sidebar ${isVisible ? "visible" : ""}`}>
      <ProfileSection />
      <div className="nav-items">
        <NavItem
          icon="list"
          text="All Tasks"
          isActive={activeTab === "All Tasks"}
          onClick={() => setActiveTab("All Tasks")}
        />
        <NavItem
          icon="calendar"
          text="Today"
          isActive={activeTab === "Today"}
          onClick={() => setActiveTab("Today")}
        />
        <NavItem
          icon="star"
          text="Important"
          isActive={activeTab === "Important"}
          onClick={() => setActiveTab("Important")}
        />
        <NavItem
          icon="list"
          text="Planned"
          isActive={activeTab === "Planned"}
          onClick={() => setActiveTab("Planned")}
        />
        <NavItem
          icon="user"
          text="Assigned to me"
          isActive={activeTab === "Assigned to me"}
          onClick={() => setActiveTab("Assigned to me")}
        />
      </div>
      <AddListButton />
      <TaskSummary
        totalTasks={tasks.length}
        completedTasks={tasks.filter((task) => task.completed).length}
      />
    </aside>
  );
}

export default LeftSidebar;

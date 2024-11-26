import React from "react";
import ProfileSection from "./ProfileSection";
import NavItem from "./NavItem";
import AddListButton from "./AddListButton";
import TaskSummary from "./TaskSummary";
import "../../styles/LeftSidebar.css";

function LeftSidebar({
  isVisible,
  activeTab,
  setActiveTab,
  tasks,
  isNightMode,
}) {
  return (
    <aside
      className={`left-sidebar ${isVisible ? "visible" : ""} ${isNightMode ? "night-mode" : ""}`}
    >
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

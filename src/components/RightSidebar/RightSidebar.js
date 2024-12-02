import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskControls from "./RightSidebarMenu/TaskControls";
import TaskDueDate from "./RightSidebarMenu/TaskDueDate";
import TaskReminder from "./RightSidebarMenu/TaskReminder";
import TaskRepeat from "./RightSidebarMenu/TaskRepeat";
import TaskNotes from "./RightSidebarMenu/TaskNotes";
import Footer from "./RightSidebarMenu/Footer";
import AddStep from "./RightSidebarMenu/AddStep";
import "../../styles/rightsidebar/RightSidebar.css";

const RightSidebar = ({
  isVisible,
  task,
  toggleComplete,
  toggleFavorite,
  playReminderRingtone,
  closeSidebar,
  handleDelete,
  updateTask,
  handleSaveNotification,
  isNightMode,
}) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionName) => {
    setExpandedSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [reminder, setReminder] = useState(task?.reminder || "");
  const [repeat, setRepeat] = useState(task?.repeat || "None");
  const [notes, setNotes] = useState(task?.notes || "");

  const handleToggleFavorite = () => {
    toggleFavorite(task.id);
    handleSaveNotification(
      task.important
        ? `${task.text} has been removed from Important`
        : `${task.text} has been set as Important`
    );
  };

  if (!task) return null;

  return (
    <div
      className={`right-sidebar ${isVisible ? "open" : ""} ${
        isNightMode ? "night-mode" : ""
      }`}
    >
      <div className="sidebar-content">
        <TaskControls
          isCompleted={task.completed}
          toggleComplete={toggleComplete}
          isImportant={task.important}
          task={task}
          toggleFavorite={handleToggleFavorite}
        />
        <div className={`section ${isNightMode ? "night-mode" : ""}`}>
          <button
            onClick={() => toggleSection("steps")}
            className={`toggle-button ${isNightMode ? "night-mode" : ""}`}
          >
            {expandedSection === "steps" ? "Hide Steps" : "Add Steps"}
          </button>
          {expandedSection === "steps" && (
            <div
              className={`expandable expanded ${isNightMode ? "night-mode" : ""}`}
            >
              <AddStep
                steps={task.steps || []}
                setSteps={(newSteps) => {
                  const updatedTask = { ...task, steps: newSteps };
                  updateTask(task.id, updatedTask);
                }}
                updateTask={updateTask}
                taskId={task.id}
                isNightMode={isNightMode}
              />
            </div>
          )}
        </div>

        <div className={`section ${isNightMode ? "night-mode" : ""}`}>
          <button
            onClick={() => toggleSection("dueDate")}
            className={`toggle-button ${isNightMode ? "night-mode" : ""}`}
          >
            {expandedSection === "dueDate" ? "Hide Due Date" : "Add Due Date"}
          </button>
          {expandedSection === "dueDate" && (
            <div
              className={`expandable expanded ${isNightMode ? "night-mode" : ""}`}
            >
              <TaskDueDate
                dueDate={dueDate}
                setDueDate={setDueDate}
                updateTask={updateTask}
                taskId={task.id}
              />
            </div>
          )}
        </div>

        <div className={`section ${isNightMode ? "night-mode" : ""}`}>
          <button
            onClick={() => toggleSection("reminder")}
            className={`toggle-button ${isNightMode ? "night-mode" : ""}`}
          >
            {expandedSection === "reminder" ? "Hide Reminder" : "Set Reminder"}
          </button>
          {expandedSection === "reminder" && (
            <div
              className={`expandable expanded ${isNightMode ? "night-mode" : ""}`}
            >
              <TaskReminder
                reminder={reminder}
                setReminder={setReminder}
                updateTask={updateTask}
                taskId={task.id}
                playReminderRingtone={playReminderRingtone}
              />
            </div>
          )}
        </div>

        <div className={`section ${isNightMode ? "night-mode" : ""}`}>
          <button
            onClick={() => toggleSection("repeat")}
            className={`toggle-button ${isNightMode ? "night-mode" : ""}`}
          >
            {expandedSection === "repeat" ? "Hide Repeat" : "Set Repeat"}
          </button>
          {expandedSection === "repeat" && (
            <div
              className={`expandable expanded ${isNightMode ? "night-mode" : ""}`}
            >
              <TaskRepeat
                repeat={repeat}
                setRepeat={setRepeat}
                updateTask={updateTask}
                taskId={task.id}
              />
            </div>
          )}
        </div>
        <div className={`section ${isNightMode ? "night-mode" : ""}`}>
          <button
            onClick={() => toggleSection("notes")}
            className={`toggle-button ${isNightMode ? "night-mode" : ""}`}
          >
            {expandedSection === "notes" ? "Hide Notes" : "Add Notes"}
          </button>
          {expandedSection === "notes" && (
            <div
              className={`expandable expanded ${isNightMode ? "night-mode" : ""}`}
            >
              <TaskNotes
                notes={notes}
                setNotes={setNotes}
                updateTask={updateTask}
                taskId={task.id}
              />
            </div>
          )}
        </div>
      </div>
      <Footer
        task={task}
        closeSidebar={closeSidebar}
        handleDelete={handleDelete}
        updateTask={updateTask}
        handleSaveNotification={handleSaveNotification}
      />
    </div>
  );
};

RightSidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
  }),
  toggleComplete: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  isNightMode: PropTypes.bool.isRequired,
};

export default RightSidebar;

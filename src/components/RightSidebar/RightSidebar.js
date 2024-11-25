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
}) => {
  const [expandedSection, setExpandedSection] = useState(null); // Tracks the currently expanded section

  const toggleSection = (sectionName) => {
    setExpandedSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [reminder, setReminder] = useState(task?.reminder || "");
  const [repeat, setRepeat] = useState(task?.repeat || "None");
  const [notes, setNotes] = useState(task?.notes || "");

  if (!task) return null;

  return (
    <div className={`right-sidebar ${isVisible ? "open" : ""}`}>
      <div className="sidebar-content">
        <TaskControls
          isCompleted={task.completed}
          toggleComplete={toggleComplete}
          isImportant={task.important}
          task={task}
          toggleFavorite={toggleFavorite}
        />
        <div className="section">
          <button
            onClick={() => toggleSection("steps")}
            className="toggle-button"
          >
            {expandedSection === "steps" ? "Hide Steps" : "Add Steps"}
          </button>
          {expandedSection === "steps" && (
            <div className="expandable expanded">
              <AddStep
                steps={task.steps || []} // Pass the current task's steps
                setSteps={(newSteps) => {
                  const updatedTask = { ...task, steps: newSteps }; // Update steps locally
                  updateTask(task.id, updatedTask); // Call updateTask to save changes
                }}
                updateTask={updateTask} // Pass updateTask directly
                taskId={task.id}
              />
            </div>
          )}
        </div>
        {/* Task Reminder Section */}
        <div className="section">
          <button
            onClick={() => toggleSection("reminder")}
            className="toggle-button"
          >
            {expandedSection === "reminder" ? "Hide Reminder" : "Set Reminder"}
          </button>
          {expandedSection === "reminder" && (
            <div className="expandable expanded">
              <TaskReminder
                reminder={reminder}
                setReminder={setReminder}
                updateTask={updateTask}
                taskId={task.id}
                playReminderRingtone={playReminderRingtone} // Pass the function
              />
            </div>
          )}
        </div>

        {/* Task Due Date Section */}
        <div className="section">
          <button
            onClick={() => toggleSection("dueDate")}
            className="toggle-button"
          >
            {expandedSection === "dueDate" ? "Hide Due Date" : "Add Due Date"}
          </button>
          {expandedSection === "dueDate" && (
            <div className="expandable expanded">
              <TaskDueDate
                dueDate={dueDate}
                setDueDate={setDueDate}
                updateTask={updateTask}
                taskId={task.id}
              />
            </div>
          )}
        </div>

        {/* Task Repeat Section */}
        <div className="section">
          <button
            onClick={() => toggleSection("repeat")}
            className="toggle-button"
          >
            {expandedSection === "repeat" ? "Hide Repeat" : "Set Repeat"}
          </button>
          {expandedSection === "repeat" && (
            <div className="expandable expanded">
              <TaskRepeat
                repeat={repeat}
                setRepeat={setRepeat}
                updateTask={updateTask}
                taskId={task.id}
              />
            </div>
          )}
        </div>

        {/* Task Notes Section */}
        <div className="section">
          <button
            onClick={() => toggleSection("notes")}
            className="toggle-button"
          >
            {expandedSection === "notes" ? "Hide Notes" : "Add Notes"}
          </button>
          {expandedSection === "notes" && (
            <div className="expandable expanded">
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
};

export default RightSidebar;

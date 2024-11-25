import React from "react";
import "../../../styles/rightsidebar/TaskNotes.css";

const TaskNotes = ({ notes, setNotes, updateTask, taskId }) => {
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    updateTask(taskId, { notes: e.target.value });
  };

  return (
    <div className="task-notes"> 
      <textarea
        id="notes"
        value={notes || ""}
        onChange={handleNotesChange}
        placeholder="Add additional notes here..."
      />
    </div>
  );
};

export default TaskNotes;

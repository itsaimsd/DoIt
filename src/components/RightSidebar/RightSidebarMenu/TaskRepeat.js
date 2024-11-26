import React from "react";
import "../../../styles/rightsidebar/TaskRepeat.css";

const TaskRepeat = ({ repeat, setRepeat, updateTask, taskId }) => {
  const handleRepeatChange = (e) => {
    setRepeat(e.target.value);
    updateTask(taskId, { repeat: e.target.value });
  };

  return (
    <div className="task-repeat">
      <select
        id="repeat"
        value={repeat || "None"}
        onChange={handleRepeatChange}
      >
        <option value="None">None</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Custom">Custom</option>
      </select>
    </div>
  );
};

export default TaskRepeat;

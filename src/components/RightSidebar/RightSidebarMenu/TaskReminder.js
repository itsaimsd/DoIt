import React, { useEffect } from "react";
import "../../../styles/rightsidebar/TaskReminder.css";

const TaskReminder = ({
  reminder,
  setReminder,
  updateTask,
  taskId,
  playReminderRingtone,
}) => {
  const handleReminderChange = (e) => {
    const newTime = e.target.value;
    setReminder(newTime);
    updateTask(taskId, { reminder: newTime });
  };

  useEffect(() => {
    if (!reminder) return;

    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      if (currentTime === reminder) {
        playReminderRingtone(); // Trigger ringtone
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [reminder, playReminderRingtone]);

  return (
    <div className="task-reminder">
      <label htmlFor="reminder">Set Reminder Time:</label>
      <input
        type="time"
        id="reminder"
        value={reminder || ""}
        onChange={handleReminderChange}
        className="reminder-input"
      />
    </div>
  );
};

export default TaskReminder;

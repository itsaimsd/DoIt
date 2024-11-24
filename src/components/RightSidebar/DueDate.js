import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const DueDate = ({ dueDate, setDueDate }) => {
  return (
    <div className="add-due-date">
      <FontAwesomeIcon icon={faCalendar} />
      <label>Add Due Date</label>
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)} // Update due date
        className="due-date-picker"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DueDate;

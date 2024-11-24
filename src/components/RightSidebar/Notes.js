import React from "react";

const Notes = ({ notes, setNotes }) => {
  return (
    <div className="add-notes">
      <label>Add Notes:</label>
      <textarea
        className="notes-input"
        placeholder="Add notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)} // Update notes
      />
    </div>
  );
};

export default Notes;

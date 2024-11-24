import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

const Repeat = ({ repeat, setRepeat }) => {
  return (
    <div className="repeat">
      <FontAwesomeIcon icon={faRepeat} />
      <label>Repeat</label>
      <input
        type="checkbox"
        checked={repeat}
        onChange={() => setRepeat(!repeat)} // Toggle repeat state
      />
    </div>
  );
};

export default Repeat;

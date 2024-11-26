import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/rightsidebar/AddStep.css";

const AddStep = ({ steps, setSteps, updateTask, taskId, isNightMode }) => {
  const [newStep, setNewStep] = useState(""); // Input field for new step

  const addStep = () => {
    if (newStep.trim()) {
      const updatedSteps = [
        ...steps,
        { id: Date.now(), text: newStep, completed: false },
      ];
      setSteps(updatedSteps);
      updateTask(taskId, { steps: updatedSteps }); // Call updateTask with updated steps
      setNewStep(""); // Clear the input field
    }
  };

  const toggleStepComplete = (stepId) => {
    const updatedSteps = steps.map((step) =>
      step.id === stepId ? { ...step, completed: !step.completed } : step
    );
    setSteps(updatedSteps);
    updateTask(taskId, { steps: updatedSteps });
  };

  const deleteStep = (stepId) => {
    const updatedSteps = steps.filter((step) => step.id !== stepId);
    setSteps(updatedSteps);
    updateTask(taskId, { steps: updatedSteps });
  };

  return (
    <div className={`add-step ${isNightMode ? "night-mode" : ""}`}>
      <div className="add-step-input">
        <input
          type="text"
          placeholder="Add a step"
          value={newStep}
          onChange={(e) => setNewStep(e.target.value)}
          className={`step-input ${isNightMode ? "night-mode" : ""}`}
        />
        <button
          onClick={addStep}
          className={`add-step-button ${isNightMode ? "night-mode" : ""}`}
        >
          +
        </button>
      </div>
      <div className="steps-list">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step-item ${isNightMode ? "night-mode" : ""}`}
          >
            <input
              type="checkbox"
              className="checkbox"
              checked={step.completed}
              onChange={() => toggleStepComplete(step.id)}
            />
            <span
              className={`step-text ${step.completed ? "completed" : ""} ${
                isNightMode ? "night-mode" : ""
              }`}
            >
              {step.text}
            </span>
            <FontAwesomeIcon
              icon={faTrash}
              className={`delete-step ${isNightMode ? "night-mode" : ""}`}
              onClick={() => deleteStep(step.id)} // Pass task ID and name to delete
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AddStep.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setSteps: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  taskId: PropTypes.number.isRequired,
  isNightMode: PropTypes.bool.isRequired, // Add night mode prop
};

export default AddStep;

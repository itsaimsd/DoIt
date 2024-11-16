// src/components/LeftSidebar/NavItem.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faList,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function NavItem({ icon, text, isActive, onClick }) {
  const icons = {
    calendar: faCalendar,
    list: faList,
    star: faStar,
    user: faUser,
  };

  return (
    <div
      className={`nav-item ${isActive ? "active" : ""}`}
      onClick={onClick} // Trigger the click event passed from LeftSidebar
    >
      <FontAwesomeIcon icon={icons[icon]} />
      <span>{text}</span>
    </div>
  );
}

export default NavItem;
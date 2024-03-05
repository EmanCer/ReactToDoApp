import { useState } from "react";

export default function Select({ lists, handleSelectChange }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="tasks-components-dropdown"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        <i className="fa-solid fa-caret-down"></i>
      </div>
      {isActive && (
        <ul
          className="dropdown-content scrollbar"
          onChange={handleSelectChange}
        >
          <p className="dropdown-content-header">Choose a List</p>
          {lists.map((listItem) => (
            <li
              className="dropdown-item"
              key={listItem.id}
              value={listItem.value}
              onClick={handleSelectChange}
            >
              {listItem.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

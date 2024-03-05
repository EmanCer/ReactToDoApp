import React from "react";

export default function Login({ handleTestClick }) {
  return (
    <div className="login">
      <div className="login-form">
        <h1>Agenda</h1>
        <h3>Organize your day and your tasks</h3>
        <div className="login-btn">
          <button className="btn" onClick={handleTestClick}>
            TEST
          </button>
        </div>
      </div>
    </div>
  );
}

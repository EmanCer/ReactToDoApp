import profilePic from "./assetts/avatar-2092113_640.png";

export default function Controller() {
  return (
    <div className="wrapper todo-controller">
      <div className="section section-header todo-controller-header">
        <img src={profilePic}></img>
        <p>Jack Sparrow</p>
      </div>
      <div className="section section-main todo-controller-main">
        <ul>
          <li>My Day</li>
          <li>Important</li>
          <li>Planned</li>
          <li>All</li>
        </ul>
      </div>
      <div className="section section-footer todo-controller-list">
        <button className="btn">Settings</button>
      </div>
    </div>
  );
}

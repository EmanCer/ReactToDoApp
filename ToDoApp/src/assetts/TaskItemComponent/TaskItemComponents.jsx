import TruncatedText from "../TruncatedText";

export default function Task({
  tasks,
  task,
  handleTaskClick,
  handleDelete,
  setTasks,
}) {
  return (
    <li key={task.id}>
      <label>
        <input type="checkbox" onClick={() => handleTaskClick(task.id)}></input>
        <p id="task" className={task.isDone ? "active" : ""}>
          <TruncatedText text={task.value} />
        </p>
        <p id="list">{task.list}</p>
        <button
          className="remove-btn"
          onClick={() => handleDelete(tasks, task.id, setTasks)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </label>
    </li>
  );
}

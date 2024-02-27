export default function TodoItem({ task, setTask }) {
  const handleDeleteItem = (index) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };
  return (
    <ul>
      {task.map((item, index) => (
        <li key={index}>
          <label>
            <input type="checkbox"></input>
            <p>{item}</p>
            <button
              className="remove-btn"
              onClick={() => handleDeleteItem(index)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </label>
        </li>
      ))}
    </ul>
  );
}

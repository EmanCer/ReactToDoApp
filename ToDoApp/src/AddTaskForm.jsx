export default function AddTaskForm({
  task,
  setTask,
  inputValue,
  setInputValue,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTask([...task, inputValue]);
      setInputValue("");
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="section todo-main-form" onSubmit={handleSubmit}>
      <button type="submit" className="btn btn-add">
        +
      </button>
      <input
        className="add-input"
        type="text"
        placeholder="Add a new Task"
        onChange={handleInput}
        value={inputValue}
      />
      <select name="" id="">
        <option value="">My day</option>
      </select>
    </form>
  );
}

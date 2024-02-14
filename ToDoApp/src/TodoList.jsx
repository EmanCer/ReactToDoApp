export default function TodoList() {
  const date = Date().slice(0, 15);

  const handleClick = function (e) {
    console.log(e.target);
  };
  return (
    <div className="wrapper todo-main">
      <div className="section section-header todo-main-header">
        <h1>My Day</h1>
        <p>{date.slice(0, 15)}</p>
      </div>
      <div className="section section-main todo-main-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="section section-footer todo-main-form">
        <button type="submit" className="btn btn-add" onClick={handleClick}>
          +
        </button>
        <input className="add-input" type="text" placeholder="Add a task" />
      </div>
    </div>
  );
}

import Task from "../TaskItemComponent/TaskItemComponents";
import SelectComponent from "../SelectComponent";

export default function Tasks({
  date,
  tasks,
  setTasks,
  taskInputValue,
  setTaskInputValue,
  filteredTasks,
  lists,
  selectedList,
  handleInput,
  handleSubmit,
  handleSelectChange,
  handleTaskClick,
  handleDelete,
  showComponent,
}) {
  return (
    <div
      className={`tasks-component  ${showComponent ? "inactive" : "active"}`}
    >
      <div className="tasks-component-header header">
        <h1>{selectedList}</h1>
        <p>{date.slice(0, 15)}</p>
      </div>
      <div className="tasks-component-main scrollbar">
        <ul>
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              tasks={tasks}
              task={task}
              handleTaskClick={handleTaskClick}
              handleDelete={handleDelete}
              setTasks={setTasks}
            />
          ))}
        </ul>
      </div>
      <form
        className="tasks-component-form form"
        onSubmit={(e) =>
          handleSubmit(e, setTaskInputValue, setTasks, taskInputValue, "task")
        }
      >
        <button type="submit" className="btn btn-add">
          +
        </button>
        <input
          type="text"
          placeholder="Add a new Task"
          value={taskInputValue}
          onChange={(e) => handleInput(e, setTaskInputValue)}
        />
        <SelectComponent
          lists={lists}
          handleSelectChange={handleSelectChange}
        />
      </form>
    </div>
  );
}

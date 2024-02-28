import "./style.css";
import profilePic from "./assetts/avatar-2092113_640.png";
import { useState, useEffect } from "react";

export default function App() {
  const [taskInputValue, setTaskInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [listInputValue, setListInputValue] = useState("");
  const [lists, setLists] = useState([
    { id: 0, value: "All" },
    { id: 1, value: "My Day" },
  ]);
  const [selectedList, setSelectedList] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const date = Date().slice(0, 15);

  useEffect(() => {
    if (selectedList === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.list === selectedList));
    }
  }, [tasks, selectedList]);

  function handleInput(e, setterFunction) {
    setterFunction(e.target.value);
  }

  function handleSubmit(e, setterFunctionClear, setterFunctionAdd, input) {
    e.preventDefault();
    setterFunctionAdd((arr) => [
      ...arr,
      { id: Math.random(), value: input, list: selectedList },
    ]);
    setterFunctionClear("");
  }

  function handleDelete(arr, id, setterFunction, tasksSetterFunction) {
    // Filter out the list to be deleted
    const updatedLists = arr.filter((el) => el.id !== id);
    // Delete tasks associated with the list
    const updatedTasks = tasks.filter(
      (task) => task.list !== arr.find((el) => el.id === id).value
    );

    // Update the state with the modified lists and tasks
    setterFunction(updatedLists);
    tasksSetterFunction(updatedTasks);
  }

  function handleSelectChange(e) {
    setSelectedList(e.target.value);
  }

  return (
    <div className="container">
      <div className="wrapper todo-controller">
        <div className="section section-header todo-controller-header">
          <img src={profilePic}></img>
          <p>Jack Sparrow</p>
        </div>
        <div className="section section-main todo-controller-main">
          <ul>
            {lists.map((list) => {
              if (list.id === 0 || list.id === 1) {
                return (
                  <li key={list.id}>
                    <p onClick={() => setSelectedList(list.value)}>
                      {list.value}
                    </p>
                  </li>
                );
              } else
                return (
                  <li key={list.id}>
                    <p onClick={() => setSelectedList(list.value)}>
                      {list.value}
                    </p>
                    <button
                      className="remove-btn"
                      onClick={() =>
                        handleDelete(lists, list.id, setLists, setTasks)
                      }
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                );
            })}
          </ul>
        </div>
        <form
          className="section todo-controller-form"
          onSubmit={(e) =>
            handleSubmit(e, setListInputValue, setLists, listInputValue)
          }
        >
          <button type="submit">+</button>
          <input
            type="text"
            placeholder="Add a List"
            value={listInputValue}
            onChange={(e) => handleInput(e, setListInputValue)}
          />
        </form>
      </div>
      <div className="wrapper todo-main">
        <div className="section section-header todo-main-header">
          <h1>{selectedList}</h1>
          <p>{date.slice(0, 15)}</p>
        </div>
        <div className="section section-main todo-main-list">
          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input type="checkbox"></input>
                  <p id="task">{task.value}</p>
                  <p id="list">{task.list}</p>
                  <button
                    className="remove-btn"
                    onClick={() => handleDelete(tasks, task.id, setTasks)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <form
          className="section todo-main-form"
          onSubmit={(e) =>
            handleSubmit(e, setTaskInputValue, setTasks, taskInputValue)
          }
        >
          <button type="submit" className="btn btn-add">
            +
          </button>
          <input
            className="add-input"
            type="text"
            placeholder="Add a new Task"
            value={taskInputValue}
            onChange={(e) => handleInput(e, setTaskInputValue)}
          />
          <select value={selectedList} onChange={handleSelectChange}>
            {lists.map((listItem) => (
              <option key={listItem.id}>{listItem.value}</option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}

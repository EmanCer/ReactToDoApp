import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";

export default function TodoList() {
  const date = Date().slice(0, 15);
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="wrapper todo-main">
      <div className="section section-header todo-main-header">
        <h1>My Day</h1>
        <p>{date.slice(0, 15)}</p>
      </div>
      <div className="section section-main todo-main-list">
        <TodoItem task={task} setTask={setTask} />
      </div>
      <AddTaskForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

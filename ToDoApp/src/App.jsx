import "./style.css";
import TodoList from "./TodoList";
import Controller from "./Controller";

export default function App() {
  return (
    <div className="container">
      <Controller />
      <TodoList />
    </div>
  );
}

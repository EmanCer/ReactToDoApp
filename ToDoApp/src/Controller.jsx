import { useState, useRef } from "react";
import profilePic from "./assetts/avatar-2092113_640.png";

export default function Controller() {
  const [lists, setLists] = useState([{ id: 1, listName: "My Day" }]);
  const [inputValue, setInputValue] = useState("");
  const idCounter = useRef(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setLists([...lists, { id: idCounter.current++, listName: inputValue }]);
      setInputValue("");
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeleteList = (id) => {
    alert("You are about to delete a task, are you sure?");
    setLists(lists.filter((item) => item.id !== id));
  };

  const handleSelectList = (id) => {};
  return (
    <div className="wrapper todo-controller">
      <div className="section section-header todo-controller-header">
        <img src={profilePic}></img>
        <p>Jack Sparrow</p>
      </div>
      <div className="section section-main todo-controller-main">
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
              <label onClick={() => handleSelectList(list.id)}>
                <p>{list.listName}</p>
                {list.id !== 1 && (
                  <button
                    className="remove-btn"
                    onClick={() => handleDeleteList(list.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                )}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <form className="section todo-controller-form" onSubmit={handleSubmit}>
        <button type="submit">+</button>
        <input
          type="text"
          placeholder="Add a List"
          onChange={handleInput}
          value={inputValue}
        />
      </form>
    </div>
  );
}

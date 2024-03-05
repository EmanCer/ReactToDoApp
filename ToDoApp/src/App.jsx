/*  ---------- I have designed this Todo app to locally store user tasks as well as create dedicated lists to keep tasks organized.

  The project was an opportunity to familiarize myself with the basic concepts of React, and I tried to give a typical TodoApp more complexity, responsiveness, and an appealing style. ---------- */

import "./style.css";
import { useState, useEffect } from "react";
import Login from "./assetts/LoginComponent/LoginComponent";
import Lists from "./assetts/ListsComponent/ListsComponent";
import Tasks from "./assetts/TasksComponent/TasksComponent";

export default function App() {
  function getRandom() {
    return Math.random();
  }

  // useState to store tasks passed by user, items's properties include, on top of id (used to define the unique key) and the value, the list in which the task belongs, and a boolean value to set the task completed and add appropriate style.
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    if (localValue == null) {
      const initialTasks = [
        { value: "Do laundry", list: "My Day", isDone: false },
        { value: "Perform test on app", list: "Work", isDone: false },
        { value: "Buy milk, cereal, pasta", list: "Groceries", isDone: true },
        { value: "Gym 16/18", list: "My Day", isDone: false },
      ];
      initialTasks.forEach((task) => {
        task.id = getRandom();
      });
      return initialTasks;
    }
    return JSON.parse(localValue);
  });
  // store the value passed to the input element from the user, to add a task
  const [taskInputValue, setTaskInputValue] = useState("");

  // Same logic of the tasks used for the lists
  const [lists, setLists] = useState(() => {
    const localValue = localStorage.getItem("LISTS");
    if (localValue == null) {
      const initialLists = [
        { id: 0, value: "All" },
        { id: 1, value: "My Day" },
        { value: "Work" },
        { value: "Groceries" },
      ];
      initialLists.forEach((list) => {
        if (list.id === undefined) list.id = getRandom();
      });
      return initialLists;
    }
    return JSON.parse(localValue);
  });
  // store the value passed to the input element from the user, to add a list
  const [listInputValue, setListInputValue] = useState("");

  // state used to managed the tasks rendered based on the list that is selected
  const [selectedList, setSelectedList] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // state used to simulate a login behaviour to show the app just after the 'TEST' button is clicked
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const localValue = localStorage.getItem("isLoggedIn");
    return localValue === "true";
  });

  // state to control the dropdown menu of the form
  const [isActive, setIsActive] = useState(false);

  const [showComponent, setShowComponent] = useState(window.innerWidth > 700);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  // Effect used to store data in the local storage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("LISTS", JSON.stringify(lists));
  }, [lists]);
  const date = Date().slice(0, 15);

  useEffect(() => {
    if (selectedList === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.list === selectedList));
    }
  }, [tasks, selectedList]);

  // Generic function to set a value
  function handleInput(e, setterFunction) {
    setterFunction(e.target.value);
  }

  // Generic function used when user submit tasks or lists
  function handleSubmit(
    e,
    setterFunctionClear,
    setterFunctionAdd,
    input,
    itemType
  ) {
    e.preventDefault();
    if (input === "") return;
    if (itemType === "task") {
      setterFunctionAdd((arr) => [
        ...arr,
        { id: Math.random(), value: input, list: selectedList, isDone: false },
      ]);
    } else if (itemType === "list") {
      setterFunctionAdd((arr) => [...arr, { id: Math.random(), value: input }]);
    }
    setterFunctionClear("");
  }

  // Function used to delete lists or tasks
  function handleDelete(arr, id, setterFunction, tasksSetterFunction) {
    const deletedItem = arr.find((item) => item.id === id);
    const updatedItems = arr.filter((item) => item.id !== id);

    setterFunction(updatedItems);

    if (deletedItem.value === selectedList) {
      setSelectedList("All");
    }

    if (tasksSetterFunction) {
      const updatedTasks = tasks.filter(
        (task) => task.list !== deletedItem.value
      );
      tasksSetterFunction(updatedTasks);
    }
  }
  // function use to change beetween list and display the appropriate tasks
  function handleSelectChange(e) {
    setSelectedList(e.target.textContent);
    setIsActive(false);
  }

  // function to set task completed
  function handleTaskClick(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  // function that simulate a login process
  function handleTestClick() {
    setLoggedIn([true]);
  }
  function truncText(text, maxLength = null) {
    if (maxLength === null) {
      const screenWidth = window.innerWidth;
      maxLength = Math.floor(screenWidth / 14);
    }

    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  }
  return (
    <>
      {!isLoggedIn && <Login handleTestClick={handleTestClick} />}
      {isLoggedIn && (
        <div className="wrapper">
          <button className="toggle-button" onClick={toggleComponent}>
            <span className="fas fa-bars"></span>
          </button>
          <Lists
            lists={lists}
            setLists={setLists}
            listInputValue={listInputValue}
            setListInputValue={setListInputValue}
            setSelectedList={setSelectedList}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            setTasks={setTasks}
            showComponent={showComponent}
            setShowComponent={setShowComponent}
            toggleComponent={toggleComponent}
          />
          <Tasks
            date={date}
            tasks={tasks}
            setTasks={setTasks}
            taskInputValue={taskInputValue}
            setTaskInputValue={setTaskInputValue}
            filteredTasks={filteredTasks}
            lists={lists}
            selectedList={selectedList}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            handleSelectChange={handleSelectChange}
            handleTaskClick={handleTaskClick}
            handleDelete={handleDelete}
            isActive={isActive}
            setIsActive={setIsActive}
            showComponent={showComponent}
            toggleComponent={toggleComponent}
          />
        </div>
      )}
    </>
  );
}

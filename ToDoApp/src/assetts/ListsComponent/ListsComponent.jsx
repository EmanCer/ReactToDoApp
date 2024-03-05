import profilePic from "../../assetts/img/avatar-2092113_640.png";
import List from "../ListComponent/ListComponent";
import "./ListsComponent.css";

export default function Lists({
  lists,
  setLists,
  listInputValue,
  setListInputValue,
  setSelectedList,
  handleDelete,
  handleSubmit,
  handleInput,
  setTasks,
  showComponent,
  toggleComponent,
}) {
  return (
    <div className={`lists-component ${showComponent ? "active" : ""}`}>
      <div className="lists-component-header">
        <img src={profilePic}></img>
        <p>Joe Doe</p>
      </div>
      <div className="lists-component-main scrollbar">
        <ul>
          {lists.map((list) => (
            <List
              key={list.id}
              list={list}
              lists={lists}
              setLists={setLists}
              setTasks={setTasks}
              handleDelete={handleDelete}
              setSelectedList={setSelectedList}
              toggleComponent={toggleComponent}
            />
          ))}
        </ul>
      </div>
      <form
        className="lists-component-form"
        onSubmit={(e) =>
          handleSubmit(e, setListInputValue, setLists, listInputValue, "list")
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
  );
}

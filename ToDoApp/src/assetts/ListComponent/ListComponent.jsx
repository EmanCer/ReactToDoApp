import TruncatedText from "../TruncatedText";

export default function List({
  list,
  lists,
  setLists,
  setTasks,
  handleDelete,
  setSelectedList,
  toggleComponent,
}) {
  return (
    <li key={list.id}>
      <div
        onClick={() => {
          setSelectedList(list.value);
          toggleComponent();
        }}
      >
        <TruncatedText text={list.value} maxLength={15} title={list.value} />
      </div>

      {list.id !== 0 && list.id !== 1 && (
        <button
          className="remove-btn"
          onClick={() =>
            handleDelete(lists, list.id, setLists, setTasks, setSelectedList)
          }
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      )}
    </li>
  );
}

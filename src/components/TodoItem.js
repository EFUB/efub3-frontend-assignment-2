import { useState } from "react";

const TodoItem = ({ todoList, setTodoList, id, text, done }) => {
  const [modifying, setModifying] = useState(false);
  const toggleItem = () => {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, done: !done } : item))
    );
  };
  const deleteItem = () => {
    setTodoList(
      todoList.filter((item) => {
        return item.id != id;
      })
    );
  };
  const toggleModify = (e) => {
    e.preventDefault();
    setModifying((modifying) => !modifying);
  };
  const modifyItem = (e) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, text: e.target.value } : item
      )
    );
  };
  return (
    <div>
      <button onClick={toggleItem}>done</button>
      {modifying ? (
        <form style={{ display: "inline" }} onSubmit={toggleModify}>
          <input
            type="text"
            value={text}
            onChange={modifyItem}
            onBlur={toggleModify}
          />
        </form>
      ) : (
        <span style={{ textDecoration: done && "line-through" }}>{text}</span>
      )}
      <button onClick={toggleModify}>modify</button>
      <button onClick={deleteItem}>delete</button>
    </div>
  );
};

export default TodoItem;

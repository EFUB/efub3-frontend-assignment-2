import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoCreate = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const addItem = (e) => {
    e.preventDefault();
    if (text) {
      const newItem = { id: Date.now(), text: text, done: false };
      setTodoList([...todoList, newItem]);
    }
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>TodoCreate</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Write your task"
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default TodoCreate;

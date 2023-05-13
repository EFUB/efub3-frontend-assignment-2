import { useState } from "react";

function useUpdateTodo() {
  const [editText, setEditText] = useState("");

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSubmit = (e, id, todoList, setTodoList, closeModal) => {
    e.preventDefault();
    if (editText) {
      const newTodoList = todoList.map((item) => ({
        ...item,
        text: item.id === id ? editText : item.text,
      }));
      setTodoList(newTodoList);
      closeModal();
      setEditText("");
    } else {
      alert("수정할 내용을 입력해주세요!");
    }
  };

  const deleteTodo = (id, todoList, setTodoList, closeModal) => {
    setTodoList(todoList.filter((e) => e.id !== id));
    closeModal();
  };

  return { editText, handleChange, handleSubmit, deleteTodo };
}

export default useUpdateTodo;

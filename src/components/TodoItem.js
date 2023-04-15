const TodoItem = ({ todoList, setTodoList, id, text, done }) => {
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
  return (
    <div>
      <button onClick={toggleItem}>done</button>
      <span style={{ textDecoration: done && "line-through" }}>{text}</span>
      <button>modify</button>
      <button onClick={deleteItem}>delete</button>
    </div>
  );
};

export default TodoItem;

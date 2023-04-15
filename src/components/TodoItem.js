const TodoItem = ({ text }) => {
  return (
    <div>
      <button>done</button>
      <span> {text} </span>
      <button>modify</button>
      <button>delete</button>
    </div>
  );
};

export default TodoItem;

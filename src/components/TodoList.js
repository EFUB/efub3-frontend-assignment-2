import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <div>
      <h1>TodoList</h1>
      {todoList.map((item) => {
        return <TodoItem text={item.text} />;
      })}
    </div>
  );
};

export default TodoList;

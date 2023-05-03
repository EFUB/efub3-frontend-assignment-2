import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoListItem
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          key={todo.id}
          id={todo.id}
          isChecked={todo.isChecked}
        />
      ))}
    </div>
  );
};
export default TodoList;

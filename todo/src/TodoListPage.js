import TodoList from "./components/TodoList";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import AddTodo from "./components/AddTodo";

const TodoListPage = ({ todoList, setTodoList }) => {
  return (
    <TodoTemplate>
      <TodoHead todoList={todoList} />
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </TodoTemplate>
  );
};

export default TodoListPage;

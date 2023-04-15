import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((item) => {
        return (
          <TodoItem
            todoList={todoList}
            setTodoList={setTodoList}
            id={item.id}
            text={item.text}
            done={item.done}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

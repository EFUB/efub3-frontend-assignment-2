import TodoListItem from "./TodoListItem";
import React, { useState } from "react";
const TodoList = ({ todos, setTodos }) => {
  const [render, setRender] = useState(false);
  const onClickRender = () => {
    setRender((prev) => !prev);
  };
  return (
    <div className="todoList">
      <button onClick={onClickRender}>TodoList렌더링</button>
      {todos.map((todo) => (
        <TodoListItem
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          key={todo.id}
          id={todo.id}
        />
      ))}
    </div>
  );
};

//Todolist의 내용이 변하지 않는 이상, 상위 컴포넌트인 TodoPage가 변하더라도
//이 컴포넌트는 렌더링되지 않음
export default React.memo(TodoList);

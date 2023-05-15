import TodoListItem from "./TodoListItem";
import React, { useState } from "react";

//TodoList를 렌더링 해주는 함수
const TodoList = ({ todos, setTodos }) => {
  //TodoList렌더링 버튼 : 클릭시 Todolist 컴포넌트가 그냥 렌더링(효과 점검)
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

//useMemo 사용 : Todolist의 내용이 변하지 않는 이상, 상위 컴포넌트인 TodoPage가 변하더라도
//이 컴포넌트는 렌더링되지 않음
export default React.memo(TodoList);

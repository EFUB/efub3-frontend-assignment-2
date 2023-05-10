import TodoList from "./Components/TodoList";
import React, { useState, useEffect } from "react";
import TodoInsert from "./Components/TodoInsert";
import TodoTemplate from "./Components/TodoTemplate";
import styled from "styled-components";
import TodoCount from "./Components/TodoCount";
//TodoPage : 투두리스트 보여주는 페이지
const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const localtodos = localStorage.getItem("localtodos");
    return localtodos ? JSON.parse(localtodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("localtodos", JSON.stringify(todos));
  }, [todos]);

  //state 변경해서 렌더링하는 코드
  const [render, setRender] = useState(false);
  const onClickRender = () => {
    setRender((prev) => !prev);
  };

  return (
    <div>
      <TodoTemplate>
        <button onClick={onClickRender}>TodoPage 렌더링</button>
        <Title>Todo Lists</Title>
        <TodoInsert todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoCount todos={todos} />
      </TodoTemplate>
    </div>
  );
};
export default TodoPage;

const Title = styled.div`
  font-weight: 800;
  font-size: 30px;
  color: #6c12cc;
  margin: 0 auto;
  padding-left: 430px;
  margin-bottom: 30px;
`;

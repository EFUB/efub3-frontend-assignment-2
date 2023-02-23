import { useState } from "react";
import styled from "styled-components";
import EditInput from "./EditInput";

const Todo = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const { id, text, done } = todo;

  const [isOpen, setIsOpen] = useState(false);

  return (
    //onClick={() => onToggleTodo(id)}
    <TodoDiv onClick={() => onToggleTodo(id)}>
      {done && <Done />}

      {isOpen ? (
        <EditInput onEditTodo={onEditTodo} todo={todo} setIsOpen={setIsOpen} />
      ) : (
        <TodoText onClick={() => setIsOpen(true)}> {text}</TodoText>
      )}

      <Delete onClick={() => onDeleteTodo(id)}>삭제</Delete>
      <Delete onClick={() => onEditTodo(id)}>수정</Delete>
    </TodoDiv>
  );
};

export default Todo;

const TodoDiv = styled.div`
  position: relative;

  width: 100%;
  height: 50px;
  background: #f8f9fe;
  border-radius: 10px;

  display: flex;

  justify-content: space-between;

  margin-top: 20px;
`;

const TodoText = styled.p`
  font-family: "Cafe24SsurroundAir";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

const Done = styled.div`
  position: absolute;
  width: 10px;
  height: 50px;
  left: 0px;
  top: 0px;
  background: #e05a87;
  border-radius: 10px 0px 0px 10px;
`;

const Delete = styled.div`
  color: red;
  z-index: 100;
`;

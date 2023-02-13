import { useState } from "react";
import styled from "styled-components";
import EditInput from "./EditInput";

const Todo = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const { id, text, done } = todo;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <TodoDiv active={done}>
      <Delete onClick={() => onDeleteTodo(id)}>삭제</Delete>

      {isOpen ? (
        <EditInput onEditTodo={onEditTodo} todo={todo} setIsOpen={setIsOpen} />
      ) : (
        <div>
          <p onClick={() => onToggleTodo(id)}>완료</p>
          <p onClick={() => setIsOpen(true)}> {text}</p>
        </div>
      )}
    </TodoDiv>
  );
};

export default Todo;

const TodoDiv = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid red;
  justify-content: space-between;
  color: ${(props) => (props.active ? "red" : "blue")};
`;

const Delete = styled.div`
  color: red;
`;

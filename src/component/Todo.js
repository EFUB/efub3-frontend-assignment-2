import { useState } from "react";
import styled from "styled-components";
import EditInput from "./EditInput";
import useHover from "../hooks/useHover";

const Todo = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const { id, text, done } = todo;

  const [isOpen, setIsOpen] = useState(false);

  const [ref, hover] = useHover();

  return (
    <TodoDiv onClick={() => onToggleTodo(id)} ref={ref}>
      {done && <Done />}

      {isOpen ? (
        <EditInput onEditTodo={onEditTodo} todo={todo} setIsOpen={setIsOpen} />
      ) : (
        <TodoText>{text}</TodoText>
      )}

      {hover ? (
        <Btns>
          <Delete onClick={(event) => onDeleteTodo(event, id)}>Delete</Delete>
          <Edit
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            Edit
          </Edit>
        </Btns>
      ) : (
        <></>
      )}
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
  align-items: center;
  margin-bottom: 18px;
`;

const TodoText = styled.p`
  font-family: "Cafe24SsurroundAir";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #000000;

  margin-left: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
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

const Btns = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: 5px;
  width: 15%;

  z-index: 10000;
`;

const Delete = styled.div`
  color: red;
  z-index: 100;
`;

const Edit = styled.div`
  color: green;
  z-index: 100;
`;

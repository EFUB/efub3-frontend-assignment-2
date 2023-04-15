import styled, { css } from "styled-components";
import { useState } from "react";
import { ReactComponent as Plus } from "../images/plus.svg";

const AddTodo = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(Date.now());
  const [priority, setPriority] = useState(0);
  const newItem = { id: id, text: text, done: false, priority: priority };

  const addItem = (e) => {
    e.preventDefault();
    if (text) {
      setId(Date.now());
      setTodoList([...todoList, newItem]);
      setPriority(0);
    }
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TodoForm onSubmit={addItem}>
      <PlusBtn>
        <Plus />
      </PlusBtn>
      <Input value={text} placeholder="Add New Task" onChange={handleChange} />
      <H4>Priority</H4>
      <PriorityBtn1
        type="button"
        onClick={() => setPriority(1)}
        isPriority={priority === 1}
      >
        1
      </PriorityBtn1>
      <PriorityBtn2
        type="button"
        onClick={() => setPriority(2)}
        isPriority={priority === 2}
      >
        2
      </PriorityBtn2>
      <PriorityBtn3
        type="button"
        onClick={() => setPriority(3)}
        isPriority={priority === 3}
      >
        3
      </PriorityBtn3>
    </TodoForm>
  );
};

const H4 = styled.h4`
  margin: 0;
`;

const PlusBtn = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  display: flex;
`;

const PriorityBtn = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 4px;
`;

const PriorityBtn1 = styled(PriorityBtn)`
  ${(props) =>
    props.isPriority &&
    css`
      background-color: #ee0d0d;
    `}
  &:hover {
    background-color: #ee0d0d;
  }
`;

const PriorityBtn2 = styled(PriorityBtn)`
  ${(props) =>
    props.isPriority &&
    css`
      background-color: #ffd600;
    `}
  &:hover {
    background-color: #ffd600;
  }
`;

const PriorityBtn3 = styled(PriorityBtn)`
  ${(props) =>
    props.isPriority &&
    css`
      background-color: #03aa00;
    `}
  &:hover {
    background-color: #03aa00;
  }
`;

const TodoForm = styled.form`
  display: flex;
  flex-dirextion: column;
  width: 40vw;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
  align-items: center;
`;

const Input = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  border: none;
  outline: none;
  width: 80%;
  font-size: 15px;
  font-weight: bold;
  box-sizing: border-box;
  color: #565656;
`;

export default AddTodo;

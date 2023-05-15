import styled from "styled-components";
import React, { useState } from "react";

//새로운 todo를 입력 받음
const TodoCreate = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(Date.now()); //id는 고유한 값을 가져야하므로 Date로 설정

  const newItem = { id: id, text: text, done: false };

  const addItem = (e) => {
    e.preventDefault();
    //입력창에 무언가가 입력되면 todoList에 추가하고 입력창은 다시 비워둠
    if (text) {
      setId(Date.now());
      setTodoList([...todoList, newItem]);
    }
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TodoForm onSubmit={addItem}>
      <InputBox
        value={text}
        placeholder="Input task..."
        onChange={handleChange}
      />
      <AddButton>+</AddButton>
    </TodoForm>
  );
};

const AddButton = styled.button`
  background: #b5ffe1;
  &:hover {
    background: #bbe6e4;
  }

  margin-left: 15px;
  cursor: pointer;
  width: 50px;
  height: 50px;

  font-size: 40px;
  bottom: 0px;
  color: #868e96;
  border-radius: 15px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
`;

const TodoForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 30px;
  padding-right: 32px;
  padding-bottom: 30px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 3px solid #bbe6e4;

  display: flex;
  align-items: center;
`;

const InputBox = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 3px solid #bbe6e4;
  width: 80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default React.memo(TodoCreate);

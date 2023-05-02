import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import styled from "styled-components";

const TodoCreate = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const addItem = (e) => {
    e.preventDefault();
    if (text) {
      const newItem = { id: Date.now(), text: text, done: false };
      setTodoList([...todoList, newItem]);
    }
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Form onSubmit={addItem}>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Write your task"
      />
      <Button type="submit">
        <FaRegPlusSquare size="37px" />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 20px 0;
`;

const Input = styled.input`
  font-size: 20px;
  height: 30px;
  width: 100%;
  padding: 0 10px;
`;

const Button = styled.button`
  background-color: white;
  padding-top: 5px;
  border: none;
  padding-right: 0;
`;

export default TodoCreate;

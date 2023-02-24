import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
const EditInput = ({ onEditTodo, todo, setIsOpen }) => {
  const { id, text, done } = todo;

  const [value, setValue] = useState(text);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const inputFocus = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    onEditTodo(e, id, value);

    setValue("");
    setIsOpen(false);
  };

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <EditForm onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} ref={inputFocus} />
    </EditForm>
  );
};

export default EditInput;

const EditForm = styled.form`
  input {
    background-color: transparent;
    border: none;

    font-family: "Cafe24SsurroundAir";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: red;
    margin-left: 30px;
  }

  input:focus {
    outline: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

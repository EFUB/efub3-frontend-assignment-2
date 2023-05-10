import { MdAdd } from "react-icons/md";
import React, { useState, useCallback } from "react";
//styled component 쓸 때는 무조건 import
import styled from "styled-components";

const TodoInsert = ({ todos, setTodos }) => {
  //새로운 text, id의 state를 만듦
  const [text, setText] = useState("");

  //addItem을 callBack함수로 감싸서 만약
  const AddItem = useCallback(
    (e) => {
      e.preventDefault();
      if (text) {
        const newItem = { text: text, id: Date.now(), checked: false };
        setTodos([...todos, newItem]);
      }
      setText("");
    },
    [text, setTodos]
  );

  //handleChange : 인풋태그의 입력값을 관리해주는 함수
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TodoInsertBlock>
      <input
        value={text}
        className="insertInput"
        placeholder="할 일을 입력하세요"
        onChange={handleChange}
      />
      <button type="submit" onClick={AddItem}>
        <MdAdd className="plus" />
      </button>
    </TodoInsertBlock>
  );
};

const TodoInsertBlock = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .insertInput {
    height: 40px;
    width: 430px;
    font-size: 20px;
    border-radius: 5px;
    border: 3px solid gray;
    outline: 0;
    padding-left: 10px;
  }
  button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .plus {
    height: 40px;
    width: 40px;
  }
`;

export default TodoInsert;

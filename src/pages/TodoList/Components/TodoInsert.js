import { MdAdd } from "react-icons/md";
import React, { useState, useCallback } from "react";
import styled from "styled-components";

//TodoInsert : todolist의 input과 플러스 버튼으로 추가할 수 있는 부분. todo에 새로운 todo를 추가하여 재렌더링해주는 컴포넌트
const TodoInsert = ({ todos, setTodos }) => {
  //새로운 text, id의 state를 만듦
  const [text, setText] = useState("");

  //onClickAddTodo : 추가버튼으로 todo를 추가하는 함수
  const onClickAddTodo = (e) => {
    e.preventDefault();
    if (text) {
      const newItem = { text: text, id: Date.now(), checked: false };
      setTodos([...todos, newItem]);
    }
    setText("");
  };

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
      <MdAdd className="plus" onClick={onClickAddTodo} />
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

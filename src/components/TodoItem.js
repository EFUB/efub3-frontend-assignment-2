import { useState } from "react";
import styled, { css } from "styled-components";
import {
  FaPen,
  FaTrash,
  FaCheckSquare,
  FaRegCheckSquare,
} from "react-icons/fa";

const TodoItem = ({ todoList, setTodoList, id, text, done }) => {
  const [modifying, setModifying] = useState(false); //수정하는 중인지 여부
  //투두 완료 토글
  const toggleItem = () => {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, done: !done } : item))
    );
  };
  //투두 삭제
  const deleteItem = () => {
    setTodoList(
      todoList.filter((item) => {
        return item.id != id;
      })
    );
  };
  //투두 수정 토글
  const toggleModify = (e) => {
    e.preventDefault();
    setModifying((modifying) => !modifying);
  };
  //투두 수정
  const modifyItem = (e) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, text: e.target.value } : item
      )
    );
  };
  return (
    <TodoItemContainer>
      {/* 완료 버튼 */}
      <Button onClick={toggleItem}>
        {done ? (
          <FaCheckSquare size={iconSize} />
        ) : (
          <FaRegCheckSquare size={iconSize} />
        )}
      </Button>
      {modifying ? (
        //수정 폼
        <form style={{ display: "inline" }} onSubmit={toggleModify}>
          <Input
            type="text"
            value={text}
            onChange={modifyItem}
            onBlur={toggleModify}
          />
        </form>
      ) : (
        //투두 내용
        <Text style={{ textDecoration: done && "line-through" }}>{text}</Text>
      )}
      {/* 수정 버튼 */}
      <Button onClick={toggleModify}>
        <FaPen size={iconSize} />
      </Button>
      {/* 삭제 버튼 */}
      <Button onClick={deleteItem}>
        <FaTrash size={iconSize} />
      </Button>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding-top: 10px;
`;

const Text = styled.div`
  font-size: 25px;
  width: 210px;
  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
    `}
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px black solid;
`;

const iconSize = "20px";

export default TodoItem;

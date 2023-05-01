import { React, useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdOutlineEdit } from "react-icons/md";

const TodoItem = ({ text, todoList, setTodoList, id, done }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  //아이템 삭제
  const deleteItem = () => {
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  };

  //아이템 완료 표시
  const toggleItem = () => {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, done: !done } : item))
    );
  };

  //아이템 수정 시작
  const editToDoStart = (id, text) => {
    setIsEditing(true);
    setEditText(text);
  };

  //아이템 수정 저장
  const editToDoSave = () => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodoList(newTodoList);
    setIsEditing(false);
  };
  //아이템 수정 취소
  const editToDoCancel = () => {
    setIsEditing(false);
  };

  //체크박스를 누르면 아이템 완료 표시, 연필 아이콘을 누르면 아이템 수정, 휴지통 아이콘을 누르면 아이템 삭제
  return (
    <>
      <TodoItemBlock>
        <CheckBox done={done} onClick={toggleItem}>
          {done && <MdDone />}
        </CheckBox>{" "}
        <Text isDone={done}>{text}</Text>
        {isEditing ? (
          <ReDo onClick={() => editToDoCancel()}>
            <MdOutlineEdit />
          </ReDo>
        ) : (
          <ReDo onClick={() => editToDoStart(id, text)}>
            <MdOutlineEdit />
          </ReDo>
        )}
        {/*수정 중이라면 수정 버튼을 눌렀을때 수정을 취소하도록 하고
        수정 중이 아니라면 수정을 시작하도록 함 */}
        <Remove>
          <MdDelete onClick={deleteItem} />
        </Remove>
      </TodoItemBlock>

      {/* 아이템 밑에 수정 창을 구현 */}
      <Text isDone={done} isEditing={isEditing}>
        {isEditing ? (
          <EditInput
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                //엔터를 치면 수정된게 반영됨
                editToDoSave();
              } else if (e.key === "Escape") {
                //escape키를 치면 수정하는걸 멈춤
                editToDoCancel();
              }
            }}
            autoFocus
          />
        ) : (
          ""
        )}
      </Text>
    </>
  );
};
const EditInput = styled.input`
  border: none;
  border-bottom: 2px solid #ddd;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom-color: #b5ffe1;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
  font-size: 25px;
  cursor: pointer;
  margin-right: 10px;
`;

const ReDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
  font-size: 25px;
  cursor: pointer;
  margin-right: 10px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 2px #bbe6e4;
  margin-bottom: 15px;
`;

const Text = styled.div`
  flex: 1;
  font-size: 20px;
  color: #6c757d;
  ${(props) =>
    props.isDone &&
    css`
      text-decoration: line-through;
    `}
`;

const CheckBox = styled.div`
  background: #b5ffe1;
  &:hover {
    background: #b5ffe1;
  }
  &:active {
    background: #b5ffe1;
  }
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  font-size: 20px;
  bottom: 0px;
  color: #6c757d;
  border-radius: 15%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
`;

export default TodoItem;

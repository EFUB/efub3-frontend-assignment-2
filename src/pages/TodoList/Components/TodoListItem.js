import React, { useState, useRef } from "react";
import { MdOutlineCheckBox, MdModeEdit, MdRemove } from "react-icons/md";
import styled, { css } from "styled-components";

const TodoListItem = ({ todo, todos, setTodos }) => {
  //return 문을 쓰지 않고 export하면 에러남.
  //디스트럭쳐 문법, id는 안보여줘도 됨.
  //todo로 받아온 객체에서 text, id를 할당
  const { text, id } = todo;
  //isChecked에 따라서 체크박스에 checked라는 클래스가 추가되거나 없어짐.
  //체크 상태에 따라 css를 다르게 표시하려고 만듦.
  const [isChecked, setIsChecked] = useState(todo.Checked);
  //edit상태에 따라 보여지는 항목이 다름. true이면 수정할 수 있는 인풋이 생성됨.
  const [edit, setEdit] = useState(false);
  //위에서 생성된 인풋의 value를 감지하여 text로 저장
  //기본값은 원래 있었던 text값으로 지정
  const [editedText, setEditedText] = useState(todo.text);

  //handleCheck:
  //isChecked라는 상태를 반대로 바꿔주는 함수
  //체크박스를 누르면 실행됨
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  //startEdit :
  //수정아이콘(연필)을 클릭하면 setEdit함수를 통해 edit의 state의 상태가 true가 됨
  //edit의 상태에 따라 보여지는 태그가 달라짐 (true일 경우 input, false일 경우 원래 태그)

  const startEdit = () => {
    setEdit(true);
  };

  //endEdit :
  //수정한 내용으로 바꿔주는 함수(수정버튼을 누르면 동작)
  //todo의 id가 해당 id와 같으면 text를 editedText로 바꿔줌.
  //text를 제외한 나머지 속성은  스프레드 문법으로 가져옴
  //setTodos를 newTodos로 바꿔주고, setEdit속성을 false로 돌려줌
  const endEdit = () => {
    const newTodos = todos.map((todo) => {
      console.log(id);
      if (todo.id === id) {
        return { ...todo, text: editedText };
      }
      return todo;
    });
    setTodos(newTodos);
    setEdit(false);
  };

  //handleEditedTextChange :
  //edit의 상태가 true가 되면 나오는 input의 value를 감지하여 editedText의 상태를
  //인풋의 내용으로 바꿔주는 함수
  const handleEditedTextChange = (e) => {
    setEditedText(e.target.value);
  };

  //remove :
  //각 아이템의 삭제 버튼을 누르면 현재 remove를 누른 아이템의 id와 다른 아이템
  //즉, 지우려는 아이템을 제외한 모든 아이템들을 반환하여 setTodos에 넣어주는 함수임
  const remove = (e) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  //리턴문
  //edit의 state가 true/false인지에 따라서 다른 태그가 보이게 함
  //삼항 연산자 사용
  return (
    <TodoListItemBlock>
      {edit ? (
        <div className="editForm">
          <input
            type="text"
            value={editedText}
            onChange={handleEditedTextChange}
          />
          <button onClick={endEdit}>
            <MdModeEdit className="editIcon" />
          </button>
        </div>
      ) : (
        <div className="flex">
          <div
            className={`checkbox ${isChecked ? "checked" : ""}`}
            onClick={handleCheck}
          >
            <MdOutlineCheckBox className="checkIcon" />
            <div className="text">{text}</div>
          </div>
          <div className="icons-container">
            <div onClick={startEdit}>
              <MdModeEdit className="editIcon" />
            </div>
            <div onClick={remove}>
              <MdRemove className="removeIcon" />
            </div>
          </div>
        </div>
      )}
    </TodoListItemBlock>
  );
};

const TodoListItemBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-top: 10px;
  padding-left: 50px;
  color: black;
  .checkIcon {
    width: 40px;
    height: 40px;
    color: gray;
    padding-right: 30px;
  }
  .editIcon {
    width: 35px;
    height: 35px;
    color: skyblue;
  }
  .removeIcon {
    width: 40px;
    height: 40px;
    color: red;
    margin-left: 10px;
  }
  .flex {
    display: flex;
  }
  .icons-container {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 80px;
  }
  .checkbox {
    cursor: pointer;
    flex: 1; //차지할 수 있는 영역 모두 차지
    align-items: center; //중앙 정렬
    display: flex;
    //체크상태일때 추가될 css
    &.checked {
      //체크되었을 때 아이콘 스타일
      svg {
        color: grey;
      }
      //체크 되었을 때 텍스트 스타일
      .text {
        color: grey;
        text-decoration: line-through;
      }
    }
  }
  //수정 상태시 나오는 인풋과 수정 버튼
  .editForm {
    display: flex;
  }
  .editForm > input {
    width: 380px;
    height: 30px;
    font-size: 20px;
    border-radius: 5px;
  }
  .editForm > button {
    width: 50px;
    height: 35px;
    font-size: 15px;
    background-color: transparent;
    border: 0;
    outline: 0;
    color: white;
  }
`;

export default TodoListItem;

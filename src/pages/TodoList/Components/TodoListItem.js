import React, { useState, useRef, useCallback } from "react";
import { MdOutlineCheckBox, MdModeEdit, MdRemove } from "react-icons/md";
import styled, { css } from "styled-components";

//TodoListItem : todo들을 개별로 하나씩 렌더링 해주는 함수
const TodoListItem = ({ todo, todos, setTodos }) => {
  //받아온 todo에서 text와 id를 선언
  const { text, id } = todo;
  //해당 todo가 수정상태인지 판단
  const [edit, setEdit] = useState(false);
  //수정할 text를 넣는 함수. 기본값으로 해당 todo의 text가 들어있다.
  const [editedText, setEditedText] = useState(todo.text);

  //onClickEditOn :
  //수정아이콘(연필)을 클릭하면 setEdit함수를 통해 edit의 state의 상태가 true가 됨
  //edit의 상태에 따라 보여지는 태그가 달라짐 (true일 경우 input, false일 경우 원래 태그)
  const onClickEditOn = () => {
    setEdit(true);
  };

  //onClickEditOff :
  //수정한 내용으로 바꿔주는 함수(수정버튼을 누르면 동작)
  //todo의 id가 해당 id와 같으면 text를 editedText로 바꿔줌.
  //text를 제외한 나머지 속성은  스프레드 문법으로 가져옴
  //setTodos를 newTodos로 바꿔주고, setEdit속성을 false로 돌려줌
  const onClickEditOff = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editedText };
      }
      return todo;
    });
    setTodos(newTodos);
    setEdit(false);
  };

  //onToggle: 체크박스를 클릭하면 해당 todo의 checked 속성을 반대로 바꿔줌
  const onToggle = () => {
    const newTodos = todos.map((todo) => {
      console.log(id);
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log("hi", todo);
  };

  //handleEditedTextChange :
  //edit의 상태가 true가 되면 나오는 input의 value를 감지하여 editedText의 상태를
  //인풋의 내용으로 바꿔주는 함수
  const handleEditedTextChange = (e) => {
    setEditedText(e.target.value);
  };

  //onClickRemove :
  //각 아이템의 삭제 버튼을 누르면 현재 remove를 누른 아이템의 id와 다른 아이템
  //즉, 지우려는 아이템을 제외한 모든 아이템들을 반환하여 setTodos에 넣어주는 함수임
  const onClickRemove = (e) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  //리턴문
  return (
    <TodoListItemBlock>
      {/*수정상태(edit = true)일때 input과 수정버튼이 나오게 함*/}
      {edit ? (
        <div className="editForm">
          <input
            type="text"
            value={editedText}
            onChange={handleEditedTextChange}
          />
          <button onClick={onClickEditOff}>
            <MdModeEdit className="editIcon" />
          </button>
        </div>
      ) : (
        <Wrapper>
          {/*수정상태가 아닐때는 일반 todo가 버튼과 함께 렌더링*/}
          <TextContainer todo={todo} onClick={onToggle}>
            <MdOutlineCheckBox className="checkIcon" />
            <div>{text}</div>
          </TextContainer>
          <IconContainer>
            <MdModeEdit className="editIcon" onClick={onClickEditOn} />
            <MdRemove className="removeIcon" onClick={onClickRemove} />
          </IconContainer>
        </Wrapper>
      )}
    </TodoListItemBlock>
  );
};

const TodoListItemBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  padding-top: 10px;
  padding-left: 130px;
  .checkIcon {
    width: 40px;
    height: 40px;
    padding-right: 30px;
  }
  .editIcon {
    width: 35px;
    height: 35px;
    color: #008c8c;
  }
  .removeIcon {
    width: 40px;
    height: 40px;
    color: #ff5675;
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

//props로 todo를 받음. checked속성에 따라 text css가 바뀜.
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.todo.checked ? "gray" : "black")};
  text-decoration: ${(props) => (props.todo.checked ? "line-through" : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 700px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export default TodoListItem;

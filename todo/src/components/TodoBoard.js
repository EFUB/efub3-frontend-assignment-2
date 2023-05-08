import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import { ReactComponent as DoneIcon } from "../images/done.svg";
import { ReactComponent as ProgressIcon } from "../images/progress.svg";

// id 형식 변환 (ex. id-0-1622451, id-1-164231)
const getItems = (todoList) => {
  return todoList.map((item, i) => ({
    id: `item-${i}-${item.id}`,
    content: item.text,
  }));
};

// 위치 재정렬(행 기준)
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// 위치 재정렬(열 기준)
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

// 아이템 style
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: "10px",
  margin: `0 0 8px 0`,
  border: "1px solid #E8E8E8",
  borderRadius: "5px",
  fontSize: "15px",

  background: isDragging ? "#DAEED9" : "white",

  ...draggableStyle,
});

const getListStyle = () => ({
  padding: 8,
  width: 250,
});

const TodoBoard = ({ todoList, setTodoList }) => {
  // todoList에 저장되어 있는 done 속성을 이용해 진행 전/후 일정 분류
  const [state, setState] = useState([
    getItems(todoList.filter((item) => !item.done)),
    getItems(todoList.filter((item) => !!item.done)),
  ]);

  // todoList 추가/삭제 시 state에 반영
  useEffect(() => {
    const nextState = [
      getItems(todoList.filter((item) => !item.done)),
      getItems(todoList.filter((item) => !!item.done)),
    ];
    setState(nextState);
  }, [todoList]);

  // 위치 상태 저장하는 기능. todoList의 상태 변화와 충돌하여 주석 처리
  //   useEffect(() => {
  //     localStorage.setItem("state", JSON.stringify(state));
  //   }, [state]);
  //   function getInitialState() {
  //     const savedState = localStorage.getItem("state");
  //     if (savedState) {
  //       return JSON.parse(savedState);
  //     }
  //     return [
  //       getItems(todoList.filter((item) => !item.done)),
  //       getItems(todoList.filter((item) => !!item.done)),
  //     ];
  //   }

  // drag 함수
  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  }

  return (
    <Container>
      <Header>
        <H1>Todo Board</H1>
        <H2>{todoList.length}</H2>
      </Header>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <Status>
        <P1>
          <ProgressIcon style={{ marginRight: "3px" }} />
          진행 전
        </P1>
        <P2>
          <DoneIcon style={{ marginRight: "3px" }} />
          완료
        </P2>
      </Status>
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            {item.content}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 38px;
  color: black;
`;

const H2 = styled.h2`
  margin-left: 25px;
  font-size: 25px;
  font-weight: normal;
`;

const P1 = styled.p`
  color: #790d0d;
  font-weight: bold;
  display: flex;
  margin-left: 5px;
  margin-right: 195px;
`;

const P2 = styled.p`
  color: #468b10;
  font-weight: bold;
  display: flex;
`;

const Status = styled.span`
  display: flex;
`;

export default TodoBoard;

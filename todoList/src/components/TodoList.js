import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <TodoListBlock>
      {todoList.map((item) => {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            id={item.id}
            done={item.done}
            setTodoList={setTodoList}
            todoList={todoList}
          />
        );
      })}
    </TodoListBlock>
  );
};

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default React.memo(TodoList);

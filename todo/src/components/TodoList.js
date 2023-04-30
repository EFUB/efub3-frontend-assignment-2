import TodoItem from "./TodoItem";
import styled from "styled-components";
import UpdateTodo from "./UpdateTodo";
import { useState } from "react";

const TodoList = ({ todoList, setTodoList }) => {
  const [activeItem, setActiveItem] = useState(-1);

  return (
    <TodoListBlock>
      {todoList.map((item) => {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            id={item.id}
            done={item.done}
            todoList={todoList}
            setTodoList={setTodoList}
            priority={item.priority}
            setActiveItem={setActiveItem}
          />
        );
      })}
      {activeItem !== -1 && (
        <UpdateTodo
          id={activeItem}
          setActiveItem={setActiveItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      )}
    </TodoListBlock>
  );
};

const TodoListBlock = styled.div`
  overflow-y: auto;
`;

export default TodoList;

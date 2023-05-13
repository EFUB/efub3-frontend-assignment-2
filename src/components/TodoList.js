import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

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
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
                );
            })}
        </TodoListBlock>
    );
};

const TodoListBlock = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 1em;
    border-top: 1px solid darkgray;
`;

export default React.memo(TodoList);
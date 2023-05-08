import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <TodoListContainer>
      {todoList.map((item) => {
        return (
          <TodoItem
            todoList={todoList}
            setTodoList={setTodoList}
            id={item.id}
            key={item.id}
            text={item.text}
            done={item.done}
          />
        );
      })}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  width: 100%;
`;

export default TodoList;

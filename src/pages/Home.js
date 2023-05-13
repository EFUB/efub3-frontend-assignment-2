import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import TodoText from '../components/TodoText';
import { useState, useEffect } from "react";
import styled from 'styled-components';

const Home = () => {
      const [todoList, setTodoList] = useState(() => {
        const localTodoList = localStorage.getItem("localTodoList");
        return localTodoList ? JSON.parse(localTodoList) : [];
      });
    
      useEffect(() => {
        localStorage.setItem("localTodoList", JSON.stringify(todoList));
      }, [todoList]);

      const [count, setCount] = useState(0);

      const clickBtnstate = () => {
        setCount((count) => count + 1);
      };
    
      return (
        <>
          <CountButton onClick={clickBtnstate}>{count}</CountButton>
          {/* TodoText 컴포넌트로 수정 */}
          <TodoText />
          <TodoCreate todoList={todoList} setTodoList={setTodoList}/>
          <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </>
      );
};

const CountButton = styled.button`
  width: 50px;
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;
  font-size: 15px;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  margin: auto;
  :hover {
    text-decoration: underline 1px;
  }
`;

export default Home;
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
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
    
    return (
        <>
            {/* styled-components로 수정 */}
            <TitleText>Todo List</TitleText>
            <NoticeText>※수정은 항목을 눌러주세요※</NoticeText>
            <TodoCreate todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </>
    );
};

const TitleText = styled.h1`
  text-align: center;
`;
const NoticeText = styled.p`
  text-align: center;
  margin-top: 0;
`;

export default Home;
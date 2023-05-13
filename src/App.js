import React, {useState, useEffect} from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';
import TestButton from './components/TestButton'; // TestButton 컴포넌트를 불러옵니다.
import {Route, Routes, NavLink} from 'react-router-dom';
import Movie from './pages/Movie';
import Time from './pages/Time';
import './App.css';


function App() { 
  // input value와 todolist 정의
  const [inputValue, setInputValue] = useState('');
  // 새로고침해도 저장되도록 value값을 localStorage에 저장하기
  const [todoList, setTodoList] = useState(() => {
    const localTodoList = localStorage.getItem('todoList');
    return localTodoList ? JSON.parse(localTodoList) : [];
  });
  // todolist 상태를 localStorage에 저장하기 (상태변화시)
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);
//네비게이션 바 작성 
  return (
    <div>
      <div className="navbar">
      <div className="nav-link">
{/* 테스트버튼입니다 */}
        <NavLink to="/" activeClassName="active" className="nav-link">
          HOME
        </NavLink>

        <NavLink to="/movie" activeClassName="active" className="nav-link">
          MOVIE
        </NavLink>

        <NavLink to="/time" activeClassName="active" className="nav-link">
          TIME
        </NavLink>
      </div>
    </div>
    {/* 라우터 시작 */}
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/time" element={<Time />} />
        <Route path="/" element={
          <>
            {/* 추가, 삭제, 수정, todolist  */}
            <Input value={inputValue} onChange={setInputValue} />
            <TestButton /> {/* TestButton 컴포넌트를 사용합니다. */}
            <AddButton
              inputValue={inputValue}
              setInputValue={setInputValue}
              todoList={todoList}
              setTodoList={setTodoList}
            />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </>
        } />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

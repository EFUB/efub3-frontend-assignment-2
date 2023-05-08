import React, {useState, useEffect} from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import AddButton from './components/AddButton';
import {Route, Routes, NavLink} from 'react-router-dom';
import Movie from './pages/Movie';
import Time from './pages/Time';
import './App.css';


function App() { 
  // input value와 todolist 정의


//네비게이션 바 작성 
  return (
    <div>
      <div className="navbar">
      <div className="nav-link">
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

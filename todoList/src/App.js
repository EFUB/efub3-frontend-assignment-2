import React from "react";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { FcTodoList } from "react-icons/fc";
import { TiWeatherPartlySunny } from "react-icons/ti";
import TodoTemplate from "./components/TodoTemplate";

import ShowWeather from "./pages/WeatherPage";
import ShowTodoList from "./pages/TodoListPage";

const GlobalStyle = createGlobalStyle`
  body{
    background:#bbe6e4;
  }
`;

function App() {
  //아이콘을 통해 페이지 이동
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <NavBar>
          <Link to="/todoList">
            <FcTodoList id="todoList-icon" size="25"></FcTodoList>
          </Link>
          <Link to="/weather">
            <TiWeatherPartlySunny
              id="weather-icon"
              size="25"
            ></TiWeatherPartlySunny>
          </Link>
        </NavBar>
        <Routes>
          <Route path="/weather" element={<ShowWeather />} />
          <Route path="/todoList" element={<ShowTodoList />} />
        </Routes>
      </TodoTemplate>
    </>
  );
}

const NavBar = styled.div`
  background-color: #b5ffe1;
  display: flex;
  justify-content: space-around;
  margin: 0.8em;
  margin-bottom: -2.5em;
  padding: 0.3em;
  border-radius: 15px;
  color: #6c757d;
  font-size: 20px;
  cursor: pointer;
`;

export default App;

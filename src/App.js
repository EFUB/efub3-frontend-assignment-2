import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";

const App = () => {
  //데이터를 서버에 저장해주는 기능
  //localstorage에서 localtodos으 값을 읽어서(getItem)
  //만약 기존 값(localtodos)이 있으면 JSON.parse 통해서 객체화, 없으면 빈 배열 반환.
  const [todos, setTodos] = useState(() => {
    const localtodos = localStorage.getItem("localtodos");
    return localtodos ? JSON.parse(localtodos) : [];
  });
  //useEffect를 사용해 todos의 상태 값이 업데이트 될때마다(의존성 배열?) localstorage에
  //데이터를 저장(setItem). 이과정에서 JSON.stringfiy를 통해 객체를 문자열로 변환한 뒤 저장
  useEffect(() => {
    localStorage.setItem("localtodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoTemplate>
      <p className="title">Todo Lists</p>
      <TodoInsert todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoTemplate>
  );
};

export default App;

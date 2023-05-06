import styled from "styled-components";
import "./App.css";
import Editor from "./Editor";
import List from "./List";
import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Luck from "./Luck";

function App() {
  const [data, setData] = useState(() => {
    const localTodoList = localStorage.getItem("localTodoList");
    return localTodoList ? JSON.parse(localTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTodoList", JSON.stringify(data));
  }, [data]);

  //투두 리스트용 아이디
  const dataId = useRef(0);

  //새로운 일기를 추가하는 함수
  const onCreate = (content) => {
    const newItem = {
      //새로운 todo 객체 생성
      content,
      id: dataId.current, // 현재 상태값
      isDone: false,
    };
    setData([...data, newItem]);
  };

  const onDelete = (targetId) => {
    const newList = data.filter((it) => it.id !== targetId);
    setData(newList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  const onToggle = (targetId) => {
    setData(
      data.map((it) => (it.id === targetId ? { ...it, isDone: true } : it))
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={[
            <Editor onCreate={onCreate} />,
            <List
              onDelete={onDelete}
              onEdit={onEdit}
              list={data}
              onToggle={onToggle}
            />,
          ]}
        />
        <Route path="/luck" element={<Luck />} />
      </Routes>
    </div>
  );
}

export default App;

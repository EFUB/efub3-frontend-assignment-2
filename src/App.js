import styled from "styled-components";
import "./App.css";
import Editor from "./Editor";
import List from "./List";
import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Luck from "./Luck";
import { useCallback } from "react";
import Test from "./Test";

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
  const onCreate = useCallback((content) => {
    const newItem = {
      //새로운 todo 객체 생성
      content,
      id: dataId.current++, // 현재 상태값
      isDone: false,
    };

    setData((data) => [...data, newItem]);
  }, []);

  const onDelete = useCallback((targetId) => {
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);

  const onToggle = useCallback((targetId) => {
    setData((data) =>
      data.map((it) => (it.id === targetId ? { ...it, isDone: true } : it))
    );
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={[
            <Test />,
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

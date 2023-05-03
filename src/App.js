import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoList";
import Header from "./components/Header";
import Weather from "./components/Weather";
import PhotoPage from "./pages/Photos";
import VideoPage from "./pages/Video";

const App = () => {
  return (
    //top : 날씨 현재 시각 추가
    //nav바 : 사이드바
    //todo : 메인페이지
    //board : 게시판
    //video : 유튜브영상
    //story : 현재 스토리
    <>
      <Weather />
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/board" />
      </Routes>
    </>
  );
};

export default App;

//데이터를 서버에 저장해주는 기능
//localstorage에서 localtodos으 값을 읽어서(getItem)
//만약 기존 값(localtodos)이 있으면 JSON.parse 통해서 객체화, 없으면 빈 배열 반환.
// const [todos, setTodos] = useState(() => {
//   const localtodos = localStorage.getItem("localtodos");
//   return localtodos ? JSON.parse(localtodos) : [];
// });
//useEffect를 사용해 todos의 상태 값이 업데이트 될때마다(의존성 배열?) localstorage에
//데이터를 저장(setItem). 이과정에서 JSON.stringfiy를 통해 객체를 문자열로 변환한 뒤 저장
// useEffect(() => {
//   localStorage.setItem("localtodos", JSON.stringify(todos));
// }, [todos]);

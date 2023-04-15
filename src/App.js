import styled from "styled-components";
import "./App.css";
import Editor from "./Editor";
import List from "./List";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [data, setData] = useState(() => {
    const localTodoList = localStorage.getItem("localTodoList");
    return localTodoList ? JSON.parse(localTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTodoList", JSON.stringify(data));
  }, [data]);

  const dataId = useRef(0);

  //새로운 일기를 추가하는 함수
  const onCreate = (content) => {
    const newItem = {
      //새로운 todo 객체 생성
      content,
      id: dataId.current, // 현재 상태값
    };

    dataId.current += 1; //새로운 아이템 설정후에 id 값에 1 더해준다.
    setData([...data, newItem]);
    //setData는 배열에 새로운 아이템 추가해주고 원래있던 data를 보여준다.
    //즉 여기서 setData라는 이벤트를 onCreate 함수를 통해 Editor에 넘겨준 것
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

  return (
    <div className="App">
      <Editor onCreate={onCreate} />
      <List onDelete={onDelete} onEdit={onEdit} list={data} />
    </div>
  );
}

export default App;

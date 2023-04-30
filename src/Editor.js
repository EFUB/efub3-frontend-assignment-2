import React, { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const contentInput = useRef();
  //작성하는 곳에 접근 할 수 있다.

  const handleChageState = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentInput.current.focus();
      return;
    }
    onCreate(content);
    alert("저장 성공");
    setContent("");
  };

  return (
    <div className="Editor">
      <h2>Todo List</h2>
      <div>
        <input ref={contentInput} value={content} onChange={handleChageState} />
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default Editor;

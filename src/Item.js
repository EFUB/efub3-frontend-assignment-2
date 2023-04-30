import React, { useState } from "react";

const Item = ({ content, id, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);

  const [isDone, setIsDone] = useState(false);

  const handleRemove = () => {
    console.log(id);
    if (window.confirm(`${id + 1} 번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
    // 수정된 값들 초기화
  };

  const handleEdit = () => {
    if (localContent.length < 1) {
      return;
    }

    if (window.confirm(`${id + 1} 번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  //완료 됐을 때 함수
  const handleDone = (e) => {
    alert("완료!");
    onDelete(id);
  };

  return (
    <div className="Item">
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          {" "}
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}

      <button onClick={handleDone}>완료</button>
    </div>
  );
};

export default Item;

import React, { useState } from "react";

const Item = ({ content, id, onDelete, onEdit, onToggle, item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);

  const [isDone, setIsDone] = useState(false);

  const handleRemove = () => {
    console.log(id);
    if (window.confirm(`${id + 1} 번째 리스트를 정말 삭제하시겠습니까?`)) {
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

    if (window.confirm(`${id + 1} 번째 리스트를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  //완료 됐을 때 함수
  const handleDone = (e) => {
    alert("완료!");
    onToggle(id);
  };

  return (
    <div className="Item">
      <div className={item.isDone ? "done" : ""}>
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
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>
        </>
      )}

      <button onClick={handleDone}>완료</button>
    </div>
  );
};

export default React.memo(Item);

import { useState } from "react";
import {
  FaPen,
  FaTrash,
  FaCheckSquare,
  FaRegCheckSquare,
} from "react-icons/fa";

const TodoItem = ({ todoList, setTodoList, id, text, done }) => {
  const [modifying, setModifying] = useState(false); //수정하는 중인지 여부
  //투두 완료 토글
  const toggleItem = () => {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, done: !done } : item))
    );
  };
  //투두 삭제
  const deleteItem = () => {
    setTodoList(
      todoList.filter((item) => {
        return item.id != id;
      })
    );
  };
  //투두 수정 토글
  const toggleModify = (e) => {
    e.preventDefault();
    setModifying((modifying) => !modifying);
  };
  //투두 수정
  const modifyItem = (e) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, text: e.target.value } : item
      )
    );
  };
  return (
    <div>
      {/* 완료 버튼 */}
      <button onClick={toggleItem}>
        {done ? <FaCheckSquare /> : <FaRegCheckSquare />}
      </button>
      {modifying ? (
        //수정 폼
        <form style={{ display: "inline" }} onSubmit={toggleModify}>
          <input
            type="text"
            value={text}
            onChange={modifyItem}
            onBlur={toggleModify}
          />
        </form>
      ) : (
        //투두 내용
        <span style={{ textDecoration: done && "line-through" }}>{text}</span>
      )}
      {/* 수정 버튼 */}
      <button onClick={toggleModify}>
        <FaPen />
      </button>
      {/* 삭제 버튼 */}
      <button onClick={deleteItem}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;

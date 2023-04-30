import React from 'react';

function TodoItem({ todo, index, onDelete, onRevise, onToggle }) {
  return (
    <li>
     {/* // 토글 스타일- 완료를 눌렀을 때 줄 그어짐 */}
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onDelete(index)}>삭제</button>
      {/* 수정버튼을 누르면 prompt 가 뜸 */}
      <button onClick={() => onRevise(index, prompt('어떻게 수정할래요?', todo.text))}>수정</button>
      {/* 완료 버튼을 누르면 => 해당 버튼이 완료취소 버튼으로 바뀜 */}
      <button onClick={() => onToggle(index)}>{todo.completed ? '완료취소' : '완료'}</button>
    </li>
  );
}

export default TodoItem;

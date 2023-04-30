import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, onDelete, onRevise, onToggle }) {
  return (
    // map 함수를 이용하여 TodoItem 에 전달
    <ul>
      {todoList.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} onDelete={onDelete} onRevise={onRevise} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;

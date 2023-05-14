// React.memo()와 useCallback()를 사용하여 성능 올리기
import React, { useCallback } from 'react';

const TodoItem = React.memo(({ todo, index, todoList, setTodoList }) => {
  const deleteItem = useCallback(
    (index) => {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    },
    [setTodoList, todoList]
  );

  const reviseItem = useCallback(
    (index, newText) => {
      const newTodoList = [...todoList];
      newTodoList[index].text = newText;
      setTodoList(newTodoList);
    },
    [setTodoList, todoList]
  );

  const toggleItem = useCallback(
    (index) => {
      const newTodoList = [...todoList];
      newTodoList[index].completed = !newTodoList[index].completed;
      setTodoList(newTodoList);
    },
    [setTodoList, todoList]
  );

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteItem(index)}>삭제</button>
      <button
        onClick={() =>
          reviseItem(index, prompt('어떻게 수정할래요?', todo.text))
        }
      >
        수정
      </button>
      <button onClick={() => toggleItem(index)}>
        {todo.completed ? '완료취소' : '완료'}
      </button>
    </li>
  );
});

export default TodoItem;

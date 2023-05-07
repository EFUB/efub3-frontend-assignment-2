import React from 'react';

function TodoItem({todo, index, todoList, setTodoList}) {
  const deleteItem = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const reviseItem = (index, newText) => {
    const newTodoList = [...todoList];
    newTodoList[index].text = newText;
    setTodoList(newTodoList);
  };

  const toggleItem = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = ! newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  return (<li> {/* // 토글 스타일- 완료를 눌렀을 때 줄 그어짐 */}
    <span style={
      {
        textDecoration: todo.completed ? 'line-through' : 'none'
      }
    }> {
      todo.text
    }</span>
    <button onClick={
      () => deleteItem(index)
    }>삭제</button>
    {/* 수정버튼을 누르면 prompt 가 뜸 */}
    <button onClick={
      () => reviseItem(index, prompt('어떻게 수정할래요?', todo.text))
    }>수정</button>
    {/* 완료 버튼을 누르면 => 해당 버튼이 완료취소 버튼으로 바뀜 */}
    <button onClick={
      () => toggleItem(index)
    }> {
      todo.completed ? '완료취소' : '완료'
    }</button>
  </li>);
}

export default TodoItem;

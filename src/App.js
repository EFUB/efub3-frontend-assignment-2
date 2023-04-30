import React, {useState, useEffect} from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() { // input value와 todolist 정의
  const [inputValue, setInputValue] = useState('');
  // 새로고침해도 저장되도록 value값을 localStorage에 저장하기
  const [todoList, setTodoList] = useState(() => {
    const localTodoList = localStorage.getItem('todoList');
    return localTodoList ? JSON.parse(localTodoList) : [];
  });
  // todolist 상태를 localStorage에 저장하기 (상태변화시)
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);
  // 추가, 삭제, 수정 기능 정의하기
  const addItem = () => {
    setTodoList([
      ...todoList, {
        text: inputValue,
        completed: false
      }
    ]);
    setInputValue('');
  };

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
  // 추가, 삭제, 수정, todolist 렌더링하기
  return (
    <main>
      <Input value={inputValue}
        onChange={setInputValue}/>
      <button onClick={addItem}>추가</button>
      <TodoList todoList={todoList}
        onDelete={deleteItem}
        onRevise={reviseItem}
        onToggle={toggleItem}/>
    </main>
  );
}

export default App;

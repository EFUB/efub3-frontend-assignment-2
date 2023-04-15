import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import TodoTemplate from './components/TodoTemplate';
import { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localTodoList = localStorage.getItem("localTodoList");
    return localTodoList ? JSON.parse(localTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <TodoTemplate>
        <h1 style={{
          textAlign: "center"
        }}>Todo List</h1>
        <p style={{
          textAlign: "center",
          marginTop: "0"
        }}>
          ※수정은 항목을 눌러주세요※
        </p>
        <TodoCreate todoList={todoList} setTodoList={setTodoList}/>
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </TodoTemplate>
    </>
  );
}
export default App;

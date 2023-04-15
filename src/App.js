import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "study", done: false },
    { id: 2, text: "efub", done: false },
  ]);
  return (
    <div className="App">
      <TodoCreate todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

import Template from "./components/Template";
import Head from "./components/Head";
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState(() => {
    const localTodo = localStorage.getItem("localTodo");
    return localTodo ? JSON.parse(localTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTodo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Head />
      <Template>
        <SideBar todoList={todo} />
        <TodoTemplate>
          <TodoHead todoList={todo} />
          <AddTodo todoList={todo} setTodoList={setTodo} />
          <TodoList todoList={todo} setTodoList={setTodo} />
        </TodoTemplate>
      </Template>
    </>
  );
}

export default App;

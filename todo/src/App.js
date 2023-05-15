import Template from "./components/Template";
import Head from "./components/Head";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import TodoListPage from "./TodoListPage";
import TodoBoard from "./components/TodoBoard";
import Intro from "./components/Intro";

function App() {
  const [todo, setTodo] = useState(() => {
    const localTodo = localStorage.getItem("localTodo");
    return localTodo ? JSON.parse(localTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("localTodo", JSON.stringify(todo));
  }, [todo]);

  const [test, setTest] = useState(0);

  const Test = () => {
    setTest(test + 1);
  };

  return (
    <>
      <Head />
      <button onClick={Test}>test</button>
      {test}
      <Template>
        <NavBar todoList={todo} />
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route
            path="/todolist"
            element={<TodoListPage todoList={todo} setTodoList={setTodo} />}
          />
          <Route
            path="/todoboard"
            element={<TodoBoard todoList={todo} setTodoList={setTodo} />}
          />
          <Route />
        </Routes>
      </Template>
    </>
  );
}

export default App;

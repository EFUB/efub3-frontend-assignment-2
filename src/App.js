import { useState, useEffect, useRef } from "react";
import Todo from "./component/Todo";
import Navbar from "./component/Navbar";
import "./App.css";

import styled from "styled-components";

import blue from "./assets/blue.mp4";

function App() {
  const isMount = useRef(true);
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // 추가`
  const onSubmit = (e) => {
    e.preventDefault();
    let todo = { id: id, text: newTodo, done: false };
    let newTodos = [...todos, todo];
    setTodos(newTodos);
    setNewTodo("");
    setId(id + 1);
  };

  // 삭제
  const onDeleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 토글
  const onToggleTodo = (id) => {
    let newTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(newTodos);
  };

  // 수정
  const onEditTodo = (id, newText) => {
    let newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  // 첫 로드
  useEffect(() => {
    const localTodoList = localStorage.getItem("todos");
    const localId = localStorage.getItem("id");

    if (localTodoList) {
      setTodos(JSON.parse(localTodoList));
    } else {
      localStorage.setItem("todos", []);
    }

    if (localId) {
      setId(parseInt(localId));
    } else {
      localStorage.setItem("id", 0);
    }

    isMount.current = false;
  }, []);

  // 수정 될 때 마다 업데이트
  useEffect(() => {
    if (!isMount.current) {
      setTimeout(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("id", id);
      }, [200]);
    }
  }, [todos, id]);

  return (
    <Div>
      <Container>
        <Navbar />

        <Section>
          <Todolist>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
            </form>

            <div>
              {todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                    onEditTodo={onEditTodo}
                  />
                );
              })}
            </div>
          </Todolist>

          <Temp>
            <p>영상</p>

            <Video muted autoPlay loop>
              <source src={blue} type="video/mp4" />
            </Video>
          </Temp>
        </Section>
      </Container>
    </Div>
  );
}

export default App;

const Div = styled.div`
  background-color: #eff1fe;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  height: 90%;

  background: #ffffff;
  border: 2.5px solid #476ef7;
  border-radius: 50px;
`;

const Section = styled.div`
  display: flex;
  padding: 50px;
`;

const Todolist = styled.div`
  border: 1px solid gray;
  width: 100%;
  //margin: 30px 50px;
`;

const Temp = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: auto;
  //margin: 30px 50px;
  background: rgba(217, 217, 217, 0.2);
`;

const Video = styled.video`
  width: 582px;
  height: 713px;
  border-radius: 18px;
  object-fit: cover;
`;

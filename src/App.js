import { useState, useEffect, useRef } from "react";
import Todo from "./component/Todo";
import Navbar from "./component/Navbar";
import "./App.css";

import styled from "styled-components";

import blue from "./assets/blue.mp4";
import plus from "./assets/plus.svg";

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
  const onDeleteTodo = (event, id) => {
    event.stopPropagation();
    console.log("삭제");
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
  const onEditTodo = (event, id, newText) => {
    event.stopPropagation();
    console.log("수정");

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
          <TodoBox>
            <Ment>
              <div></div>
              <p>Have A Nice Day</p>
            </Ment>

            <Title>Manage Your Tasks Easily</Title>

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

            <TodoForm onSubmit={onSubmit}>
              <PlusBtn type="submit">
                <img src={plus} />
              </PlusBtn>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
            </TodoForm>
          </TodoBox>

          <Video muted autoPlay loop>
            <source src={blue} type="video/mp4" />
          </Video>
        </Section>
      </Container>
    </Div>
  );
}

export default App;

const PlusBtn = styled.button`
  width: 46px;
  height: 46px;
  background: #476ef7;
  border-radius: 50%;
  border: none;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  font-family: "Cafe24Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #000000;

  margin: 24px 0 39px 0;
`;
const Ment = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 34px;
    height: 14px;
    background: #facc2a;
    border-radius: 7.5px;

    margin-right: 6px;
  }

  p {
    margin: 0;
    font-family: "Cafe24 Ssurround";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #476ef7;
  }
`;
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

  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;

  margin: 10px 50px 30px 50px;

  height: 100%;

  box-sizing: border-box;
  flex: 1;
  input {
    border: none;
    border-bottom: 1px solid gray;
  }
`;

const TodoBox = styled.div`
  position: relative;
  flex: 1;
`;

const TodoForm = styled.form`
  padding-bottom: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  input {
    margin-left: 12px;
    width: 90%;
    border: none;
    border-bottom: 5px solid #f8f9fe;

    font-family: "Cafe24Ssurroundair";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }
  input:focus {
    outline: none;
  }
`;

const Video = styled.video`
  width: 45%;
  height: auto;
  margin-left: 30px;

  border-radius: 18px;
  object-fit: cover;
`;

import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "study", done: false },
    { id: 2, text: "efub", done: false },
  ]);
  return (
    <RootContainer className="App">
      <Container>
        <Text>Jamie's Todo</Text>
        <TodoCreate todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </Container>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 350px;
  padding: 50px;
  margin: 20px;
  border: 1px grey solid;
  border-radius: 30px;
`;

const Text = styled.div`
  font-size: 50px;
`;

export default App;

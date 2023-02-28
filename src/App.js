import "./App.css";
import styled from "styled-components";
// components
import Navbar from "./component/Navbar";
import TodoSection from "./component/TodoSection";

function App() {
  return (
    <Div>
      <Container>
        <Navbar />
        <TodoSection />
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
  width: 93%;
  height: 93%;

  background: #ffffff;
  border: 2.5px solid #476ef7;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
`;

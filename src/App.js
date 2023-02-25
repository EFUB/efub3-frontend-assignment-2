import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import "./App.css";

import styled from "styled-components";

import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Div>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<TodoPage />} />
          {/* <Route path="/ideas" element={<About />} /> 
    <Route path="/features" element={<About />} /> */}
        </Routes>
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

  display: flex;
  flex-direction: column;
`;

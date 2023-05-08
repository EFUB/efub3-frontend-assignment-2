import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Weather from "./pages/Weather";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </div>
  );
}

export default App;

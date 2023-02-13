import { useState, useEffect, useRef } from "react";
import Todo from "./component/Todo";

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
    <div>
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
    </div>
  );
}

export default App;

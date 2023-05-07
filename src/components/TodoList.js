import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todoList, setTodoList}) {
  return(
    // map 함수를 이용하여 TodoItem 에 전달 
    <ul> {
      todoList.map((todo, index) => (<TodoItem key={index}
        todo={todo}
        index={index}
        todoList={todoList}
        setTodoList={setTodoList}/>))
    } </ul>
  );
}

export default TodoList;

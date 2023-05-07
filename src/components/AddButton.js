import React from 'react';

function AddButton({inputValue, setInputValue, todoList, setTodoList}) {
  const addItem = () => {
    setTodoList([
      ...todoList, {
        text: inputValue,
        completed: false
      }
    ]);
    setInputValue('');
  };

  return (<button onClick={addItem}>추가</button>);
}

export default AddButton;

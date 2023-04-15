import React from 'react';

function Input(props) {
  return (
    <input 
      value={props.value}
      type="text"
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
}

export default Input;

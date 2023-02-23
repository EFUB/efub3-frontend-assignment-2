import { useState } from "react";
const EditInput = ({ onEditTodo, todo, setIsOpen }) => {
  const { id, text, done } = todo;

  const [value, setValue] = useState(text);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onEditTodo(e, id, value);

    setValue("");
    setIsOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
};

export default EditInput;

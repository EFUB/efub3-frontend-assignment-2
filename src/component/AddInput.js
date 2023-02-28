import styled from "styled-components";
import plus from "../assets/plus.svg";

const AddInput = ({ onSubmit, newTodo, setNewTodo }) => {
  return (
    <Form onSubmit={onSubmit}>
      <PlusBtn type="submit">
        <img src={plus} />
      </PlusBtn>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </Form>
  );
};

export default AddInput;

const Form = styled.form`
  padding-bottom: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;

  input {
    border: none;
    border-bottom: 5px solid #f8f9fe;

    background-color: transparent;
    margin-left: 12px;
    width: 90%;

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

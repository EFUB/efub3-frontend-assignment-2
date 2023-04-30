import { useState } from "react";
import styled from "styled-components";

const TodoCreate = ({ todoList, setTodoList }) => {
    const [text, setText] = useState("");
    const [id, setId] = useState(Date.now());
    const newItem = { id: id, text: text, done: false };

    const addItem = (e) => {
        e.preventDefault();
        if (text) {
            setId(Date.now());
            setTodoList([...todoList, newItem]);
        }
        setText("");
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (
        <TodoForm onSubmit={addItem}>
            <InputBox
                value={text}
                placeholder="할 일을 입력하세요."
                onChange={handleChange}
            />
            <AddButton>추가</AddButton>
        </TodoForm>
    );
};

const TodoForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`;
const InputBox = styled.input`
    height: 20px;
    width: 300px;
    font-size: 18px;
    outline: none;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
`;
const AddButton = styled.button`
    outline: none;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    font-size: 20px;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    margin-left: 0.5rem;
`;

export default TodoCreate;
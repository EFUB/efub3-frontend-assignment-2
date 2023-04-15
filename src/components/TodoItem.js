import styled, { css } from "styled-components";
import { useState } from "react";

const TodoItem = ({ text, todoList, setTodoList, id, done }) => {
    // 아이템 수정을 위한 state
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(text);

    const deleteItem = () => {
        setTodoList((todoList) => todoList.filter((item) => item.id !== id));
    };

    const toggleItem = () => {
        setTodoList(
            todoList.map((item) => (item.id === id ? { ...item, done: !done } : item))
        );
    };

    // 아이템 수정 기능
    const handleEdit = (e) => {
        e.preventDefault();
        setTodoList(
            todoList.map((item) => (item.id === id ? { ...item, text: editedItem } : item))
        );
        setIsEditing(false);
    };

    const handleEditChange = (e) => {
        setEditedItem(e.target.value);
    };

    if(isEditing) {
        return (
            <>
                <TodoItemBlock>
                    <TodoForm onSubmit={handleEdit}>
                        <InputBox
                            value={editedItem}
                            onChange={handleEditChange}
                        />
                    </TodoForm>
                    <EditButton onClick={handleEdit}>저장</EditButton>
                </TodoItemBlock>
            </>
        )
    }
    else {
        return (
            <>
                <TodoItemBlock>
                    <Text isDone={done} onClick={()=>setIsEditing(true)}>{text}</Text>
                    <ToggleButton onClick={toggleItem}>완료</ToggleButton>
                    <DeleteButton onClick={deleteItem}>삭제</DeleteButton>
                </TodoItemBlock>
            </>
        );
    }
};

const TodoForm = styled.form`
    flex: 1;
`;
const InputBox = styled.input`
    height: 20px;
    width: 300px;
    font-size: 18px;
    outline: none;
    padding: 0.5em;
    border: none;
    border-radius: 1rem;
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid darkgray;
`;
const Text = styled.div`
    flex: 1;
    font-size: 20px;
    padding: 0.5em;
    ${(props) =>
        props.isDone &&
        css`
            color: gray;
            text-decoration: line-through;
        `
    }
`;
const DeleteButton = styled.button`
    outline: none;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    font-size: 15px;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
`;
const ToggleButton = styled.button`
    outline: none;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    font-size: 15px;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    margin-right: 0.5rem;
`;
const EditButton = styled.button`
outline: none;
align-items: center;
justify-content: center;
border: none;
text-decoration: none;
font-size: 15px;
padding: 0.5rem 2rem;
border-radius: 2rem;
`;

export default TodoItem;
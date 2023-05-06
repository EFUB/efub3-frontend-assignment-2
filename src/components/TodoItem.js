import styled from "styled-components";
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

    // 리턴문 삼항연산자로 수정
   return (
    <>
        <TodoItemBlock>
            {isEditing ? (
                <>
                    <TodoForm onSubmit={handleEdit}>
                        <InputBox
                            value={editedItem}
                            onChange={handleEditChange}
                        />
                    </TodoForm>
                    <EditButton onClick={handleEdit}>저장</EditButton>
                </>
            ) : (
                <> {/* props에서 className으로 수정 */}
                    <Text className={done ? "isDone" : null} onClick={()=>setIsEditing(true)}>{text}</Text> 
                    <ToggleButton onClick={toggleItem}>완료</ToggleButton>
                    <DeleteButton onClick={deleteItem}>삭제</DeleteButton>
                </>
            )}
        </TodoItemBlock>
    </>
   );
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
    /* 완료 스타일 코드 추가 */
    .isDone {
        color: gray;
        text-decoration: line-through;
    }
`;
const Text = styled.div`
    flex: 1;
    font-size: 20px;
    padding: 0.5em;
    :hover {
        text-decoration: underline 1px;
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
    :hover {
        text-decoration: underline 1px;
    }
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
    :hover {
        text-decoration: underline 1px;
    }
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
    :hover {
        text-decoration: underline 1px;
    }
`;

export default TodoItem;
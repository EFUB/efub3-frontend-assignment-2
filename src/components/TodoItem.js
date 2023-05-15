import styled from "styled-components";
import React, { useState } from "react";

// 리렌더링을 막기 위해 todoList props 삭제
const TodoItem = ({ text, setTodoList, id, done }) => {
    // 아이템 수정을 위한 state
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(text);

    const deleteItem = () => {
        setTodoList((todoList) => todoList.filter((item) => item.id !== id));
    };

    // setTodoList 매개변수 수정
    const toggleItem = () => {
        setTodoList((todoList) =>
            todoList.map((item) => (item.id === id ? { ...item, done: !done } : item))
        );
    };

    // 아이템 수정 기능
    // setTodoList 매개변수 수정
    const handleEdit = (e) => {
        e.preventDefault();
        setTodoList((todoList) =>
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

// prev와 next를 비교하는 함수
const comp = (prev, next) => {
    if (prev.id === next.id) {  // id가 같은 경우
        if (prev.text !== next.text || prev.done !== next.done) {
            // text 또는 done의 value가 다른 경우에만 렌더링
            return false;
        }
    }
    return true;
}

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

export default React.memo(TodoItem, comp);
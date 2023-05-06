import { useState } from "react";
import styled from "styled-components";

const GuestCreate = ({ guestList, setGuestList }) => {
    const [text, setText] = useState("");
    const [id, setId] = useState(Date.now());
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const newItem = { id: id, name: name, text: text, pw: pw};

    // 아이템 저장 함수
    const addItem = (e) => {
        e.preventDefault();
        // text, pw, name을 모두 입력된 경우에만
        if (text && pw && name) {
            setId(Date.now());
            setGuestList([...guestList, newItem]);
        }
        setText("");
        setPw("");
        setName("");
    };

    // onChange를 저장하는 함수들
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleContentChange = (e) => {
        setText(e.target.value);
    };
    const handlePwChange = (e) => {
        setPw(e.target.value);
    };

    return (
        <GuestForm onSubmit={addItem}>
            <InputBox>
                <NameInputBox
                    value={name}
                    onChange={handleNameChange}
                    placeholder="이름"
                />
                <PwInputBox 
                    value={pw}
                    type="password"
                    placeholder="비밀번호"
                    onChange={handlePwChange}
                    maxLength="4"
                    minLength="4"
                />
                <ContentInputBox
                    value={text}
                    onChange={handleContentChange}
                />
            </InputBox>
            <SaveButton>저장</SaveButton>
        </GuestForm>
    );
};

const GuestForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    padding: 20px 20px 0;
    border-top: 1px solid darkgray;
`;
const InputBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const NameInputBox = styled.input`
    height: 20px;
    width: 80px;
    font-size: 18px;
    outline: none;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    text-align: center;
`;
const ContentInputBox = styled.textarea`
    height: 60px;
    width: 410px;
    font-size: 18px;
    outline: none;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    margin-top: 1rem;
`;
const PwInputBox = styled.input`
    height: 20px;
    width: 80px;
    font-size: 18px;
    outline: none;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    text-align: center;
`;
const SaveButton = styled.button`
    width: 100px;
    outline: none;
    align-items: flex-end;
    justify-content: center;
    border: none;
    text-decoration: none;
    font-size: 20px;
    border-radius: 1rem;
    margin-left: 1rem;
    :hover {
        text-decoration: underline 1px;
    }
`;

export default GuestCreate;
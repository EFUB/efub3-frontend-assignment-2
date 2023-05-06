import styled from "styled-components";
import { useState } from "react";

const GuestItem = ({ text, setGuestList, id, pw, name }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPw, setIsPw] = useState();

    // PwForm에서 받은 input onChange 저장 함수
    const handlePwChange = (e) => {
        setIsPw(e.target.value);
    };

    // 입력받은 isPw와 저장된 pw가 일치하는 경우에만 guestList에서 삭제하는 함수
    const handleDelete = (e) => {
        e.preventDefault();
        if (isPw === pw) {
            setGuestList((guestList) => guestList.filter((item) => item.id !== id));
        }
        setIsDeleting(false);
    };

   return (
    <>
        <GuestBlock>
            {isDeleting ? (
                <>
                    <PwForm onSubmit={handleDelete}>
                        <InputBox 
                            onChange={handlePwChange}
                            maxLength="4"
                            type="password"
                        />
                    </PwForm>
                    <CheckButton onClick={handleDelete}>확인</CheckButton>
                </>
            ) : (
                <>
                    <Name>{name}</Name>
                    <Text>{text}</Text>
                    <DeleteButton onClick={() => setIsDeleting(true)}>삭제</DeleteButton>
                </>
            )}
        </GuestBlock>
    </>
   );
};

const PwForm = styled.form`
    flex: 1;
`;
const InputBox = styled.input`
    height: 20px;
    width: 80px;
    font-size: 18px;
    outline: none;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    text-align: center;
    margin-top: 1rem;
`;
const GuestBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid darkgray;
`;
const Name = styled.div`
    flex: 0.2;
    font-size: 15px;
    text-align: center;
    border-right: 1px solid darkgray;
`;
const Text = styled.div`
    flex: 1;
    font-size: 20px;
    padding: 0.5em;
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
const CheckButton = styled.button`
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

export default GuestItem;
import React from "react";
import styled from "styled-components";

const TodoText = () => {
    return (
        <>
            <TitleText>Todo List</TitleText>
            <NoticeText>※수정은 항목을 눌러주세요※</NoticeText>
        </>
    );
}

const TitleText = styled.h1`
  text-align: center;
`;
const NoticeText = styled.p`
  text-align: center;
  margin-top: 0;
`;

export default React.memo(TodoText);
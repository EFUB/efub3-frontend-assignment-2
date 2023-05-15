import React from "react";
import styled from "styled-components";

function TodoHead({ todoList }) {
  const date = new Date();
  const date_string = date.toLocaleString("ko-KR").slice(0, 11);
  const week_array = ["일", "월", "화", "수", "목", "금", "토"];
  const today_num = date.getDay();

  return (
    <>
      <Header>
        <H1>Todo List</H1>
        <H2>{todoList.length}</H2>
      </Header>
      <H3>
        {date_string} ({week_array[today_num]})
      </H3>
    </>
  );
}

const Header = styled.div`
  margin: 0;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 38px;
  color: black;
`;

const H2 = styled.h2`
  margin-left: 25px;
  font-size: 25px;
  font-weight: normal;
`;

const H3 = styled.h3`
  margin: 0;
  margin-bottom: 30px;
`;

export default React.memo(TodoHead);

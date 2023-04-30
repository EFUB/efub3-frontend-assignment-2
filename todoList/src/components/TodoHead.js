import React from "react";
import styled from "styled-components";

const TodoHead = ({ todoLength }) => {
  const date = new Date();
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const month = date.toLocaleString("en-US", { month: "numeric" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  const dayName = date.toLocaleString("en-US", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <HeadBlockWrapper>
        <h2>To-Do List</h2>
        <h2>
          {year} / {month} / {day}
        </h2>
        <div className="day">{dayName}</div>
        <div className="tasks-left"> {todoLength} To-Dos</div>
      </HeadBlockWrapper>
    </TodoHeadBlock>
    /*todoList의
         todo 개수를 받아와서 남은 할 일의 수를 알 수 있도록 구현*/
  );
};
const HeadBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TodoHeadBlock = styled.div`
  padding-top: 40px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 3px solid #bbe6e4;

  h2 {
    margin: 0;
    font-size: 33px;
    color: #6c757d;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #bbe6e4;
    font-size: 25px;
    margin-top: 22px;

    font-weight: bold;
  }
`;

export default TodoHead;

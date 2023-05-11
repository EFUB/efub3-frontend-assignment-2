import styled from "styled-components";
import { useMemo } from "react";

//투두리스트 위에 checked 속성에따라 완료 todo, 완료 안한 todo 세줌
const TodoCount = ({ todos, setTodos }) => {
  console.log(todos);

  //completeCount : 완료한 todo [checked = true] 만 필터링
  // useMemo를 사용해서 todos가 바뀌지 않으면 기존의 값을 그대로 씀
  const completeCount = useMemo(() => {
    return todos.filter((todo) => todo.checked === true).length;
  }, [todos, setTodos]);

  //unCompleteCount : 완료한 todo [checked = true] 만 필터링
  // useMemo를 사용해서 todos가 바뀌지 않으면 기존의 값을 그대로 씀
  const unCompleteCount = useMemo(() => {
    return todos.filter((todo) => todo.checked === false).length;
  }, [todos, setTodos]);

  return (
    <Wrapper>
      <CompleteContainer>{completeCount}</CompleteContainer>
      <UnCompleteContainer>{unCompleteCount}</UnCompleteContainer>
    </Wrapper>
  );
};
export default TodoCount;

const CompleteContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #32bebe;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  z-index: 100;
`;

const UnCompleteContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff5675;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  position: absolute;
  top: -40px;
  right: -280px;
  z-index: -10;
`;

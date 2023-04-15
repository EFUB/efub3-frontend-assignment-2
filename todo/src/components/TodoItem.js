import styled, { css } from "styled-components";
import { ReactComponent as Priority0 } from "../images/normal.svg";
import { ReactComponent as Priority1 } from "../images/red2.svg";
import { ReactComponent as Priority2 } from "../images/yellow2.svg";
import { ReactComponent as Priority3 } from "../images/green2.svg";
import { ReactComponent as Next } from "../images/next.svg";
import { ReactComponent as CheckP0 } from "../images/check.svg";
import { ReactComponent as CheckP1 } from "../images/red_check.svg";
import { ReactComponent as CheckP2 } from "../images/yellow_check.svg";
import { ReactComponent as CheckP3 } from "../images/green_check.svg";

const TodoItem = ({
  text,
  todoList,
  setTodoList,
  id,
  done,
  priority,
  setActiveItem,
}) => {
  const toggleTodo = () => {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, done: !done } : item))
    );
  };

  const toggleDetail = () => {
    setActiveItem(id);
  };

  const Priority = () => {
    if (priority === 0) {
      return done ? <Check0 /> : <Priority0 />;
    } else if (priority === 1) {
      return done ? <Check1 /> : <Priority1 />;
    } else if (priority === 2) {
      return done ? <Check2 /> : <Priority2 />;
    } else {
      return done ? <Check3 /> : <Priority3 />;
    }
  };

  return (
    <>
      <Container>
        <TodoItemBlock>
          <Container>
            <ToggleBtn onClick={toggleTodo}>{Priority()}</ToggleBtn>
            <Todo isDone={done}>{text}</Todo>
          </Container>
          <DetailBtn onClick={toggleDetail}>
            <Next />
          </DetailBtn>
        </TodoItemBlock>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Check0 = styled(CheckP0)`
  width: 21px;
  height: 21px;
`;

const Check1 = styled(CheckP1)`
  width: 21px;
  height: 21px;
`;

const Check2 = styled(CheckP2)`
  width: 21px;
  height: 21px;
`;

const Check3 = styled(CheckP3)`
  width: 21px;
  height: 21px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 41vw;
  justify-content: space-between;
`;

const Todo = styled.div`
  font-size: 16px;
  color: #565656;
  font-weight: bold;
  ${(props) =>
    props.isDone &&
    css`
      text-decoration: line-through;
      color: #999999;
    `}
`;

const ToggleBtn = styled.button`
  margin-right: 10px;
  cursor: pointer;
  bottom: 0px;
  border: none;
  outline: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailBtn = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

export default TodoItem;

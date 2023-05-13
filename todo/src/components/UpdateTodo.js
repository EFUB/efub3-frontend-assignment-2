import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../images/close.svg";
import useUpdateTodo from "../custom-hook/useUpdateTodo";

function UpdateTodo({ id, setActiveItem, todoList, setTodoList }) {
  const { editText, handleChange, handleSubmit, deleteTodo } = useUpdateTodo();

  const closeModal = () => {
    setActiveItem(-1);
  };

  return (
    <>
      <UpdateTodoBlock>
        <Head>
          <H1>Task</H1>
          <CloseBtn onClick={closeModal} />
        </Head>
        <h3>Current Todo : </h3>
        <CurrentTodo>{todoList.find((e) => e.id === id)?.text}</CurrentTodo>
        <Form
          onSubmit={(e) =>
            handleSubmit(e, id, todoList, setTodoList, closeModal)
          }
        >
          <h3>Edit Todo :</h3>
          <Input
            placeholder="새로운 일정을 입력하세요."
            onChange={handleChange}
            value={editText}
          ></Input>
          <BtnContainer>
            <DeleteBtn
              onClick={() => deleteTodo(id, todoList, setTodoList, closeModal)}
              type="button"
            >
              Delete Task
            </DeleteBtn>
            <SaveBtn>Save Changes</SaveBtn>
          </BtnContainer>
        </Form>
      </UpdateTodoBlock>
    </>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurrentTodo = styled.div`
  width: 90%;
  height: 25px;
  padding: 10px;
  border-radius: 7px;
  border: 2px solid #e9e9e9;
  color: gray;
  font-size: 15px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45vh;
`;

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
  height: 40px;
  width: 150px;
  font-size: 14px;
  font-weight: bold;
  color: #323232;
  border-radius: 7px;
  border: 2px solid #e9e9e9;
  background-color: #f9f9f9;
  &:hover {
    background-color: #fccfcf;
    border: 2.5px solid #ee0d0d;
    color: #ee0d0d;
  }
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
`;

const SaveBtn = styled(DeleteBtn)`
  background-color: #ffd600;
  border: 2px solid #ffd600;
  &:hover {
    background-color: #ffd600;
    border: 2px solid #ffd600;
    color: #323232;
  }
`;

const UpdateTodoBlock = styled.div`
  background-color: #f9f9f9;
  position: absolute;
  width: 350px;
  right: 15px;
  height: 90vh;
  border-radius: 20px;
  padding: 20px;
  padding-top: 0;
  top: 55px;
`;

const H1 = styled.h1`
  font-size: 25px;
`;

const Input = styled.input`
  width: 90%;
  height: 25px;
  padding: 10px;
  border-radius: 7px;
  border: 2px solid #e9e9e9;
  color: #323232;
  font-size: 15px;
  font-weight: bold;
  outline: none;
`;

export default React.memo(UpdateTodo);

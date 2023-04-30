import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 600px;
  height: 700px;
  position: relative;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 10px;
  box-shadow: 0 0 3px 0 gray;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  padding: 15px;
  display: flex;
  padding-left: 50px;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

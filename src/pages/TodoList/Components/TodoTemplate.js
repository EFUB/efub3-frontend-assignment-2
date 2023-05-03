import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 600px;
  height: 700px;
  position: relative;
  border: 3px solid black;
  /* box-shadow: 0 0 10px 0 gray; */
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  padding: 15px;
  border-radius: 2px;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

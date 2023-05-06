import styled from "styled-components";

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  width: 70%;
`;

export default TodoTemplate;

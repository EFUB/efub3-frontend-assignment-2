import styled from "styled-components";

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

const TemplateBlock = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 15px;
  font-family: "Kanit", sans-serif;
`;

export default Template;

import styled from "styled-components";

const TodoTemplate = ({ children }) => {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

const TodoTemplateBlock = styled.div`
    width: 550px;
    height: 650px;
    position: relative;
    background: rgb(211,211,211);
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export default TodoTemplate;
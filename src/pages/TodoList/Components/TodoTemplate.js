import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TodoTemplateBlock = styled.div`
  width: 1000px;
  height: 650px;
  position: relative;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 32px;
  padding: 15px;
  border-radius: 15px;
  color: ${(props) => props.fontColor};
  background: url(${(props) => props.bgImage});
`;
function TodoTemplate({ children }) {
  const [bgImage, setBgImage] = useState("/image/morningBack.jpg");
  const [fontColor, setFontcolor] = useState("#333");

  const onClickImage = () => {
    bgImage === "/image/morningBack.jpg"
      ? setBgImage("/image/nightBack.jpg")
      : setBgImage("/image/morningBack.jpg");
    {
      bgImage === "/image/morningBack.jpg"
        ? setFontcolor("white")
        : setFontcolor("#333");
    }
  };
  return (
    <TodoTemplateBlock bgImage={bgImage} fontColor={fontColor}>
      {children}
      <Button onClick={onClickImage}>모드 전환</Button>
    </TodoTemplateBlock>
  );
}
export default TodoTemplate;

const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 0;
  outline: 0;
  background-color: white;
  color: #6c12cc;
  font-weight: 800;
`;

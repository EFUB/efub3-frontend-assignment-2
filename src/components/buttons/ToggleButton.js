import React from "react";
import styled from "styled-components";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import * as Styled from "./StyledButton";

const ToggleButton = ({ toggleItem, done, iconSize }) => {
  return (
    <Styled.Button onClick={toggleItem}>
      {done ? (
        <FaCheckSquare size={iconSize} />
      ) : (
        <FaRegSquare size={iconSize} />
      )}
    </Styled.Button>
  );
};

const Button = styled.button`
  background-color: white;
  border: none;
  padding-top: 10px;
  padding-left: 0;
  padding-right: 0;
`;

export default React.memo(ToggleButton);

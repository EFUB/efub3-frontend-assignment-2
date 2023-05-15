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

export default React.memo(ToggleButton);

import React from "react";
import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import * as Styled from "./StyledButton";

const ModifyButton = ({ toggleModify, iconSize }) => {
  return (
    <Styled.Button onClick={toggleModify}>
      <FaPen size={iconSize} />
    </Styled.Button>
  );
};

export default React.memo(ModifyButton);

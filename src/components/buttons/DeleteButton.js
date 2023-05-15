import React from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import * as Styled from "./StyledButton";

const DeleteButton = ({ deleteItem, iconSize }) => {
  return (
    <Styled.Button onClick={deleteItem}>
      <FaTrash size={iconSize} />
    </Styled.Button>
  );
};

export default React.memo(DeleteButton);

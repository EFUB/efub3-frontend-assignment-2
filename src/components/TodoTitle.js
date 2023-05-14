import React from "react";
import styled from "styled-components";

const TodoTitle = () => {
  console.log("TodoTitle 렌더링");
  return <Text>Jamie's Todo</Text>;
};

const Text = styled.div`
  font-size: 50px;
`;

export default React.memo(TodoTitle);

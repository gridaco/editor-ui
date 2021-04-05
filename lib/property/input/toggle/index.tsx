import React from "react";
import styled from "@emotion/styled";

import ToggleItem from "./toggle-item";

function Toggle(props: {
  rightItem: React.ReactNode;
  leftItem: React.ReactNode;
}) {
  const { rightItem, leftItem } = props;

  console.log(props)
  return (
    <Wrapper>
      <ToggleItem isActive={true}>{leftItem}</ToggleItem>
      <ToggleItem>{rightItem}</ToggleItem>
    </Wrapper>
  );
}

export default Toggle;

const Wrapper = styled.div`
  display: flex;
  background-color: #262626;
`;

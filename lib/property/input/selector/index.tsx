import React from "react";
import styled from "@emotion/styled";

function Selector() {
  return (
    <Wrapper>
      <option>Select</option>
    </Wrapper>
  );
}

export default Selector;

const Wrapper = styled.select`
  display: flex;
  padding: 8px 9px;
  border: none;
  outline: none;
  background-color: #2B2B2B;
  border-radius: 4px;
  color: #fff;
`;

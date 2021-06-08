import React from "react";
import styled from "@emotion/styled";

interface SelectorProps {
  options: Array<string>;
  value: any;
  onChange?: (v: any) => void;
}

function Selector(props: SelectorProps) {
  const { options, value, onChange } = props;
  return (
    <Wrapper value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((i) => (
        <option value={i}>{i}</option>
      ))}
    </Wrapper>
  );
}

export default Selector;

const Wrapper = styled.select`
  display: flex;
  padding: 8px 9px;
  border: none;
  outline: none;
  background-color: #2b2b2b;
  border-radius: 4px;
  color: #fff;
`;

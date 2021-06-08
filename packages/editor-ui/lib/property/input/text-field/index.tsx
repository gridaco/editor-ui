import React from "react";
import styled from "@emotion/styled";

interface TextFieldStyledProps {
  width: number;
}

function TextField(props: {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: number;
  placeholder: string;
  value?: any;
  onChange?: (v) => void;
}) {
  const { leftIcon, rightIcon, placeholder, width, value, onChange } = props;
  return (
    <Wrapper width={width ?? 130}>
      {leftIcon}
      <input placeholder={placeholder} value={value} onChange={onChange} />
      {rightIcon}
    </Wrapper>
  );
}

export default TextField;

const Wrapper = styled.div<TextFieldStyledProps>`
  width: ${(p) => p.width}px;
  padding: 4px;
  height: 25px;
  background-color: #eeeeee;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 2px 0px 2px 5px;
    color: #000;
    background-color: rgba(0, 0, 0, 0);
    width: calc(100%);
    border: none;
    outline: none;

    &::placeholder {
      color: #fff;
    }
  }
`;

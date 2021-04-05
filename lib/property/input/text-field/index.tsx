import React from "react";
import styled from "@emotion/styled";

interface TextFieldStyledProps {
  width: number
}

function TextField(props: {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: number;
  placeholder: string;
}) {
  const { leftIcon, rightIcon, placeholder, width } = props;
  return (
    <Wrapper width={width ?? 130}>
      {leftIcon}
      <input placeholder={placeholder} />
      {rightIcon}
    </Wrapper>
  );
}

export default TextField;

const Wrapper = styled.div<TextFieldStyledProps>`
  width: ${p => p.width}px;
  padding: 4px;
  height: 25px;
  background-color: #2b2b2b;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 2px 0px 2px 5px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    width: calc(100% - 21px);
    border: none;
    outline: none;

    &::placeholder {
      color: #5b5b5b;
    }
  }
`;

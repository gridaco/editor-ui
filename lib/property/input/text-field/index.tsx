import React from "react";
import styled from "@emotion/styled";

function TextField(props: {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder: string;
}) {
  const { leftIcon, rightIcon, placeholder } = props;
  return (
    <Wrapper>
      {leftIcon}
      <input placeholder={placeholder} />
      {rightIcon}
    </Wrapper>
  );
}

export default TextField;

const Wrapper = styled.div`
  width: 130px;
  padding: 4px;
  height: 25px;
  background-color: #2b2b2b;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    padding: 2px 5px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    border: none;
    outline: none;

    &::placeholder {
      color: #5b5b5b;
    }
  }
`;

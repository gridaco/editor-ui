import React from "react";
import styled from "@emotion/styled";

function ToggleItem(props: {
  isActive?: boolean;
  children: React.ReactNode;
  width: number;
}) {
  const { isActive, children, width } = props;

  return (
    <Wrapper w={width ?? 64} a={isActive ?? false}>
      <span>{children}</span>
    </Wrapper>
  );
}

export default ToggleItem;

const Wrapper = styled.div<{ a: boolean, w: number }>`
  cursor: pointer;
  width: ${p => p.w}px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin: 2px;
  ${(p) =>
    p.a &&
    `
    background-color: #4B4B4B;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  `}

  span {
    font-size: 12px;
    padding: 4px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

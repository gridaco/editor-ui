import React, { forwardRef } from "react";
import styled from "@emotion/styled";

export const PropertyGroupHeader = forwardRef(function (
  {
    padding = 16,
    children,
    ...props
  }: React.PropsWithChildren<{
    padding?: React.CSSProperties["padding"];
  }>,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <Container
      ref={ref}
      {...props}
      style={{
        padding,
      }}
    >
      {children}
      {/* <Title>{}</Title> */}
    </Container>
  );
});

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    cursor: default;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    color: ${(p) => p.theme.foreground};
  }
`;

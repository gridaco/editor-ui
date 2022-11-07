import styled from "@emotion/styled";
import React from "react";

export function PropertyGroupHeader({
  padding = 16,
  children,
}: React.PropsWithChildren<{
  padding?: React.CSSProperties["padding"];
}>) {
  return (
    <Container
      style={{
        padding,
      }}
    >
      {children}
      {/* <Title>{}</Title> */}
    </Container>
  );
}

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
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    color: ${(p) => p.theme.foreground};
  }
`;

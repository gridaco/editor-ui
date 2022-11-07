import styled from "@emotion/styled";
import React from "react";

export function PropertyGroupTitle({
  padding = 16,
  children,
}: React.PropsWithChildren<{
  padding?: React.CSSProperties["padding"];
}>) {
  return (
    <div
      style={{
        padding,
      }}
    >
      <Title>{children}</Title>
    </div>
  );
}

const Title = styled.h6`
  cursor: default;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

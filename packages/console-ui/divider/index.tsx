import React from "react";
import styled from "@emotion/styled";

export function Divider({
  width,
}: {
  width?: React.CSSProperties["width"] | "full";
}) {
  return <Line />;
}

const Line = styled.hr`
  border: none;
  border-top: solid 1px rgba(0, 0, 0, 0.15);
  width: 100%;
`;

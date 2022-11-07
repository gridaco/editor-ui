import styled from "@emotion/styled";
import React from "react";
export function PropertyLine({
  label,
  children,
}: React.PropsWithChildren<{
  label?: string;
}>) {
  return (
    <Line>
      {label && <Label>{label}</Label>}
      <Items>{children}</Items>
    </Line>
  );
}

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const Items = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

const Label = styled.label`
  max-width: 80px;
  flex: 1;
  font-family: sans-serif;
  font-size: 11px;
  color: #999;
`;

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
`;

const Items = styled.div`
  display: flex;
  flex: 7;
  gap: 8px;
`;

const Label = styled.label`
  max-width: 80px;
  flex: 2;
  margin-right: 16px;
  font-family: Inter, sans-serif;
  font-size: 11px;
  color: #999;
`;

import styled from "@emotion/styled";
import React from "react";
export function PropertyLine({
  label,
  children,
  onClick,
  gap = 8,
}: React.PropsWithChildren<{
  label?: string;
  gap?: number;
  onClick?: (e) => void;
}>) {
  return (
    <Line onClick={onClick}>
      {label && <Label>{label}</Label>}
      <Items
        style={{
          gap,
        }}
      >
        {children}
      </Items>
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
`;

const Label = styled.label`
  max-width: 80px;
  flex: 2;
  margin-right: 16px;
  font-family: Inter, sans-serif;
  font-size: 11px;
  color: #999;
`;

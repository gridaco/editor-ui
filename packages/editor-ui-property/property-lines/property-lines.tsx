import React from "react";
import styled from "@emotion/styled";

export function PropertyLines({
  children,
  padding = 16,
}: React.PropsWithChildren<{ padding?: React.CSSProperties["padding"] }>) {
  return (
    <PropertyLinesContainer
      style={{
        padding,
      }}
    >
      {children}
    </PropertyLinesContainer>
  );
}

const PropertyLinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

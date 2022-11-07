import styled from "@emotion/styled";
import React from "react";

export function PropertyLines({ children }: React.PropsWithChildren<{}>) {
  return <PropertyLinesContainer>{children}</PropertyLinesContainer>;
}

const PropertyLinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

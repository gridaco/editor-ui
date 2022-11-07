import styled from "@emotion/styled";
import React from "react";

export function PropertyGroup({ children }: React.PropsWithChildren<{}>) {
  return <PropertyGroupContainer>{children}</PropertyGroupContainer>;
}

const PropertyGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

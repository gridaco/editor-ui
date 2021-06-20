import React from "react";
import styled from "@emotion/styled";
export function HierarchySegmentLabel(props: {
  name: string;
  expandToggle: JSX.Element;
  actions: JSX.Element[];
}) {
  return <Wrapper>{props.name}</Wrapper>;
}

const Wrapper = styled.div``;

import React from "react";
import styled from "@emotion/styled";
export function HierarchySegment(props: {
  children: JSX.Element | JSX.Element[];
}) {
  const label = undefined;
  const body = undefined;
  return (
    <RootWrapper>
      <LabelWrapper>{label}</LabelWrapper>
      <BodyWrapper>{body}</BodyWrapper>
    </RootWrapper>
  );
}

const RootWrapper = styled.div``;
const LabelWrapper = styled.div``;
const BodyWrapper = styled.div``;

function HierarchySegmentSlot_Label(props: { children: JSX.Element }) {
  return <>{props.children}</>;
}

function HierarchySegmentSlot_Body(props: { children: JSX.Element }) {
  return <>{props.children}</>;
}

export const HierarchySegmentSlots = {
  Label: HierarchySegmentSlot_Label,
  Body: HierarchySegmentSlot_Body,
};

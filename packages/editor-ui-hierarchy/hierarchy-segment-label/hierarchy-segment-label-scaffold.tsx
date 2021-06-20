import React from "react";
import { HierarchySegmentLabel } from "./hierarchy-segment-label";
import styled from "@emotion/styled";
export function HierarchySegmentLabelScaffold(props: {
  name: string;
  toggle?: boolean;
  initialExpanded: boolean;
}) {
  return <HierarchySegmentLabel name={props.name} />;
}

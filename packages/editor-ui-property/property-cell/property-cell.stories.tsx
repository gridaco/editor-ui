import React from "react";
import { PropertyCell } from "./property-cell";

export default {
  title: "property-cell",
  component: PropertyCell,
};

export const Primary = () => (
  <PropertyCell
    background="black"
    border="1px solid red"
    outline="1px solid blue"
  >
    <span style={{ color: "white" }}>Content</span>
  </PropertyCell>
);

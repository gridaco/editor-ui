import React from "react";
import { PropertyGroupHeader } from "./property-group-header";

export default {
  title: "property-group-header",
  component: PropertyGroupHeader,
};

export const Primary = () => (
  <PropertyGroupHeader>
    <h6>Layout</h6>
  </PropertyGroupHeader>
);

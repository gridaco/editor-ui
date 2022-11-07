import React from "react";
import { PropertyInput } from "../property-input";
import { PropertyLine } from "../property-line/property-line";
import { PropertyLines } from "./property-lines";

export default {
  title: "property-lines",
  component: PropertyLines,
};

export const Primary = () => (
  <PropertyLines>
    <PropertyLine label="Position">
      <PropertyInput suffix="X" value="0" type="number" />
      <PropertyInput suffix="Y" value="24" type="number" />
    </PropertyLine>
    <PropertyLine label="Size">
      <PropertyInput suffix="W" value="375" type="number" disabled />
      <PropertyInput suffix="H" value="824" type="number" disabled />
    </PropertyLine>
  </PropertyLines>
);

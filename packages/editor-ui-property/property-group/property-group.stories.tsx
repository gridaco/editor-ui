import React from "react";
import { PropertyGroupHeader } from "../property-group-header";
import { PropertyInput } from "../property-input";
import { PropertyLine } from "../property-line/property-line";
import { PropertyLines } from "../property-lines";
import { PropertyGroup } from "./property-group";

export default {
  title: "property-group",
  component: PropertyGroup,
};

export const Primary = () => (
  <PropertyGroup>
    <PropertyGroupHeader>
      <h6>Layout</h6>
    </PropertyGroupHeader>
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
  </PropertyGroup>
);

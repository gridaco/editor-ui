import React from "react";
import { PropertyInput } from "./property-input";

export default {
  title: "property-input",
  component: PropertyInput,
};

export const WithPrefix = () => (
  <PropertyInput prefix={"X"} placeholder={"Pos"} />
);

export const WithSuffix = () => (
  <PropertyInput suffix={"X"} placeholder={"Pos"} value={"Initial value"} />
);

export const TypeNumber = () => (
  <PropertyInput type="number" suffix={"X"} placeholder={"Pos"} />
);

export const WithReadonly = () => (
  <PropertyInput
    readonly
    suffix={"X"}
    placeholder={"Pos"}
    value={"Initial value"}
  />
);

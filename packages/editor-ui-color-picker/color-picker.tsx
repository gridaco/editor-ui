import React from "react";
import { RgbaColorPicker } from "react-colorful";

export function ColorPicker(
  props: React.ComponentProps<typeof RgbaColorPicker>
) {
  return <RgbaColorPicker {...props} />;
}

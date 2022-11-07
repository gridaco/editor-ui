import React from "react";

type Background = React.CSSProperties["background"];
type Color = React.CSSProperties["color"];

export interface EditorPropertyTheme {
  input: {
    bg: Background;
    prefix: Color;
    suffix: Color;
    value: Color;
    value_disabled: Color;
    border: {
      focus: Color;
    };
  };
  foreground: Color;
}

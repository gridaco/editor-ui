import React from "react";
import { ThemeProvider } from "@emotion/react";
import type { EditorPropertyTheme } from "./theme";

export function EditorPropertyThemeProvider({
  theme,
  children,
}: React.PropsWithChildren<{
  theme: EditorPropertyTheme;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

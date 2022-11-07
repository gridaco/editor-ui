import { useTheme as _useTheme } from "@emotion/react";
import { EditorPropertyTheme } from "./theme";

export const useTheme: () => EditorPropertyTheme = _useTheme as any;

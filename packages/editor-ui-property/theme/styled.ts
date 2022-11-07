import styled from "@emotion/styled";
import { EditorPropertyTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends EditorPropertyTheme {}
}

export default styled;

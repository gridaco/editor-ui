import { light } from "./light";
import { dark } from "./dark";

export * from "./theme-provider";

export const theme = {
  dark: dark,
  light: light,
};

type _Theme = typeof light;
export type Theme = _Theme;

declare module "@emotion/react" {
  export interface Theme extends _Theme {}
}

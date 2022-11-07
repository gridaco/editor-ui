import { css } from "@emotion/react";

export const input_type_number_disable_browser_default_appearence = css`
  /* disable default number up down arrow */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

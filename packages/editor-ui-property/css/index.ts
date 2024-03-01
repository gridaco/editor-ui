import { css } from "@emotion/react";

export const input_type_number_disable_browser_default_appearence = css`
  /* Disabling up and down arrows for number inputs */
  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Chrome, Safari, Edge, and Opera */
  }

  /* Hide the spin button in Chrome, Safari, Edge, and Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

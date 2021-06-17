import styled from "@emotion/styled";

interface Props {
  size?: number;
}

/* ----------------------------------------------------------------------------
 * Vertical
 * ------------------------------------------------------------------------- */

const SpacerVertical = styled.span<Props>(({ size }) => ({
  display: "block",
  ...(size === undefined ? { flex: 1 } : { minHeight: size }),
}));

/* ----------------------------------------------------------------------------
 * Horizontal
 * ------------------------------------------------------------------------- */

const SpacerHorizontal = styled.span<Props>(({ size }) => ({
  display: "block",
  ...(size === undefined ? { flex: 1 } : { minWidth: size }),
}));

export const Vertical = SpacerVertical;
export const Horizontal = SpacerHorizontal;

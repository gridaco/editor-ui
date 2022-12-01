import React, { memo, ReactNode } from "react";
import styled from "@emotion/styled";
import { CheckIcon } from "@radix-ui/react-icons";
import { Spacer } from "@editor-ui/spacer";
import {
  Item,
  CheckboxItem,
  ItemIndicator,
} from "@radix-ui/react-context-menu";
import { MenuItem, styles } from "@editor-ui/menu";
export type { MenuItem };

/* ----------------------------------------------------------------------------
 * Item
 * ------------------------------------------------------------------------- */

const ItemElement = styled(Item)(styles.itemStyle);

const CheckboxItemElement = styled(CheckboxItem)(styles.itemStyle);

interface ContextMenuItemProps {
  children: ReactNode;
  onSelect: () => void;
  checked: boolean;
  indented: boolean;
}

const CHECKBOX_WIDTH = 15;
const CHECKBOX_RIGHT_INSET = 3;

const StyledItemIndicator = styled(ItemIndicator)({
  display: "flex",
  alignItems: "center",
  left: `-${CHECKBOX_WIDTH / 2}px`,
  position: "relative",
  marginRight: `-${CHECKBOX_RIGHT_INSET}px`,
});

export const ContextMenuItem = memo(function ContextMenuItem({
  indented,
  checked,
  children,
  onSelect,
}: ContextMenuItemProps) {
  if (checked) {
    return (
      // @ts-ignore
      <CheckboxItemElement
        theme={undefined}
        checked={checked}
        onSelect={onSelect}
      >
        <StyledItemIndicator>
          <CheckIcon />
        </StyledItemIndicator>
        {children}
      </CheckboxItemElement>
    );
  } else {
    return (
      // @ts-ignore
      <ItemElement theme={undefined} onSelect={onSelect}>
        {indented && (
          <Spacer.Horizontal size={CHECKBOX_WIDTH - CHECKBOX_RIGHT_INSET} />
        )}
        {children}
      </ItemElement>
    );
  }
});

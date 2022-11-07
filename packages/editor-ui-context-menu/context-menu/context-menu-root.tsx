import React, { memo, ReactNode } from "react";
import styled from "@emotion/styled";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { Slot } from "@radix-ui/react-slot";
import { SEPARATOR_ITEM, MenuItem, styles } from "@editor-ui/menu";

import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuSeparator } from "./context-menu-separator";

/* ----------------------------------------------------------------------------
 * Root
 * ------------------------------------------------------------------------- */

const RootElement = styled(ContextMenu.Content)(styles.contentStyle);

interface Props<T extends string> {
  children: ReactNode;
  items: MenuItem<T>[];
  onSelect?: (value: T) => void;
}

export const ContextMenuRoot = memo(function ContextMenuRoot<T extends string>({
  items,
  children,
  onSelect,
}: Props<T>) {
  const hasCheckedItem = items.some(
    (item) => item !== SEPARATOR_ITEM && item.checked
  );

  return (
    // @ts-ignore
    <ContextMenu.Root>
      <ContextMenu.Trigger as={Slot}>{children}</ContextMenu.Trigger>
      {/* @ts-ignore */}
      <RootElement>
        {items.map((item, index) =>
          item === SEPARATOR_ITEM ? (
            // @ts-ignore
            <ContextMenuSeparator key={index} />
          ) : (
            <ContextMenuItem
              key={item.value}
              indented={hasCheckedItem}
              checked={item.checked ?? false}
              onSelect={() => onSelect?.(item.value)}
            >
              {item.title}
            </ContextMenuItem>
          )
        )}
      </RootElement>
    </ContextMenu.Root>
  );
});

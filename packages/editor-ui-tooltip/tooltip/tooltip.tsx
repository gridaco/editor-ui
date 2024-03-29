import React, { memo, ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import styled from "@editor-ui/theme";

const Content = styled(TooltipPrimitive.Content)(({ theme }) => ({
  ...theme.textStyles.small,
  color: theme.colors.text,
  borderRadius: 3,
  padding: `${theme.sizes.spacing.small}px ${theme.sizes.spacing.medium}px`,
  backgroundColor: theme.colors.popover.background,
  boxShadow: "0 2px 4px rgba(0,0,0,0.2), 0 0 12px rgba(0,0,0,0.1)",
  border: `1px solid ${theme.colors.dividerStrong}`,
}));

interface Props {
  children: ReactNode;
  content: ReactNode;
}

export const Tooltip = memo(function Tooltip({ children, content }: Props) {
  return (
    // @ts-ignore
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger as={Slot}>{children}</TooltipPrimitive.Trigger>
      <Content side="bottom" align="center" sideOffset={2}>
        {content}
        {/* <Arrow /> */}
      </Content>
    </TooltipPrimitive.Root>
  );
});

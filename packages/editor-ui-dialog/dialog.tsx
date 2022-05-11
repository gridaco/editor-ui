import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "@emotion/styled";

const StyledOverlay = styled(DialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledContent = styled(DialogPrimitive.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  transform: translate(-50%, -50%);
  min-width: 200px;
  max-width: fit-content;
  max-height: 85vh;
  padding: 20px;
  margin-top: -5vh;
  background-color: white;
  border-radius: 4px;

  &:focus {
    outline: "none";
  }
`;

export function Dialog({ children, ...props }) {
  return (
    // @ts-ignore
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />

      {children}
    </DialogPrimitive.Root>
  );
}

export const DialogContent = React.forwardRef(
  // @ts-ignore
  ({ children, ...props }, forwardedRef) => (
    <StyledContent
      {...props}
      // @ts-ignore
      ref={forwardedRef}
    >
      {children}
    </StyledContent>
  )
);

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

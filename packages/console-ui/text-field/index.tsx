import React from "react";
import styled from "@emotion/styled";

export function TextField({
  value,
  placeholder,
  readonly,
  onChange,
  onEnter,
  autoFocus
}: {
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  readonly?: boolean;
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <Wrap>
      <BaseTextField
        autoFocus={autoFocus}
        readOnly={readonly}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // @ts-ignore
            onEnter?.(e.target.value);
          }
        }}
        value={value}
        placeholder={placeholder}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  align-self: stretch;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const BaseTextField = styled.input`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-weight: normal;
  font-size: 14px;

  ::placeholder {
    opacity: 0.3;
  }
`;

import React from "react";
import { styled } from "linaria/react";

export function TextField({
  value,
  placeholder,
  readonly,
  onChange,
  onEnter,
}: {
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  readonly?: boolean;
  value?: string;
  placeholder?: string;
}) {
  return (
    <Wrap>
      <BaseTextField
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
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;

  color: rgba(0, 0, 0, 0.8);
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
    text-overflow: ellipsis;
    font-size: 14px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    text-align: left;
  }
`;

import React from "react";
import { styled } from "linaria/react";
import { TextField } from "../text-field";

export function TextFormField({
  label,
  helpText,
  ...rest
}: {
  onChange?: (value: string) => void;
  label: string;
  value?: string;
  helpText?: string;
  placeholder?: string;
}) {
  return (
    <Wrap>
      <BaseTextFormField>
        {label && <Label>{label}</Label>}
        <TextField {...rest} />
        {helpText && <AssisiveText>{helpText}</AssisiveText>}
      </BaseTextFormField>
    </Wrap>
  );
}

const Wrap = styled.div`
  user-select: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const BaseTextFormField = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const Label = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  align-self: stretch;
  flex-shrink: 0;
`;

const AssisiveText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  align-self: stretch;
  flex-shrink: 0;
`;

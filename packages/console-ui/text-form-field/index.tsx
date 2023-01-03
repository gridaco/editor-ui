import React from "react";
import { styled } from "linaria/react";
import { TextField } from "../text-field";
import {
  FormFieldLabel,
  FormFieldBase,
  FormFieldAssisiveText,
} from "../form-field";

export function TextFormField({
  label,
  helpText,
  readonly,
  ...rest
}: {
  onEnter?: (value: string) => void;
  onChange?: (value: string) => void;
  readonly?: boolean;
  label: string;
  value?: string;
  helpText?: string;
  placeholder?: string;
}) {
  return (
    <Wrap>
      <FormFieldBase>
        {label && <FormFieldLabel>{label}</FormFieldLabel>}
        <TextField {...rest} readonly={readonly} />
        {helpText && <FormFieldAssisiveText>{helpText}</FormFieldAssisiveText>}
      </FormFieldBase>
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

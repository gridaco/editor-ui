import styled from "../theme/styled";
import React from "react";

import { PropertyCell } from "../property-cell";
import { useTheme } from "../theme";
import { input_type_number_disable_browser_default_appearence } from "../css";
import { css } from "@emotion/react";

type PropertyInputType = "number" | "text" | "select";

export type PropertyInputProps = PlainInputProps;

interface PlainInputProps {
  autofocus?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  type?: PropertyInputType;
  value?: string | number;
  min?: number;
  max?: number;
  readonly?: boolean;
  disabled?: boolean;
  stopPropagation?: boolean;

  /**
   * The pattern attribute specifies a regular expression the form control's value should match. If a non-null value doesn't conform to the constraints set by the pattern value, the ValidityState object's read-only patternMismatch property will be true.
   */
  pattern?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
}

export function PropertyInput({
  autofocus = false,
  prefix,
  suffix,
  placeholder,
  type = "text",
  value: initial = "",
  min,
  max,
  readonly,
  disabled,
  pattern,
  stopPropagation,
  onChange,
  onClick,
}: PropertyInputProps) {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState(initial);
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onclick = (e) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    onClick?.();
    e.stopPropagation();
  };

  const onvalue = (value: string) => {
    setValue(value);
    onChange?.(value);
  };

  const onfocus = () => {
    setFocused(true);
  };

  const onfocuscapture = () => {
    // select all text on focus
    inputRef.current?.select();
  };

  const onblur = () => {
    setFocused(false);
  };

  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      inputRef.current?.blur();
    }

    if (readonly) {
      return;
    }

    // up or down key ally
    if (type === "number" && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      e.preventDefault(); // this is required to prevent number's default behavior
      // if shift key is pressed, increase or decrease by 10
      // if ctrl / cmd key is pressed, increase or decrease by 0.1
      // if both shift and ctrl / cmd key is pressed, increase or decrease by 100
      const step = e.shiftKey
        ? e.ctrlKey || e.metaKey
          ? 100
          : 10
        : e.ctrlKey || e.metaKey
        ? 0.1
        : 1;

      const value = Number(inputRef.current?.value);
      const newValue = e.key === "ArrowUp" ? value + step : value - step;
      onvalue("" + newValue);
    }

    if (stopPropagation) {
      e.stopPropagation();
    }
  };

  return (
    <PropertyCell
      background={theme.input.bg}
      onClick={onclick}
      outline={focused ? `1px solid ${theme.input.border.focus}` : "none"}
      height={24}
      minWidth={44}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      <PlainInput
        ref={inputRef}
        autoFocus={autofocus}
        readOnly={readonly}
        disabled={disabled}
        onFocusCapture={onfocuscapture}
        type={type}
        value={value}
        onFocus={onfocus}
        onBlur={onblur}
        onKeyDown={onkeydown}
        onChange={(e) => onvalue(e.target.value)}
        placeholder={placeholder}
        pattern={pattern}
        min={min}
        max={max}
        style={{
          margin: 0,
          marginLeft: !prefix ? 8 : 0,
          marginRight: !suffix ? 8 : 0,
        }}
      />
      {suffix && <Suffix>{suffix}</Suffix>}
    </PropertyCell>
  );
}

export function PropertyNumericInput({
  onChange,
  ...props
}: Omit<React.ComponentProps<typeof PropertyInput>, "type" | "onChange"> & {
  onChange?: (value: number) => void;
}) {
  return (
    <PropertyInput
      type="number"
      {...props}
      onChange={(txt) => {
        const val = Number(txt);
        if (isNaN(val)) {
          return;
        }
        onChange?.(val);
      }}
    />
  );
}

const PlainInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.input.value};
  font-size: 11px;
  font-weight: 500;
  padding: 0;

  &:disabled {
    color: ${(props) => props.theme.input.value_disabled};
  }

  ::placeholder {
    color: #999;
  }

  /* input_type_number_disable_browser_default_appearence */
`;

const _fix = css`
  cursor: default;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 9px;
  height: 24px;
  width: 24px;
`;

const Prefix = styled.span`
  ${_fix}
  color: ${(props) => props.theme.input.prefix};
`;

const Suffix = styled.span`
  ${_fix}
  color: ${(props) => props.theme.input.suffix};
`;

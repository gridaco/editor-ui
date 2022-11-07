import styled from "../theme/styled";
import React from "react";

import { PropertyCell } from "../property-cell";
import { useTheme } from "../theme";
import { input_type_number_disable_browser_default_appearence } from "../css";
import { css } from "@emotion/react";

type PropertyInputType = "number" | "text"; // | "color" | "select" | "file";

export function PropertyInput({
  prefix,
  suffix,
  placeholder,
  type = "text",
  value: initial = "",
  readonly,
  onChange,
}: {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  type?: PropertyInputType;
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}) {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState(initial);
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

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
      // if shift key is pressed, increase or decrease by 10
      const step = e.shiftKey ? 10 : 1;
      const value = Number(inputRef.current?.value);
      const newValue = e.key === "ArrowUp" ? value + step : value - step;
      onvalue(String(newValue));
    }
  };

  return (
    <PropertyCell
      background={theme.input.bg}
      outline={focused ? `1px solid ${theme.input.border.focus}` : "none"}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      <PlainInput
        ref={inputRef}
        readOnly={readonly}
        onFocusCapture={onfocuscapture}
        type={type}
        value={value}
        onFocus={onfocus}
        onBlur={onblur}
        onKeyDown={onkeydown}
        onChange={(e) => onvalue(e.target.value)}
        placeholder={placeholder}
        style={{
          margin: 0,
          marginLeft: suffix ? 8 : 0,
          marginRight: prefix ? 8 : 0,
        }}
      />
      {suffix && <Suffix>{suffix}</Suffix>}
    </PropertyCell>
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

  ${input_type_number_disable_browser_default_appearence}
`;

const _fix = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
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

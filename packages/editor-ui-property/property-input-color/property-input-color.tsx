import React from "react";
import styled from "../theme/styled";
import { useTheme } from "../theme";
import { PropertyCell } from "../property-cell";

interface ColorInputProps {
  autofocus?: boolean;
  placeholder?: string;
  type?: "color";
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;

  onChange?: (value: string) => void;
  onClick?: () => void;
}

export function PropertyColorInput({
  autofocus = false,
  placeholder,
  value: initial = "",
  readonly,
  disabled,
  onChange,
  onClick,
}: ColorInputProps) {
  const [value, setValue] = React.useState(initial);
  const [focused, setFocused] = React.useState(false);
  const theme = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

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

  const onvalue = (value: string) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <PropertyCell
      background={theme.input.bg}
      // onClick={onclick}
      outline={focused ? `1px solid ${theme.input.border.focus}` : "none"}
      height={24}
      minWidth={44}
    >
      <ColorPickerInput
        readOnly={readonly}
        disabled={disabled}
        onFocusCapture={onfocuscapture}
        type="color"
        value={value}
        onFocus={onfocus}
        onBlur={onblur}
        onChange={(e) => onvalue(e.target.value)}
        style={{
          margin: 0,
        }}
      />
      <ColorTextInput
        ref={inputRef}
        autoFocus={autofocus}
        readOnly={readonly}
        disabled={disabled}
        onFocusCapture={onfocuscapture}
        type="text"
        value={value}
        onFocus={onfocus}
        onBlur={onblur}
        onChange={(e) => onvalue(e.target.value)}
        placeholder={placeholder}
        style={{
          margin: 0,
        }}
      />
    </PropertyCell>
  );
}

const ColorPickerInput = styled.input`
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) =>
    /* @ts-ignore */
    props.theme.input.value};
  font-size: 11px;
  font-weight: 500;
  padding: 0;
`;

const ColorTextInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) =>
    /* @ts-ignore */
    props.theme.input.value};
  font-size: 11px;
  font-weight: 500;
  padding: 0;

  &:disabled {
    color: ${(props) =>
      /* @ts-ignore */
      props.theme.input.value_disabled};
  }

  ::placeholder {
    color: #999;
  }
`;

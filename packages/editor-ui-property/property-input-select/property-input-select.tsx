import React from "react";
import styled from "@emotion/styled";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { css } from "@emotion/react";

type OptionsInput = Array<{ label: string; value: string }> | Array<string>;

interface SelectInputProps {
  autofocus?: boolean;
  value?: string;
  placeholder?: string;
  options?: OptionsInput;

  readonly?: boolean;
  disabled?: boolean;

  onChange?: (value: string) => void;
  onClick?: () => void;

  // aria
  ariaLabel?: string;
}

export function PropertySelectInput({
  autofocus = false,
  placeholder,
  options: _options = [],
  readonly,
  disabled,
  value: initial,
  ariaLabel,
  onChange,
}: SelectInputProps) {
  const [value, setValue] = React.useState(initial);
  const options = React.useMemo(
    () =>
      _options.map((o) => {
        if (typeof o === "string") {
          return {
            label: o,
            value: o,
          };
        }
        return o;
      }),
    [_options]
  );

  return (
    <Select.Root
      onValueChange={(v) => {
        setValue(v);
        onChange?.(v);
      }}
      value={value}
      disabled={disabled}
    >
      <StyledTrigger
        disabled={disabled}
        aria-label={ariaLabel}
        autoFocus={autofocus}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="icon">
          <ChevronDownIcon />
        </Select.Icon>
      </StyledTrigger>
      <Select.Portal
        style={{
          zIndex: 1000,
        }}
      >
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <Select.Viewport style={{ padding: 5 }}>
            {options.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(
  (
    { children, ...props }: React.PropsWithChildren<Select.SelectItemProps>,
    forwardedRef: React.Ref<HTMLDivElement>
  ) => {
    return (
      <StyledSelectItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="indicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </StyledSelectItem>
    );
  }
);

const StyledSelectItem = styled(Select.Item)`
  font-family: sans-serif;
  font-size: 11px;
  line-height: 1;
  color: #1a1a1a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--violet1);
  }

  .indicator {
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /*  */
`;

const StyledTrigger = styled(Select.Trigger)`
  all: unset;
  font-family: sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 11px;
  line-height: 1;
  height: 24px;
  gap: 4px;
  background-color: white;
  color: #1a1a1a;
  box-shadow: 0 2px 2px rgba(22, 23, 24, 0.1);

  &:hover {
    background-color: #f2f2f2;
  }

  &:focus {
    box-shadow: 0 0 0 1px black;
  }

  &[data-placeholder] {
    color: #3c3c3c;
  }

  .icon {
    color: #1a1a1a;
  }
`;

const SelectScrollButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: #1a1a1a;
  cursor: default;
`;

const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  ${SelectScrollButton}
`;

const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  ${SelectScrollButton}
`;

const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

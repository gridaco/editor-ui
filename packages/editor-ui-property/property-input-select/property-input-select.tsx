import React from "react";
import styled from "@emotion/styled";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./styles.css";

type OptionsInput = Array<{ label: string; value: string }> | Array<string>;

interface SelectInputProps {
  autofocus?: boolean;
  value?: string;
  placeholder?: string;
  options?: OptionsInput;

  readonly?: boolean;
  disabled?: boolean;

  onChange: (value: string) => void;
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
        onChange(v);
      }}
      value={value}
      disabled={disabled}
    >
      <Select.Trigger
        className="SelectTrigger"
        disabled={disabled}
        aria-label={ariaLabel}
        autoFocus={autofocus}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {options.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
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
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </StyledSelectItem>
    );
  }
);

const StyledSelectItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: var(--violet11);
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: var(--mauve8);
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: var(--violet9);
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

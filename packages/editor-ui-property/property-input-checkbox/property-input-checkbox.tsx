import React from "react";
import styled from "@emotion/styled";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
}

export function PropertyCheckboxInput({
  value: checked,
  onChange,
}: CheckboxProps) {
  const [value, setValue] = React.useState(checked);

  const onvalue = (value: boolean) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <CheckboxRoot
      checked={value}
      // @ts-ignore
      onCheckedChange={onvalue}
    >
      <Checkbox.Indicator className="indicator">
        <CheckIcon className="icon" />
      </Checkbox.Indicator>
    </CheckboxRoot>
  );
}

const CheckboxRoot = styled(Checkbox.Root)`
  button {
    all: unset;
  }

  background-color: white;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  /*  */
  .indicator {
    /*  */
    .icon {
      color: black;
      width: 12px;
      height: 12px;
    }
  }
`;

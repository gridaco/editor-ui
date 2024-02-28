import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export function PropertyInputToggleGroup({
  ariaLabel,
  defaultValue,
  value,
  options,
  onValueChange,
}: {
  ariaLabel?: string;
  defaultValue?: string;
  value?: string;
  options?: {
    value: string;
    ariaLabel?: string;
    icon: React.ReactNode;
  }[];
  onValueChange?: (value: string) => void;
}) {
  return (
    <ToggleGroup.Root
      className="flex gap-2"
      type="single"
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      value={value}
      onValueChange={onValueChange}
    >
      {options?.map((option) => {
        return (
          <ToggleGroup.Item
            key={option.value}
            className="p-2 rounded-md data-[state='on']:bg-white/10"
            value={option.value}
            aria-label={option.ariaLabel}
          >
            {option.icon}
          </ToggleGroup.Item>
        );
      })}
    </ToggleGroup.Root>
  );
}

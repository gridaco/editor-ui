import React from "react";
import * as Slider from "@radix-ui/react-slider";

export function PropertySliderInput({
  stopPropagation,
  value,
  min,
  max,
  step,
  onValueChange,
}: {
  stopPropagation?: boolean;
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  onValueChange?: (value: number[]) => void;
}) {
  return (
    <Slider.Root
      className="w-full h-6 rounded-md relative overflow-hidden focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      value={value}
      min={min}
      max={max}
      step={step}
      onKeyDown={
        stopPropagation
          ? (event) => {
              event.stopPropagation();
            }
          : undefined
      }
      onValueChange={onValueChange}
    >
      <Slider.Track className="absolute bg-gray-300 rounded h-1 left-0 right-0">
        <Slider.Range className="absolute bg-blue-500 rounded h-full" />
      </Slider.Track>
      <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />
    </Slider.Root>
  );
}

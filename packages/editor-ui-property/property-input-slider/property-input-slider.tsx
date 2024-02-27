import React from "react";
import * as Slider from "@radix-ui/react-slider";

export function PropertySliderInput({
  value,
  min,
  max,
  step,
  onValueChange,
}: // onValueCommit,
{
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  onValueChange?: (value: number[]) => void;
  // onValueCommit?: (value: number[]) => void;
}) {
  return (
    <Slider.Root
      className="SliderRoot"
      value={value}
      min={min}
      max={max}
      step={step}
      onValueChange={onValueChange}
    >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  );
}

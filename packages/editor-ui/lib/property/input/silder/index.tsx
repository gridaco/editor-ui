import React, { useCallback } from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import styled from "@emotion/styled";

interface SilderProps {
  value: number;
  min?: number;
  max?: number;
  onChange?: (v: number) => void;
}

function Silder(props: SilderProps) {
  const { value, min, max, onChange } = props;

  const handleValueChange = useCallback(
    (v: number[]) => {
      onChange(v[0]);
    },
    [onChange]
  );

  return (
    <Wrapper
      min={min}
      max={max}
      value={[Math.min(Math.max(value, min), max)]}
      onValueChange={handleValueChange}
    >
      <SliderTrack>
        <Line />
      </SliderTrack>
      <Circle />
    </Wrapper>
  );
}

export default Silder;

const Wrapper = styled(RadixSlider.Root)`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  height: 16px;
`;

const SliderTrack = styled(RadixSlider.Track)`
  background-color: #3c3c3c;
  position: relative;
  flex-grow: 1;
  height: 2px;
`;

const Circle = styled(RadixSlider.Thumb)`
  display: block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
`;

const Line = styled(RadixSlider.Range)`
  position: absolute;
  background-color: #3c3c3c;
  border-radius: 100%;
  height: 100%;
`;

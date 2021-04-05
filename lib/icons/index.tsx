import React, { CSSProperties } from "react";
import styled from "@emotion/styled";
import icons, { IconList } from "./icons";

interface IconStyledProps {
  width?: number;
  height?: number;
}

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: keyof IconList;
  width?: number;
  height?: number;
}

function Icon(props: IconProps) {
  const { name, width, height, ...divProps } = props;

  return (
    <ResponsiveBox
      width={width || icons[name].width}
      height={height || icons[name].height}
      {...divProps}
    >
      <svg
        viewBox={`0 0 ${icons[name].width} ${icons[name].height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {icons[name].svg}
      </svg>
    </ResponsiveBox>
  );
}

export default Icon;

const ResponsiveBox = styled.div<IconStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
`;

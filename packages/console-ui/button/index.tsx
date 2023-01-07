import React from "react";
import styled from "@emotion/styled";
import { CSSProperties } from "@emotion/serialize";

const textcolormap = {
  white: "black",
  black: "white",
  red: "white",
} as const;

const bgcolormap = {
  white: "white",
  black: "black",
  red: "red",
};

export function Button({
  onClick,
  color = "black",
  width = "auto",
  height = "auto",
  children,
  disabled,
}: {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: "white" | "black" | "red";
  disabled?: boolean;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
} & React.PropsWithChildren) {
  return (
    <ButtonBase
      onClick={onClick}
      disabled={disabled}
      textColor={textcolormap[color]}
      backgroundColor={bgcolormap[color]}
      style={{
        height: height,
        width,
      }}
    >
      {children}
    </ButtonBase>
  );
}

const ButtonBase = styled.button<{
  textColor: CSSProperties["color"];
  backgroundColor: CSSProperties["color"];
}>`
  user-select: none;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 2px;
  align-self: stretch;
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
  padding: 6px 16px;

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  :enabled {
    :hover {
      opacity: 0.8;
    }
    :active {
      opacity: 0.9;
    }
  }

  :focus {
    outline: 1px solid blue;
  }

  color: ${(props) => props.textColor};
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 500;
`;

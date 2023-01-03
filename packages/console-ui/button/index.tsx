import React from "react";
import styled from "@emotion/styled";

const textcolormap = {
  white: "black",
  black: "white",
} as const;

const bgcolormap = {
  white: "white",
  black: "black",
};

export function Button({
  onClick,
  color = "black",
  width,
  height,
  children,
  disabled,
}: {
  onClick?: (e?) => void;
  color?: "white" | "black" | "red";
  disabled?: boolean;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
} & React.PropsWithChildren) {
  return (
    <ButtonBase
      onClick={onClick}
      disabled={disabled}
      width={width || "auto"}
      textColor={textcolormap[color]}
      backgroundColor={bgcolormap[color]}
      style={{
        height: height || "auto",
      }}
    >
      {children}
    </ButtonBase>
  );
}

const ButtonBase = styled.button<{ width; textColor; backgroundColor }>`
  user-select: none;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 2px;
  align-self: stretch;
  width: ${(props) => props.width};
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

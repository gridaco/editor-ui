import React from "react";
import styled from "@emotion/styled";

interface MultiplayerAvatarGroupProps {
  spacing?: number;
  children?: JSX.Element[];
}

export function MultiplayerAvatarGroup(props: MultiplayerAvatarGroupProps) {
  if (props.spacing !== undefined) {
    const _spacingtype = spacingtype(props.spacing);
    // todo
  }

  return (
    <_Root>
      {props.children?.map((c, i) => {
        return (
          <Positioned key={i} spacing={props.spacing}>
            {c}
          </Positioned>
        );
      })}
    </_Root>
  );
}

const _Root = styled.div`
  display: flex;
  flex-direction: row;
`;

const Positioned = styled.div<{
  spacing: number;
  index?: number;
}>`
  position: relative;
  margin-left: ${(p) => p.spacing + "px"};
`;

function spacingtype(spacing: number): "-" | "none" | "+" {
  if (spacing > 0) {
    return "+";
  } else if (spacing < 0) {
    return "-";
  } else {
    return "none";
  }
}

import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import styled from "@emotion/styled";

interface Props {
  id: string;
  /**
   * e.g. - "https://picsum.photos/id/1005/400/400"
   */
  image: string;
  /**
   * character display - not a full name, but a fraction of it.
   */
  chars: string;
  online: boolean;
  onClick: (id: string) => void;
}

export function MultiplayerAvatar(props: Props) {
  return (
    <StyledAvatar>
      <StyledImage src={props.image} />
      <StyledFallback>{props.chars}</StyledFallback>
    </StyledAvatar>
  );
}

const StyledAvatar = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 24px;
  height: 24px;
  border-radius: 12px;

  opacity: 100%;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.15));
`;

const StyledImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #717171;
`;

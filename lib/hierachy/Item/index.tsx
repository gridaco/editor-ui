import React from "react";
import styled from "@emotion/styled";
import { SquareIcon, CircleIcon, TextIcon, BoxModelIcon, GroupIcon, ImageIcon } from '@radix-ui/react-icons'
import { Struct } from "../hierachy";
import Icon from "../../icons";

interface HirachyItemStyledProps {
  ml?: number;
  selected?: boolean;
  expanded?: boolean;
}

export interface HirachyItemProps {
  /**  */
  onSelect: () => void;
  /** If child exists, the function used to expand */
  onExpand?: () => void;
  /** A single Struct for visualization */
  struct: Struct;
  /** user selects an item or not item `click, mouse-hover` */
  selected?: boolean;
  /** margin level of item `14 + level + defaultMargin` */
  level: number;
  /** */
  expanded?: boolean;
}

function returnTypeIcon(type: Struct["type"], selected) {
  const color = selected ? "rgb(220, 220, 220)" : "rgb(139, 139, 139)";

  switch (type) {
    case "rectangle":
      return <SquareIcon color={color} />;
    case "oval":
      return <CircleIcon color={color} />;
    case "text":
      return <TextIcon color={color} />;
    case "artboard":
      return <BoxModelIcon color={color} />;
    case "group":
      return <GroupIcon color={color} />;
    case "bitmap":
      return <ImageIcon color={color} />;
    default:
      return null;
  }
}

function HierachyItem(props: HirachyItemProps) {
  const {
    onExpand,
    onSelect,
    level,
    selected,
    expanded,
    struct: { title, child, type },
    ...rest
  } = props;
  return (
    <Wrapper selected={selected} ml={10 + 14 * level} {...rest}>
      <div className="indicator">
        {expanded != null && (
          <CustomIcon name="indicator" expanded={expanded} onClick={onExpand} />
        )}
      </div>
      <div className="label" onClick={onSelect}>
        {returnTypeIcon(type, selected)}
        <span>{title}</span>
      </div>
    </Wrapper>
  );
}

HierachyItem.defaultProps = {
  isSelect: false,
  level: 0,
};

export default HierachyItem;

const Wrapper = styled.div<HirachyItemStyledProps>`
  background-color: ${(p) => p.selected && `#514EFD`};
  padding-left: ${(p) => p.ml}px;
  height: 30px;
  margin-right: 9px;
  margin: 3px 0px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .indicator {
    display: flex;
    align-items: center;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 80%;

    span {
      margin-left: 6px;
      color: ${(p) => (p.selected ? `#fff` : `#000`)};
      font-size: 12px;
    }
  }

  &:hover {
    background-color: #514efd;
  }
`;

const CustomIcon = styled(Icon)<HirachyItemStyledProps>`
  transition: all 0.3s ease;
  ${(p) =>
    p.expanded &&
    `
  transform : rotate(90deg);

  svg {
    path {
      fill: #000;
    }
  }
  `}
`;

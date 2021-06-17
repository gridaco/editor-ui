import React from "react";
import styled from "@emotion/styled";
import { HierarchyData } from "../hierachy";
import Icon from "@editor-ui/icons";

interface HirachyItemStyledProps {
  ml?: number;
  selected?: boolean;
  expanded?: boolean;
}

export interface HirachyItemProps {
  /**  */
  onSelect?: () => void;
  /** If child exists, the function used to expand */
  onExpand?: () => void;
  /** A single Struct for visualization */
  data: HierarchyData;
  /** user selects an item or not item `click, mouse-hover` */
  selected?: boolean;
  /** margin level of item `14 + level + defaultMargin` */
  level: number;
  /** */
  expanded?: boolean;
  /** */
  children?: React.ReactNode;
}

function returnTypeIcon(type: HierarchyData["type"]) {
  switch (type) {
    case "icon":
      return <Icon name="hirachyLayout" />;
    case "layout":
      return <Icon name="hirachyLayout" />;
    case "image":
      return <Icon name="hirachyImage" />;
    case "text":
      return <Icon name="hirachyText" />;
  }
}

export function HierachyItem(props: HirachyItemProps) {
  const {
    onExpand,
    onSelect,
    level,
    selected,
    expanded,
    data: { title, children: child, type },
    children,
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
        {returnTypeIcon(type)}
        <span>{title}</span>
      </div>
      {children}
    </Wrapper>
  );
}

HierachyItem.defaultProps = {
  isSelect: false,
  level: 0,
};

const Wrapper = styled.div<HirachyItemStyledProps>`
  position: relative;
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
    padding: 4px;
  }

  .label {
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;

    span {
      margin-left: 4px;
      color: ${(p) => (p.selected ? `#fff` : `#000`)};
      font-size: 12px;
    }
  }

  &:hover {
    background-color: #514efd;

    span {
      color: #fff;
    }
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

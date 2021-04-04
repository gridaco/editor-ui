import React from "react";
import styled from "@emotion/styled";
import { Struct } from "../hirachy";

interface HirachyItemStyledProps {
  ml?: number;
  isSelect?: boolean;
  isExpand?: boolean;
}

export interface HirachyItemProps {
  /**  */
  onSelect: () => void;
  /** If child exists, the function used to expand */
  onExpand: () => void;
  /** A single Struct for visualization */
  struct: Struct;
  /** user selects an item or not item `click, mouse-hover` */
  isSelect?: boolean;
  /** margin level of item `14 + level + defaultMargin` */
  level: number;
  /** */
  isExpand?: boolean;
}

function HirachyItem(props: HirachyItemProps) {
  const {
    onExpand,
    onSelect,
    level,
    isSelect,
    isExpand,
    struct: { title, child, type },
  } = props;
  return (
    <Wrapper isSelect={isSelect} ml={25 + 14 * level}>
      <div className="indicator">
        {child && (
          <Icon
            src="/assets/icons/item-indicator.svg"
            isExpand={isExpand}
            onClick={onExpand}
          />
        )}
      </div>
      <div className="label" onClick={onSelect}>
        <img className="icon" src={`/assets/icons/item-${type}.svg`} />
        <span>{title}</span>
      </div>
    </Wrapper>
  );
}

HirachyItem.defaultProps = {
  isSelect: false,
  level: 0,
};

export default HirachyItem;

const Wrapper = styled.div<HirachyItemStyledProps>`
  background-color: ${(p) => p.isSelect && `#514EFD`};
  padding-left: ${(p) => p.ml}px;
  height: 30px;
  margin-right: 9px;
  margin: 3px 0px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  .indicator {
    display: flex;
    align-items: center;
    padding: 9px;
  }

  .label {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;

    span {
      color: #fff;
      font-size: 12px;
    }

    .icon {
      margin-left: 5px;
      margin-right: 4px;
    }
  }

  &:hover {
    background-color: #514efd;
  }
`;

const Icon = styled.img<HirachyItemStyledProps>`
  transition: all 0.2s ease;
  transform: ${(p) => p.isExpand && "rotate(90deg)"};
  width: 12px;
  height: 12px;
`;

import React, { useState } from "react";
import styled from "@emotion/styled";

import { HierachyItem } from "./item";

type GraphicsLayerType = "layout" | "text" | "icon" | "image" | string;
export interface HierarchyData {
  id?: string;
  title: string;
  type?: GraphicsLayerType;
  children?: HierarchyData[];
}

export interface HierachyProps {
  /** @inetrnal Expand HierachyItem Function */
  onExpand?: () => void;
  /** Selected HierachyItem Function */
  onSelect: (id: string) => void;
  /** HitachyItem Margin Level */
  level?: number;
  /** Scene Structs */
  data: HierarchyData[];
  /** Current Selected Id */
  selectId: string;
}

export function Hierachy(props: HierachyProps) {
  const [isExpaned, setIsExpaned] = useState(false);
  const { level, data: structs, onSelect, selectId } = props;

  return (
    <Wrapper>
      {structs.map((i, ix) => (
        <React.Fragment key={ix}>
          <HierachyItem
            data={i}
            level={level}
            expanded={isExpaned}
            isSelect={selectId === i.id}
            onExpand={() => setIsExpaned(!isExpaned)}
            onSelect={() => onSelect(i.id)}
          />
          {i.children && isExpaned && (
            <Hierachy
              selectId={selectId}
              level={level + 1}
              data={i.children}
              onExpand={() => setIsExpaned(!isExpaned)}
              onSelect={onSelect}
            />
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

Hierachy.defaultProps = {
  level: 0,
  structs: [],
  expandIds: [],
};

const Wrapper = styled.div`
  max-width: 230px;
  width: 100%;
`;

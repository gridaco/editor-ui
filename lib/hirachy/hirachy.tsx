import React from "react";
import styled from "@emotion/styled";

import HirachyItem from "./Item"

type SceneType = "layout" | "text" | "icon" | "image";
export interface Struct {
  id: string;
  title: string;
  type: SceneType;
  child?: Struct[];
}

export interface HirachyProps {
  /** HitachyItem Margin Level */
  level?: number;
  /** Expand HitachyItem id List */
  expandIds?: Array<string>;
  /** Scene Structs */
  struct: Struct[];
  /** Expand HitachyItem Function */
  onExpand: (id: string) => void;
}

function Hirachy(props: HirachyProps) {
  const { level, struct, expandIds } = props;

  return (
    <Wrapper>
      {struct.map((i, ix) => (
        <React.Fragment key={ix}>
          <HirachyItem
            struct={i}
            level={level}
            onExpand={() => props.onExpand(i.id)}
          />
          {i.child && expandIds.includes(i.id) && (
            <Hirachy
              expandIds={expandIds}
              level={level + 1}
              struct={i.child}
              onExpand={props.onExpand}
            />
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

Hirachy.defaultProps = {
  level : 0,
  struct: [],
  expandIds: []
}

export default Hirachy;

const Wrapper = styled.div`
  background-color: #2A2E39;
`;

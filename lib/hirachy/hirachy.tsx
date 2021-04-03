import React from "react";
import styled from "@emotion/styled";

import HirachyItem from "./Item";

export const dummyData = [
  {
    id: "1",
    title: "Item1",
    type: "layout",
    child: [
      {
        id: "id",
        title: "Item",
        type: "layout",
      },
    ],
  },
  {
    id: "id",
    title: "Item2",
    type: "layout",
    child: [
      {
        id: "id",
        title: "Item",
        type: "layout",
      },
    ],
  },
];

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
  structs: Struct[];
  /** Expand HitachyItem Function */
  onExpand: (id: string) => void;
}

function Hirachy(props: HirachyProps) {
  const { level, structs, expandIds } = props;

  return (
    <Wrapper>
      {structs.map((i, ix) => (
        <React.Fragment key={ix}>
          <HirachyItem
            struct={i}
            level={level}
            isSelect={expandIds.includes(i.id)}
            onExpand={() => props.onExpand(i.id)}
          />
          {i.child && expandIds.includes(i.id) && (
            <Hirachy
              expandIds={expandIds}
              level={level + 1}
              structs={i.child}
              onExpand={props.onExpand}
            />
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

Hirachy.defaultProps = {
  level: 0,
  structs: [],
  expandIds: [],
};

export default Hirachy;

const Wrapper = styled.div`
`;

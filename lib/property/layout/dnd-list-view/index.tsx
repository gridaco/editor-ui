import React, { Children, isValidElement } from "react";
import DnDWrapper from "../dnd-wrapper";
import styled from "@emotion/styled";

interface DnDListViewProps {
  onMoveItem: (si: number, di: number) => void;
  children?: React.ReactNode;
}

function flatten<T>(arr: Array<T>) {
  return arr.reduce((f: Array<T>, tf) => {
    return f.concat(Array.isArray(tf) ? flatten<T>(tf) : tf);
  }, []);
}

function DnDListView(props: DnDListViewProps) {
  const { onMoveItem, children } = props;

  const flattened: Array<React.ReactNode> = flatten<React.ReactNode>(
    Children.toArray(children)
  );

  const ids: any[] = flattened.map((current) =>
    isValidElement(current) && typeof current.props.id === "string"
      ? [current.props.id]
      : []
  );

  const mappingChildren = flattened.map((cur, i) => {
    console.log(i);
  });

  return (
    <Container>
      <DnDWrapper onMoveItem={onMoveItem} keys={ids}>
        {mappingChildren}
      </DnDWrapper>
    </Container>
  );
}

export default DnDListView;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
`;

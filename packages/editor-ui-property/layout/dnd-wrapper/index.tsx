import React, { useCallback } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface DnDWrapperProps {
  keys: string[];
  children: React.ReactNode;
  onMoveItem?: (si: number, di: number) => void;
}

function DnDWrapper(props: DnDWrapperProps) {
  const { keys, children, onMoveItem } = props;
  const sensors = useSensors(useSensor(PointerSensor));

  const dragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = keys.indexOf(active.id);
        const newIndex = keys.indexOf(over.id);

        onMoveItem?.(oldIndex, newIndex);
      }
    },
    [keys, onMoveItem]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={dragEnd}
      modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
    >
      <SortableContext items={keys} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}

export default DnDWrapper;

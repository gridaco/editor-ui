import React, { useMemo } from 'react';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

interface ItemProps {
  id: string;
  children: (props: any) => JSX.Element;
}

export function DnDItem({ id, children }: ItemProps) {
  const sortable = useSortable({ id });

  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = useMemo(
    () => ({
      transform: CSS.Transform.toString(transform),
      transition,
    }),
    [transform, transition],
  );

  return children({ ref: setNodeRef, style, ...attributes, ...listeners });
}
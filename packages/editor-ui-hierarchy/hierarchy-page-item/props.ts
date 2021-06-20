export interface SinglePageItemProps {
  icon: string;
  name: string;
  expanded: boolean;
  depth: number;
}

export interface PageItemTreeProps extends SinglePageItemProps {
  children?: PageItemTreeProps[];
}

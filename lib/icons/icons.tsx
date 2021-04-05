interface IconListProps {
  width: number;
  height: number;
  svg: JSX.Element;
}

export interface IconList {
  indicator: IconListProps;
  hirachyLayout: IconListProps;
  hirachyText: IconListProps;
  hirachyImage: IconListProps;
}

const icons: IconList = {
  indicator: {
    width: 12,
    height: 12,
    svg: <path d="M5 8.5L7.5 6L5 3.5V8.5Z" fill="#888888" />,
  },
  hirachyLayout: {
    width: 12,
    height: 12,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 1C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H9C10.1046 11 11 10.1046 11 9V3C11 1.89543 10.1046 1 9 1H3ZM6 7.25C6.69036 7.25 7.25 6.69036 7.25 6C7.25 5.30964 6.69036 4.75 6 4.75C5.30964 4.75 4.75 5.30964 4.75 6C4.75 6.69036 5.30964 7.25 6 7.25Z"
        fill="white"
      />
    ),
  },
  hirachyText: {
    width: 12,
    height: 12,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 1H1V3H5L5 11H7L7 3H11V1H7H5Z"
        fill="white"
      />
    ),
  },
  hirachyImage: {
    width: 12,
    height: 12,
    svg: (
      <path
        d="M10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5ZM4.25 6.75L5.5 8.255L7.25 6L9.5 9H2.5L4.25 6.75Z"
        fill="white"
      />
    ),
  },
};

export default icons;

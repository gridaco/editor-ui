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
  pipette: IconListProps;
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
  pipette: {
    width: 16,
    height: 16,
    svg: (
      <path
        d="M13.8067 3.75305L12.2467 2.19305C11.9867 1.93305 11.5667 1.93305 11.3067 2.19305L9.22667 4.27305L8.40667 3.46638C8.14667 3.20638 7.72667 3.21305 7.46667 3.46638C7.20667 3.72638 7.20667 4.14638 7.46667 4.40638L7.94667 4.88638L2.1 10.733C2.03333 10.7997 2 10.8797 2 10.973V13.6664C2 13.853 2.14667 13.9997 2.33333 13.9997H5.02667C5.11333 13.9997 5.2 13.9664 5.26 13.8997L11.1067 8.05305L11.5867 8.53305C11.8467 8.79305 12.2667 8.79305 12.5267 8.53305C12.7867 8.27305 12.7867 7.85305 12.5267 7.59305L11.7133 6.77971L13.7933 4.69971C14.0667 4.43305 14.0667 4.01305 13.8067 3.75305ZM4.61333 12.6664L3.33333 11.3864L8.70667 6.01305L9.98667 7.29305L4.61333 12.6664Z"
        fill="#D8D8D8"
      />
    ),
  },
};

export default icons;

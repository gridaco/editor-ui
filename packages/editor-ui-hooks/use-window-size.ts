import { useEffect, useState } from "react";

const win = typeof window === "undefined" ? null : window;

interface UseWindowSizeOptions {
  initialWidth?: number;
  initialHeight?: number;
}

/**
 * react hooks: use window size
 * reference: https://github.com/jaredLunde/react-hook/blob/master/packages/window-size/src/index.tsx
 * @returns
 */
export function useWindowSize(
  option?: UseWindowSizeOptions
): { width: number; height: number } {
  const [windowSize, setWindowSize] = useState({
    width: win?.innerWidth ?? option?.initialWidth ?? 0,
    height: win?.innerHeight ?? option?.initialWidth ?? 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: win?.innerWidth,
        height: win?.innerHeight,
      });
    }

    win?.addEventListener("resize", handleResize);
    win?.addEventListener("orientationchange", handleResize);

    handleResize();

    return () => {
      win?.removeEventListener("resize", handleResize);
      win?.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return windowSize;
}

///
/// copied from https://github.com/noya-app/noya/blob/main/packages/noya-designsystem/src/hooks/mergeEventHandlers.ts
/// under MIT License
///

import { useGesture } from "react-use-gesture";
import { composeEventHandlers } from "@radix-ui/primitive";

const unique = <T>(array: T[]) => [...new Set(array)];

function composeAllEventHandlers<E>(...handlers: ((e: E) => void)[]) {
  const [first, ...rest] = handlers;

  return rest.reduce(
    (result, handler) => composeEventHandlers(result, handler),
    first
  );
}

type ReactEventHandlers = ReturnType<ReturnType<typeof useGesture>>;
type EventName = keyof ReactEventHandlers;

export function mergeEventHandlers(
  ...handlerMaps: ReactEventHandlers[]
): ReactEventHandlers {
  const eventNames = unique(handlerMaps.map(Object.keys).flat() as EventName[]);

  return Object.fromEntries(
    eventNames.map((eventName) => {
      const handlers = handlerMaps.flatMap((handlerMap) => {
        const value = handlerMap[eventName];
        return value ? [value] : [];
      });

      return [eventName, composeAllEventHandlers(...handlers)];
    })
  );
}

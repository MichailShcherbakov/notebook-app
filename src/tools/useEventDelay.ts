import React from "react";

export const EVENT_DELAY = 150;

export type DelayedEventFn<TArgs extends Array<unknown>> = (
  ...args: TArgs
) => void;

export function useEventDelay<TArgs extends Array<unknown>>(
  event: DelayedEventFn<TArgs>,
  ms = EVENT_DELAY,
) {
  const timeoutId = React.useRef<NodeJS.Timeout | null>(null);

  function clear() {
    if (!timeoutId.current) return;

    clearTimeout(timeoutId.current);

    timeoutId.current = null;
  }

  function emit(...args: TArgs) {
    if (timeoutId.current) {
      clear();
    }

    timeoutId.current = setTimeout(() => {
      event(...args);
      clear();
    }, ms);
  }

  return emit;
}

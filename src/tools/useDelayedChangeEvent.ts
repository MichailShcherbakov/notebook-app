import React from "react";

export const EVENT_DELAY = 150;

export type DelayedEvent<
  TElement extends HTMLTextAreaElement | HTMLInputElement,
> = (e: React.ChangeEvent<TElement>) => void;

export type DelayedEventWithArgs<
  TElement extends HTMLTextAreaElement | HTMLInputElement,
  TArgs extends Array<unknown> = Array<undefined>,
> = (e: React.ChangeEvent<TElement>, ...args: [...TArgs]) => void;

export function useDelayedChangeEvent<
  TElement extends HTMLTextAreaElement | HTMLInputElement,
  TArgs extends Array<unknown> = Array<undefined>,
>(
  event: TArgs extends Array<undefined>
    ? DelayedEvent<TElement>
    : DelayedEventWithArgs<TElement, TArgs>,
  initialValue = "",
  ms = EVENT_DELAY,
): [
  string,
  (
    e: React.ChangeEvent<TElement>,
    ...args: TArgs extends Array<undefined> ? Array<undefined> : [...TArgs]
  ) => void,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const timeoutId = React.useRef<NodeJS.Timeout | null>(null);

  const [value, setValue] = React.useState<string>(initialValue);

  function clear() {
    if (!timeoutId.current) return;

    clearTimeout(timeoutId.current);

    timeoutId.current = null;
  }

  function onChange(
    e: React.ChangeEvent<TElement>,
    ...args: TArgs extends Array<undefined> ? Array<undefined> : [...TArgs]
  ) {
    if (timeoutId.current) {
      clear();
    }

    timeoutId.current = setTimeout(() => {
      event(e, ...args);
      clear();
    }, ms);

    setValue(e.target.value);
  }

  return [value, onChange, setValue];
}

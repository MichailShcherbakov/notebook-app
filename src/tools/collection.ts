export type Collection<TKey, TValue> = Map<TKey, TValue>;

export function createEmptyCollection<TKey, TValue>(): Collection<
  TKey,
  TValue
> {
  return new Map();
}

export function toCollection<
  TType,
  TKey extends keyof TType,
  TTransformType = TType,
>(
  array: Array<TType>,
  key: TKey,
  transform?: (val: TType) => TTransformType,
): Collection<TType[TKey], TTransformType> {
  return new Map(
    array.map(item => [
      item[key],
      transform?.(item) ?? (item as unknown as TTransformType),
    ]),
  );
}

export function fromCollection<TKey extends string | number | symbol, TValue>(
  collection: Collection<TKey, TValue>,
): Array<[TKey, TValue]> {
  return Array.from(collection);
}

export function insertToCollection<TKey, TValue>(
  collection: Map<TKey, TValue>,
  key: TKey,
  value: TValue,
  defaultValue?: TValue,
): void;
export function insertToCollection<TKey, TValue>(
  collection: Map<TKey, Array<TValue>>,
  key: TKey,
  value: TValue,
  defaultValue?: Array<TValue>,
): void;
export function insertToCollection<TKey, TValue>(
  collection: Map<TKey, Array<TValue>>,
  key: TKey,
  value: Array<TValue>,
  defaultValue?: Array<TValue>,
): void;
export function insertToCollection<
  TKey,
  TType,
  TValue extends Array<TType> | TType,
>(
  collection: Map<TKey, TValue>,
  key: TKey,
  value: TValue,
  defaultValue?: TValue,
): void {
  const existsValue = collection.get(key) ?? defaultValue;

  if (Array.isArray(existsValue) && !Array.isArray(value)) {
    existsValue.push(value);

    collection.set(key, existsValue);

    return;
  }

  collection.set(key, value);
}

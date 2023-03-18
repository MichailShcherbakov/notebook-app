export function insertToCollection<TKey, TValue>(
  collection: Map<TKey, Array<TValue>>,
  key: TKey,
  value: TValue,
) {
  const val = collection.get(key) ?? [];

  val.push(value);

  collection.set(key, val);
}

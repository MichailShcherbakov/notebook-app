import { DBSchema, openDB, StoreKey, StoreNames, StoreValue } from "idb";
import React from "react";
import { RawNote } from "../notes/type";

export const NOTEBOOK_DB = "notebook-app";

export enum StoreEnum {
  NOTES = "notes",
}

export interface NoteBookSchema extends DBSchema {
  [StoreEnum.NOTES]: {
    key: RawNote["id"];
    value: RawNote;
  };
}

export function useStorage<
  TSchema extends DBSchema,
  TName extends StoreNames<TSchema> = StoreNames<TSchema>,
>(dbName: string, storeName: TName, version = 1) {
  const init = React.useCallback(() => {
    return openDB<TSchema>(dbName, version, {
      async upgrade(db) {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "id" });
        }
      },
    });
  }, [dbName, storeName, version]);

  const addItem = React.useCallback(
    async (value: StoreValue<TSchema, TName>) => {
      const db = await init();

      await db.add(storeName, value);
    },
    [init, storeName],
  );

  const putItem = React.useCallback(
    async (value: StoreValue<TSchema, TName>) => {
      const db = await init();

      await db.put(storeName, value);
    },
    [init, storeName],
  );

  const deleteItem = React.useCallback(
    async (key: StoreKey<TSchema, TName>) => {
      const db = await init();

      await db.delete(storeName, key);
    },
    [init, storeName],
  );

  const getAllItems = React.useCallback(async () => {
    const db = await init();

    return db.getAll(storeName);
  }, [init, storeName]);

  return {
    addItem,
    putItem,
    deleteItem,
    getAllItems,
  };
}

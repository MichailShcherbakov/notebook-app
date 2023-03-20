export type Action<TType, TPayload> = ((
  payload: TPayload,
) => PayloadAction<TType, TPayload>) & {
  type: TType;
};

export type PayloadAction<TType, TPayload> = {
  type: TType;
  payload: TPayload;
};

export function createAction<TPayload, TType = string>(
  type: TType,
): Action<TType, TPayload> {
  const action: Action<TType, TPayload> = (payload: TPayload) => ({
    type,
    payload,
  });

  action.type = type;

  return action;
}

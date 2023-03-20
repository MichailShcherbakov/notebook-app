import produce, { Draft, enableMapSet } from "immer";
import { Action, PayloadAction } from "./createAction";

enableMapSet();

type PublicReducerBuilder<TState> = Pick<ReducerBuilder<TState>, "addCase">;

type ReducerBuilderInitFn<TState> = (
  builder: PublicReducerBuilder<TState>,
) => void;

class ReducerBuilder<TState> {
  private actions = new Map();

  addCase<TType, TPayload>(
    action: Action<TType, TPayload>,
    fn: (state: Draft<TState>, action: PayloadAction<TType, TPayload>) => void,
  ): PublicReducerBuilder<TState> {
    this.actions.set(
      action.type,
      (state: TState, action: PayloadAction<TType, TPayload>) => {
        return produce(state, draft => fn(draft, action));
      },
    );
    return this;
  }

  build() {
    return (state: TState, action: any) => {
      return this.actions.get(action.type)?.(state, action);
    };
  }
}

export function createReducer<TState>(
  builderInitFn: ReducerBuilderInitFn<TState>,
) {
  const builder = new ReducerBuilder<TState>();

  builderInitFn(builder);

  return builder.build();
}

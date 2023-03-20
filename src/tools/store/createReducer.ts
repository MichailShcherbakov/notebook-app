import produce, { Draft } from "immer";
import { Action, PayloadAction } from "./createAction";

type ReducerBuilderInitFn<TState> = (
  builder: Pick<ReducerBuilder<TState>, "addCase">,
) => void;

class ReducerBuilder<TState> {
  private actions = new Map();

  addCase<TType, TPayload>(
    action: Action<TType, TPayload>,
    fn: (state: Draft<TState>, action: PayloadAction<TType, TPayload>) => void,
  ): ReducerBuilder<TState> {
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

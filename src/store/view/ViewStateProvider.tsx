import { StoreProvider, useStoreContext } from "./store";

export interface ViewStateProviderProps {
  children?: React.ReactNode;
}

export function ViewStateProvider(props: ViewStateProviderProps) {
  const context = useStoreContext();
  return <StoreProvider {...props} context={context} />;
}

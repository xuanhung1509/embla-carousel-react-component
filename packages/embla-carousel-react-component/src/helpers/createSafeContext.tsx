import { createContext, useContext } from 'react';

const createSafeContext = <ContextValue,>(errorMessage: string) => {
  const Context = createContext<ContextValue | null>(null);

  const useSafeContext = () => {
    const ctx = useContext(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  const Provider = ({
    value,
    children,
  }: {
    value: ContextValue;
    children: React.ReactNode;
  }) => <Context.Provider value={value}>{children}</Context.Provider>;

  return [Provider, useSafeContext] as const;
};

export default createSafeContext;

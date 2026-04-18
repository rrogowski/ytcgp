import { createContext, useContext } from "react";

interface RouterContextValue {
  path: string;
  navigate: (path: string) => void;
}

export const RouterContext = createContext<RouterContextValue | null>(null);

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw Error(`useRouter must be called within RouterProvider`);
  }

  return context;
};

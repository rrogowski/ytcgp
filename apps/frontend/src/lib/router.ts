import { createContext, useContext } from "react";

interface RouterContextValue {
  path: string;
  params: SearchParams;
  navigate: (path: string) => void;
  setParams: (params: SearchParams) => void;
}

export type SearchParams = Record<string, string | undefined>;

export const RouterContext = createContext<RouterContextValue | null>(null);

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw Error(`useRouter must be called within RouterProvider`);
  }

  return context;
};

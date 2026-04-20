import { useCallback, useEffect, useState } from "react";
import { RouterContext, type SearchParams } from "./router";

export const RouterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [path, setPath] = useState(window.location.pathname);
  const [params, setParams] = useState<SearchParams>(
    Object.fromEntries(new URLSearchParams(window.location.search)),
  );

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = useCallback((path: string) => {
    const url = new URL(path, window.location.href);
    window.history.pushState(null /* state */, "" /* unused */, url);
    setPath(url.pathname);
    setParams(Object.fromEntries(url.searchParams));
  }, []);

  return (
    <RouterContext.Provider value={{ path, params, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

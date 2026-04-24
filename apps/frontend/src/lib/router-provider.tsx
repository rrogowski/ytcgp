import { useCallback, useEffect, useMemo, useState } from "react";
import { RouterContext, type SearchParams } from "./router";

export const RouterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [url, setUrl] = useState(() => new URL(window.location.href));
  const params = useMemo<SearchParams>(() => {
    return Object.fromEntries(url.searchParams);
  }, [url]);

  useEffect(() => {
    const handlePopState = () => {
      setUrl(new URL(window.location.href));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = useCallback((path: string) => {
    const url = new URL(path, window.location.href);
    window.history.pushState(null /* state */, "" /* unused */, url);
    setUrl(url);
  }, []);

  return (
    <RouterContext.Provider value={{ path: url.pathname, params, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

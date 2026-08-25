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

  const updateParams = useCallback(
    (params: object) => {
      const oldParams = Object.fromEntries(url.searchParams);
      const newUrl = buildUrl(url.pathname, { ...oldParams, ...params });
      window.history.replaceState(null /* state */, "" /* unused */, newUrl);
      setUrl(newUrl);
    },
    [url],
  );

  return (
    <RouterContext.Provider
      value={{ path: url.pathname, params, navigate, updateParams }}
    >
      {children}
    </RouterContext.Provider>
  );
};

const buildUrl = (path: string, params: object = {}) => {
  const url = new URL(path, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url;
};

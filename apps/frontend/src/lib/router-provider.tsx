import { useCallback, useEffect, useState } from "react";
import { RouterContext, type SearchParams } from "./router";

export const RouterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [path, setPath] = useState(window.location.pathname);
  const [params, setParams] = useState<SearchParams>({});

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    const handleNavigate = (event: NavigateEvent) => {
      const url = new URL(event.destination.url);
      setPath(url.pathname);
      event.intercept();
    };

    window.addEventListener("popstate", handlePopState);
    window.navigation.addEventListener("navigate", handleNavigate);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.navigation.removeEventListener("navigate", handleNavigate);
    };
  }, []);

  const navigate = useCallback((path: string) => {
    window.navigation.navigate(path);
  }, []);

  return (
    <RouterContext.Provider value={{ path, params, navigate, setParams }}>
      {children}
    </RouterContext.Provider>
  );
};

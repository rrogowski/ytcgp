import { useCallback, useState } from "react";

export const useLocalStorageState = <T>(key: string, defaultValue: T) => {
  const [value, _setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  const setValue = useCallback(
    (newValue: T) => {
      window.localStorage.setItem(key, JSON.stringify(newValue));
      _setValue(newValue);
    },
    [key],
  );

  return [value, setValue];
};

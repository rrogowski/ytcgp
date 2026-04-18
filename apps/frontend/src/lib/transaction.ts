import { useCallback, useState } from "react";

export const useTransaction = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any[]) => any,
  U extends Parameters<T>,
>(
  transaction: T,
) => {
  const [isPending, setIsPending] = useState(false);

  const execute = useCallback(
    async (...args: U) => {
      setIsPending(true);
      try {
        await transaction(...args);
      } catch (error) {
        console.error(error);
        alert(error instanceof Error ? error.message : JSON.stringify(error));
        setIsPending(false);
      }
    },
    [transaction],
  );

  return [isPending, execute] as const;
};

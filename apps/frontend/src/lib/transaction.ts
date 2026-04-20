import { useCallback, useState } from "react";

export const useTransaction = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any[]) => any,
  U extends Parameters<T>,
  V extends ReturnType<T>,
>(
  transaction: T,
) => {
  const [isPending, setIsPending] = useState(false);

  const execute = useCallback(
    async (...args: U): Promise<V> => {
      setIsPending(true);
      try {
        const result = await transaction(...args);
        return result;
      } catch (error) {
        console.error(error);
        alert(error instanceof Error ? error.message : JSON.stringify(error));
        throw error;
      } finally {
        setIsPending(false);
      }
    },
    [transaction],
  );

  return [isPending, execute] as const;
};

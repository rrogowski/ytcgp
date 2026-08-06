import type { JSX } from "react";

export type StyledElementProps<T extends keyof JSX.IntrinsicElements> =
  StyleProps & ElementProps<T>;

export type StyleProps = React.CSSProperties;

export type ElementProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  "style" | keyof StyleProps
>;

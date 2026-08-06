import type { JSX } from "react";
import type { ElementProps, StyledElementProps, StyleProps } from "./types";

export const splitProps = <T extends keyof JSX.IntrinsicElements>(
  props: StyledElementProps<T>,
) => {
  const elementProps: Record<string, unknown> = {};
  const styleProps: Record<string, unknown> = {};

  const keys = Object.keys(props);
  for (const key of keys) {
    if (key in document.body.style && key !== "src") {
      styleProps[key] = props[key as keyof StyleProps];
    } else {
      elementProps[key] = props[key as keyof ElementProps<T>];
    }
  }
  return {
    elementProps: elementProps as ElementProps<T>,
    styleProps: styleProps as StyleProps,
  };
};

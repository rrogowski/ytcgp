import React from "react";
import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const SizedBox: React.FC<
  StyledElementProps<"div"> & { height: number; width: number }
> = (props) => {
  const { height, width, ...remainingProps } = props;
  const { elementProps, styleProps } = splitProps(
    remainingProps as StyledElementProps<"div">,
  );
  const child = React.Children.only(props.children);
  return (
    <div style={{ height, width, ...styleProps }} {...elementProps}>
      {child}
    </div>
  );
};

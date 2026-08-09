import React from "react";
import type { StyledElementProps } from "../types";

export const Expanded: React.FC<StyledElementProps<"div">> = (props) => {
  const { children, ...remainingProps } = props;
  const child = React.Children.only(children);

  return React.isValidElement<StyledElementProps<"div">>(child)
    ? React.cloneElement(child, { ...remainingProps, flexGrow: 1 })
    : null;
};

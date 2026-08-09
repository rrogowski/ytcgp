import React from "react";
import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Center: React.FC<StyledElementProps<"div">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  const child = React.Children.only(elementProps.children);
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        ...styleProps,
      }}
      {...elementProps}
    >
      {child}
    </div>
  );
};

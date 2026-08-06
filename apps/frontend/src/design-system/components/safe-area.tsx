import React from "react";
import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const SafeArea: React.FC<StyledElementProps<"div">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        overflow: "hidden",
        width: "100dvw",
        ...styleProps,
      }}
      {...elementProps}
    ></div>
  );
};

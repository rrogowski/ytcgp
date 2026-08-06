import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Center: React.FC<StyledElementProps<"div">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        ...styleProps,
      }}
      {...elementProps}
    />
  );
};

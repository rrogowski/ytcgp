import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Row: React.FC<StyledElementProps<"div">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", ...styleProps }}
      {...elementProps}
    />
  );
};

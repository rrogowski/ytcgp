import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Input: React.FC<StyledElementProps<"input">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <input style={styleProps} {...elementProps} />;
};

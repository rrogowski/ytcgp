import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Text: React.FC<StyledElementProps<"span">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <span style={styleProps} {...elementProps} />;
};

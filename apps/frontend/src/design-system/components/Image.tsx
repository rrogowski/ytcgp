import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Image: React.FC<StyledElementProps<"img">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <img style={styleProps} {...elementProps} />;
};

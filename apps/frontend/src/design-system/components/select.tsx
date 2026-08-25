import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Select: React.FC<StyledElementProps<"select">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <select style={styleProps} {...elementProps} />;
};

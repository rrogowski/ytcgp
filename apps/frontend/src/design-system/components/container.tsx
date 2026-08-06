import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Container: React.FC<StyledElementProps<"div">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <div style={styleProps} {...elementProps} />;
};

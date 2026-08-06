import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Expanded: React.FC<StyledElementProps<"div">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <div style={{ flexGrow: 1, ...styleProps }} {...elementProps} />;
};

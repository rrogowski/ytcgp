import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Spacer: React.FC<StyledElementProps<"div">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <div style={{ flexGrow: 1, ...styleProps }} {...elementProps} />;
};

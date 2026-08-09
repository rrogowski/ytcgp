import type { StyledElementProps } from "../types";
import { splitProps } from "../utils";

export const Button: React.FC<StyledElementProps<"button">> = (props) => {
  const { elementProps, styleProps } = splitProps(props);
  return <button style={styleProps} {...elementProps} />;
};

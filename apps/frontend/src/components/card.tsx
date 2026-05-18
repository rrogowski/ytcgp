interface Props {
  imageUrl: string;
  border?: string;
  height?: string;
  opacity?: number;
  onClick?: () => void;
}

export const Card: React.FC<Props> = (props) => {
  return (
    <img
      src={props.imageUrl}
      style={{
        border: props.border,
        height: props.height ?? "10rem",
        opacity: props.opacity,
        userSelect: "none",
        width: "auto",
      }}
      onClick={props.onClick}
    ></img>
  );
};

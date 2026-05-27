interface Props {
  imageUrl: string;
  border?: string;
  height?: string;
  opacity?: number;
  isPartOfGodPack?: boolean;
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
        ...(props.isPartOfGodPack
          ? {
              border: "5px solid transparent",
              borderImage:
                "linear-gradient(to top left, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
              borderImageSlice: 1,
            }
          : {}),
      }}
      onClick={props.onClick}
    ></img>
  );
};

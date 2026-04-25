import { Card } from "./card";

interface Props {
  imageUrl: string;
}

export const CardPreview: React.FC<Props> = (props) => {
  if (!props.imageUrl) {
    return null;
  }

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        position: "absolute",
        zIndex: 1000,
      }}
    >
      <Card imageUrl={props.imageUrl} height="100%"></Card>
    </div>
  );
};

interface Props {
  imageUrl: string;
  border?: string;
  height?: string;
  opacity?: number;
  onPreviewStart?: () => void;
  onPreviewEnd?: () => void;
}

export const Card: React.FC<Props> = (props) => {
  const handleMouseDown = () => {
    props.onPreviewStart?.();

    const handleMouseUp = () => {
      props.onPreviewEnd?.();
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("drag", handleMouseUp);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("drag", handleMouseUp);
  };

  const handleTouchStart = () => {
    props.onPreviewStart?.();

    const handleTouchEnd = () => {
      props.onPreviewEnd?.();
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };

    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);
  };

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
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    ></img>
  );
};

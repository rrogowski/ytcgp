import { useRef } from "react";

interface Props {
  imageUrl: string;
  border?: string;
  height?: string;
  opacity?: number;
  onPreviewStart?: () => void;
  onPreviewEnd?: () => void;
}

export const Card: React.FC<Props> = (props) => {
  const previewTimeout = useRef<number | undefined>(undefined);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.button !== 0) {
      return;
    }

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
    previewTimeout.current = window.setTimeout(() => {
      props.onPreviewStart?.();
    }, 100);

    const handleTouchEnd = () => {
      props.onPreviewEnd?.();
      window.clearTimeout(previewTimeout.current);
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

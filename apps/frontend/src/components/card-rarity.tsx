import type { CardMetadata } from "../data/cards";

interface Props {
  rarity: CardMetadata["rarity"];
}

export const CardRarity: React.FC<Props> = (props) => {
  return (
    <span
      style={{
        color: getColor(props.rarity),
        textShadow: "1px 1px 2px black",
      }}
    >
      {getText(props.rarity)}
    </span>
  );
};

const getColor = (rarity: CardMetadata["rarity"]) => {
  switch (rarity) {
    case "Common":
    case "Rare":
    case "Short Print":
    case "Super Short Print":
      return "#cdcdcd";
    case "Super Rare":
    case "Ultra Rare":
    case "Secret Rare":
      return "#fff83a";
  }
};

const getText = (rarity: CardMetadata["rarity"]) => {
  switch (rarity) {
    case "Common":
      return "⬥";
    case "Rare":
      return "⬥⬥";
    case "Short Print":
      return "⬥⬥⬥";
    case "Super Short Print":
      return "⬥⬥⬥⬥";
    case "Super Rare":
      return "★";
    case "Ultra Rare":
      return "★★";
    case "Secret Rare":
      return "★★★";
  }
};

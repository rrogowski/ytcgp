import { useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { CardRarity } from "../components/card-rarity";
import { findCardByCode } from "../data/cards";
import { useRouter } from "../lib/router";

export const Pack: React.FC = () => {
  const router = useRouter();

  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const codes = router.params["codes"] ? router.params["codes"].split(",") : [];
  const newCodes = router.params["newCodes"]
    ? router.params["newCodes"].split(",")
    : [];

  return (
    <div
      style={{
        alignContent: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.25rem",
        rowGap: "1rem",
        height: "100%",
        justifyContent: "center",
        overflow: "auto",
        position: "relative",
      }}
    >
      <CardPreview
        imageUrl={previewImageUrl}
        onClick={() => setPreviewImageUrl("")}
      ></CardPreview>
      {codes.map((code) => {
        const card = findCardByCode(code);
        const isNew = newCodes.includes(code);
        return (
          <div
            key={card.code}
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              width: "110px",
            }}
          >
            {isNew && (
              <span
                style={{
                  backgroundColor: "gold",
                  borderRadius: "0.25rem",
                  padding: "0.25rem 0.4rem",
                  right: "0.1rem",
                  top: "-0.25rem",
                  position: "absolute",
                }}
              >
                New
              </span>
            )}
            <Card
              imageUrl={card.thumbnailUrl}
              height="9rem"
              onClick={() => setPreviewImageUrl(card.imageUrl)}
            ></Card>
            <span style={{ position: "absolute", bottom: "-.75rem" }}>
              <CardRarity rarity={card.rarity}></CardRarity>
            </span>
          </div>
        );
      })}
    </div>
  );
};

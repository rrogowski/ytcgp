import { useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { CardRarity } from "../components/card-rarity";
import { ui } from "../components/ui";
import { findCardByCode, getThumbnailUrl } from "../data/cards";
import { findPackByCode } from "../data/packs";
import { useRouter } from "../lib/router";

interface Props {
  onPreviewImageUrl?: (url: string) => void;
}

export const Pack: React.FC<Props> = (props) => {
  const router = useRouter();

  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const isGodPack = router.params["isGodPack"] === "true";
  const codes = router.params["codes"] ? router.params["codes"].split("|") : [];
  const newCodes = router.params["newCodes"]
    ? router.params["newCodes"].split(",")
    : [];
  const twoCodes = router.params["twoCodes"]
    ? router.params["twoCodes"].split(",")
    : [];
  const threeCodes = router.params["threeCodes"]
    ? router.params["threeCodes"].split(",")
    : [];

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        height: "100%",
        justifyContent: codes.length === 1 ? "center" : "",
        overflow: "auto",
      }}
    >
      <CardPreview
        imageUrl={previewImageUrl}
        onClick={() =>
          props.onPreviewImageUrl
            ? props.onPreviewImageUrl("")
            : setPreviewImageUrl("")
        }
      ></CardPreview>
      {codes.map((packContents, i) => {
        const code = packContents.split("-")[0] ?? "";
        const pack = findPackByCode(code);
        return (
          <div
            key={`pack-${i}`}
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.25rem",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {i > 0 && <hr style={{ width: "100%" }}></hr>}
            <ui.span
              color="gray"
              fontWeight="bold"
              fontSize="0.75rem"
              marginBottom="0.25rem"
              textAlign="center"
              width="100%"
            >
              {pack.name}
            </ui.span>
            {packContents.split(",").map((code) => {
              const card = findCardByCode(code);
              const isNew = newCodes.includes(code);
              const isTwo = twoCodes.includes(code);
              const isThree = threeCodes.includes(code);
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
                        backgroundColor: "#ba964a",
                        borderRadius: "0.25rem",
                        color: "white",
                        padding: "0.25rem 0.4rem",
                        right: "0.1rem",
                        top: "-0.25rem",
                        position: "absolute",
                      }}
                    >
                      New
                    </span>
                  )}
                  {isTwo && (
                    <span
                      style={{
                        backgroundColor: "#7d5646",
                        borderRadius: "0.25rem",
                        color: "white",
                        padding: "0.25rem 0.4rem",
                        right: "0.1rem",
                        top: "-0.25rem",
                        position: "absolute",
                      }}
                    >
                      2
                    </span>
                  )}
                  {isThree && (
                    <span
                      style={{
                        backgroundColor: "#7d5646",
                        borderRadius: "0.25rem",
                        color: "white",
                        padding: "0.25rem 0.4rem",
                        right: "0.1rem",
                        top: "-0.25rem",
                        position: "absolute",
                      }}
                    >
                      3
                    </span>
                  )}
                  <Card
                    imageUrl={getThumbnailUrl(card)}
                    height="9rem"
                    isPartOfGodPack={isGodPack}
                    onClick={() =>
                      props.onPreviewImageUrl
                        ? props.onPreviewImageUrl(card.imageUrl)
                        : setPreviewImageUrl(card.imageUrl)
                    }
                  ></Card>
                  <span style={{ position: "absolute", bottom: "-.75rem" }}>
                    <CardRarity rarity={card.rarity}></CardRarity>
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

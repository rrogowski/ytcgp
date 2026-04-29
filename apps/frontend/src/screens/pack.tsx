import { useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { findCardByCode } from "../data/cards";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { useRouter } from "../lib/router";
import { bindersRef } from "../models/binder";

export const Pack: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const binder = useDocumentWithId(bindersRef, user.uid);

  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const codes = router.params["codes"] ? router.params["codes"].split(",") : [];

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
      <CardPreview imageUrl={previewImageUrl}></CardPreview>
      {codes.map((code) => {
        const card = findCardByCode(code);
        const isNew = binder.data?.[code] === 1 && !binder.isFromCache;
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
              imageUrl={card.imageUrl}
              height="9rem"
              onPreviewStart={() => setPreviewImageUrl(card.imageUrl)}
              onPreviewEnd={() => setPreviewImageUrl("")}
            ></Card>
          </div>
        );
      })}
    </div>
  );
};

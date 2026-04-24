import { findCardByCode } from "../data/cards";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { useRouter } from "../lib/router";
import { bindersRef } from "../models/binder";

export const Pack: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const binder = useDocumentWithId(bindersRef, user.uid);

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
      }}
    >
      {codes.map((code) => {
        const card = findCardByCode(code);
        const isNew = binder.data?.[code] === 1;
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
            <img
              src={card.imageUrl}
              style={{
                height: "9rem",
                width: "auto",
              }}
            ></img>
            <span>{card.code}</span>
          </div>
        );
      })}
    </div>
  );
};

import { findCardByCode } from "../data/cards";
import { useRouter } from "../lib/router";

export const Pack: React.FC = () => {
  const router = useRouter();

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
        return (
          <div
            key={card.code}
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "110px",
            }}
          >
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

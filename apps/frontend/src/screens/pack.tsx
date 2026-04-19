import { Fragment } from "react";
import { findCardByCode } from "../data/cards";
import { useRouter } from "../lib/router";

export const Pack: React.FC = () => {
  const router = useRouter();

  const codes = router.params["codes"] ? router.params["codes"].split(",") : [];

  return (
    <>
      {codes.map((code) => {
        const card = findCardByCode(code);
        return (
          <Fragment key={card.code}>
            {card.code}
            <br></br>
            {card.name}
            <img src={card.imageUrl} style={{ height: "10rem" }}></img>
          </Fragment>
        );
      })}
    </>
  );
};

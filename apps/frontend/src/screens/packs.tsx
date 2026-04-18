import { Fragment } from "react";
import { ALL_PACKS } from "../data/packs";

export const Packs: React.FC = () => {
  return (
    <>
      {ALL_PACKS.map((pack) => {
        return (
          <Fragment key={pack.code}>
            {pack.name}
            <img src={pack.imageUrl}></img>
            <button>Buy</button>
            <button>Craft</button>
          </Fragment>
        );
      })}
    </>
  );
};

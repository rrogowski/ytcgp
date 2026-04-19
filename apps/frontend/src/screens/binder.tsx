import { Fragment, useMemo, useState } from "react";
import { ALL_CARDS } from "../data/cards";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { bindersRef } from "../models/binder";

export const Binder: React.FC = () => {
  const user = useUser();

  const binder = useDocumentWithId(bindersRef, user.uid);

  const [code, setCode] = useState("");
  const [filter, setFilter] = useState("");

  const cardsToDisplay = useMemo(() => {
    if (filter === "only-missing") {
      return ALL_CARDS.filter((card) => {
        return (binder.data?.[card.code] ?? 0) === 0;
      });
    }
    return ALL_CARDS;
  }, [binder.data, filter]);

  if (binder.isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      user: {user.displayName}
      Code: {code}
      <select
        value={code}
        onChange={(event) => setCode(event.currentTarget.value)}
      >
        <option value="">All Sets</option>
        <option value="LOB">Legend of Blue Eyes White Dragon</option>
      </select>
      Filter: {filter}
      <select
        value={filter}
        onChange={(event) => setFilter(event.currentTarget.value)}
      >
        <option value="">All Cards</option>
        <option value="only-missing">Only Missing</option>
      </select>
      <br></br>
      {cardsToDisplay.map((card) => {
        const quantity = binder.data?.[card.code] ?? 0;
        return (
          <Fragment key={card.code}>
            {card.code}
            <br></br>
            {card.name}
            <br></br>x{quantity}
            <img
              src={card.imageUrl}
              style={{
                height: "10rem",
                opacity: quantity > 0 ? 1 : 0.3,
              }}
            ></img>
          </Fragment>
        );
      })}
    </>
  );
};

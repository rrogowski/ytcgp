import { Fragment, useState } from "react";
import { ALL_CARDS } from "../data/cards";
import { useUser } from "../lib/auth";

export const Binder: React.FC = () => {
  const user = useUser();

  const [code, setCode] = useState("");
  const [filter, setFilter] = useState("");

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
      {ALL_CARDS.map((card) => {
        return (
          <Fragment key={card.code}>
            {card.code}
            <br></br>
            {card.name}
            <br></br>
          </Fragment>
        );
      })}
    </>
  );
};

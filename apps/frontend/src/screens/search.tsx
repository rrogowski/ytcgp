import { useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { FullPageText } from "../components/full-page-text";
import { getCardsInExpansion } from "../data/cards";
import { ALL_EXPANSIONS } from "../data/expansions";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { bindersRef } from "../models/binder";

export const Search: React.FC = () => {
  const user = useUser();
  const binder = useDocumentWithId(bindersRef, user.uid);

  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [attribute, setAttribute] = useState("");
  const [type, setType] = useState("");
  const [atkFloor, setAtkFloor] = useState("");
  const [atkCeiling, setAtkCeiling] = useState("");
  const [defFloor, setDefFloor] = useState("");
  const [defCeiling, setDefCeiling] = useState("");
  const [levelFloor, setLevelFloor] = useState("");
  const [levelCeiling, setLevelCeiling] = useState("");

  const [previewImageUrl, setPreviewImageUrl] = useState("");

  if (binder.isLoading) {
    return <FullPageText>Loading...</FullPageText>;
  }

  const handleSetCardType = (value: string) => {
    setCardType(value);
    setSubcategory("");
    setAttribute("");
    setType("");
    setAtkFloor("");
    setAtkCeiling("");
    setDefFloor("");
    setDefCeiling("");
    setLevelFloor("");
    setLevelCeiling("");
  };

  const filteredCards = ALL_EXPANSIONS.map((expansion) =>
    getCardsInExpansion(expansion.name),
  )
    .flat()
    .filter((card) => {
      return name ? card.name.toLowerCase().includes(name.toLowerCase()) : true;
    })
    .filter((card) => {
      return cardType ? card.cardType === cardType : true;
    })
    .filter((card) => {
      if (!subcategory) {
        return true;
      }
      switch (cardType) {
        case "monster":
          return subcategory === "normal"
            ? card.classifications?.includes("normal")
            : subcategory === "effect"
              ? card.classifications?.includes("effect")
              : subcategory === "fusion"
                ? card.monsterCardTypes?.includes("fusion")
                : false;
        case "spell":
        case "trap":
          return card.subcategory === subcategory;
        default:
          return false;
      }
    })
    .filter((card) => {
      return attribute ? card.attribute === attribute : true;
    })
    .filter((card) => {
      return type ? card.type === type : true;
    })
    .filter((card) => {
      return atkFloor ? (card.atk ?? 0) >= Number(atkFloor) : true;
    })
    .filter((card) => {
      return atkCeiling ? (card.atk ?? 0) <= Number(atkCeiling) : true;
    })
    .filter((card) => {
      return defFloor ? (card.def ?? 0) >= Number(defFloor) : true;
    })
    .filter((card) => {
      return defCeiling ? (card.def ?? 0) <= Number(defCeiling) : true;
    })
    .filter((card) => {
      return levelFloor ? (card.level ?? 0) >= Number(levelFloor) : true;
    })
    .filter((card) => {
      return levelCeiling ? (card.level ?? 0) <= Number(levelCeiling) : true;
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "0.8rem",
        gap: "0.25rem",
        height: "100%",
        position: "relative",
      }}
    >
      <CardPreview
        imageUrl={previewImageUrl}
        onClick={() => setPreviewImageUrl("")}
      ></CardPreview>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
        }}
      >
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        ></input>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            <select
              value={cardType}
              onChange={(event) => handleSetCardType(event.currentTarget.value)}
            >
              <option value="">Card Type</option>
              <option value="monster">Monster</option>
              <option value="spell">Spell</option>
              <option value="trap">Trap</option>
            </select>
            <select
              disabled={!cardType}
              value={subcategory}
              onChange={(event) => setSubcategory(event.currentTarget.value)}
            >
              <option value="">Subcategory</option>
              {cardType === "monster" ? (
                <>
                  <option value="normal">Normal</option>
                  <option value="effect">Effect</option>
                  <option value="fusion">Fusion</option>
                </>
              ) : cardType === "spell" ? (
                <>
                  <option value="normal">Normal</option>
                  <option value="equip">Equip</option>
                </>
              ) : cardType === "trap" ? (
                <>
                  <option value="normal">Normal</option>
                  <option value="continuous">Continuous</option>
                </>
              ) : null}
            </select>
            <select
              disabled={cardType !== "monster"}
              value={attribute}
              onChange={(event) => setAttribute(event.currentTarget.value)}
            >
              <option value="">Attribute</option>
              <option value="dark">Dark</option>
              <option value="earth">Earth</option>
              <option value="fire">Fire</option>
              <option value="light">Light</option>
              <option value="water">Water</option>
              <option value="wind">Wind</option>
            </select>
            <select
              disabled={cardType !== "monster"}
              value={type}
              onChange={(event) => setType(event.currentTarget.value)}
            >
              <option value="">Type</option>
              <option value="aqua">Aqua</option>
              <option value="beast">Beast</option>
              <option value="beastwarrior">Beast-Warrior</option>
              <option value="dinosaur">Dinosaur</option>
              <option value="dragon">Dragon</option>
              <option value="fairy">Fairy</option>
              <option value="fiend">Fiend</option>
              <option value="fish">Fish</option>
              <option value="insect">Insect</option>
              <option value="machine">Machine</option>
              <option value="plant">Plant</option>
              <option value="pyro">Pyro</option>
              <option value="reptile">Reptile</option>
              <option value="rock">Rock</option>
              <option value="seaserpent">Sea Serpent</option>
              <option value="spellcaster">Spellcaster</option>
              <option value="thunder">Thunder</option>
              <option value="warrior">Warrior</option>
              <option value="wingedbeast">Winged Beast</option>
              <option value="zombie">Zombie</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div
            style={{ alignItems: "center", display: "flex", gap: "0.25rem" }}
          >
            <input
              disabled={cardType !== "monster"}
              type="number"
              value={atkFloor}
              style={{ width: "60px" }}
              onChange={(event) => setAtkFloor(event.currentTarget.value)}
            ></input>
            <span>≤ ATK ≤</span>
            <input
              disabled={cardType !== "monster"}
              type="number"
              value={atkCeiling}
              style={{ width: "60px" }}
              onChange={(event) => setAtkCeiling(event.currentTarget.value)}
            ></input>
          </div>
          <div
            style={{ alignItems: "center", display: "flex", gap: "0.25rem" }}
          >
            <input
              disabled={cardType !== "monster"}
              type="number"
              value={defFloor}
              style={{ width: "60px" }}
              onChange={(event) => setDefFloor(event.currentTarget.value)}
            ></input>
            <span>≤ DEF ≤</span>
            <input
              disabled={cardType !== "monster"}
              type="number"
              value={defCeiling}
              style={{ width: "60px" }}
              onChange={(event) => setDefCeiling(event.currentTarget.value)}
            ></input>
          </div>
        </div>
        <div style={{ alignItems: "center", display: "flex", gap: "0.25rem" }}>
          <input
            disabled={cardType !== "monster"}
            type="number"
            value={levelFloor}
            style={{ width: "35px" }}
            onChange={(event) => setLevelFloor(event.currentTarget.value)}
          ></input>
          <span style={{ textWrap: "nowrap" }}>≤ Level ≤</span>
          <input
            disabled={cardType !== "monster"}
            type="number"
            value={levelCeiling}
            style={{ width: "35px" }}
            onChange={(event) => setLevelCeiling(event.currentTarget.value)}
          ></input>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexShrink: 1,
          flexWrap: "wrap",
          gap: "0.3rem",
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        {filteredCards.length === 0 && <>No cards to display.</>}
        {filteredCards.map((card) => {
          const quantity = binder.data?.[card.code] ?? 0;
          return (
            <div
              key={card.code}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                height: "8.5rem",
                position: "relative",
                width: "116px",
              }}
            >
              <span
                style={{
                  zIndex: 500,
                  alignItems: "center",
                  backgroundColor: "black",
                  borderRadius: "0.25rem",
                  bottom: 0,
                  color: "white",
                  display: "flex",
                  height: "1.5rem",
                  justifyContent: "center",
                  position: "absolute",
                  right: "3px",
                  width: "1.5rem",
                }}
              >
                {quantity}
              </span>
              {Array.from({ length: 3 }).map((_, i) => {
                return (
                  <div
                    key={`${card.code}-${i}`}
                    style={{
                      backgroundColor: "white",
                      height: "100%",
                      left: `${i * 10}px`,
                      position: "absolute",
                    }}
                  >
                    <Card
                      imageUrl={card.thumbnailUrl}
                      height="8.5rem"
                      opacity={quantity > 2 - i ? 1 : 0.3}
                      onClick={() => setPreviewImageUrl(card.imageUrl)}
                    ></Card>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

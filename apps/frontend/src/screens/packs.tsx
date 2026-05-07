import type { User } from "firebase/auth";
import { useState } from "react";
import { ALL_EXPANSIONS, getExpansionPacks } from "../data/expansions";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import { bindersRef, getGrandMasterSets } from "../models/binder";
import { pointsWalletsRef } from "../models/points-wallet";
import { useProfile } from "../models/profile";
import { buyPackTransaction } from "../transactions/packs";

export const Packs: React.FC = () => {
  const router = useRouter();
  const user = useUser();
  const profile = useProfile();

  const binder = useDocumentWithId(bindersRef, user.uid);
  const pointsWallet = useDocumentWithId(pointsWalletsRef, user.uid);

  const [isBuyingPack, buyPack] = useTransaction(buyPackTransaction);

  const [expansionName, setExpansionName] = useState(ALL_EXPANSIONS[0].name);

  const handleBuyPack = async (user: User, code: string) => {
    const [cards, newCards] = await buyPack(user, code);
    const codes = cards.map((card) => card.code).join(",");
    const newCodes = newCards.map((card) => card.code).join(",");
    router.navigate(`/pack?codes=${codes}&newCodes=${newCodes}`);
  };

  const grandMasterSets = getGrandMasterSets(binder.data);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "end" }}>
        <select
          value={expansionName}
          onChange={(event) => setExpansionName(event.currentTarget.value)}
        >
          {ALL_EXPANSIONS.map((expansion) => {
            return <option key={expansion.name}>{expansion.name}</option>;
          })}
        </select>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {getExpansionPacks(expansionName).map((pack) => {
          return (
            <div
              key={pack.code}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                padding: "0.25rem",
                width: "33.33%",
              }}
            >
              <img
                src={pack.imageUrl}
                style={{ aspectRatio: 1 / 2, width: "100%" }}
              ></img>
              <div style={{ display: "flex", gap: "0.25rem", width: "100%" }}>
                <button
                  disabled={
                    isBuyingPack ||
                    (profile.data?.money ?? 0) < pack.cost ||
                    grandMasterSets.includes(pack)
                  }
                  style={{ flexGrow: 1, width: "50%" }}
                  onClick={() => handleBuyPack(user, pack.code)}
                >
                  {grandMasterSets.includes(pack) ? (
                    <span style={{ lineHeight: "2rem" }}>👑</span>
                  ) : (
                    <>
                      Buy<br></br>(¥{pack.cost})
                    </>
                  )}
                </button>
                <button
                  disabled={isBuyingPack || grandMasterSets.includes(pack)}
                  style={{ flexGrow: 1, width: "50%" }}
                  onClick={() => router.navigate(`/craft?code=${pack.code}`)}
                >
                  {grandMasterSets.includes(pack) ? (
                    <span style={{ lineHeight: "2rem" }}>👑</span>
                  ) : (
                    <>
                      Craft<br></br>({pointsWallet.data?.[pack.code] ?? 0} ₱)
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

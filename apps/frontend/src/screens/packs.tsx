import type { User } from "firebase/auth";
import { useState } from "react";
import { ALL_EXPANSIONS, getExpansionPacks } from "../data/expansions";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import { pointsWalletsRef } from "../models/points-wallet";
import { useProfile } from "../models/profile";
import { buyPackTransaction } from "../transactions/packs";

export const Packs: React.FC = () => {
  const router = useRouter();
  const user = useUser();
  const profile = useProfile();

  const pointsWallet = useDocumentWithId(pointsWalletsRef, user.uid);

  const [isBuyingPack, buyPack] = useTransaction(buyPackTransaction);

  const [expansionName, setExpansionName] = useState(ALL_EXPANSIONS[0].name);

  const handleBuyPack = async (user: User, code: string) => {
    const cards = await buyPack(user, code);
    const codes = cards.map((card) => card.code).join(",");
    router.navigate(`/pack?codes=${codes}`);
  };

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
          gap: "0.5rem",
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
                width: "33.33%",
              }}
            >
              <img
                src={pack.imageUrl}
                style={{ height: "auto", width: "100%" }}
              ></img>
              <div style={{ display: "flex", gap: "0.25rem", width: "100%" }}>
                <button
                  disabled={
                    isBuyingPack || (profile.data?.money ?? 0) < pack.cost
                  }
                  style={{ flexGrow: 1, width: "50%" }}
                  onClick={() => handleBuyPack(user, pack.code)}
                >
                  Buy (¥{pack.cost})
                </button>
                <button
                  disabled={isBuyingPack}
                  style={{ flexGrow: 1, width: "50%" }}
                  onClick={() => router.navigate(`/craft?code=${pack.code}`)}
                >
                  Craft ({pointsWallet.data?.[pack.code] ?? 0} ₱)
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

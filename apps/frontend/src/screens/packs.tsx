import type { User } from "firebase/auth";
import { ALL_PACKS, PACK_COST } from "../data/packs";
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

  const handleBuyPack = async (user: User, code: string) => {
    const cards = await buyPack(user, code);
    const codes = cards.map((card) => card.code).join(",");
    router.navigate(`/pack?codes=${codes}`);
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {ALL_PACKS.map((pack) => {
        return (
          <div
            key={pack.code}
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={pack.imageUrl} style={{ width: "15rem" }}></img>
            <div style={{ display: "flex", gap: "0.25rem", width: "100%" }}>
              <button
                disabled={
                  isBuyingPack || (profile.data?.money ?? 0) < PACK_COST
                }
                style={{ flexGrow: 1, width: "50%" }}
                onClick={() => handleBuyPack(user, pack.code)}
              >
                Buy (¥{PACK_COST})
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
  );
};

import type { User } from "firebase/auth";
import { Fragment } from "react";
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
    <>
      {ALL_PACKS.map((pack) => {
        return (
          <Fragment key={pack.code}>
            {pack.name}
            <img src={pack.imageUrl}></img>
            <button
              disabled={isBuyingPack || (profile.data?.money ?? 0) < PACK_COST}
              onClick={() => handleBuyPack(user, pack.code)}
            >
              Buy (¥{PACK_COST})
            </button>
            <button
              disabled
              onClick={() => router.navigate(`/craft?code=${pack.code}`)}
            >
              Craft ({pointsWallet.data?.[pack.code] ?? 0} Points)
            </button>
          </Fragment>
        );
      })}
    </>
  );
};

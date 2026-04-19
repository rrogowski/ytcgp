import type { User } from "firebase/auth";
import { Fragment } from "react";
import { ALL_PACKS, PACK_COST } from "../data/packs";
import { useUser } from "../lib/auth";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import { buyPackTransaction } from "../transactions/packs";

export const Packs: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const [isBuyingPack, buyPack] = useTransaction(buyPackTransaction);

  const handleBuyPack = async (user: User, code: string) => {
    const cards = await buyPack(user, code);
    router.navigate("/pack");
    router.setParams({ codes: cards.map((card) => card.code).join(",") });
  };

  return (
    <>
      {ALL_PACKS.map((pack) => {
        return (
          <Fragment key={pack.code}>
            {pack.name}
            <img src={pack.imageUrl}></img>
            <button
              disabled={isBuyingPack}
              onClick={() => handleBuyPack(user, pack.code)}
            >
              Buy (¥{PACK_COST})
            </button>
            <button
              disabled
              onClick={() => router.navigate(`/craft?code=${pack.code}`)}
            >
              Craft
            </button>
          </Fragment>
        );
      })}
    </>
  );
};

import { Fragment } from "react";
import { ALL_PACKS } from "../data/packs";
import { useUser } from "../lib/auth";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import { buyPackTransaction } from "../transactions/packs";

export const Packs: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const [isBuyingPack, buyPack] = useTransaction(buyPackTransaction);

  return (
    <>
      {ALL_PACKS.map((pack) => {
        return (
          <Fragment key={pack.code}>
            {pack.name}
            <img src={pack.imageUrl}></img>
            <button
              disabled={isBuyingPack}
              onClick={() => buyPack(user, pack.code)}
            >
              Buy
            </button>
            <button
              disabled={isBuyingPack}
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

import type { User } from "firebase/auth";
import { ui } from "../components/ui";
import { ALL_EXPANSIONS, getExpansionPacks } from "../data/expansions";
import { getPackCostIncludingAdditionalPacks } from "../data/packs";
import { useUser } from "../lib/auth";
import { useDocumentWithId } from "../lib/firestore";
import { useLocalStorageState } from "../lib/local-storage";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import { bindersRef, getGrandMasterSets } from "../models/binder";
import { pointsWalletsRef } from "../models/points-wallet";
import { useProfile } from "../models/profile";
import {
  buyPackTransaction,
  convertPackPointsTransaction,
  YEN_PER_PACK_POINT,
} from "../transactions/packs";

export const Packs: React.FC = () => {
  const router = useRouter();
  const user = useUser();
  const profile = useProfile();

  const binder = useDocumentWithId(bindersRef, user.uid);
  const pointsWallet = useDocumentWithId(pointsWalletsRef, user.uid);

  const [isBuyingPack, buyPack] = useTransaction(buyPackTransaction);
  const [isConvertingPackPoints, convertPackPoints] = useTransaction(
    convertPackPointsTransaction,
  );

  const [expansionName, setExpansionName] = useLocalStorageState(
    "packs.expansionName",
    ALL_EXPANSIONS[0].name,
  );

  const handleBuyPack = async (user: User, code: string) => {
    const [cards, newCards] = await buyPack(user, code);
    const codes = cards
      .map((pack) => pack.map((card) => card.code).join(","))
      .join("|");
    const newCodes = newCards.map((card) => card.code).join(",");
    router.navigate(`/pack?codes=${codes}&newCodes=${newCodes}`);
  };

  const handleConvertPackPoints = async (code: string) => {
    const packPoints = pointsWallet.data?.[code] ?? 0;
    const yen = packPoints * YEN_PER_PACK_POINT;
    if (!confirm(`Convert ${packPoints} ₱ (${code}) into ¥${yen}?`)) {
      return;
    }
    await convertPackPoints(user.uid, code);
  };

  const grandMasterSets = getGrandMasterSets(binder.data);

  return (
    <ui.div
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      margin="0 auto"
      maxWidth="40rem"
      width="100%"
    >
      <ui.div display="flex" justifyContent="end">
        <select
          value={expansionName}
          onChange={(event) => setExpansionName(event.currentTarget.value)}
        >
          {ALL_EXPANSIONS.map((expansion) => {
            return <option key={expansion.name}>{expansion.name}</option>;
          })}
        </select>
      </ui.div>
      <ui.div
        alignItems="center"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        {getExpansionPacks(expansionName).map((pack) => {
          const cost = getPackCostIncludingAdditionalPacks(pack.code);
          return (
            <ui.div
              key={pack.code}
              alignItems="center"
              display="flex"
              flexDirection="column"
              padding="0.25rem"
              width="33.33%"
            >
              <img
                src={pack.imageUrl}
                style={{ aspectRatio: 1 / 2, width: "100%" }}
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  marginTop: "0.5rem",
                  width: "100%",
                }}
              >
                <ui.button
                  disabled={
                    isBuyingPack ||
                    (profile.data?.money ?? 0) < cost ||
                    grandMasterSets.includes(pack)
                  }
                  lineHeight="2rem"
                  onClick={() => handleBuyPack(user, pack.code)}
                >
                  {grandMasterSets.includes(pack) ? (
                    <ui.span>👑</ui.span>
                  ) : (
                    <ui.span>Buy (¥{cost})</ui.span>
                  )}
                </ui.button>
                {grandMasterSets.includes(pack) ? (
                  <ui.button
                    disabled={
                      (pointsWallet.data?.[pack.code] ?? 0) === 0 ||
                      isConvertingPackPoints
                    }
                    lineHeight="2rem"
                    onClick={() => handleConvertPackPoints(pack.code)}
                  >
                    👑
                  </ui.button>
                ) : (
                  <ui.button
                    disabled={isBuyingPack}
                    lineHeight="2rem"
                    onClick={() => router.navigate(`/craft?code=${pack.code}`)}
                  >
                    Craft ({pointsWallet.data?.[pack.code] ?? 0} ₱)
                  </ui.button>
                )}
              </div>
            </ui.div>
          );
        })}
      </ui.div>
    </ui.div>
  );
};

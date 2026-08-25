import type { User } from "firebase/auth";
import { ProgressBar } from "../components/progress-bar";
import { ui } from "../components/ui";
import { getCardsInSet, getCostOfRemainingCards } from "../data/cards";
import { ALL_EXPANSIONS, getExpansionPacks } from "../data/expansions";
import {
  findPackByCode,
  getPackCostIncludingAdditionalPacks,
} from "../data/packs";
import { Button } from "../design-system/components/button";
import { Center } from "../design-system/components/center";
import { Column } from "../design-system/components/column";
import { Row } from "../design-system/components/row";
import { Spacer } from "../design-system/components/spacer";
import { Text } from "../design-system/components/text";
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
    const [packs, newCards, twoCards, threeCards, isGodPack] = await buyPack(
      user,
      code,
    );
    const codes = packs
      .map((pack) => pack.map((card) => card.code).join(","))
      .join("|");
    const newCodes = newCards.map((card) => card.code).join(",");
    const twoCodes = twoCards.map((card) => card.code).join(",");
    const threeCodes = threeCards.map((card) => card.code).join(",");
    router.navigate(
      `/pack?codes=${codes}&newCodes=${newCodes}&twoCodes=${twoCodes}&threeCodes=${threeCodes}&isGodPack=${isGodPack}`,
    );
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
    <Center alignItems="unset" overflow="auto">
      <Column alignItems="stretch" gap="0.25rem" maxWidth="30rem">
        <Row>
          <Spacer></Spacer>
          <select
            value={expansionName}
            onChange={(event) => setExpansionName(event.currentTarget.value)}
          >
            {ALL_EXPANSIONS.map((expansion) => {
              return <option key={expansion.name}>{expansion.name}</option>;
            })}
          </select>
        </Row>
        <Row flexWrap="wrap" justifyContent="center">
          {getExpansionPacks(expansionName).map((pack) => {
            const cost = getPackCostIncludingAdditionalPacks(pack.code);
            const cards = getCardsInSet(pack.code);
            const uniques = cards.filter(
              (c) => (binder.data?.[c.code] ?? 0) > 0,
            );
            const playsets = cards.filter(
              (c) => (binder.data?.[c.code] ?? 0) >= 3,
            );
            const totalCardsAtOrBelow3Copies = cards.reduce(
              (accumulator, c) => {
                const quantity = binder.data?.[c.code] ?? 0;
                return accumulator + (quantity > 3 ? 3 : quantity);
              },
              0,
            );
            const packPoints = pointsWallet.data?.[pack.code] ?? 0;
            const costOfRemainingCards = getCostOfRemainingCards(
              cards,
              binder.data,
            );
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
                  <Button
                    disabled={
                      isBuyingPack ||
                      (profile.data?.money ?? 0) < cost ||
                      (grandMasterSets.includes(pack) &&
                        pack.code !== "BPTV1" &&
                        pack.code !== "BPTV2" &&
                        pack.code !== "CT1")
                    }
                    onClick={() => handleBuyPack(user, pack.code)}
                  >
                    <Text fontSize="0.75rem" lineHeight="1.5rem">
                      {grandMasterSets.includes(pack) &&
                      pack.code !== "BPTV1" &&
                      pack.code !== "BPTV2" &&
                      pack.code !== "CT1"
                        ? "👑"
                        : `Buy (¥${cost})`}
                    </Text>
                  </Button>
                  {grandMasterSets.includes(pack) ? (
                    <Button
                      disabled={
                        (pointsWallet.data?.[pack.code] ?? 0) === 0 ||
                        isConvertingPackPoints
                      }
                      lineHeight="1.5rem"
                      onClick={() => handleConvertPackPoints(pack.code)}
                    >
                      👑
                    </Button>
                  ) : (
                    <Button
                      disabled={isBuyingPack}
                      onClick={() =>
                        router.navigate(`/craft?code=${pack.code}`)
                      }
                    >
                      <Text fontSize="0.75rem" lineHeight="1.5rem">
                        Craft ({pointsWallet.data?.[pack.code] ?? 0} ₱)
                      </Text>
                    </Button>
                  )}
                  <ProgressBar
                    backgroundColor="#ba964a"
                    color="white"
                    currentValue={uniques.length}
                    height="1.25rem"
                    maxValue={cards.length}
                    marginTop="0.25rem"
                    width="100%"
                  ></ProgressBar>
                  <Text
                    fontSize="0.7rem"
                    marginBottom="0.25rem"
                    textAlign="center"
                  >
                    {uniques.length} / {cards.length} Uniques
                  </Text>
                  <ProgressBar
                    backgroundColor="#7d5646"
                    color="white"
                    currentValue={totalCardsAtOrBelow3Copies}
                    height="1.25rem"
                    maxValue={cards.length * 3}
                    width="100%"
                  ></ProgressBar>
                  <Text
                    fontSize="0.7rem"
                    marginBottom="0.25rem"
                    textAlign="center"
                  >
                    {playsets.length} / {cards.length} Playsets
                  </Text>
                  <ProgressBar
                    backgroundColor="#1780b8"
                    color="white"
                    currentValue={packPoints}
                    height="1.25rem"
                    maxValue={costOfRemainingCards}
                    width="100%"
                  ></ProgressBar>
                  <Text fontSize="0.7rem" textAlign="center">
                    {packPoints} / {costOfRemainingCards} ₱
                  </Text>
                  {pack.additionalPacksCodes?.map((code) => {
                    const pack = findPackByCode(code);
                    const cards = getCardsInSet(pack.code);
                    const packPoints = pointsWallet.data?.[pack.code] ?? 0;
                    const costOfRemainingCards = getCostOfRemainingCards(
                      cards,
                      binder.data,
                    );
                    return (
                      <>
                        <Text
                          color="gray"
                          fontSize="0.7rem"
                          fontWeight="bold"
                          marginBottom="-0.25rem"
                          overflow="hidden"
                          textAlign="center"
                          textOverflow="ellipsis"
                          textWrap="nowrap"
                          title={pack.name}
                        >
                          {pack.name}
                        </Text>
                        <ProgressBar
                          backgroundColor="#4734f6"
                          color="white"
                          currentValue={packPoints}
                          height="1.25rem"
                          maxValue={costOfRemainingCards}
                          width="100%"
                        ></ProgressBar>
                        <Text fontSize="0.7rem" textAlign="center">
                          {packPoints} / {costOfRemainingCards} ₱
                        </Text>
                      </>
                    );
                  })}
                </div>
              </ui.div>
            );
          })}
        </Row>
      </Column>
    </Center>
  );
};

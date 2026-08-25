import { useMemo, useState } from "react";
import { Card } from "../components/card";
import { CardPreview } from "../components/card-preview";
import { CardRarity } from "../components/card-rarity";
import { FullPageText } from "../components/full-page-text";
import { getCardsInSet, getThumbnailUrl } from "../data/cards";
import { ALL_PACKS, findPackByCode } from "../data/packs";
import { Button } from "../design-system/components/button";
import { Column } from "../design-system/components/column";
import { Image } from "../design-system/components/image";
import { Input } from "../design-system/components/input";
import { Row } from "../design-system/components/row";
import { Select } from "../design-system/components/select";
import { Text } from "../design-system/components/text";
import { useUser } from "../lib/auth";
import { useCollection, useDocumentWithId } from "../lib/firestore";
import { useRouter } from "../lib/router";
import { useTransaction } from "../lib/transaction";
import { draftsRef, primaryDraftRef } from "../models/draft";
import { profilesRef } from "../models/profile";
import {
  createNewDraftTransaction,
  openDraftPackTransaction,
} from "../transactions/draft";
import { Pack } from "./pack";

export const Draft: React.FC = () => {
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [packCodes, setPackCodes] = useState<string[]>([]);
  const [packCount, setPackCount] = useState<number>(12);

  const router = useRouter();
  const user = useUser();

  const profiles = useCollection(profilesRef);
  const draft = useDocumentWithId(draftsRef, primaryDraftRef.id);

  const [isCreatingNewDraft, createNewDraft] = useTransaction(
    createNewDraftTransaction,
  );

  const [isOpeningDraftPack, openDraftPack] = useTransaction(
    openDraftPackTransaction,
  );

  const cardsInDraft = useMemo(() => {
    return (draft.data?.packCodes ?? [])
      .map((packCode) => {
        const pack = findPackByCode(packCode);
        return [packCode, ...(pack.additionalPacksCodes ?? [])]
          .map(getCardsInSet)
          .flat();
      })
      .flat();
  }, [draft.data]);

  const handlePackCodesChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const options = Array.from(event.target.options);
    const selectedValues = options
      .filter((option) => option.selected)
      .map((option) => option.value);
    setPackCodes(selectedValues);
  };

  const handlePackCountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPackCount(event.currentTarget.valueAsNumber);
  };

  const handleCreateNewDraft = () => {
    const profileIds = profiles.docs.map((d) => d.id);
    createNewDraft(profileIds, packCodes, packCount);
  };

  const handleOpenDraftPack = async (code: string) => {
    const [packs, newCards, twoCards, threeCards, isGodPack] =
      await openDraftPack(user.uid, code);
    const codes = packs
      .map((pack) => pack.map((card) => card.code).join(","))
      .join("|");
    const newCodes = newCards.map((card) => card.code).join(",");
    const twoCodes = twoCards.map((card) => card.code).join(",");
    const threeCodes = threeCards.map((card) => card.code).join(",");
    router.updateParams({ codes, newCodes, twoCodes, threeCodes, isGodPack });
  };

  const hasRemainingPacks = Object.values(
    draft.data?.remainingPacks[user.uid] ?? {},
  ).some((count) => count > 0);

  const cardCount = Object.values(draft.data?.cards[user.uid] ?? {}).reduce(
    (accumulator, quantity) => accumulator + quantity,
    0,
  );

  if (draft.isLoading) {
    return <FullPageText>Loading...</FullPageText>;
  }

  if (draft.error) {
    return <FullPageText>{draft.error.message}</FullPageText>;
  }

  return (
    <Column gap="0.5rem" height="100%" position="relative">
      <CardPreview
        imageUrl={previewImageUrl}
        onClick={() => setPreviewImageUrl("")}
      ></CardPreview>
      {user.displayName === "Roman Rogowski" && (
        <Row gap="0.5rem" justifyContent="center">
          <Select multiple onChange={handlePackCodesChange}>
            {ALL_PACKS.map((pack) => {
              return <option key={pack.code}>{pack.code}</option>;
            })}
          </Select>
          <Input
            type="number"
            value={packCount}
            onChange={handlePackCountChange}
          ></Input>
          <Button
            disabled={
              packCodes.length === 0 || !(packCount > 0) || isCreatingNewDraft
            }
            onClick={handleCreateNewDraft}
          >
            Create New Draft
          </Button>
        </Row>
      )}
      {draft.data && (
        <>
          {(hasRemainingPacks || (router.params["codes"]?.length ?? 0) > 0) && (
            <Row justifyContent="center">
              {draft.data.packCodes.map((packCode) => {
                const pack = findPackByCode(packCode);
                const remainingPacks =
                  draft.data?.remainingPacks[user.uid][packCode] ?? 0;
                return (
                  <Column>
                    <Image
                      aspectRatio="1 / 2"
                      height="15rem"
                      src={pack.imageUrl}
                    ></Image>
                    <Text>{remainingPacks} Remaining</Text>
                    <Button
                      disabled={remainingPacks === 0 || isOpeningDraftPack}
                      onClick={() => handleOpenDraftPack(packCode)}
                    >
                      Open Pack
                    </Button>
                  </Column>
                );
              })}
            </Row>
          )}
          {hasRemainingPacks || (router.params["codes"]?.length ?? 0) > 0 ? (
            <Pack onPreviewImageUrl={setPreviewImageUrl}></Pack>
          ) : (
            <>
              <Text>Draft Binder</Text>
              <Text>{cardCount} Cards</Text>
              <Row
                flex={1}
                flexWrap="wrap"
                gap="0.3rem"
                justifyContent="center"
                overflow="auto"
                rowGap="0.8rem"
              >
                {cardsInDraft.map((card) => {
                  const quantity = draft.data?.cards[user.uid][card.code] ?? 0;
                  return quantity > 0 ? (
                    <div
                      key={card.code}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "110px",
                      }}
                    >
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                          height: "8rem",
                          position: "relative",
                        }}
                      >
                        {
                          <span
                            style={{
                              zIndex: 500,
                              alignItems: "center",
                              backgroundColor: "black",
                              borderRadius: "0.25rem",
                              bottom: "-0.25rem",
                              color: "white",
                              display: "flex",
                              height: "1.5rem",
                              justifyContent: "center",
                              position: "absolute",
                              right: "-0.25rem",
                              width: "1.5rem",
                            }}
                          >
                            {quantity}
                          </span>
                        }
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
                                height="8rem"
                                imageUrl={getThumbnailUrl(card)}
                                opacity={quantity > 2 - i ? 1 : 0.3}
                                onClick={() =>
                                  setPreviewImageUrl(card.imageUrl)
                                }
                              ></Card>
                            </div>
                          );
                        })}
                        <span
                          style={{ position: "absolute", bottom: "-.75rem" }}
                        >
                          <CardRarity rarity={card.rarity}></CardRarity>
                        </span>
                      </div>
                    </div>
                  ) : null;
                })}
              </Row>
            </>
          )}
        </>
      )}
    </Column>
  );
};

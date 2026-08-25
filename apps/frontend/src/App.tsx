import "./styles.css";

import { FullPageText } from "./components/full-page-text";
import { Navbar } from "./components/navbar";
import { Button } from "./design-system/components/button";
import { Container } from "./design-system/components/container";
import { Expanded } from "./design-system/components/expanded";
import { Image } from "./design-system/components/image";
import { Row } from "./design-system/components/row";
import { SafeArea } from "./design-system/components/safe-area";
import { Spacer } from "./design-system/components/spacer";
import { Text } from "./design-system/components/text";
import logo from "./images/logo.png";
import { useAllowance } from "./lib/allowance";
import { useAuth } from "./lib/auth";
import { PENDING_ID, useDocumentWithId } from "./lib/firestore";
import { useRouter } from "./lib/router";
import { useTransaction } from "./lib/transaction";
import { pointsWalletsRef } from "./models/points-wallet";
import { useProfile } from "./models/profile";
import { Binder } from "./screens/binder";
import { Community } from "./screens/community";
import { Craft } from "./screens/craft";
import { Draft } from "./screens/draft";
import { Pack } from "./screens/pack";
import { Packs } from "./screens/packs";
import { Search } from "./screens/search";
import { WonderPick } from "./screens/wonder-pick";
import { claimAllowanceTransaction } from "./transactions/allowance";

const App: React.FC = () => {
  const allowance = useAllowance();
  const auth = useAuth();
  const profile = useProfile();
  const pointsWallet = useDocumentWithId(
    pointsWalletsRef,
    auth.user?.uid ?? PENDING_ID,
  );
  const router = useRouter();

  const [isClaimingAllowance, claimAllowance] = useTransaction(
    claimAllowanceTransaction,
  );

  const code = router.params["code"] ?? "";

  return (
    <SafeArea>
      <Row gap="0.5rem" padding="0.5rem 1rem">
        <Image src={logo} height="32px"></Image>
        <Spacer></Spacer>
        {profile.data && pointsWallet.data ? (
          <Text>
            ¥{profile.data?.money} | {profile.data?.wonderPoints} ₩
            {router.path === "/craft" &&
              ` | ${pointsWallet.data?.[code] ?? 0} ₱`}
          </Text>
        ) : null}
        <Button
          disabled={allowance.count === 0 || isClaimingAllowance}
          onClick={() => auth.user && claimAllowance(auth.user)}
        >
          {allowance.count === 0 ? (
            <Text>
              Claim in<br></br>
              {formatMsRemaining(allowance.msRemaining)}
            </Text>
          ) : (
            <Text>
              Claim Daily<br></br>Allowance
            </Text>
          )}
        </Button>
      </Row>
      <Expanded>
        <Row alignItems="stretch" overflow="auto">
          <Navbar type="desktop"></Navbar>
          <Expanded>
            <Container backgroundColor="#efecea" padding="0.5rem">
              <View></View>
            </Container>
          </Expanded>
        </Row>
      </Expanded>
      <Navbar type="mobile"></Navbar>
    </SafeArea>
  );
};

const View: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();
  const profile = useProfile();

  if (auth.isAuthenticating || (auth.user !== null && profile.isLoading)) {
    return <FullPageText>Loading...</FullPageText>;
  }

  if (auth.error) {
    return <FullPageText>{auth.error.message}</FullPageText>;
  }

  if (auth.user === null) {
    return (
      <FullPageText>
        <Button
          borderColor="black"
          borderRadius="0.75rem"
          padding="0.5rem 1rem"
          onClick={auth.signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </FullPageText>
    );
  }

  if (!profile.data) {
    return (
      <FullPageText>
        Please create a profile by claiming your first allowance.
      </FullPageText>
    );
  }

  switch (router.path) {
    case "/":
    case "/binder":
      return <Binder></Binder>;
    case "/search":
      return <Search></Search>;
    case "/packs":
      return <Packs></Packs>;
    case "/pack":
      return <Pack></Pack>;
    case "/craft":
      return <Craft></Craft>;
    case "/community":
      return <Community></Community>;
    case "/wonder-pick":
      return <WonderPick></WonderPick>;
    case "/draft":
      return <Draft></Draft>;
    default:
      return <FullPageText>Page Not Found: {router.path}</FullPageText>;
  }
};

const MS_PER_HOUR = 1000 * 3600;
const MS_PER_MINUTE = 1000 * 60;

const formatMsRemaining = (ms: number) => {
  const hours = Math.floor(ms / MS_PER_HOUR);
  if (hours > 0) {
    ms %= hours * MS_PER_HOUR;
  }
  const minutes = Math.floor(ms / MS_PER_MINUTE);
  return `${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m`;
};

export default App;

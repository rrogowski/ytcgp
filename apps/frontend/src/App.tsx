import favicon from "./images/logo.png";
import { useAuth, useUser } from "./lib/auth";
import { useDocumentWithId } from "./lib/firestore";
import { useRouter } from "./lib/router";
import { useTransaction } from "./lib/transaction";
import { pointsWalletsRef } from "./models/points-wallet";
import { useProfile } from "./models/profile";
import { Binder } from "./screens/binder";
import { Community } from "./screens/community";
import { Craft } from "./screens/craft";
import { Pack } from "./screens/pack";
import { Packs } from "./screens/packs";
import { Search } from "./screens/search";
import { WonderPick } from "./screens/wonder-pick";
import { claimAllowanceTransaction } from "./transactions/allowance";

import { useAllowance } from "./lib/allowance";
import { useWonderPicks } from "./lib/wonder-picks";
import "./styles.css";

const App: React.FC = () => {
  const auth = useAuth();

  if (auth.isAuthenticating) {
    return null;
  }

  if (auth.error) {
    return <>{auth.error.message}</>;
  }

  if (auth.user === null) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100dvh",
          justifyContent: "center",
          width: "100dvw",
        }}
      >
        <button onClick={auth.signInWithGoogle}>Sign In With Google</button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        height: "100dvh",
        margin: "0 auto",
        maxWidth: "40rem",
        padding: "0.5rem",
      }}
    >
      <TopNavigationBar></TopNavigationBar>
      <div style={{ flexGrow: 1, overflow: "auto" }}>
        <RouterView></RouterView>
      </div>
      <BottomNavigationBar></BottomNavigationBar>
    </div>
  );
};

const TopNavigationBar: React.FC = () => {
  const router = useRouter();
  const user = useUser();
  const profile = useProfile();
  const allowance = useAllowance();
  const wonderPicks = useWonderPicks();

  const pointsWallet = useDocumentWithId(pointsWalletsRef, user.uid);

  const code = router.params["code"] ?? "";

  const [isClaimingAllowance, claimAllowance] = useTransaction(
    claimAllowanceTransaction,
  );

  if (profile.isLoading || pointsWallet.isLoading) {
    return null;
  }

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img src={favicon} style={{ height: "3rem" }}></img>
      <div style={{ alignItems: "center", display: "flex", gap: "0.25rem" }}>
        <span>
          ¥{profile.data?.money} | {profile.data?.wonderPoints} ₩
          {router.path === "/craft" && ` | ${pointsWallet.data?.[code] ?? 0} ₱`}
        </span>
        <button
          disabled={allowance.count === 0 || isClaimingAllowance}
          onClick={() => claimAllowance(user)}
        >
          {allowance.count === 0 ? (
            <>
              Claim in<br></br>
              {formatMsRemaining(allowance.msRemaining)}
            </>
          ) : (
            <>
              Claim Daily<br></br>Allowance
            </>
          )}
        </button>
        <span></span>
        <div style={{ display: "flex", position: "relative" }}>
          <button onClick={() => router.navigate("/wonder-pick")}>
            Wonder<br></br>Pick
          </button>
          {wonderPicks.hasNewPicks && (
            <span
              style={{
                backgroundColor: "red",
                borderRadius: "0.25rem",
                color: "white",
                fontSize: "0.6rem",
                padding: "0.25rem",
                pointerEvents: "none",
                position: "absolute",
                right: "-0.8rem",
                top: "-0.8rem",
              }}
            >
              New
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const BottomNavigationBar: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button
        style={{ flexGrow: 1 }}
        onClick={() => router.navigate("/binder")}
      >
        Binder
      </button>
      <button style={{ flexGrow: 1 }} onClick={() => router.navigate("/packs")}>
        Packs
      </button>
      <button
        style={{ flexGrow: 1 }}
        onClick={() => router.navigate("/community")}
      >
        Community
      </button>
    </div>
  );
};

const MS_PER_HOUR = 1000 * 3600;
const MS_PER_MINUTE = 1000 * 60;

const formatMsRemaining = (ms: number) => {
  const hours = Math.floor(ms / MS_PER_HOUR);
  ms %= hours * MS_PER_HOUR;
  const minutes = Math.floor(ms / MS_PER_MINUTE);
  return `${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m`;
};

const RouterView: React.FC = () => {
  const router = useRouter();
  const profile = useProfile();

  if (profile.isLoading) {
    return <>Loading...</>;
  }

  if (!profile.data) {
    return <>Please create a profile by claiming your first allowance</>;
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
    default:
      return <>Page Not Found: {router.path}</>;
  }
};

export default App;

import type { Timestamp } from "firebase/firestore";
import { useAuth, useUser } from "./lib/auth";
import { useDocumentWithId } from "./lib/firestore";
import { useRouter } from "./lib/router";
import { useTransaction } from "./lib/transaction";
import { pointsWalletsRef } from "./models/points-wallet";
import { getClaimableAllowancesCount, useProfile } from "./models/profile";
import { Binder } from "./screens/binder";
import { Community } from "./screens/community";
import { Craft } from "./screens/craft";
import { Pack } from "./screens/pack";
import { Packs } from "./screens/packs";
import { WonderPick } from "./screens/wonder-pick";
import "./styles.css";
import { claimAllowanceTransaction } from "./transactions/allowance";

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
        height: "100dvh",
        padding: "0.5rem",
        margin: "0 auto",
        maxWidth: "40rem",
      }}
    >
      <TopNavigationBar></TopNavigationBar>
      <div style={{ flexGrow: 1, overflow: "auto", margin: "0.5rem 0" }}>
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

  const pointsWallet = useDocumentWithId(pointsWalletsRef, user.uid);

  const code = router.params["code"] ?? "";

  const [isClaimingAllowance, claimAllowance] = useTransaction(
    claimAllowanceTransaction,
  );

  const allowanceCount = profile.isLoading
    ? 0
    : profile.data
      ? getClaimableAllowancesCount(profile.data)
      : 1;

  if (profile.isLoading || pointsWallet.isLoading) {
    return null;
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          disabled={
            isClaimingAllowance || profile.isLoading || allowanceCount === 0
          }
          onClick={() => claimAllowance(user)}
        >
          Claim Allowance (x{allowanceCount})
        </button>{" "}
        <span>
          {router.path === "/craft" && `${pointsWallet.data?.[code] ?? 0} ₱ | `}
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              router.navigate("/wonder-pick");
            }}
          >
            {profile.data?.wonderPoints} ₩
          </a>{" "}
          | ¥{profile.data?.money ?? 0} | {user.displayName}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Next Allowance At:{" "}
        {allowanceCount > 0 ? "NOW" : formatDate(profile.data?.nextAllowanceAt)}
      </div>
    </>
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

const formatDate = (timestamp?: Timestamp) => {
  if (!timestamp) {
    return "-";
  }

  const formatter = new Intl.DateTimeFormat("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return formatter.format(timestamp.toDate());
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

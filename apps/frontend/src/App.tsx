import type { Timestamp } from "firebase/firestore";
import { useAuth, useUser } from "./lib/auth";
import { useRouter } from "./lib/router";
import { useTransaction } from "./lib/transaction";
import { getClaimableAllowancesCount, useProfile } from "./models/profile";
import { Binder } from "./screens/binder";
import { Pack } from "./screens/pack";
import { Packs } from "./screens/packs";
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
    return <button onClick={auth.signInWithGoogle}>Sign In With Google</button>;
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
  const user = useUser();
  const profile = useProfile();

  const [isClaimingAllowance, claimAllowance] = useTransaction(
    claimAllowanceTransaction,
  );

  const allowanceCount = profile.isLoading
    ? 0
    : profile.data
      ? getClaimableAllowancesCount(profile.data)
      : 1;

  if (profile.isLoading) {
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
          ¥{profile.data?.money ?? 0} | {user.displayName}
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
    default:
      return <>Page Not Found: {router.path}</>;
  }
};

export default App;

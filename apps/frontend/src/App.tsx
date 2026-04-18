import type { User } from "firebase/auth";
import { signInWithGoogle, useAuth } from "./lib/auth";
import { useRouter } from "./lib/router";
import { Binder } from "./screens/binder";
import { Packs } from "./screens/packs";
import "./styles.css";

const App: React.FC = () => {
  const [isAuthenticating, user, error] = useAuth();

  if (isAuthenticating) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  if (user === null) {
    return <button onClick={signInWithGoogle}>Sign In With Google</button>;
  }

  return (
    <>
      <NavigationBar user={user}></NavigationBar>
      <RouterView></RouterView>
    </>
  );
};

const NavigationBar: React.FC<{ user: User }> = ({ user }) => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.navigate("/binder")}>Binder</button>
      <button onClick={() => router.navigate("/packs")}>Packs</button>
      <>{user.displayName}</>
    </div>
  );
};

const RouterView: React.FC = () => {
  const router = useRouter();

  switch (router.path) {
    case "/":
    case "/binder":
      return <Binder></Binder>;
    case "/packs":
      return <Packs></Packs>;
    default:
      return <>Page Not Found: {router.path}</>;
  }
};

export default App;

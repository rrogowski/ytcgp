import { useAuth, useUser } from "./lib/auth";
import { useRouter } from "./lib/router";
import { Binder } from "./screens/binder";
import { Packs } from "./screens/packs";
import "./styles.css";

const App: React.FC = () => {
  const auth = useAuth();

  if (auth.isAuthenticating) {
    return <>Loading...</>;
  }

  if (auth.error) {
    return <>{auth.error.message}</>;
  }

  if (auth.user === null) {
    return <button onClick={auth.signInWithGoogle}>Sign In With Google</button>;
  }

  return (
    <>
      <NavigationBar></NavigationBar>
      <RouterView></RouterView>
    </>
  );
};

const NavigationBar: React.FC = () => {
  const router = useRouter();
  const user = useUser();

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

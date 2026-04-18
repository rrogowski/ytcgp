import { signInWithGoogle, useAuth } from "./lib/auth";
import "./styles.css";

const App: React.FC = () => {
  const [isLoading, user, error] = useAuth();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  if (user === null) {
    return <button onClick={signInWithGoogle}>Sign In With Google</button>;
  }

  return <>User: {user.displayName}</>;
};

export default App;

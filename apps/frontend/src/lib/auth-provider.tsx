import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./auth";
import { firebase } from "./firebase";

const auth = getAuth(firebase);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        setError(null);
        setIsAuthenticating(false);
      },
      (error) => {
        setUser(null);
        setError(error);
        setIsAuthenticating(false);
      },
    );
  }, []);

  const signInWithGoogle = useCallback(() => {
    return signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      alert(error instanceof Error ? error.message : JSON.stringify(error));
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticating, user, error, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

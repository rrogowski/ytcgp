import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { firebase } from "./firebase";

const auth = getAuth(firebase);

export const useAuth = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        setIsAuthenticating(false);
      },
      (error) => {
        setError(error);
        setIsAuthenticating(false);
      },
    );
  }, []);

  return [isAuthenticating, user, error] as const;
};

export const signInWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

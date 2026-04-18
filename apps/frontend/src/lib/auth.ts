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
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      },
    );
  }, []);

  return [isLoading, user, error] as const;
};

export const signInWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

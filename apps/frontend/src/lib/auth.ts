import type { User } from "firebase/auth";
import { createContext, useContext } from "react";

interface AuthContextValue {
  isAuthenticating: boolean;
  user: User | null;
  error: Error | null;
  signInWithGoogle: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error(`useAuth must be called within AuthProvider`);
  }

  return context;
};

export const useUser = () => {
  const { user } = useAuth();
  if (!user) {
    throw Error(`User is not authenticated`);
  }

  return user;
};

import {
  collection,
  CollectionReference,
  doc,
  getFirestore,
  onSnapshot,
  runTransaction,
  Transaction,
  type DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebase } from "./firebase";

const firestore = getFirestore(firebase);

export const executeTransaction = <T>(
  updateFunction: (t: Transaction) => Promise<T>,
) => {
  return runTransaction(firestore, updateFunction);
};

export const createCollectionRef = <T extends DocumentData>(path: string) => {
  return collection(firestore, path) as CollectionReference<T, T>;
};

export const useDocumentWithId = <T>(
  collectionRef: CollectionReference<T>,
  id: string,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const ref = doc(collectionRef, id);
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        setError(null);
        setData(snapshot.data() ?? null);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setData(null);
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, [collectionRef, id]);

  return { isLoading, error, data };
};

export const useCollection = <T>(ref: CollectionReference<T>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [docs, setDocs] = useState<{ id: string; data: T }[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        setError(null);
        setDocs(snapshot.docs.map((d) => ({ id: d.id, data: d.data() })));
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setDocs([]);
        setIsLoading(false);
      },
    );

    return unsubscribe;
  }, [ref]);

  return { isLoading, error, docs };
};

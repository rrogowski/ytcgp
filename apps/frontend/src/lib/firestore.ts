import {
  collection,
  CollectionReference,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  QueryConstraint,
  runTransaction,
  Transaction,
  type DocumentData,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
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
  const [isFromCache, setIsFromCache] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const ref = doc(collectionRef, id);
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        setIsFromCache(snapshot.metadata.fromCache);
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

  return { isFromCache, isLoading, error, data };
};

export const useCollection = <T>(
  ref: CollectionReference<T>,
  constraints?: QueryConstraint[],
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [docs, setDocs] = useState<{ id: string; data: T }[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(ref, ...(constraints ?? [])),
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
  }, [ref, constraints]);

  return { isLoading, error, docs };
};

export const useCollectionOnce = <T>(
  ref: CollectionReference<T>,
  constraints?: QueryConstraint[],
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [docs, setDocs] = useState<{ id: string; data: T }[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const refresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const refs = docs.map((d) => doc(ref, d.id));
      const snapshots = await Promise.all(refs.map((ref) => getDoc(ref)));
      setError(null);
      setDocs(snapshots.map((d) => ({ id: d.id, data: d.data() as T })));
      setIsRefreshing(false);
    } catch (error) {
      setError(error as Error);
      setDocs([]);
      setIsRefreshing(false);
    }
  }, [docs, ref]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const snapshot = await getDocs(query(ref, ...(constraints ?? [])));
        setError(null);
        setDocs(snapshot.docs.map((d) => ({ id: d.id, data: d.data() })));
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setDocs([]);
        setIsLoading(false);
      }
    };

    loadData();
  }, [ref, constraints]);

  return { isLoading, isRefreshing, error, docs, refresh };
};

import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeAuthentication } from "./firebase-init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
  }, []);

  return { user, setUser, googleSignIn, auth, loading };
};

export default useFirebase;

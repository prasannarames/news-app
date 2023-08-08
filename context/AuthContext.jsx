"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../app/lib/firebase";
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const [newsData, setNewsData] = useState([]);

  async function getNews() {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?" +
        "country=in&" +
        "apiKey=c4a39e282eec4d6dabeddcc5c7a6bacf"
    );

    setNewsData(response.data);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setUser(null);
      }
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, newsData, getNews }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

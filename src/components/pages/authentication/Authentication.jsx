import React, { useState } from "react";
import "./Authentication.scss";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/CreateUserSlice";
import { useDispatch } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyBctJlwBYfgznYfusNevt4LjqiCwkqwdMA",
  authDomain: "domik-cb8cc.firebaseapp.com",
  projectId: "domik-cb8cc",
  storageBucket: "domik-cb8cc.firebasestorage.app",
  messagingSenderId: "721499244122",
  appId: "1:721499244122:web:90f514d450a5b6f9f0fa63",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const Login = async () => {
    if (!email || !password) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      alert("Успешный вход: " + user.email);
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photo: user.photoURL,
          accessToken: user.accessToken || null,
        })
      );
      nav("/");
    } catch (error) {
      alert("Ошибка входа: " + error.message);
    }
  };

  const Register = async () => {
    if (!email || !password) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Регистрация прошла успешно: " + userCredential.user.email);
      nav("/");
    } catch (error) {
      alert("Ошибка регистрации: " + error.message);
    }
  };

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photo: user.photoURL,
          accessToken: user.accessToken || null,
        })
      );

      alert("Вошли через Google: " + user.displayName);
      nav("/");
    } catch (error) {
      alert("Ошибка Google входа: " + error.message);
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Добро пожаловать</h2>
        <div className="auth__form">
          <input
            type="email"
            placeholder="Email"
            className="auth__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="auth__btn auth__btn--login" onClick={Login}>
            Войти
          </button>
          <button className="auth__btn auth__btn--register" onClick={Register}>
            Регистрация
          </button>
          <button className="auth__btn auth__btn--google" onClick={GoogleLogin}>
            <FcGoogle size={20} />
            <span>Войти через Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

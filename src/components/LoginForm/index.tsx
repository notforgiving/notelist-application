import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import style from "./style.module.css";
import firebase from "firebase";
import {loginactioncreactor} from '../../redux/action/login'

function Loginform() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const db = firebase.database();
  }, []);

  const createAccaunt = (): void => {
    firebase
      .auth()
      .signInWithEmailAndPassword(login, password)
      .then(response=>dispatch(loginactioncreactor(true)))
      .catch((error) => console.log(error));
  };

  const handleChangeLogin = (e: any): void => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: any): void => {
    setPassword(e.target.value);
  };

  return (
    <Modal>
      <h1 className={style.form__title}>Вход</h1>
      <div className={style.form__body}>
        <div className={style.form__inputGroup}>
          <input
            className="form__input"
            type="text"
            placeholder="Логин"
            value={login}
            onChange={handleChangeLogin}
          />
          <input
            className="form__input"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <button onClick={createAccaunt} className="form__btn" type="submit">
          Авторизация
        </button>
      </div>
    </Modal>
  );
}

export default Loginform;

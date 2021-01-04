import { useState } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase";

import style from "./style.module.css";
import Modal from "../Modal";
import { loginactioncreactor } from "../../redux/action/login";

function Loginform() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [action, setAction] = useState(false);

  const enterInAccaunt = (): void => {
    firebase
      .auth()
      .signInWithEmailAndPassword(login, password)
      .then((response) => dispatch(loginactioncreactor(true)))
      .catch((error) => console.log(error));
  };

  const handleRegistrate = (): void => {
    setAction(!action);
  };

  const createAccaunt = (): void => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(login, password)
      .then((response) => {
        dispatch(loginactioncreactor(true));
      })
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
      <h1 className={style.form__title}>{action ? "Регистрация" : "Вход"}</h1>
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
        <button
          onClick={action ? createAccaunt : enterInAccaunt}
          className="form__btn"
          type="submit"
        >
          {action ? "Регистрация" : "Авторизация"}
        </button>
        <button onClick={handleRegistrate} className={style.form__registrBtn}>
          {action ? "Вход" : "Регистрация"}
        </button>
      </div>
    </Modal>
  );
}

export default Loginform;

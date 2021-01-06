import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase";

import style from "./style.module.css";
import classNames from "classnames";
import Modal from "../Modal";
import { loginactioncreactor } from "../../redux/action/login";
import Error from "../Error";

function Loginform() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [action, setAction] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  useEffect(() => {}, [action]);

  const enterInAccaunt = (): void => {
    firebase
      .auth()
      .signInWithEmailAndPassword(login, password)
      .then((response) => dispatch(loginactioncreactor(true)))
      .catch((error) => {
        if (error.message.includes("password")) {
          setErrorPassword(error);
        } else if (error.message.includes("no user")) {
          setErrorEmail(error);
        }
      });
  };

  const handleRegistrate = (): void => {
    setAction(!action);
    setErrorEmail(false);
    setErrorPassword(false);
  };

  const createAccaunt = (): void => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(login, password)
      .then((response) => {
        dispatch(loginactioncreactor(true));
      })
      .catch((error) => {
        if (error.message.includes("Password")) {
          setErrorPassword(error);
        } else if (error.message.includes("email")) {
          setErrorEmail(error);
        }
      });
  };

  const handleChangeLogin = (e: any): void => {
    setLogin(e.target.value);
    setErrorEmail(false);
  };

  const handleChangePassword = (e: any): void => {
    setPassword(e.target.value);
    setErrorPassword(false);
  };

  return (
    <Modal>
      <h1 className={style.form__title}>{action ? "Регистрация" : "Вход"}</h1>
      <div className={style.form__body}>
        <div className={style.form__inputGroup}>
          <input
            className={
              errorEmail
                ? classNames("form__input", "error__from-input")
                : "form__input"
            }
            type="email"
            placeholder="Email"
            value={login}
            onChange={handleChangeLogin}
            required
          />
          {errorEmail ? <Error text={`${errorEmail}`} /> : ``}
          <input
            className={
              errorPassword
                ? classNames("form__input", "error__from-input")
                : "form__input"
            }
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handleChangePassword}
            required
          />
          {errorPassword ? <Error text={`${errorPassword}`} /> : ``}
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

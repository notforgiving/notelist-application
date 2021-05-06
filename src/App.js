import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import firebase from "firebase";

import Loginform from "./components/LoginForm";
import Notelist from "./components/Notelist";

import { loginactioncreactor } from "./redux/action/login";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    firebase
      .auth()
      .signInWithEmailAndPassword("test@mail.ru", "123123")
      .then(() => {
        dispatch(loginactioncreactor(true, "test@mail.ru"));
      })
  },[])

  const { auth } = useSelector((state) => state);
  return <div className="App">{auth.login ? <Notelist /> : <Loginform />}</div>;
}

export default App;

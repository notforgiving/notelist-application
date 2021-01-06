import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";

import Loginform from "./components/LoginForm";
import Notelist from "./components/Notelist";

function App() {
  const { auth } = useSelector((state) => state);
  useEffect(() => {}, [auth.login]);
  return <div className="App">{auth.login ? <Notelist /> : <Loginform />}</div>;
}

export default App;

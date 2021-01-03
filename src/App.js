import { useSelector } from "react-redux";

import "./App.css";

import Loginform from "./components/LoginForm";
import Notelist from "./components/Notelist";

function App() {
  const { auth } = useSelector((state) => state);
  return <div className="App">{auth.login ? <Notelist /> : <Loginform />}</div>;
}

export default App;

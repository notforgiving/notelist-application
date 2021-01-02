import "./App.css";
import Loginform from "./components/LoginForm";
import Notelist from "./components/Notelist";
import firebase from "firebase";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  useEffect(() => {
    
  }, []);

  const { auth } = useSelector((state) => state);
  return <div className="App">{true ? <Notelist /> : <Loginform />}</div>;
}

export default App;

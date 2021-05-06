import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import store from "./redux/store";
import App from "./App";

import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCLL1slmR7bSnWgr6rrF0WTICOxh-8XhgE",
  authDomain: "note-aa0e5.firebaseapp.com",
  databaseURL: "https://note-aa0e5-default-rtdb.firebaseio.com",
  projectId: "note-aa0e5",
  storageBucket: "note-aa0e5.appspot.com",
  messagingSenderId: "539192749960",
  appId: "1:539192749960:web:899d9e5384e2abc1dcd43d",
  measurementId: "G-6RMGXWT9RJ",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

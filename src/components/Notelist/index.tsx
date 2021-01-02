import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Search from "../../assets/img/search.svg";
import Note from "../Note";
import Add from "../Add";
import { useDispatch } from "react-redux";
import { logoutactioncreactor } from "../../redux/action/login";
import classNames from "classnames";
import firebase from "firebase";

function Notelist() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState({});

  useEffect(() => {
    const db = firebase.database();
    const notesRef = db.ref("notes");
    const notesVal = notesRef.on("value", (elem) => setNotes(elem.val()));
  }, []);

  console.log(notes)

  const handleConrolModal = (): void => {
    setModal(!modal);
  };

  const logout = (): void => {
    dispatch(logoutactioncreactor(false));
  };

  return (
    <div className={style.noteList}>
      <div className={style.noteList__header}>
        <h1 className={style.noteList__title}>Заметки</h1>
        <div className={style.noteList__control}>
          <button onClick={logout} className={style.noteList__logout}>
            Выйти
          </button>
        </div>
      </div>
      <div className={style.notelist__searchGroup}>
        <input
          className={classNames("form__input", style.noteList__searchInput)}
          type="text"
          placeholder="Название заметки"
        />
        <img className={style.noteList__searchImg} src={Search} />
      </div>

      <div className={style.noteList__list}>
        <Note />
        <Note />
      </div>
      {modal ? (
        <Add control={handleConrolModal} />
      ) : (
        <button onClick={handleConrolModal} className={style.noteList__addNote}>
          +
        </button>
      )}
    </div>
  );
}

export default Notelist;

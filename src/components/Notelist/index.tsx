import { useState, useEffect } from "react";
import style from "./style.module.css";
import Search from "../../assets/img/search.svg";
import Note from "../Note";
import Add from "../Add";
import Exit from "../../assets/img/exit.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutactioncreactor } from "../../redux/action/login";
import classNames from "classnames";
import firebase from "firebase";
import { notesactioncreator } from "./../../redux/action/setnotes";

function Notelist() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const { notes }: any = useSelector((state) => state);

  useEffect(() => {
    const db = firebase.database();
    const notesRef = db.ref("notes");
    const notesVal = notesRef.on("value", (elem) =>
      dispatch(notesactioncreator(elem.val()))
    );
  }, []);

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
            <img style={{ width: 20 }} src={Exit} alt="Exit" />
          </button>
        </div>
      </div>
      <div className={style.notelist__searchGroup}>
        <input
          className={classNames("form__input", style.noteList__searchInput)}
          type="text"
        />
      </div>

      <div className={style.noteList__list}>
        {notes.items.map((item: any, index: number) => {
          return (
            <Note
              key={`${index}${item.title}`}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          );
        })}
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
